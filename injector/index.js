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
    .option('-b, --blueprint <type>', 'Name of blueprint', /^(route-edit)$/i, 'route-edit')
    .option('-n, --name <name>', 'Name for new element')
    .option('-L, --no-lint', 'Disable eslint fix after injection')
    .parse(process.argv)
}

function validate() {
  debug('init with params:')
  const { blueprint, name, lint } = program
  if (blueprint) debug('  - blueprint', blueprint)
  if (name) debug('  - name', name)
  if (lint) debug('  - no-lint', lint)

  if(blueprint && name)
    handle(blueprint, name, lint)
  else {
    debug('error: params `blueprint` and `name` required')
    process.exit(1)
  }
}

function handle(blueprint, name, noLint) {
  if(routes[blueprint]) {
    debug('blueprint %s processing...', blueprint)
    routes[blueprint](name, noLint)
  } else {
    debug('error: blueprint %s not found', blueprint)
    process.exit(1)
  }
}

run()
