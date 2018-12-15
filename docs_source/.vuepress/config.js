module.exports = {
  title: "Vue-Mapbox",
  description: "Combine powers of Mapbox GL JS and Vue.js",
  dest: "docs",

  themeConfig: {
    nav: [
      {
        text: "Guide",
        link: "/guide/"
      },
      {
        text: "API",
        link: "/api/"
      },
      { text: "Github", link: "https://github.com/soal/vue-mapbox" },
      {
        text: "Map-promisified",
        link: "https://github.com/soal/map-promisified"
      }
    ],

    sidebar: [
      {
        title: "Guide",
        collapsable: false,
        children: [
          ["/guide/", "Quickstart"],
          ["/guide/basemap.md", "Base map"],
          ["/guide/composition.md", "Composition"],
          ["/guide/controls.md", "Controls"],
          ["/guide/markers&popups.md", "Markers and popups"],
          ["/guide/layers&sources.md", "Layers and sources"]
        ]
      },
      {
        title: "API",
        collapsable: true,
        children: [
          ["/api/", "VueMapbox"],
          ["/api/glmap.md", "GlMap"],
          ["/api/controls.md", "Controls"],
          ["/api/marker.md", "MapMarker"],
          ["/api/popup.md", "Popup"],
          ["/api/Layers/", "Layer commons"],
          ["/api/Layers/geojsonlayer.md", "GeojsonLayer"],
          ["/api/Layers/vectorlayer.md", "VectorLayer"],
          ["/api/Layers/rasterlayer.md", "RasterLayer"],
          ["/api/Layers/imagelayer.md", "ImageLayer"],
          ["/api/Layers/videolayer.md", "VideoLayer"]
        ]
      },
      {
        title: "Plugins",
        collapsable: true,
        children: [
          ["/plugins/", "Using plugins"],
          ["/plugins/plugin_development.md", "Create a plugin"]
        ]
      }
      // ['/plugins/', 'Plugins'],
    ]
    // search: false
  }
};
