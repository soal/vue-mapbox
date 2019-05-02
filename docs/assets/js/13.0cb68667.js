(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    155: function(e, t, r) {
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
                r("h1", { attrs: { id: "canvaslayer" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#canvaslayer", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" CanvasLayer")
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
                    e._v(" A data source containing video.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See:")]),
                    e._v(" "),
                    r("code", [e._v("Video source")]),
                    e._v(" in "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#videosource",
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
                r("div", { staticClass: "tip custom-block" }, [
                  r("p", { staticClass: "custom-block-title" }, [
                    e._v("Reactivity")
                  ]),
                  e._v(" "),
                  r("p", [
                    r("code", [e._v("coordinates")]),
                    e._v(" field of the "),
                    r("code", [e._v("source")]),
                    e._v(
                      " prop is reactive.\nIf you change it's value, changes automatically applied to the map."
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
                r("h3", { attrs: { id: "video" } }, [
                  r(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#video", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  r("code", [e._v("video")])
                ]),
                e._v(" "),
                r("ul", [
                  r("li", [
                    r("strong", [e._v("Description")]),
                    e._v(" Returns the HTML video element.")
                  ]),
                  e._v(" "),
                  r("li", [
                    r("strong", [e._v("See")]),
                    e._v(" "),
                    r("code", [e._v(".getVideo()")]),
                    e._v(" "),
                    r(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#videosource#getvideo",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("method"), r("OutboundLink")],
                      1
                    )
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
      o.options.__file = "videolayer.md";
      t.default = o.exports;
    }
  }
]);
