(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    146: function(e, t, r) {
      "use strict";
      r.r(t);
      var o = r(17),
        a = Object(o.a)(
          {},
          function() {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                r("h1", { attrs: { id: "vectorlayer" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#vectorlayer", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" VectorLayer")
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
                r("h3", { attrs: { id: "url" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#url", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("url")])
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
                      " A URL to a TileJSON resource as source for this layer. Supported protocols are "
                    ),
                    r("code", [e._v("http:")]),
                    e._v(", "),
                    r("code", [e._v("https:")]),
                    e._v(", and "),
                    r("code", [e._v("mapbox://<mapid>")]),
                    e._v(".")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("url")]),
                    e._v(" in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-vector",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Source Style Spec"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "tiles" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#tiles", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("tiles")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Type:")]),
                    e._v(" "),
                    r("code", [e._v("Array")])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Default")]),
                    e._v(" "),
                    r("code", [e._v("[]")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(
                      " An array of one or more tile source URLs, as in the TileJSON spec."
                    )
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("tiles")]),
                    e._v(" in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-vector-tiles",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Source Style Spec"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "tilesminzoom" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#tilesminzoom", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("tilesMinZoom")])
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
                    r("code", [e._v("0")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(
                      " Minimum zoom level for which tiles are available, as in the TileJSON spec."
                    )
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("minzoom")]),
                    e._v(" in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-vector-minzoom",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Source Style Spec"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "tilesmaxzoom" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#tilesmaxzoom", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("tilesMaxZoom")])
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
                    r("code", [e._v("22")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(
                      " Maximum zoom level for which tiles are available, as in the TileJSON spec."
                    )
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("maxzoom")]),
                    e._v(" in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-vector-maxzoom",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Source Style Spec"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "sourcelayer" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sourcelayer", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("sourceLayer")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Type:")]),
                    e._v(" "),
                    r("code", [e._v("String")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Required")])]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(" Layer to use from a vector tile source.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("source-layer")]),
                    e._v(" in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#layer-source-layer",
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
                r("h3", { attrs: { id: "bounds" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bounds", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("bounds")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Type:")]),
                    e._v(" "),
                    r("code", [e._v("Array")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(
                      " An array containing the longitude and latitude of the southwest and northeast corners of the source's bounding box in the following order: [sw.lng, sw.lat, ne.lng, ne.lat]."
                    )
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("bounds")]),
                    e._v(" in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-vector-bounds",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Source Style Spec"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "scheme" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#scheme", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("scheme")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Type:")]),
                    e._v(" "),
                    r("code", [e._v("String")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(" Influences the y direction of the tile coordinates.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("scheme")]),
                    e._v(" in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-vector-scheme",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Source Style Spec"), r("OutboundLink")],
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
                    e._v(" in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-vector-attribution",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Source Style Spec"), r("OutboundLink")],
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
      a.options.__file = "vectorlayer.md";
      t.default = a.exports;
    }
  }
]);
