import program from 'commander'
import routes from './routes'
import _debug from 'debug'
const debug = _debug('app:injector')


function run() {
  init()
  validate()
}

function init() {
  program
    .version('0.0.1')
    .option('-b, --blueprint <type>', 'Name of blueprint', /^(route-crud|route-view)$/i, 'route-crud')
    .option('-n, --name <name>', 'Name for new element')
    .option('-l, --lint', 'Disable eslint fix after injection', true)
    .parse(process.argv)
}

function validate() {
  const { blueprint, name, lint } = program
  const validateName = typeof name !== 'function'

  debug('init with params:')

  if (blueprint) debug('  - blueprint: %s', blueprint)
  if (name) debug('  - name: %s', validateName ? name : '<not-set>')
  debug('  - lint: %s', !!lint) // /^(true|false)$/i,

  if(blueprint && name && validateName)
    handle(blueprint, name, !!lint)
  else {
    debug('error: params `blueprint` and `name` required')
    process.exit(0)
  }
}

function handle(blueprint, name, lint = true) {
  if(routes[blueprint]) {
    debug('blueprint %s processing...', blueprint)
    routes[blueprint](name, lint)
  } else {
    debug('error: blueprint %s not found', blueprint)
    process.exit(1)
  }
}

run()
