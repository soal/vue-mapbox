(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    137: function(e, r, t) {
      "use strict";
      t.r(r);
      var o = t(15),
        a = Object(o.a)(
          {},
          function() {
            var e = this,
              r = e.$createElement,
              t = e._self._c || r;
            return t(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                t("h1", { attrs: { id: "canvaslayer" } }, [
                  t(
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
                t("h2", { attrs: { id: "props" } }, [
                  t(
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
                t("h3", { attrs: { id: "urls" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#urls", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("urls")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type:")]),
                    e._v(" "),
                    t("code", [e._v("Array")])
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Required")])]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(" URLs to video content in order of preferred format.")
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See:")]),
                    e._v(" "),
                    t("code", [e._v("urls")]),
                    e._v(" in "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-video-urls",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Source Style Spec"), t("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "coordinates" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#coordinates", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("coordinates")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type:")]),
                    e._v(" "),
                    t("code", [e._v("Array")])
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Required")])]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(
                      " Corners of video specified in longitude, latitude pairs."
                    )
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See:")]),
                    e._v(" "),
                    t("code", [e._v("coordinates")]),
                    e._v(" in "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/style-spec/#sources-video-coordinates",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Source Style Spec"), t("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                t("h2", { attrs: { id: "computed-getters" } }, [
                  t(
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
                t("h3", { attrs: { id: "video" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#video", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("video")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Description")]),
                    e._v(" Returns the HTML video element.")
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See")]),
                    e._v(" "),
                    t("code", [e._v(".getVideo()")]),
                    e._v(" "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://www.mapbox.com/mapbox-gl-js/api/#videosource#getvideo",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("method"), t("OutboundLink")],
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
      a.options.__file = "videolayer.md";
      r.default = a.exports;
    }
  }
]);
