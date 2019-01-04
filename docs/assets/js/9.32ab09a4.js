(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    140: function(e, t, r) {
      "use strict";
      r.r(t);
      var a = r(15),
        o = Object(a.a)(
          {},
          function() {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                r("h1", { attrs: { id: "geojsonlayer" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#geojsonlayer", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GeojsonLayer")
                ]),
                e._v(" "),
                r("h2", { attrs: { id: "props" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#props", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Props")
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "source" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#source", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("source")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Type:")]),
                    e._v(" "),
                    r("code", [e._v("Object | String")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Required")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Non-Synced")]),
                    e._v(" A source containing GeoJSON or URL to it.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(" sources.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("GeoJSONSource")]),
                    e._v(" in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#geojsonsource",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox API Docs"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "type" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#type", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("type")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Type:")]),
                    e._v(" "),
                    r("code", [e._v("String")]),
                    e._v(" "),
                    r("code", [
                      e._v(
                        '"fill" | "line" | "symbol" |"circle" | "fill-extrusion" | "raster" | "background" | "heatmap"'
                      )
                    ])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Required")])]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(" Rendering type of this layer.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("type")]),
                    e._v(" in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#layer-type",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Layer Style Spec"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "cluster" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#cluster", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("cluster")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Type:")]),
                    e._v(" "),
                    r("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Default")]),
                    e._v(" "),
                    r("code", [e._v("false")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(
                      " If the data is a collection of point features, setting this to true clusters the points by radius into groups."
                    )
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("cluster")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-cluster",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Layer Style Spec"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "clustermaxzoom" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#clustermaxzoom", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("clusterMaxZoom")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Type:")]),
                    e._v(" "),
                    r("code", [e._v("Number")])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Default")]),
                    e._v(" "),
                    r("code", [e._v("14")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(
                      " Max zoom on which to cluster points if clustering is enabled."
                    )
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("clusterMaxZoom")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-clusterMaxZoom",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Layer Style Spec"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "clusterradius" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#clusterradius", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("clusterRadius")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Type:")]),
                    e._v(" "),
                    r("code", [e._v("Number")])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Default")]),
                    e._v(" "),
                    r("code", [e._v("50")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(" Radius of each cluster if clustering is enabled.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("clusterRadius")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-clusterRadius",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Layer Style Spec"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "linemetrics" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#linemetrics", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("lineMetrics")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Type:")]),
                    e._v(" "),
                    r("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Default")]),
                    e._v(" "),
                    r("code", [e._v("false")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(" Whether to calculate line distance metrics.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("lineMetrics")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-lineMetrics",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Layer Style Spec"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "buffer" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#buffer", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("buffer")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Type:")]),
                    e._v(" "),
                    r("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Default")]),
                    e._v(" "),
                    r("code", [e._v("false")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(" Size of the tile buffer on each side.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("buffer")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-buffer",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Layer Style Spec"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "tolerance" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#tolerance", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("tolerance")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Type:")]),
                    e._v(" "),
                    r("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Default")]),
                    e._v(" "),
                    r("code", [e._v("false")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(
                      " Douglas-Peucker simplification tolerance (higher means simpler geometries and faster performance)."
                    )
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("tolerance")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-tolerance",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Layer Style Spec"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "generateid" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#generateid", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("generateId")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Type:")]),
                    e._v(" "),
                    r("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Default")]),
                    e._v(" "),
                    r("code", [e._v("false")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(" Whether to generate ids for the geojson features.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("generateId")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-generateId",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Layer Style Spec"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "attribution" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#attribution", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("attribution")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Type:")]),
                    e._v(" "),
                    r("code", [e._v("String")])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Default")]),
                    e._v(" "),
                    r("code", [e._v("undefined")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(
                      " Contains an attribution to be displayed when the map is shown to a user."
                    )
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("attribution")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-geojson-attribution",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Layer Style Spec"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h2", { attrs: { id: "computed-getters" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#computed-getters",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Computed getters")
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "getsourcefeatures-filter" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#getsourcefeatures-filter",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("getSourceFeatures(filter?)")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    r("ul", [
                      r("li", [
                        r("code", [e._v("filter")]),
                        e._v(" "),
                        r("code", [e._v("Array")]),
                        e._v(" A filter to limit query results.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description")]),
                    e._v(
                      " Returns an array of GeoJSON Feature objects from assosiated source filtered by "
                    ),
                    r("code", [e._v("filter")]),
                    e._v(".")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See")]),
                    e._v(" "),
                    r("code", [e._v(".querySourceFeatures()")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#querysourcefeatures",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("map method"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r(
                  "h3",
                  { attrs: { id: "getrenderedfeatures-geometry-filter" } },
                  [
                    r(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#getrenderedfeatures-geometry-filter",
                          "aria-hidden": "true"
                        }
                      },
                      [e._v("#")]
                    ),
                    e._v(" "),
                    r("code", [e._v("getRenderedFeatures(geometry, filter)")])
                  ]
                ),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    r("ul", [
                      r("li", [
                        r("code", [e._v("filter")]),
                        e._v(" "),
                        r("code", [e._v("Array")]),
                        e._v(" A filter to limit query results.")
                      ]),
                      e._v(" "),
                      r("li", [
                        r("code", [e._v("geometry")]),
                        e._v(" "),
                        r("code", [e._v("Array | Object")]),
                        e._v(" The geometry of the query region.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description")]),
                    e._v(
                      " Returns an array of visible GeoJSON Feature objects from assosiated source filtered by "
                    ),
                    r("code", [e._v("filter")]),
                    e._v(".")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See")]),
                    e._v(" "),
                    r("code", [e._v(".queryRenderedFeatures()")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("map method"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h2", { attrs: { id: "methods" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#methods", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Methods")
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "setfeaturestate-featureid-state" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#setfeaturestate-featureid-state",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("setFeatureState(featureId, state)")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    r("ul", [
                      r("li", [
                        r("code", [e._v("featureId")]),
                        e._v(" "),
                        r("code", [e._v("String | Number")]),
                        e._v(" Feature identifier.")
                      ]),
                      e._v(" "),
                      r("li", [
                        r("code", [e._v("state")]),
                        e._v(" "),
                        r("code", [e._v("Object")]),
                        e._v(
                          " A set of key-value pairs. The values should be valid JSON types."
                        )
                      ])
                    ])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description")]),
                    e._v(
                      " Sets the state of a feature. The state object is merged in with the existing state of the feature."
                    )
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See")]),
                    e._v(" "),
                    r("code", [e._v(".setFeatureState()")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#setfeaturestate",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("map method"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "getfeaturestate-featureid" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#getfeaturestate-featureid",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("getFeatureState(featureId)")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    r("ul", [
                      r("li", [
                        r("code", [e._v("featureId")]),
                        e._v(" "),
                        r("code", [e._v("String | Number")]),
                        e._v(" Feature identifier.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description")]),
                    e._v(" Gets the state of a feature.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See")]),
                    e._v(" "),
                    r("code", [e._v(".getFeatureState()")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#getfeaturestate",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("map method"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h2", { attrs: { id: "events" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#events", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Events")
                ]),
                e._v(" "),
                r(
                  "p",
                  [
                    e._v("All common layer "),
                    r("router-link", { attrs: { to: "/api/Layers/#events" } }, [
                      e._v("events")
                    ])
                  ],
                  1
                )
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      o.options.__file = "geojsonlayer.md";
      t.default = o.exports;
    }
  }
]);
