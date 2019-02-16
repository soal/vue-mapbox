(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    158: function(e, t, a) {
      "use strict";
      a.r(t);
      var r = a(17),
        s = Object(r.a)(
          {},
          function() {
            var e = this,
              t = e.$createElement,
              a = e._self._c || t;
            return a(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                a("h1", { attrs: { id: "imagelayer" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#imagelayer", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" ImageLayer")
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
                a(
                  "p",
                  [
                    e._v("All common "),
                    a("router-link", { attrs: { to: "/api/Layers/#props" } }, [
                      e._v("layers props")
                    ])
                  ],
                  1
                ),
                e._v(" "),
                a("h3", { attrs: { id: "source" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#source", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  a("code", [e._v("source")])
                ]),
                e._v(" "),
                a("ul", [
                  a("li", [
                    a("strong", [e._v("Type:")]),
                    e._v(" "),
                    a("code", [e._v("Object | String")])
                  ]),
                  e._v(" "),
                  a("li", [a("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("Description:")]),
                    e._v(" A data source containing an image.")
                  ]),
                  e._v(" "),
                  a("li", [
                    a("strong", [e._v("See:")]),
                    e._v(" "),
                    a("code", [e._v("ImageSource")]),
                    e._v(" in "),
                    a(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#imagesource",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox API Docs"), a("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                a("div", { staticClass: "tip custom-block" }, [
                  a("p", { staticClass: "custom-block-title" }, [
                    e._v("Reactivity")
                  ]),
                  e._v(" "),
                  a("p", [
                    a("code", [e._v("coordinates")]),
                    e._v(" and "),
                    a("code", [e._v("url")]),
                    e._v(" fields of the "),
                    a("code", [e._v("source")]),
                    e._v(
                      " prop are reactive.\nIf you change their value, changes automatically applied to the map."
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
                a(
                  "p",
                  [
                    e._v("All common layer "),
                    a("router-link", { attrs: { to: "/api/Layers/#events" } }, [
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
      s.options.__file = "imagelayer.md";
      t.default = s.exports;
    }
  }
]);
