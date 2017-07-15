// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var assetsDir = 'dist'
var assetsRoot = path.resolve(__dirname, '../dist')

module.exports = {
  build: {
    env: require('./prod.env'),
    assetsRoot: assetsRoot,
    assetsDir: assetsDir,
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    assetsPublicPath: '/',
    proxyTable: {},
    cssSourceMap: false
  }
}
