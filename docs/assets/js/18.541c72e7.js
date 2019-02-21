(window.webpackJsonp = window.webpackJsonp || []).push([
  [18],
  {
    155: function(t, e, o) {
      "use strict";
      o.r(e);
      var a = o(17),
        r = Object(a.a)(
          {},
          function() {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                o("h1", { attrs: { id: "popup" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#popup", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Popup")
                ]),
                t._v(" "),
                o("h2", { attrs: { id: "props" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#props", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Props")
                ]),
                t._v(" "),
                o("h3", { attrs: { id: "closebutton" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#closebutton", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  o("code", [t._v("closeButton")])
                ]),
                t._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [t._v("Type")]),
                    t._v(": "),
                    o("code", [t._v("Boolean")])
                  ]),
                  t._v(" "),
                  o("li", [
                    o("strong", [t._v("Description:")]),
                    t._v(" If "),
                    o("code", [t._v("true")]),
                    t._v(
                      ", a close button will appear in the top right corner of the popup."
                    )
                  ]),
                  t._v(" "),
                  o("li", [
                    o("strong", [t._v("See:")]),
                    t._v(" "),
                    o("code", [t._v("closeButton")]),
                    t._v(" in "),
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
                      [t._v("Popup"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                t._v(" "),
                o("h3", { attrs: { id: "closeonclick" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#closeonclick", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  o("code", [t._v("closeOnClick")])
                ]),
                t._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [t._v("Type")]),
                    t._v(": "),
                    o("code", [t._v("Boolean")])
                  ]),
                  t._v(" "),
                  o("li", [
                    o("strong", [t._v("Description:")]),
                    t._v(" If "),
                    o("code", [t._v("true")]),
                    t._v(", the popup will closed when the map is clicked.")
                  ]),
                  t._v(" "),
                  o("li", [
                    o("strong", [t._v("See:")]),
                    t._v(" "),
                    o("code", [t._v("closeOnClick")]),
                    t._v(" in "),
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
                      [t._v("Popup"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                t._v(" "),
                o("h3", { attrs: { id: "anchor" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#anchor", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  o("code", [t._v("anchor")])
                ]),
                t._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [t._v("Type")]),
                    t._v(": "),
                    o("code", [t._v("String")])
                  ]),
                  t._v(" "),
                  o("li", [
                    o("strong", [t._v("Description:")]),
                    t._v(
                      " A string indicating the part of the Popup that should be positioned closest to the Popup location. Options are 'top' , 'bottom' , 'left' , 'right' , 'top-left' , 'top-right' , 'bottom-left' , and 'bottom-right' . If unset the anchor will be dynamically set to ensure the popup falls within the map container with a preference for 'bottom'."
                    )
                  ]),
                  t._v(" "),
                  o("li", [
                    o("strong", [t._v("See:")]),
                    t._v(" "),
                    o("code", [t._v("anchor")]),
                    t._v(" in "),
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
                      [t._v("Popup"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                t._v(" "),
                o("h3", { attrs: { id: "offset" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#offset", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  o("code", [t._v("offset")])
                ]),
                t._v(" "),
                o("ul", [
                  o("li", [
                    o("p", [
                      o("strong", [t._v("Type")]),
                      t._v(": "),
                      o("code", [t._v("Number | Object | Array")])
                    ])
                  ]),
                  t._v(" "),
                  o("li", [
                    o("p", [
                      o("strong", [t._v("Description:")]),
                      t._v(" A pixel offset applied to the popup's location.")
                    ]),
                    t._v(" "),
                    o("ul", [
                      o("li", [
                        t._v(
                          "a single number specifying a distance from the popup's location"
                        )
                      ]),
                      t._v(" "),
                      o("li", [
                        t._v("a PointLike specifying a constant offset")
                      ]),
                      t._v(" "),
                      o("li", [
                        t._v(
                          "an object of Points specifing an offset for each anchor position Negative offsets indicate left and up."
                        )
                      ])
                    ])
                  ]),
                  t._v(" "),
                  o("li", [
                    o("p", [
                      o("strong", [t._v("See:")]),
                      t._v(" "),
                      o("code", [t._v("offset")]),
                      t._v(" in "),
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
                        [t._v("Popup"), o("OutboundLink")],
                        1
                      )
                    ])
                  ])
                ]),
                t._v(" "),
                o("h3", { attrs: { id: "coordinates" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#coordinates", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  o("code", [t._v("coordinates")])
                ]),
                t._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [t._v("Type")]),
                    t._v(": "),
                    o("code", [t._v("Array")])
                  ]),
                  t._v(" "),
                  o("li", [
                    o("strong", [t._v("Description:")]),
                    t._v(" Popup coordinates in format "),
                    o("code", [t._v("[longitude, latitude]")])
                  ]),
                  t._v(" "),
                  o("li", [
                    o("strong", [t._v("See:")]),
                    t._v(" "),
                    o("code", [t._v("setLngLat()")]),
                    t._v(" in "),
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
                      [t._v("Popup"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                t._v(" "),
                o("h3", { attrs: { id: "onlytext" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#onlytext", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  o("code", [t._v("onlyText")])
                ]),
                t._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [t._v("Type")]),
                    t._v(": "),
                    o("code", [t._v("Boolean")])
                  ]),
                  t._v(" "),
                  o("li", [
                    o("strong", [t._v("Description:")]),
                    t._v(" If "),
                    o("code", [t._v("true")]),
                    t._v(" content of the Popup treated as plain text")
                  ]),
                  t._v(" "),
                  o("li", [
                    o("strong", [t._v("See:")]),
                    t._v(" "),
                    o("code", [t._v("setText")]),
                    t._v(" in "),
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
                      [t._v("Popup"), o("OutboundLink")],
                      1
                    )
                  ])
                ]),
                t._v(" "),
                o("h2", { attrs: { id: "slots" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#slots", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Slots")
                ]),
                t._v(" "),
                o("h3", { attrs: { id: "default" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#default", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  o("code", [t._v("default")])
                ]),
                t._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [t._v("Description:")]),
                    t._v(
                      " Slot for Popup content. Can be plain text, HTML or Vue component. If "
                    ),
                    o("code", [t._v("onlyText")]),
                    t._v(" set to "),
                    o("code", [t._v("true")]),
                    t._v(" content in this slot treated as plaint text.")
                  ])
                ]),
                t._v(" "),
                o("h2", { attrs: { id: "events" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#events", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Events")
                ]),
                t._v(" "),
                o("h3", { attrs: { id: "added" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#added", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  o("code", [t._v("@added")])
                ]),
                t._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [t._v("Description:")]),
                    t._v(" Fires when popup added on the map.")
                  ]),
                  t._v(" "),
                  o("li", [
                    o("strong", [t._v("Payload")]),
                    t._v(" "),
                    o("code", [t._v("{ popup: Popup }")]),
                    t._v(" Object with MapboxGL "),
                    o("code", [t._v("Popup")]),
                    t._v(" object")
                  ])
                ]),
                t._v(" "),
                o("h3", { attrs: { id: "removed" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#removed", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  o("code", [t._v("@removed")])
                ]),
                t._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [t._v("Description:")]),
                    t._v(" Fires when popup removed the map.")
                  ]),
                  t._v(" "),
                  o("li", [
                    o("strong", [t._v("Payload")]),
                    t._v(" "),
                    o("code", [t._v("{ popup: Popup }")]),
                    t._v(" Object with MapboxGL "),
                    o("code", [t._v("Popup")]),
                    t._v(" object")
                  ])
                ]),
                t._v(" "),
                o("h3", { attrs: { id: "open" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#open", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  o("code", [t._v("@open")])
                ]),
                t._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [t._v("Description:")]),
                    t._v(" Fires when marker added on the map.")
                  ]),
                  t._v(" "),
                  o("li", [
                    o("strong", [t._v("Payload")]),
                    t._v(" "),
                    o("code", [t._v("{ popup: Popup }")]),
                    t._v(" Object with MapboxGL "),
                    o("code", [t._v("Popup")]),
                    t._v(" object")
                  ])
                ]),
                t._v(" "),
                o("h3", { attrs: { id: "close" } }, [
                  o(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#close", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  o("code", [t._v("@close")])
                ]),
                t._v(" "),
                o("ul", [
                  o("li", [
                    o("strong", [t._v("Description:")]),
                    t._v(" Fires when marker added on the map.")
                  ]),
                  t._v(" "),
                  o("li", [
                    o("strong", [t._v("Payload")]),
                    t._v(" "),
                    o("code", [t._v("{ popup: Popup }")]),
                    t._v(" Object with MapboxGL "),
                    o("code", [t._v("Popup")]),
                    t._v(" object")
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
      e.default = r.exports;
    }
  }
]);
