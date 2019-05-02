(window.webpackJsonp = window.webpackJsonp || []).push([
  [23],
  {
    146: function(t, a, s) {
      "use strict";
      s.r(a);
      var n = s(17),
        p = Object(n.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a;
            return s(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                s("h1", { attrs: { id: "markers-and-popups" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#markers-and-popups",
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Markers and Popups")
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "marker" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#marker", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Marker")
                ]),
                t._v(" "),
                s("p", [
                  t._v("The Marker component is a wrapper around the "),
                  s(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.mapbox.com/mapbox-gl-js/api/#marker",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("Mapbox GL Marker API"), s("OutboundLink")],
                    1
                  ),
                  t._v(".")
                ]),
                t._v(" "),
                s("div", { staticClass: "language-vue extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                    s("code", [
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n  "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("MglMap")
                        ]),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":accessToken")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("mapboxAccessToken"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":mapStyle.sync")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("mapStyle"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":center")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("coordinates"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n  "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("MglMarker")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":coordinates")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("coordinates"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("color")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("blue"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        )
                      ]),
                      t._v("\n  "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("MglMap")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token script language-javascript" }
                        },
                        [
                          t._v("\n"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("import")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" MglMap"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" MglMarker "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("from")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"vue-mapbox"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n\n"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("export")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("default")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  components"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    MglMap"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    MglMarker\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("data")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("return")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      mapStyle"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"mapbox://styles/mapbox/basic-v10"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      coordinates"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("-")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("111.549668")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("39.014")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n")
                        ]
                      ),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                s("h3", { attrs: { id: "props" } }, [
                  s(
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
                s("ul", [
                  s("li", [
                    s("code", [t._v("color {String}")]),
                    t._v(
                      " Set the color of the default marker (not applicable when using the "
                    ),
                    s("code", [t._v("marker")]),
                    t._v(" slot)")
                  ]),
                  t._v(" "),
                  s("li", [
                    s("code", [t._v("coordinates {Array}")]),
                    t._v(
                      " The GeoJSON coordinates for marker placement on the map"
                    )
                  ]),
                  t._v(" "),
                  s("li", [
                    s("code", [t._v("offset {Object, Array}")]),
                    t._v(
                      " Display the marker at an offset distance from the coordinates"
                    )
                  ])
                ]),
                t._v(" "),
                s(
                  "p",
                  [
                    t._v("Full list of props you cab see on "),
                    s(
                      "router-link",
                      { attrs: { to: "/api/marker.html#props" } },
                      [t._v("API page")]
                    )
                  ],
                  1
                ),
                t._v(" "),
                s("h3", { attrs: { id: "slots" } }, [
                  s(
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
                s("p", [
                  t._v("The Marker component has two slots: the "),
                  s("code", [t._v("marker")]),
                  t._v(" slot and default slot used for popup.")
                ]),
                t._v(" "),
                s("h4", { attrs: { id: "the-marker-slot" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#the-marker-slot", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" The "),
                  s("code", [t._v("marker")]),
                  t._v(" slot")
                ]),
                t._v(" "),
                s("p", [
                  t._v("The "),
                  s("code", [t._v("marker")]),
                  t._v(
                    " slot allows you to customize the look of the marker. Here is an example of using the "
                  ),
                  s(
                    "a",
                    {
                      attrs: {
                        href: "https://vuetifyjs.com/en/components/icons",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [
                      t._v("Vuetify "),
                      s("code", [t._v("v-icon")]),
                      t._v(" component"),
                      s("OutboundLink")
                    ],
                    1
                  ),
                  t._v(" instead of the default marker icon:")
                ]),
                t._v(" "),
                s("div", { staticClass: "language-vue extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                    s("code", [
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n  "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("MglMap")
                        ]),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":accessToken")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("mapboxAccessToken"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":mapStyle.sync")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("mapStyle"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":center")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("coordinates"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n  "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("MglMarker")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":coordinates")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("coordinates"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n      "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("v-icon")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("slot")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("marker"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("mdi-map-marker"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("v-icon")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("MglMarker")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n  "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("MglMap")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token script language-javascript" }
                        },
                        [
                          t._v("\n"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("import")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" MglMap"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" MglMarker "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("from")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"vue-mapbox"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n\n"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("export")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("default")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  components"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    MglMap"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    MglMarker\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("data")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("return")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      mapStyle"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"mapbox://styles/mapbox/basic-v10"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      coordinates"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("-")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("111.549668")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("39.014")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n")
                        ]
                      ),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                s("h3", { attrs: { id: "default-slot" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#default-slot", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Default slot")
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "Default slot allows you to specify content to display in a Mapbox popup when the marker is clicked. See "
                  ),
                  s("a", { attrs: { href: "#markers-popups-together" } }, [
                    t._v("below")
                  ])
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "popup" } }, [
                  s(
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
                s("p", [
                  t._v("The Popup component is wrapper around the "),
                  s(
                    "a",
                    {
                      attrs: {
                        href: "https://docs.mapbox.com/mapbox-gl-js/api/#popup",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("Mapbox GL Popup API"), s("OutboundLink")],
                    1
                  ),
                  t._v(".")
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "You can specify content inside popup in default slot. It can be HTML or Vue component.\nIn this example "
                  ),
                  s(
                    "a",
                    {
                      attrs: {
                        href: "https://vuetifyjs.com/en/components/cards",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("Vuetify card component"), s("OutboundLink")],
                    1
                  ),
                  t._v(" used as a content for popup:")
                ]),
                t._v(" "),
                s("div", { staticClass: "language-vue extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                    s("code", [
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n  "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("MglMap")
                        ]),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":accessToken")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("mapboxAccessToken"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":mapStyle.sync")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("mapStyle"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":center")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("coordinates"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n  "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("MglPopup")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":coordinates")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("coordinates"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("anchor")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("top"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n      "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("VCard")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("div")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("Hello, I'm popup!"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("div")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v(" "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("VCard")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("MglPopup")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n  "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("MglMap")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token script language-javascript" }
                        },
                        [
                          t._v("\n"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("import")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" MglMap"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" MglPopup "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("from")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"vue-mapbox"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n\n"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("export")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("default")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  components"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    MglMap"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    MglPopup\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("data")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("return")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      mapStyle"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"mapbox://styles/mapbox/basic-v10"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      coordinates"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("-")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("111.549668")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("39.014")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n")
                        ]
                      ),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                s("p", [
                  t._v("If you set "),
                  s("code", [t._v("onlyText")]),
                  t._v(" prop to "),
                  s("code", [t._v("true")]),
                  t._v(
                    " content in Popup default slot will be treated as plain text. It can be useful if you loading popup content from external untrusted source."
                  )
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "Popups added to the map is hidden by default. If you want to show the popup immediately you need to set the prop "
                  ),
                  s("code", [t._v("showed")]),
                  t._v(" to "),
                  s("code", [t._v("true")])
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "props-2" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#props-2", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Props")
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("p", [
                      s("code", [t._v("showed {Boolean}")]),
                      t._v(" If "),
                      s("code", [t._v("true")]),
                      t._v(
                        ", the popup shows immediately after component is created."
                      )
                    ])
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [
                      s("code", [t._v("closeButton {Boolean}")]),
                      t._v(" If "),
                      s("code", [t._v("true")]),
                      t._v(
                        ", a close button will appear in the top right corner of the popup."
                      )
                    ])
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [
                      s("code", [t._v("closeOnClick {Boolean}")]),
                      t._v(
                        " If true, the popup will closed when the map is clicked."
                      )
                    ])
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [
                      s("code", [t._v("coordinates {Array}")]),
                      t._v(
                        " The GeoJSON coordinates for popup placement on the map. If popup used inside marker this prop will be ignored."
                      )
                    ])
                  ]),
                  t._v(" "),
                  s("li", [
                    s("p", [
                      s("code", [t._v("anchor {string}")]),
                      t._v(
                        " prop specifies the part of the Popup that should be positioned closest to the coordinates point."
                      )
                    ])
                  ])
                ]),
                t._v(" "),
                s(
                  "p",
                  [
                    t._v("Full list of props you can see on "),
                    s(
                      "router-link",
                      { attrs: { to: "/api/popup.html#props" } },
                      [t._v("API page")]
                    )
                  ],
                  1
                ),
                t._v(" "),
                s("h2", { attrs: { id: "markers-popups-together" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#markers-popups-together",
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Markers & Popups together")
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "Popup often used inside of map markers. You can achive this by passing Popup inside Marker in default slot:"
                  )
                ]),
                t._v(" "),
                s("div", { staticClass: "language-vue extra-class" }, [
                  s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                    s("code", [
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n  "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("MglMap")
                        ]),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":accessToken")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("mapboxAccessToken"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":mapStyle.sync")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("mapStyle"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n    "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":center")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("coordinates"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n  "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("MglMarker")
                        ]),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":coordinates")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("coordinates"),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n      "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("MglPopup")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n        "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("VCard")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n          "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("div")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("Hello, I'm popup!"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("div")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n        "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("VCard")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n      "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("MglPopup")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("MglMarker")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n  "),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("MglMap")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n\n"),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      s(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token script language-javascript" }
                        },
                        [
                          t._v("\n"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("import")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" MglMap"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" MglPopup"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" MglMarker "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("from")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"vue-mapbox"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n\n"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("export")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("default")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  components"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    MglMap"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    MglMarker"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    MglPopup\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("data")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("return")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      mapStyle"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"mapbox://styles/mapbox/basic-v10"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      coordinates"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("[")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("-")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("111.549668")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("39.014")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n")
                        ]
                      ),
                      s("span", { pre: !0, attrs: { class: "token tag" } }, [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script")
                        ]),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                s("p", [
                  t._v(
                    "In this case, Popup will be automatically bound to Marker. You can use "
                  ),
                  s("code", [t._v("togglePopup")]),
                  t._v(
                    " Marker method to toggle visibility of bound Popup.\nTake note that Popup "
                  ),
                  s("code", [t._v("coordinates")]),
                  t._v(" prop will be ignored.")
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
      p.options.__file = "markers&popups.md";
      a.default = p.exports;
    }
  }
]);
