module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      "mapbox-gl": {
        commonjs: "mapbox-gl",
        commonjs2: "mapbox-gl",
        amd: "mapbox-gl",
        root: "mapbox-gl"
      },
      vue: {
        commonjs: "vue",
        commonjs2: "vue",
        amd: "vue",
        root: "vue"
      },
      "map-promisified": {
        commonjs: "map-promisified",
        commonjs2: "map-promisified",
        amd: "map-promisified",
        root: "map-promisified"
      }
    }
  }
};
