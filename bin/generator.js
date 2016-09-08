import child_process from 'child_process'
import program from 'commander'
import _debug from 'debug'
const debug = _debug('app:bin:generator')


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
  // console.log('noLint', lint, program)
  if (blueprint) debug('  - blueprint: %s', blueprint)
  if (name) debug('  - name: %s', name, program.name)
  if (!lint) debug('  - no-lint', !lint)

  if(blueprint && name)
    handle(blueprint, name, lint)
  else {
    debug('error: params `blueprint` and `name` required')
    process.exit(1)
  }
}

function handle(blueprint, name, noLint = false) {
  debug('blueprint %s processing...', blueprint)
  child_process.execSync(`redux g ${blueprint} ${name}`)
  child_process.execSync(
    `npm run inject -- --blueprint ${blueprint} --name ${name}` +
    (noLint ? ' --no-lint' : ''))
  debug('finished')
  process.exit(0)
}

run()
