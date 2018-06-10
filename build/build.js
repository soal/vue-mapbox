require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var umdWebpackConfig = require('./webpack.umd.conf')
var browserWebpackConfig = require('./webpack.browser.conf')

var spinner = ora('building for library...')
spinner.start()

rm(config.build.assetsRoot, err => {
  if (err) throw err
  webpack(umdWebpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: true,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.yellow(
      '  Tip: Building UMD module complete.\n' +
      '  Then users can import it as an es6 module: import vue-mapbox from \'vue-mapbox\'\n'
    ))
  })

  webpack(browserWebpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: true,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.yellow(
      '  Tip: Building browser module complete.\n' +
      '  Then users can add file to their app using <script> tag'
    ))
    console.log(chalk.cyan(
      '  Build complete.\n' +
      '  Now you are ready to publish your library to npm'
    ))
  })
})
