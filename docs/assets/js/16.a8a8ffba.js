(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    152: function(e, t, o) {
      "use strict";
      o.r(t);
      var a = o(17),
        n = Object(a.a)(
          {},
          function() {
            var e = this,
              t = e.$createElement,
              o = e._self._c || t;
            return o(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                o("h1", { attrs: { id: "glmap" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#glmap", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" GlMap")
                ]),
                e._v(" "),
                o("h2", { attrs: { id: "props" } }, [
                  o(
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
                o("h3", { attrs: { id: "mapstyle" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#mapstyle", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("mapStyle")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type")]),
                    e._v(": "),
                    o("code", [e._v("String")]),
                    e._v(", "),
                    o("code", [e._v("Object")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Required")])]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " The map's Mapbox style. This must be an a JSON object conforming to the schema described in the Mapbox Style Specification , or a URL to such JSON."
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.style")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "container" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#container", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("container")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("String")]),
                    e._v(", "),
                    o("code", [e._v("HTMLElement")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("#map-{random number}")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " The HTML element in which Mapbox GL JS will render the map"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.container")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "accesstoken" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#accesstoken", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("accessToken")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("String")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("undefined")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" Token for access Mapbox map")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#accesstoken",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("accessToken"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "minzoom" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#minzoom", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("minZoom")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Number")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("0")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" Minimum zoom level of the map (0-24)")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.minZoom")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "maxzoom" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#maxzoom", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("maxZoom")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Number")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("22")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" Maximum zoom level of the map (0-24)")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.maxZoom")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "hash" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#hash", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("hash")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("false")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " If true, the map's position (zoom, center latitude, center longitude, bearing, and pitch) will be synced with the hash fragment of the page's URL"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.hash")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "interactive" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#interactive", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("interactive")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " If false, no mouse, touch, or keyboard listeners will be attached to the map, so it will not respond to interaction"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.interactive")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "bearingsnap" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bearingsnap", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("bearingSnap")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Number")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("7")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " The threshold, measured in degrees, that determines when the map's bearing will snap to north"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.bearingSnap")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "attributioncontrol" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#attributioncontrol",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("attributionControl")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " If true, an AttributionControl will be added to the map"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.attributionControl")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "logoposition" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#logoposition", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("logoPosition")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("String")]),
                    e._v(", "),
                    o("code", [e._v("top-left")]),
                    e._v(", "),
                    o("code", [e._v("top-right")]),
                    e._v(", "),
                    o("code", [e._v("bottom-right")]),
                    e._v(", "),
                    o("code", [e._v("bottom-left")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("bottom-left")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " A string representing the position of the Mapbox wordmark on the map"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.logoPosition")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "failifmajorperformancecaveat" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#failifmajorperformancecaveat",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("failIfMajorPerformanceCaveat")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("false")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " If true, map creation will fail if the performance of Mapbox GL JS would be dramatically worse than expected (i.e. a software renderer would be used)"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.failIfMajorPerformanceCaveat")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "crosssourcecollisions" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#crosssourcecollisions",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("crossSourceCollisions")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " If true, symbols from multiple sources can collide with each other during collision detection. If false , collision detection is run separately for the symbols in each source."
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.crossSourceCollisions")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "fadeduration" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#fadeduration", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("fadeDuration")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Number")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("300")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " Controls the duration of the fade-in/fade-out animation for label collisions, in milliseconds. This setting affects all symbol layers. This setting does not affect the duration of runtime styling transitions or raster tile cross-fading."
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.fadeDuration")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "preservedrawingbuffer" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#preservedrawingbuffer",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("preserveDrawingBuffer")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("false")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " If true, the map's canvas can be exported to a PNG using map.getCanvas().toDataURL()"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.preserveDrawingBuffer")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "refreshexpiredtiles" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#refreshexpiredtiles",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("refreshExpiredTiles")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " If true, the map won't attempt to re-request tiles once they expire per their HTTP cacheControl / expires headers."
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.refreshExpiredTiles")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "maxbounds" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#maxbounds", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("maxBounds")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Array")]),
                    e._v(", "),
                    o("code", [e._v("LngLatBoundsLike object")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("undefined")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " If set, the map will be constrained to the given bounds"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.maxBounds")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "scrollzoom" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#scrollzoom", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("scrollZoom")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")]),
                    e._v(", "),
                    o("code", [e._v("Object")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      ' If true, the "scroll to zoom" interaction is enabled. An Object value is passed as options to ScrollZoomHandler#enable'
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.scrollZoom")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "boxzoom" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#boxzoom", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("boxZoom")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(' If true, the "box zoom" interaction is enabled')
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.boxZoom")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "dragrotate" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#dragrotate", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("dragRotate")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      ' If true, the "drag to rotate" interaction is enabled'
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.dragRotate")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "keyboard" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#keyboard", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("keyboard")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" If true, keyboard shortcuts are enabled")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.keyboard")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "doubleclickzoom" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#doubleclickzoom", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("doubleClickZoom")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      ' If true, the "double click to zoom" interaction is enabled'
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.doubleClickZoom")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "touchzoomrotate" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#touchzoomrotate", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("touchZoomRotate")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")]),
                    e._v(", "),
                    o("code", [e._v("Object")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      ' If true, the "pinch to rotate and zoom" interaction is enabled. An Object value is passed as options to TouchZoomRotateHandler#enable'
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.touchZoomRotate")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "trackresize" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#trackresize", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("trackResize")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " If true, the map will automatically resize when the browser window resizes."
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.trackResize")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "center" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#center", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("center")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Array, LngLatLike Object")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("undefined")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " Geographical centerpoint of the map. If center is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object.If it is not specified in the style, either, it will default to "
                    ),
                    o("code", [e._v("[0, 0]")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.center")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "zoom" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#zoom", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("zoom")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Number")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("undefined")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " Zoom level of the map. If zoom is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to "
                    ),
                    o("code", [e._v("0")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.zoom")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "bearing" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#bearing", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("bearing")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Number")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("undefined")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " Bearing (rotation) of the map, measured in degrees counter-clockwise from north. If bearing is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to "
                    ),
                    o("code", [e._v("0")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.bearing")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "pitch" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#pitch", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("pitch")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Number")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("undefined")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " Pitch (tilt) of the map, measured in degrees away from the plane of the screen (0-60). If pitch is not specified in the constructor options, Mapbox GL JS will look for it in the map's style object. If it is not specified in the style, either, it will default to "
                    ),
                    o("code", [e._v("0")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.pitch")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "renderworldcopies" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#renderworldcopies",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("renderWorldCopies")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " If true , multiple copies of the world will be rendered, when zoomed out"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.renderWorldCopies")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "light" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#light", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("light")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Object")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("undefined")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " Light properties. Must conform to the Mapbox Style Specification"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" See "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#setlight",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("setLight"), o("OutboundLink")],
                      1
                    ),
                    e._v(" Map method")
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "tileboundaries" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#tileboundaries", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("tileBoundaries")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("false")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " A Boolean indicating whether the map will render an outline around each tile. These tile boundaries are useful for debugging"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" See "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#showtileboundaries",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("showTileBoundaries"), o("OutboundLink")],
                      1
                    ),
                    e._v(" Map property")
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "collisionboxes" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#collisionboxes", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("collisionBoxes")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("false")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " A Boolean indicating whether the map will render boxes around all symbols in the data source, revealing which symbols were rendered or which were hidden due to collisions. This information is useful for debugging"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" See "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#showcollisionboxes",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("showCollisionBoxes"), o("OutboundLink")],
                      1
                    ),
                    e._v(" Map property")
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "repaint" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#repaint", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("repaint")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("false")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " A Boolean indicating whether the map will continuously repaint. This information is useful for analyzing performance."
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" See "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#repaint",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("repaint"), o("OutboundLink")],
                      1
                    ),
                    e._v(" Map property")
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "transformrequest" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#transformrequest",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("transformRequest")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("Function")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("null")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " A callback run before the Map makes a request for an external URL. The callback can be used to modify the url, set headers, or set the credentials property for cross-origin requests. Expected to return an object with a "
                    ),
                    o("code", [e._v("url")]),
                    e._v(" property and optionally "),
                    o("code", [e._v("headers")]),
                    e._v(" and "),
                    o("code", [e._v("credentials")]),
                    e._v(" properties.")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.transformRequest")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "localideographfontfamily" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#localideographfontfamily",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("localIdeographFontFamily")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type:")]),
                    e._v(" "),
                    o("code", [e._v("String")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Default:")]),
                    e._v(" "),
                    o("code", [e._v("null")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " If specified, defines a CSS font-family for locally overriding generation of glyphs in the 'CJK Unified Ideographs' and 'Hangul Syllables' ranges. In these ranges, font settings from the map's style will be ignored, except for font-weight keywords (light/regular/medium/bold). The purpose of this option is to avoid bandwidth-intensive glyph server requests."
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("options.localIdeographFontFamily")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://www.mapbox.com/mapbox-gl-js/api/#map",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h2", { attrs: { id: "actions" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#actions", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Actions")
                ]),
                e._v(" "),
                o("p", [
                  e._v("Asynchronous actions exposed via "),
                  o("code", [e._v("GlMap.actions")])
                ]),
                e._v(" "),
                o("div", { staticClass: "tip custom-block" }, [
                  o("p", { staticClass: "custom-block-title" }, [e._v("TIP")]),
                  e._v(" "),
                  o("p", [
                    o(
                      "a",
                      {
                        attrs: {
                          href: "https://github.com/soal/map-promisified",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map-promisified"), o("OutboundLink")],
                      1
                    ),
                    e._v(
                      " is used as wrapper around Mapbox GL JS methods. That library can be used independently from VueMapbox."
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "stop-eventdata" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#stop-eventdata", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v(".stop(eventData?)")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    o("ul", [
                      o("li", [
                        o("code", [e._v("eventData")]),
                        e._v(" "),
                        o("code", [e._v("{Object}")]),
                        e._v(" Custom data passed to corresponfing event.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" Stops all animations on the map")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Returns:")]),
                    e._v(" "),
                    o("code", [
                      e._v("{Promise<{ pitch, zoom, bearing, center }>}")
                    ]),
                    e._v(
                      "\nPromise that resolves object with map parameters on the moment of call "
                    ),
                    o("code", [e._v("stop()")])
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "panby-offset-options-eventdata" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#panby-offset-options-eventdata",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v(".panBy(offset, options?, eventData?)")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    o("ul", [
                      o("li", [
                        o("code", [e._v("offset")]),
                        e._v(" "),
                        o("code", [e._v("{Point | number[]}")]),
                        e._v(" x and y coordinates by which to pan the map")
                      ]),
                      e._v(" "),
                      o("li", [
                        o("code", [e._v("options")]),
                        e._v(" "),
                        o("code", [e._v("{AnimationOptions object}")]),
                        e._v(" animation options. See "),
                        o(
                          "a",
                          {
                            attrs: {
                              href:
                                "https://www.mapbox.com/mapbox-gl-js/api/#animationoptions",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }
                          },
                          [e._v("AnimationOptions"), o("OutboundLink")],
                          1
                        )
                      ]),
                      e._v(" "),
                      o("li", [
                        o("code", [e._v("eventData")]),
                        e._v(" "),
                        o("code", [e._v("{Object}")]),
                        e._v(" Custom data passed to corresponfing event.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" Pans the map by the specified offest")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Returns:")]),
                    e._v(" "),
                    o("code", [e._v("{Promise<{ eventData, center }>}")]),
                    e._v(
                      "\nPromise that resolves object with event data and new center of the map when animation ends"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#panby",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("panBy"), o("OutboundLink")],
                      1
                    ),
                    e._v(" Map method")
                  ])
                ]),
                e._v(" "),
                o(
                  "h3",
                  { attrs: { id: "panto-coordinates-options-eventdata" } },
                  [
                    o(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#panto-coordinates-options-eventdata",
                          "aria-hidden": "true"
                        }
                      },
                      [e._v("#")]
                    ),
                    e._v(" "),
                    o("code", [
                      e._v(".panTo(coordinates, options?, eventData?)")
                    ])
                  ]
                ),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    o("ul", [
                      o("li", [
                        o("code", [e._v("coordinates")]),
                        e._v(" "),
                        o("code", [e._v("{LngLat | number[][]}")]),
                        e._v(" The location to pan the map to. See also: "),
                        o(
                          "a",
                          {
                            attrs: {
                              href:
                                "https://www.mapbox.com/mapbox-gl-js/api/#lnglat",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }
                          },
                          [e._v("LngLat"), o("OutboundLink")],
                          1
                        )
                      ]),
                      e._v(" "),
                      o("li", [
                        o("code", [e._v("options")]),
                        e._v(" "),
                        o("code", [e._v("{AnimationOptions object}")]),
                        e._v(" animation options. See "),
                        o(
                          "a",
                          {
                            attrs: {
                              href:
                                "https://www.mapbox.com/mapbox-gl-js/api/#animationoptions",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }
                          },
                          [e._v("AnimationOptions"), o("OutboundLink")],
                          1
                        )
                      ]),
                      e._v(" "),
                      o("li", [
                        o("code", [e._v("eventData")]),
                        e._v(" "),
                        o("code", [e._v("{Object}")]),
                        e._v(" Custom data passed to corresponfing event.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " Pans the map to the specified location, with an animated transition"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Returns:")]),
                    e._v(" "),
                    o("code", [e._v("{Promise<{ eventData, center }>}")]),
                    e._v(
                      "\nPromise that resolves object with event data and new center of the map when animation ends"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#panto",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("panTo"), o("OutboundLink")],
                      1
                    ),
                    e._v(" Map method")
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "zoomto-zoom-options-eventdata" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#zoomto-zoom-options-eventdata",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v(".zoomTo(zoom, options?, eventData?)")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    o("ul", [
                      o("li", [
                        o("code", [e._v("zoom")]),
                        e._v(" "),
                        o("code", [e._v("{number}")]),
                        e._v(" The zoom level to transition to")
                      ]),
                      e._v(" "),
                      o("li", [
                        o("code", [e._v("options")]),
                        e._v(" "),
                        o("code", [e._v("{AnimationOptions object}")]),
                        e._v(" animation options. See "),
                        o(
                          "a",
                          {
                            attrs: {
                              href:
                                "https://www.mapbox.com/mapbox-gl-js/api/#animationoptions",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }
                          },
                          [e._v("AnimationOptions"), o("OutboundLink")],
                          1
                        )
                      ]),
                      e._v(" "),
                      o("li", [
                        o("code", [e._v("eventData")]),
                        e._v(" "),
                        o("code", [e._v("{Object}")]),
                        e._v(" Custom data passed to corresponfing event.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " Zooms the map to the specified zoom level, with an animated transition"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Returns:")]),
                    e._v(" "),
                    o("code", [e._v("{Promise<{ eventData, zoom }>}")]),
                    e._v(
                      "\nPromise that resolves object with event data and new zoom level of the map when animation ends"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#zoomto",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("zoomTo"), o("OutboundLink")],
                      1
                    ),
                    e._v(" Map method")
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "zoomin-options-eventdata" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#zoomin-options-eventdata",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v(".zoomIn(options?, eventData?)")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    o("ul", [
                      o("li", [
                        o("code", [e._v("options")]),
                        e._v(" "),
                        o("code", [e._v("{AnimationOptions object}")]),
                        e._v(" animation options. See "),
                        o(
                          "a",
                          {
                            attrs: {
                              href:
                                "https://www.mapbox.com/mapbox-gl-js/api/#animationoptions",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }
                          },
                          [e._v("AnimationOptions"), o("OutboundLink")],
                          1
                        )
                      ]),
                      e._v(" "),
                      o("li", [
                        o("code", [e._v("eventData")]),
                        e._v(" "),
                        o("code", [e._v("{Object}")]),
                        e._v(" Custom data passed to corresponfing event.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" Increases the map's zoom level by 1")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Returns:")]),
                    e._v(" "),
                    o("code", [e._v("{Promise<{ eventData, zoom }>}")]),
                    e._v(
                      "\nPromise that resolves object with event data and new zoom level of the map when animation ends"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#zoomin",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("zoomIn"), o("OutboundLink")],
                      1
                    ),
                    e._v(" Map method")
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "zoomout-options-eventdata" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#zoomout-options-eventdata",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v(".zoomOut(options?, eventData?)")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    o("ul", [
                      o("li", [
                        o("code", [e._v("options")]),
                        e._v(" "),
                        o("code", [e._v("{AnimationOptions object}")]),
                        e._v(" animation options. See "),
                        o(
                          "a",
                          {
                            attrs: {
                              href:
                                "https://www.mapbox.com/mapbox-gl-js/api/#animationoptions",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }
                          },
                          [e._v("AnimationOptions"), o("OutboundLink")],
                          1
                        )
                      ]),
                      e._v(" "),
                      o("li", [
                        o("code", [e._v("eventData")]),
                        e._v(" "),
                        o("code", [e._v("{Object}")]),
                        e._v(" Custom data passed to corresponfing event.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" Decreases the map's zoom level by 1")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Returns:")]),
                    e._v(" "),
                    o("code", [e._v("{Promise<{ eventData, zoom }>}")]),
                    e._v(
                      "\nPromise that resolves object with event data and new zoom level of the map when animation ends"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#zoomOut",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("zoomOut"), o("OutboundLink")],
                      1
                    ),
                    e._v(" Map method")
                  ])
                ]),
                e._v(" "),
                o(
                  "h3",
                  { attrs: { id: "rotateto-bearing-options-eventdata" } },
                  [
                    o(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#rotateto-bearing-options-eventdata",
                          "aria-hidden": "true"
                        }
                      },
                      [e._v("#")]
                    ),
                    e._v(" "),
                    o("code", [
                      e._v(".rotateTo(bearing, options?, eventData?)")
                    ])
                  ]
                ),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    o("ul", [
                      o("li", [
                        o("code", [e._v("bearing")]),
                        e._v(" "),
                        o("code", [e._v("{number}")]),
                        e._v(" The desired bearing")
                      ]),
                      e._v(" "),
                      o("li", [
                        o("code", [e._v("options")]),
                        e._v(" "),
                        o("code", [e._v("{AnimationOptions object}")]),
                        e._v(" animation options. See "),
                        o(
                          "a",
                          {
                            attrs: {
                              href:
                                "https://www.mapbox.com/mapbox-gl-js/api/#animationoptions",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }
                          },
                          [e._v("AnimationOptions"), o("OutboundLink")],
                          1
                        )
                      ]),
                      e._v(" "),
                      o("li", [
                        o("code", [e._v("eventData")]),
                        e._v(" "),
                        o("code", [e._v("{Object}")]),
                        e._v(" Custom data passed to corresponfing event.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      ' Rotates the map to the specified bearing, with an animated transition. The bearing is the compass direction that is "up"; for example, a bearing of 90° orients the map so that east is up.'
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Returns:")]),
                    e._v(" "),
                    o("code", [e._v("{Promise<{ eventData, bearing }>}")]),
                    e._v(
                      "\nPromise that resolves object with event data and new bearing of the map when animation ends"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#rotateto",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("rotateTo"), o("OutboundLink")],
                      1
                    ),
                    e._v(" Map method")
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "resetnorth-options-eventdata" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#resetnorth-options-eventdata",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v(".resetNorth(options?, eventData?)")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    o("ul", [
                      o("li", [
                        o("code", [e._v("options")]),
                        e._v(" "),
                        o("code", [e._v("{AnimationOptions object}")]),
                        e._v(" animation options. See "),
                        o(
                          "a",
                          {
                            attrs: {
                              href:
                                "https://www.mapbox.com/mapbox-gl-js/api/#animationoptions",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }
                          },
                          [e._v("AnimationOptions"), o("OutboundLink")],
                          1
                        )
                      ])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " Rotates the map so that north is up (0° bearing), with an animated transition"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Returns:")]),
                    e._v(" "),
                    o("code", [e._v("{Promise<{ eventData, bearing }>}")]),
                    e._v(
                      "\nPromise that resolves object with event data and new bearing of the map when animation ends"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#resetnorth",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("resetNorth"), o("OutboundLink")],
                      1
                    ),
                    e._v(" Map method")
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "snaptonorth-options-eventdata" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#snaptonorth-options-eventdata",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v(".snapToNorth(options?, eventData?)")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    o("ul", [
                      o("li", [
                        o("code", [e._v("options")]),
                        e._v(" "),
                        o("code", [e._v("{AnimationOptions object}")]),
                        e._v(" animation options. See "),
                        o(
                          "a",
                          {
                            attrs: {
                              href:
                                "https://www.mapbox.com/mapbox-gl-js/api/#animationoptions",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }
                          },
                          [e._v("AnimationOptions"), o("OutboundLink")],
                          1
                        )
                      ]),
                      e._v(" "),
                      o("li", [
                        o("code", [e._v("eventData")]),
                        e._v(" "),
                        o("code", [e._v("{Object}")]),
                        e._v(" Custom data passed to corresponfing event.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " Snaps the map so that north is up (0° bearing), if the current bearing is close enough to it (i.e. within the "
                    ),
                    o("code", [e._v("bearingSnap")]),
                    e._v(" prop threshold).")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Returns:")]),
                    e._v(" "),
                    o("code", [e._v("{Promise<{ eventData, bearing }>}")]),
                    e._v(
                      "\nPromise that resolves object with event data and new bearing of the map when animation ends"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#snaptonorth",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("snapToNorth"), o("OutboundLink")],
                      1
                    ),
                    e._v(" Map method")
                  ])
                ]),
                e._v(" "),
                o(
                  "h3",
                  { attrs: { id: "fitbounds-bounds-options-eventdata" } },
                  [
                    o(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#fitbounds-bounds-options-eventdata",
                          "aria-hidden": "true"
                        }
                      },
                      [e._v("#")]
                    ),
                    e._v(" "),
                    o("code", [
                      e._v(".fitBounds(bounds, options?, eventData?)")
                    ])
                  ]
                ),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    o("ul", [
                      o("li", [
                        o("code", [e._v("bounds")]),
                        e._v(" "),
                        o("code", [e._v("{ number[][] | LngLatBounds }")]),
                        e._v(
                          " Center these bounds in the viewport and use the highest zoom level up to and including "
                        ),
                        o("code", [e._v("maxZoom")]),
                        e._v(" that fits them in the viewport")
                      ]),
                      e._v(" "),
                      o("li", [
                        o("code", [e._v("options")]),
                        e._v(" "),
                        o("code", [e._v("{Object}")]),
                        e._v(" "),
                        o("ul", [
                          o("li", [
                            o("code", [e._v("options.padding?")]),
                            e._v(" "),
                            o("code", [e._v("{number}")]),
                            e._v(
                              " The amount of padding in pixels to add to the given bounds"
                            )
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.linear")]),
                            e._v(" "),
                            o("code", [e._v("{boolean}")]),
                            e._v(" "),
                            o("em", [e._v("default")]),
                            e._v(": "),
                            o("code", [e._v("false")]),
                            e._v(" If true , the map transitions using "),
                            o("code", [e._v("Map#easeTo")]),
                            e._v(". If false , the map transitions using "),
                            o("code", [e._v("Map#flyTo")]),
                            e._v(
                              ". See those functions and AnimationOptions for information about options available."
                            )
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.easing?")]),
                            e._v(
                              " An easing function for the animated transition. See "
                            ),
                            o(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://www.mapbox.com/mapbox-gl-js/api/#animationoptions",
                                  target: "_blank",
                                  rel: "noopener noreferrer"
                                }
                              },
                              [e._v("AnimationOptions"), o("OutboundLink")],
                              1
                            )
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.offset")]),
                            e._v(" "),
                            o("code", [e._v("{ number[] | Point }")]),
                            e._v(" "),
                            o("em", [e._v("default:")]),
                            e._v(" "),
                            o("code", [e._v("[0, 0]")]),
                            e._v(
                              " The center of the given bounds relative to the map's center, measured in pixels"
                            )
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.maxZoom?")]),
                            e._v(" "),
                            o("code", [e._v("{number}")]),
                            e._v(
                              " The maximum zoom level to allow when the map view transitions to the specified bounds"
                            )
                          ])
                        ])
                      ]),
                      e._v(" "),
                      o("li", [
                        o("code", [e._v("eventData")]),
                        e._v(" "),
                        o("code", [e._v("{Object}")]),
                        e._v(" Custom data passed to corresponfing event.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " Pans and zooms the map to contain its visible area within the specified geographical bounds. This function will also reset the map's bearing to 0 if bearing is nonzero"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Returns:")]),
                    e._v(" "),
                    o("code", [e._v("{Promise<{ eventData, bounds }>}")]),
                    e._v(
                      "\nPromise that resolves object with event data and new bounds of the map when animation ends"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#fitbounds",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("fitBounds"), o("OutboundLink")],
                      1
                    ),
                    e._v(" Map method")
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "jumpto-options-eventdata" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#jumpto-options-eventdata",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v(".jumpTo(options, eventData?)")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    o("ul", [
                      o("li", [
                        o("code", [e._v("options")]),
                        e._v(" "),
                        o("code", [e._v("{Object}")]),
                        e._v(" See "),
                        o(
                          "a",
                          {
                            attrs: {
                              href:
                                "https://www.mapbox.com/mapbox-gl-js/api/#cameraoptions",
                              target: "_blank",
                              rel: "noopener noreferrer"
                            }
                          },
                          [e._v("CameraOptions"), o("OutboundLink")],
                          1
                        ),
                        e._v(" "),
                        o("ul", [
                          o("li", [
                            o("code", [e._v("options.pitch?")]),
                            e._v(" "),
                            o("code", [e._v("{number}")]),
                            e._v(" The desired pitch, in degrees")
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.zoom?")]),
                            e._v(" "),
                            o("code", [e._v("{number}")]),
                            e._v(" The desired zoom level")
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.center?")]),
                            e._v(" "),
                            o("code", [e._v("{number[] | LngLat}")]),
                            e._v(" The desired center")
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.bearing?")]),
                            e._v(" "),
                            o("code", [e._v("{number}")]),
                            e._v(" The desired bearing, in degrees")
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.around?")]),
                            e._v(" "),
                            o("code", [e._v("{number[] | LngLat}")]),
                            e._v(" If "),
                            o("code", [e._v("zoom")]),
                            e._v(" is specified, "),
                            o("code", [e._v("around")]),
                            e._v(
                              " determines the point around which the zoom is centered."
                            )
                          ])
                        ])
                      ]),
                      e._v(" "),
                      o("li", [
                        o("code", [e._v("eventData")]),
                        e._v(" "),
                        o("code", [e._v("{Object}")]),
                        e._v(" Custom data passed to corresponfing event.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " Changes any combination of center, zoom, bearing, and pitch, without an animated transition. The map will retain its current values for any details not specified in options"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Returns:")]),
                    e._v(" "),
                    o("code", [
                      e._v(
                        "{Promise<{ eventData, pitch, zoom, center, bearing }>}"
                      )
                    ]),
                    e._v(
                      "\nPromise that resolves object with event data and new pitch, zoom, center and bearing of the map"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#jumpto",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("jumpTo"), o("OutboundLink")],
                      1
                    ),
                    e._v(" Map method")
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "easeto-options-eventdata" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#easeto-options-eventdata",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v(".easeTo(options, eventData?)")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("p", [o("strong", [e._v("Arguments:")])]),
                    e._v(" "),
                    o("ul", [
                      o("li", [
                        o("p", [
                          o("code", [e._v("options")]),
                          e._v(" "),
                          o("code", [e._v("{Object}")]),
                          e._v(" Combination of "),
                          o(
                            "a",
                            {
                              attrs: {
                                href:
                                  "https://www.mapbox.com/mapbox-gl-js/api/#cameraoptions",
                                target: "_blank",
                                rel: "noopener noreferrer"
                              }
                            },
                            [e._v("CameraOptions"), o("OutboundLink")],
                            1
                          ),
                          e._v(" and "),
                          o(
                            "a",
                            {
                              attrs: {
                                href:
                                  "https://www.mapbox.com/mapbox-gl-js/api/#animationoptions",
                                target: "_blank",
                                rel: "noopener noreferrer"
                              }
                            },
                            [e._v("AnimationOptions"), o("OutboundLink")],
                            1
                          )
                        ]),
                        e._v(" "),
                        o("ul", [
                          o("li", [
                            o("code", [e._v("options.pitch?")]),
                            e._v(" "),
                            o("code", [e._v("{number}")]),
                            e._v(" The desired pitch, in degrees")
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.zoom?")]),
                            e._v(" "),
                            o("code", [e._v("{number}")]),
                            e._v(" The desired zoom level")
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.center?")]),
                            e._v(" "),
                            o("code", [e._v("{number[] | LngLat}")]),
                            e._v(" The desired center")
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.bearing?")]),
                            e._v(" "),
                            o("code", [e._v("{number}")]),
                            e._v(" The desired bearing, in degrees")
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.around?")]),
                            e._v(" "),
                            o("code", [e._v("{number[] | LngLat}")]),
                            e._v(" If "),
                            o("code", [e._v("zoom")]),
                            e._v(" is specified, "),
                            o("code", [e._v("around")]),
                            e._v(
                              " determines the point around which the zoom is centered."
                            )
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.duration?")]),
                            e._v(" "),
                            o("code", [e._v("{number}")]),
                            e._v(
                              " The animation's duration, measured in milliseconds."
                            )
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.easing?")]),
                            e._v(" "),
                            o("code", [e._v("{Function}")]),
                            e._v(
                              " A function taking a time in the range 0..1 and returning a number where 0 is the initial state and 1 is the final state."
                            )
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.offset?")]),
                            e._v(" "),
                            o("code", [e._v("{number[] | Point}")]),
                            e._v(
                              " of the target center relative to real map container center at the end of animation."
                            )
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.animate?")]),
                            e._v(" "),
                            o("code", [e._v("{boolean}")]),
                            e._v(": If "),
                            o("code", [e._v("false")]),
                            e._v(", no animation will occur")
                          ])
                        ])
                      ]),
                      e._v(" "),
                      o("li", [
                        o("p", [
                          o("code", [e._v("eventData")]),
                          e._v(" "),
                          o("code", [e._v("{Object}")]),
                          e._v(" Custom data passed to corresponfing event.")
                        ])
                      ])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("p", [
                      o("strong", [e._v("Description:")]),
                      e._v(
                        " Changes any combination of center, zoom, bearing, and pitch, with an animated transition between old and new values. The map will retain its current values for any details not specified in "
                      ),
                      o("code", [e._v("options")])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("p", [
                      o("strong", [e._v("Returns:")]),
                      e._v(" "),
                      o("code", [
                        e._v(
                          "{Promise<{ eventData, pitch, zoom, center, bearing }>}"
                        )
                      ]),
                      e._v(
                        "\nPromise that resolves object with event data and new pitch, zoom, center and bearing of the map when animations ends"
                      )
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("p", [
                      o("strong", [e._v("See:")]),
                      e._v(" "),
                      o(
                        "a",
                        {
                          attrs: {
                            href:
                              "https://www.mapbox.com/mapbox-gl-js/api/#map#easeto",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }
                        },
                        [e._v("easeTo"), o("OutboundLink")],
                        1
                      ),
                      e._v(" Map method")
                    ])
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "flyto-options-eventdata" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#flyto-options-eventdata",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v(".flyTo(options, eventData?)")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Arguments:")]),
                    e._v(" "),
                    o("ul", [
                      o("li", [
                        o("code", [e._v("options")]),
                        e._v(" "),
                        o("code", [e._v("{Object}")]),
                        e._v(" "),
                        o("ul", [
                          o("li", [
                            o("code", [e._v("options.curve?")]),
                            e._v(" "),
                            o("code", [e._v("{number}")]),
                            e._v(" "),
                            o("em", [e._v("default")]),
                            e._v(" "),
                            o("code", [e._v("1.42")]),
                            e._v(
                              ' The zooming "curve" that will occur along the flight path. A high value maximizes zooming for an exaggerated animation, while a low value minimizes zooming for an effect closer to Map#easeTo. 1.42 is the average value selected by participants in the user study discussed in van Wijk (2003). A value of Math.pow(6, 0.25) would be equivalent to the root mean squared average velocity. A value of 1 would produce a circular motion'
                            )
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.minZoom?")]),
                            e._v(" "),
                            o("code", [e._v("{number}")]),
                            e._v(
                              " The zero-based zoom level at the peak of the flight path. If "
                            ),
                            o("code", [e._v("options.curve")]),
                            e._v(" is specified, this option is ignored")
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.speed?")]),
                            e._v(" "),
                            o("code", [e._v("{number}")]),
                            e._v(" "),
                            o("em", [e._v("default")]),
                            e._v(" "),
                            o("code", [e._v("1.2")]),
                            e._v(
                              " The average speed of the animation defined in relation to "
                            ),
                            o("code", [e._v("options.curve")]),
                            e._v(
                              ". A speed of 1.2 means that the map appears to move along the flight path by 1.2 times "
                            ),
                            o("code", [e._v("options.curve")]),
                            e._v(
                              " screenfuls every second. A screenful is the map's visible span. It does not correspond to a fixed physical distance, but varies by zoom level"
                            )
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.screenSpeed?")]),
                            e._v(" "),
                            o("code", [e._v("{number}")]),
                            e._v(
                              " The average speed of the animation measured in screenfuls per second, assuming a linear timing curve. If "
                            ),
                            o("code", [e._v("options.speed")]),
                            e._v(" is specified, this option is ignored")
                          ]),
                          e._v(" "),
                          o("li", [
                            o("code", [e._v("options.maxDuration?")]),
                            e._v(" "),
                            o("code", [e._v("{number}")]),
                            e._v(
                              " The animation's maximum duration, measured in milliseconds. If duration exceeds maximum duration, it resets to 0"
                            )
                          ])
                        ])
                      ]),
                      e._v(" "),
                      o("li", [
                        o("code", [e._v("eventData")]),
                        e._v(" "),
                        o("code", [e._v("{Object}")]),
                        e._v(" Custom data passed to corresponfing event.")
                      ])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " Changes any combination of center, zoom, bearing, and pitch, animating the transition along a curve that evokes flight. The animation seamlessly incorporates zooming and panning to help the user maintain her bearings even after traversing a great distance"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Returns:")]),
                    e._v(" "),
                    o("code", [
                      e._v(
                        "{Promise<{ eventData, pitch, zoom, center, bearing }>}"
                      )
                    ]),
                    e._v(
                      "\nPromise that resolves object with event data and new pitch, zoom, center and bearing of the map when animations ends"
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#map#flyto",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("flyTo"), o("OutboundLink")],
                      1
                    ),
                    e._v(" Map method")
                  ])
                ]),
                e._v(" "),
                o("h2", { attrs: { id: "events" } }, [
                  o(
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
                o("p", [
                  e._v("Payload of events contains object with properties:")
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("code", [e._v("mapboxEvent")]),
                    e._v(" Original Mapbox GL JS event")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("code", [e._v("map")]),
                    e._v(" Current map object")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("code", [e._v("component")]),
                    e._v(" Component that emits event")
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "load" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#load", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("@load")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" Fires after map fully loaded")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Payload")]),
                    e._v(" "),
                    o("code", [e._v("{ map, component }")]),
                    e._v(" "),
                    o("code", [e._v("map")]),
                    e._v(" is Mapbox Gl JS Map object, "),
                    o("code", [e._v("component")]),
                    e._v(" is instance of GlMap component")
                  ])
                ]),
                e._v(" "),
                o("p", [
                  e._v(
                    "GlMap passes all Mapbox GL JS Map events. Full list of map events see "
                  ),
                  o(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://www.mapbox.com/mapbox-gl-js/api/#map.event:resize",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [e._v("here"), o("OutboundLink")],
                    1
                  )
                ])
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      n.options.__file = "glmap.md";
      t.default = n.exports;
    }
  }
]);
