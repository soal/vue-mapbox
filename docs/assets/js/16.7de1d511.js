(window.webpackJsonp = window.webpackJsonp || []).push([
  [16],
  {
    153: function(e, r, a) {
      "use strict";
      a.r(r);
      var t = a(17),
        o = Object(t.a)(
          {},
          function() {
            var e = this,
              r = e.$createElement,
              a = e._self._c || r;
            return a(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                a("h1", { attrs: { id: "marker" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#marker", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Marker")
                ]),
                e._v(" "),
                a("h2", { attrs: { id: "props" } }, [
                  a(
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
                a("h3", { attrs: { id: "offset" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#offset", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  a("code", [e._v("offset")])
                ]),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Type")]),
                    e._v(": "),
                    a("code", [e._v("Array<number>")])
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(
                      " The offset in pixels as a PointLike object to apply relative to the element's center. Negatives indicate left and up."
                    )
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("See:")]),
                    e._v(" "),
                    a("code", [e._v("offset")]),
                    e._v(" in "),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#marker",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Marker"), a("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                a("h3", { attrs: { id: "coordinates" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#coordinates", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  a("code", [e._v("coordinates")])
                ]),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Type")]),
                    e._v(": "),
                    a("code", [e._v("Array<number>")])
                  ]),
                  e._v(" "),
                  a("li", [a("strong", [e._v("Required")])]),
                  e._v(" "),
                  a("li", [a("strong", [e._v("Synced")])]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(" Marker coordinates in format "),
                    a("code", [e._v("[longitude, latitude]")])
                  ])
                ]),
                e._v(" "),
                a("h3", { attrs: { id: "color" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#color", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  a("code", [e._v("color")])
                ]),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Type")]),
                    e._v(": "),
                    a("code", [e._v("string")])
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(
                      " The color to use for the default marker if custom marker is not provided. The default is light blue."
                    )
                  ])
                ]),
                e._v(" "),
                a("h3", { attrs: { id: "anchor" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#anchor", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  a("code", [e._v("anchor")])
                ]),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Type")]),
                    e._v(": "),
                    a("code", [e._v("string")])
                  ]),
                  e._v(" "),
                  a("li", [a("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("Default")]),
                    e._v(" "),
                    a("code", [e._v("center")])
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(
                      " A string indicating the part of the Marker that should be positioned closest to the coordinate set via Marker#setLngLat . Options are 'center' , 'top' , 'bottom' , 'left' , 'right' , 'top-left' , 'top-right' , 'bottom-left' , and 'bottom-right' . The default is 'center'."
                    )
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("See")]),
                    e._v(" "),
                    a("code", [e._v("options.anchor")]),
                    e._v(" in "),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#marker",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Marker"), a("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                a("h3", { attrs: { id: "draggable" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#draggable", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  a("code", [e._v("draggable")])
                ]),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Type")]),
                    e._v(": "),
                    a("code", [e._v("boolean")])
                  ]),
                  e._v(" "),
                  a("li", [a("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("Default")]),
                    e._v(" "),
                    a("code", [e._v("false")])
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(
                      " A boolean indicating whether or not a marker is able to be dragged to a new position on the map."
                    )
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("See")]),
                    e._v(" "),
                    a("code", [e._v("options.draggable")]),
                    e._v(" in "),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#marker",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Marker"), a("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                a("h2", { attrs: { id: "slots" } }, [
                  a(
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
                a("h3", { attrs: { id: "marker-2" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#marker-2", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  a("code", [e._v("marker")])
                ]),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(
                      " Slot for custom marker. Can be HTML element or Vue component."
                    )
                  ])
                ]),
                e._v(" "),
                a("h3", { attrs: { id: "default" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#default", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  a("code", [e._v("default")])
                ]),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(
                      " Slot for popup component. When popup put inside marker, popup automaticaly mounted to marker, similiar as "
                    ),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#marker#setpopup",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("setPopup"), a("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                a("h2", { attrs: { id: "methods" } }, [
                  a(
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
                a("h3", { attrs: { id: "remove" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#remove", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  a("code", [e._v(".remove()")])
                ]),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(" Removes marker from the map.")
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("Returns")]),
                    e._v(" "),
                    a("code", [e._v("Marker")]),
                    e._v(" MapboxGL marker.")
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("See")]),
                    e._v(" "),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#marker#remove",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Marker.remove"), a("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                a("h3", { attrs: { id: "togglepopup" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#togglepopup", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  a("code", [e._v(".togglePopup()")])
                ]),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(
                      " Opens or closes the bound popup, depending on the current state."
                    )
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("Returns")]),
                    e._v(" "),
                    a("code", [e._v("Marker")]),
                    e._v(" MapboxGL marker.")
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("See")]),
                    e._v(" "),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#marker#togglepopup",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Marker.togglePopup"), a("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                a("h2", { attrs: { id: "events" } }, [
                  a(
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
                a("h3", { attrs: { id: "added" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#added", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  a("code", [e._v("@added")])
                ]),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(" Fires when marker added on the map.")
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("Payload")]),
                    e._v(" "),
                    a("code", [
                      e._v(
                        "{ component: MarkerComponent, map: Map, marker: Marker }"
                      )
                    ]),
                    e._v(" Object with "),
                    a("code", [e._v("Marker")]),
                    e._v(" component, parent map and MapboxGl "),
                    a("code", [e._v("Marker")]),
                    e._v(" object")
                  ])
                ]),
                e._v(" "),
                a("h3", { attrs: { id: "removed" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#removed", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  a("code", [e._v("@removed")])
                ]),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(" Fires when marker removed the map.")
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("Payload")]),
                    e._v(" "),
                    a("code", [
                      e._v(
                        "{ component: MarkerComponent, map: Map, marker: Marker }"
                      )
                    ]),
                    e._v(" Object with "),
                    a("code", [e._v("Marker")]),
                    e._v(" component, parent map and MapboxGl "),
                    a("code", [e._v("Marker")]),
                    e._v(" object")
                  ])
                ]),
                e._v(" "),
                a("h3", { attrs: { id: "drag" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#drag", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  a("code", [e._v("@drag")])
                ]),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(" Fires when marker dragged if marker "),
                    a("code", [e._v("draggable")]),
                    e._v(" prop is "),
                    a("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("Payload")]),
                    e._v(" "),
                    a("code", [
                      e._v(
                        "{ component: MarkerComponent, map: Map, mapboxEvent: Event }"
                      )
                    ]),
                    e._v(" Object with "),
                    a("code", [e._v("Marker")]),
                    e._v(" component, parent map and original MapboxGl event")
                  ])
                ]),
                e._v(" "),
                a("h3", { attrs: { id: "dragstart" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#dragstart", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  a("code", [e._v("@dragstart")])
                ]),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(" Fires when marker dragging starts if marker "),
                    a("code", [e._v("draggable")]),
                    e._v(" prop is "),
                    a("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("Payload")]),
                    e._v(" "),
                    a("code", [
                      e._v(
                        "{ component: MarkerComponent, map: Map, mapboxEvent: Event }"
                      )
                    ]),
                    e._v(" Object with "),
                    a("code", [e._v("Marker")]),
                    e._v(" component, parent map and original MapboxGl event")
                  ])
                ]),
                e._v(" "),
                a("h3", { attrs: { id: "dragend" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#dragend", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  a("code", [e._v("@dragend")])
                ]),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(" Fires when marker dragging ends if marker "),
                    a("code", [e._v("draggable")]),
                    e._v(" prop is "),
                    a("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("Payload")]),
                    e._v(" "),
                    a("code", [
                      e._v(
                        "{ component: MarkerComponent, map: Map, mapboxEvent: Event }"
                      )
                    ]),
                    e._v(" Object with "),
                    a("code", [e._v("Marker")]),
                    e._v(" component, parent map and original MapboxGl event")
                  ])
                ]),
                e._v(" "),
                a(
                  "h3",
                  { attrs: { id: "click" } },
                  [
                    a(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#click", "aria-hidden": "true" }
                      },
                      [e._v("#")]
                    ),
                    e._v(" "),
                    a("code", [e._v("@click")]),
                    e._v(" "),
                    a("Badge", {
                      attrs: { text: "experimental", type: "warn" }
                    })
                  ],
                  1
                ),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(" Fires marker is clicked.")
                  ]),
                  e._v(" "),
                  a("li", [a("strong", [e._v("Payload")])])
                ]),
                e._v(" "),
                a("div", { staticClass: "language- extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      e._v(
                        "    {\n        component: MarkerComponent,\n        map: Map,\n        mapboxEvent: DOMEvent,\n        marker: Marker\n    }\n"
                      )
                    ])
                  ])
                ]),
                a("p", [
                  e._v("Object with "),
                  a("code", [e._v("Marker")]),
                  e._v(" component, parent map and original MapboxGl event")
                ]),
                e._v(" "),
                a(
                  "h3",
                  { attrs: { id: "mouseenter" } },
                  [
                    a(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#mouseenter", "aria-hidden": "true" }
                      },
                      [e._v("#")]
                    ),
                    e._v(" "),
                    a("code", [e._v("@mouseenter")]),
                    e._v(" "),
                    a("Badge", {
                      attrs: { text: "experimental", type: "warn" }
                    })
                  ],
                  1
                ),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(" Fires when mouse cursor enters marker area.")
                  ]),
                  e._v(" "),
                  a("li", [a("strong", [e._v("Payload")])])
                ]),
                e._v(" "),
                a("div", { staticClass: "language- extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      e._v(
                        "    {\n        component: MarkerComponent,\n        map: Map,\n        mapboxEvent: DOMEvent,\n        marker: Marker\n    }\n"
                      )
                    ])
                  ])
                ]),
                a("p", [
                  e._v("Object with "),
                  a("code", [e._v("Marker")]),
                  e._v(" component, parent map and original MapboxGl event")
                ]),
                e._v(" "),
                a(
                  "h3",
                  { attrs: { id: "mouseleave" } },
                  [
                    a(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#mouseleave", "aria-hidden": "true" }
                      },
                      [e._v("#")]
                    ),
                    e._v(" "),
                    a("code", [e._v("@mouseleave")]),
                    e._v(" "),
                    a("Badge", {
                      attrs: { text: "experimental", type: "warn" }
                    })
                  ],
                  1
                ),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(" Fires when mouse cursor leaves marker area.")
                  ]),
                  e._v(" "),
                  a("li", [a("strong", [e._v("Payload")])])
                ]),
                e._v(" "),
                a("div", { staticClass: "language- extra-class" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      e._v(
                        "    {\n        component: MarkerComponent,\n        map: Map,\n        mapboxEvent: DOMEvent,\n        marker: Marker\n    }\n"
                      )
                    ])
                  ])
                ]),
                a("p", [
                  e._v("Object with "),
                  a("code", [e._v("Marker")]),
                  e._v(" component, parent map and original MapboxGl event")
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
      o.options.__file = "marker.md";
      r.default = o.exports;
    }
  }
]);
