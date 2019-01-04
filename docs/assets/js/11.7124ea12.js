(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    135: function(e, t, r) {
      "use strict";
      r.r(t);
      var o = r(15),
        s = Object(o.a)(
          {},
          function() {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                r("h1", { attrs: { id: "rasterlayer" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#rasterlayer", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" RasterLayer")
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
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-url",
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
                    r("code", [e._v("undefined")])
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
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-tiles",
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
                r("h3", { attrs: { id: "tilesize" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#tilesize", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("tileSize")])
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
                    r("code", [e._v("512")])
                  ]),
                  e._v(" "),
                  r("li", [r("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("Description:")]),
                    e._v(
                      " The minimum visual size to display tiles for this layer in pixels."
                    )
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("tileSize")]),
                    e._v(" in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-tileSize",
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
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-minzoom",
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
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-maxzoom",
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
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-bounds",
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
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-scheme",
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
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-raster-attribution",
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
      s.options.__file = "rasterlayer.md";
      t.default = s.exports;
    }
  }
]);
