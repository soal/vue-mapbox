(window.webpackJsonp = window.webpackJsonp || []).push([
  [12],
  {
    156: function(e, t, r) {
      "use strict";
      r.r(t);
      var a = r(17),
        s = Object(a.a)(
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
                r(
                  "p",
                  [
                    e._v("All common "),
                    r("router-link", { attrs: { to: "/api/Layers/#props" } }, [
                      e._v("layers props")
                    ])
                  ],
                  1
                ),
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
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(" A vector tile source.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("Vector source")]),
                    e._v(" in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/style-spec/#sources-vector",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Style Spec"), r("OutboundLink")],
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
                            "https://docs.mapbox.com/mapbox-gl-js/api/#map#querysourcefeatures",
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
                            "https://docs.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures",
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
                            "https://docs.mapbox.com/mapbox-gl-js/api/#map#setfeaturestate",
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
                            "https://docs.mapbox.com/mapbox-gl-js/api/#map#getfeaturestate",
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
      s.options.__file = "vectorlayer.md";
      t.default = s.exports;
    }
  }
]);
