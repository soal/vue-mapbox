(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    159: function(e, t, r) {
      "use strict";
      r.r(t);
      var a = r(17),
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
                    e._v(" A source containing GeoJSON or URL to it.")
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
                            "https://docs.mapbox.com/mapbox-gl-js/api/#geojsonsource",
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
                r(
                  "h3",
                  { attrs: { id: "getclusterexpansionzoom-clusterid" } },
                  [
                    r(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#getclusterexpansionzoom-clusterid",
                          "aria-hidden": "true"
                        }
                      },
                      [e._v("#")]
                    ),
                    e._v(" "),
                    r("code", [e._v("getClusterExpansionZoom(clusterId)")])
                  ]
                ),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    r("ul", [
                      r("li", [
                        r("code", [e._v("clusterId")]),
                        e._v(" "),
                        r("code", [e._v("Number")]),
                        e._v(" The value of the cluster's cluster_id property.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description")]),
                    e._v(
                      " For clustered sources, fetches the zoom at which the given cluster expands and returns "
                    ),
                    r("code", [e._v("Promise")]),
                    e._v(" with zoom level as payload.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See")]),
                    e._v(" "),
                    r("code", [e._v(".getClusterExpansionZoom()")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#geojsonsource#getclusterexpansionzoom",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("GeoJSONSource method"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r("h3", { attrs: { id: "getclusterchildren-clusterid" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#getclusterchildren-clusterid",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("getClusterChildren(clusterId)")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    r("ul", [
                      r("li", [
                        r("code", [e._v("clusterId")]),
                        e._v(" "),
                        r("code", [e._v("Number")]),
                        e._v(" The value of the cluster's cluster_id property.")
                      ]),
                      e._v(" "),
                      r("li", [
                        r("code", [e._v("limit")]),
                        e._v(" "),
                        r("code", [e._v("Number")]),
                        e._v(" The maximum number of features to return.")
                      ]),
                      e._v(" "),
                      r("li", [
                        r("code", [e._v("offset")]),
                        e._v(" "),
                        r("code", [e._v("Number")]),
                        e._v(
                          " The number of features to skip (e.g. for pagination)."
                        )
                      ])
                    ])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description")]),
                    e._v(
                      " For clustered sources, fetches the original points that belong to the cluster and returns "
                    ),
                    r("code", [e._v("Promise")]),
                    e._v(" with an "),
                    r("code", [e._v("Array")]),
                    e._v(" of GeoJSON features as payload.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See")]),
                    e._v(" "),
                    r("code", [e._v(".getClusterChildren()")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#geojsonsource#getclusterchildren",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("GeoJSONSource method"), r("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                r(
                  "h3",
                  { attrs: { id: "getclusterleaves-clusterid-limit-offset" } },
                  [
                    r(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#getclusterleaves-clusterid-limit-offset",
                          "aria-hidden": "true"
                        }
                      },
                      [e._v("#")]
                    ),
                    e._v(" "),
                    r("code", [
                      e._v("getClusterLeaves(clusterId, limit, offset)")
                    ])
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
                    e._v(" Returns "),
                    r("code", [e._v("Promise")]),
                    e._v(
                      " with an array of visible GeoJSON Feature objects from assosiated source filtered by "
                    ),
                    r("code", [e._v("filter")]),
                    e._v(" in the payload.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See")]),
                    e._v(" "),
                    r("code", [e._v(".getClusterLeaves()")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#geojsonsource#getclusterleaves",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("GeoJSONSource method"), r("OutboundLink")],
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
                r(
                  "h3",
                  {
                    attrs: {
                      id: "removefeaturestate-featureid-sourcelayer-key"
                    }
                  },
                  [
                    r(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#removefeaturestate-featureid-sourcelayer-key",
                          "aria-hidden": "true"
                        }
                      },
                      [e._v("#")]
                    ),
                    e._v(" "),
                    r("code", [
                      e._v("removeFeatureState(featureId?, sourceLayer?, key?)")
                    ])
                  ]
                ),
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
                        r("code", [e._v("sourceLayer")]),
                        e._v(" "),
                        r("code", [e._v("string")]),
                        e._v(" Source layer id.")
                      ]),
                      e._v(" "),
                      r("li", [
                        r("code", [e._v("key")]),
                        e._v(" "),
                        r("code", [e._v("string")]),
                        e._v(" The key in the feature state to reset.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description")]),
                    e._v(
                      " Removes feature state, setting it back to the default behavior. If no featureId or key is specified, removes all states of that source. If featureId is also specified, removes all keys for that feature's state. If key is also specified, removes that key from that feature's state."
                    )
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See")]),
                    e._v(" "),
                    r("code", [e._v(".removeFeatureState()")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#map#removefeaturestate",
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
