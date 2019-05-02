(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    152: function(e, t, o) {
      "use strict";
      o.r(t);
      var a = o(17),
        r = Object(a.a)(
          {},
          function() {
            var e = this,
              t = e.$createElement,
              o = e._self._c || t;
            return o(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                o("h1", { attrs: { id: "popup" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#popup", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Popup")
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
                o("h3", { attrs: { id: "showed" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#showed", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("showed")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type")]),
                    e._v(": "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [o("strong", [e._v("non-synced")])]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" If "),
                    o("code", [e._v("true")]),
                    e._v(
                      ", the popup showes immediately after the component is mounted."
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "closebutton" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#closebutton", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("closeButton")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type")]),
                    e._v(": "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" If "),
                    o("code", [e._v("true")]),
                    e._v(
                      ", a close button will appear in the top right corner of the popup."
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("closeButton")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#popup",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Popup"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "closeonclick" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#closeonclick", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("closeOnClick")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type")]),
                    e._v(": "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" If "),
                    o("code", [e._v("true")]),
                    e._v(", the popup will closed when the map is clicked.")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("closeOnClick")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#popup",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Popup"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "anchor" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#anchor", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("anchor")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type")]),
                    e._v(": "),
                    o("code", [e._v("String")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " A string indicating the part of the Popup that should be positioned closest to the Popup location. Options are 'top' , 'bottom' , 'left' , 'right' , 'top-left' , 'top-right' , 'bottom-left' , and 'bottom-right' . If unset the anchor will be dynamically set to ensure the popup falls within the map container with a preference for 'bottom'."
                    )
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("anchor")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#popup",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Popup"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "offset" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#offset", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("offset")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("p", [
                      o("strong", [e._v("Type")]),
                      e._v(": "),
                      o("code", [e._v("Number | Object | Array")])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("p", [
                      o("strong", [e._v("Description:")]),
                      e._v(" A pixel offset applied to the popup's location.")
                    ]),
                    e._v(" "),
                    o("ul", [
                      o("li", [
                        e._v(
                          "a single number specifying a distance from the popup's location"
                        )
                      ]),
                      e._v(" "),
                      o("li", [
                        e._v("a PointLike specifying a constant offset")
                      ]),
                      e._v(" "),
                      o("li", [
                        e._v(
                          "an object of Points specifing an offset for each anchor position Negative offsets indicate left and up."
                        )
                      ])
                    ])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("p", [
                      o("strong", [e._v("See:")]),
                      e._v(" "),
                      o("code", [e._v("offset")]),
                      e._v(" in "),
                      o(
                        "a",
                        {
                          attrs: {
                            href:
                              "https://docs.mapbox.com/mapbox-gl-js/api/#popup",
                            target: "_blank",
                            rel: "noopener noreferrer"
                          }
                        },
                        [e._v("Popup"), o("OutboundLink")],
                        1
                      )
                    ])
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "coordinates" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#coordinates", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("coordinates")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type")]),
                    e._v(": "),
                    o("code", [e._v("Array")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" Popup coordinates in format "),
                    o("code", [e._v("[longitude, latitude]")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("setLngLat()")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#popup#setlnglat",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Popup"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "onlytext" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#onlytext", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("onlyText")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Type")]),
                    e._v(": "),
                    o("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" If "),
                    o("code", [e._v("true")]),
                    e._v(" content of the Popup treated as plain text")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("See:")]),
                    e._v(" "),
                    o("code", [e._v("setText")]),
                    e._v(" in "),
                    o(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#popup#settext",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Popup"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                o("h2", { attrs: { id: "slots" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#slots", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Slots")
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "default" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#default", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("default")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(
                      " Slot for Popup content. Can be plain text, HTML or Vue component. If "
                    ),
                    o("code", [e._v("onlyText")]),
                    e._v(" set to "),
                    o("code", [e._v("true")]),
                    e._v(" content in this slot treated as plaint text.")
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
                o("h3", { attrs: { id: "added" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#added", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("@added")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" Fires when popup added on the map.")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Payload")]),
                    e._v(" "),
                    o("code", [e._v("{ popup: Popup }")]),
                    e._v(" Object with MapboxGL "),
                    o("code", [e._v("Popup")]),
                    e._v(" object")
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "removed" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#removed", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("@removed")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" Fires when popup removed the map.")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Payload")]),
                    e._v(" "),
                    o("code", [e._v("{ popup: Popup }")]),
                    e._v(" Object with MapboxGL "),
                    o("code", [e._v("Popup")]),
                    e._v(" object")
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "open" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#open", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("@open")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" Fires when marker added on the map.")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Payload")]),
                    e._v(" "),
                    o("code", [e._v("{ popup: Popup }")]),
                    e._v(" Object with MapboxGL "),
                    o("code", [e._v("Popup")]),
                    e._v(" object")
                  ])
                ]),
                e._v(" "),
                o("h3", { attrs: { id: "close" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#close", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  o("code", [e._v("@close")])
                ]),
                e._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [e._v("Description:")]),
                    e._v(" Fires when marker added on the map.")
                  ]),
                  e._v(" "),
                  o("li", [
                    o("strong", [e._v("Payload")]),
                    e._v(" "),
                    o("code", [e._v("{ popup: Popup }")]),
                    e._v(" Object with MapboxGL "),
                    o("code", [e._v("Popup")]),
                    e._v(" object")
                  ])
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
      r.options.__file = "popup.md";
      t.default = r.exports;
    }
  }
]);
