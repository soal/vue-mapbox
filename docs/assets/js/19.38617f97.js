(window.webpackJsonp = window.webpackJsonp || []).push([
  [19],
  {
    150: function(t, a, s) {
      "use strict";
      s.r(a);
      var n = s(17),
        e = Object(n.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              s = t._self._c || a;
            return s(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                s("h1", { attrs: { id: "base-map" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#base-map", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Base map")
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "adding-map-component" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#adding-map-component",
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Adding map component")
                ]),
                t._v(" "),
                s("p", [
                  t._v("For using maps with Mapbox GL JS you need a "),
                  s(
                    "a",
                    {
                      attrs: {
                        href: "https://mapbox.com/mapbox-gl-js/style-spec",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("map style"), s("OutboundLink")],
                    1
                  ),
                  t._v("."),
                  s("br"),
                  t._v("\nIf you using Mapbox-hosted maps, you need to set "),
                  s("code", [t._v("access_token")]),
                  t._v(". Look for details in Mapbox "),
                  s(
                    "a",
                    {
                      attrs: {
                        href: "https://mapbox.com/help/define-access-token/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("documentation"), s("OutboundLink")],
                    1
                  ),
                  t._v("."),
                  s("br"),
                  t._v(
                    "\nIf you using self-hosting maps on your own server you can omit this parameter."
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
                        t._v(" "),
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
                            t._v("accessToken"),
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
                          [t._v(":map")]
                        ),
                        s(
                          "span",
                          {
                            pre: !0,
                            attrs: { class: "token style-attr language-css" }
                          },
                          [
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token attr-name" } },
                              [
                                s(
                                  "span",
                                  {
                                    pre: !0,
                                    attrs: { class: "token attr-name" }
                                  },
                                  [t._v("Style")]
                                )
                              ]
                            ),
                            s(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('="')]
                            ),
                            s(
                              "span",
                              { pre: !0, attrs: { class: "token attr-value" } },
                              [t._v("mapStyle")]
                            ),
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
                          t._v(" Mapbox "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("from")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"mapbox-gl"')]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
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
                          t._v(" MglMap "),
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
                          t._v("\n    MglMap\n  "),
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
                          t._v("\n      accessToken"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token constant" } },
                            [t._v("ACCESS_TOKEN")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                "// your access token. Needed if you using Mapbox maps"
                              )
                            ]
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
                            { pre: !0, attrs: { class: "token constant" } },
                            [t._v("MAP_STYLE")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// your map style")]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("created")]
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
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                "// We need to set mapbox-gl library here in order to use it in template"
                              )
                            ]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("this")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("mapbox "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("=")]
                          ),
                          t._v(" Mapbox"),
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
                s("div", { staticClass: "tip custom-block" }, [
                  s("p", { staticClass: "custom-block-title" }, [t._v("TIP")]),
                  t._v(" "),
                  s("p", [
                    t._v(
                      "If you need, you can pass Mapbox-gl-js implementation as "
                    ),
                    s("code", [t._v("mapboxGl")]),
                    t._v(" prop. May be useful for lazy-loading.\nExample:")
                  ]),
                  t._v(" "),
                  s("div", { staticClass: "language-vue extra-class" }, [
                    s("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                      s("code", [
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token tag" } },
                            [
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" }
                                },
                                [t._v("<")]
                              ),
                              t._v("template")
                            ]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(">")]
                          )
                        ]),
                        t._v("\n  "),
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token tag" } },
                            [
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" }
                                },
                                [t._v("<")]
                              ),
                              t._v("MglMap")
                            ]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token attr-name" } },
                            [t._v(":mapboxGl")]
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
                              t._v("mapbox-gl"),
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
                              t._v("accessToken"),
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
                            [t._v("@load")]
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
                              t._v("onMapLoaded"),
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
                            [t._v("/>")]
                          )
                        ]),
                        t._v("\n"),
                        s("span", { pre: !0, attrs: { class: "token tag" } }, [
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token tag" } },
                            [
                              s(
                                "span",
                                {
                                  pre: !0,
                                  attrs: { class: "token punctuation" }
                                },
                                [t._v("</")]
                              ),
                              t._v("template")
                            ]
                          ),
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
                      "If none is passed, VueMapbox imports Mapbox-gl internally."
                    )
                  ])
                ]),
                t._v(" "),
                s(
                  "h3",
                  {
                    attrs: { id: "interact-with-map-properties-as-glmap-props" }
                  },
                  [
                    s(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#interact-with-map-properties-as-glmap-props",
                          "aria-hidden": "true"
                        }
                      },
                      [t._v("#")]
                    ),
                    t._v(" Interact with map properties as GlMap props")
                  ]
                ),
                t._v(" "),
                s("p", [
                  t._v(
                    "You can control map parameters like zoom, bearing, pitch etc. by changing props.\nIf you set "
                  ),
                  s("code", [t._v(".sync")]),
                  t._v(" modifier ("),
                  s(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://vuejs.org/v2/guide/components.html#sync-Modifier",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("Vue docs"), s("OutboundLink")],
                    1
                  ),
                  t._v(
                    ") to prop, it will updates when you use operations that takes time to proceed. For example, if you use "
                  ),
                  s("code", [t._v("flyTo")]),
                  t._v(" method, props "),
                  s("code", [t._v("zoom")]),
                  t._v(", "),
                  s("code", [t._v("center")]),
                  t._v(", "),
                  s("code", [t._v("bearing")]),
                  t._v(", "),
                  s("code", [t._v("pitch")]),
                  t._v(" will be updated when animation ends.")
                ]),
                t._v(" "),
                s(
                  "p",
                  [
                    t._v("Full list of props see in "),
                    s("router-link", { attrs: { to: "/api/#props" } }, [
                      t._v("API docs")
                    ]),
                    t._v(", note field 'Synced' in description")
                  ],
                  1
                ),
                t._v(" "),
                s("h2", { attrs: { id: "map-loading" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#map-loading", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Map loading")
                ]),
                t._v(" "),
                s("p", [
                  t._v("When map loads, "),
                  s("code", [t._v("MglMap")]),
                  t._v(" component emits "),
                  s("code", [t._v("load")]),
                  t._v(" event. Payload of the event contains Mapbox GL JS "),
                  s("code", [t._v("Map")]),
                  t._v(" object.\nAll components placed under "),
                  s("code", [t._v("MglMap")]),
                  t._v(" will be rendered only after map fully loaded.")
                ]),
                t._v(" "),
                s("div", { staticClass: "warning custom-block" }, [
                  s("p", { staticClass: "custom-block-title" }, [
                    t._v("Storing Map object")
                  ]),
                  t._v(" "),
                  s("p", [
                    t._v(
                      "Take note that it's generally bad idea to add to Vuex or component's "
                    ),
                    s("code", [t._v("data")]),
                    t._v(
                      " anything but primitive types and plain objects. Vue adds getters and setters to every property, so if you add "
                    ),
                    s("code", [t._v("Map")]),
                    t._v(" object to Vuex store or component "),
                    s("code", [t._v("data")]),
                    t._v(
                      ", it may lead to weird bugs.\nIf you want to store map object, store it as non-reactive property like in example below."
                    )
                  ])
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
                            t._v("accessToken"),
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
                          [t._v("@load")]
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
                            t._v("onMapLoaded"),
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
                          [t._v("/>")]
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
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// …component code…")]
                          ),
                          t._v("\n  "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("created")]
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
                            [t._v("this")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("map "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("=")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("null")]
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
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  methods"),
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
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("onMapLoaded")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          t._v("event"),
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
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// in component")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("this")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("map "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("=")]
                          ),
                          t._v(" event"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("map"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                "// or just to store if you want have access from other components"
                              )
                            ]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("this")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("$store"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("map "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("=")]
                          ),
                          t._v(" event"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("map"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
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
                s("h2", { attrs: { id: "map-actions" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#map-actions", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Map actions")
                ]),
                t._v(" "),
                s("p", [
                  t._v(
                    "Asynchronous map methods exposed at MglMap component in "
                  ),
                  s("code", [t._v("actions")]),
                  t._v(" property. They returns "),
                  s("code", [t._v("Promise")]),
                  t._v(
                    ", that resolves when action completed.\nPromise resolves with map properties that has been changed by used action."
                  ),
                  s("br"),
                  t._v("\nFor example:")
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
                            [t._v("export")]
                          ),
                          t._v(" deafult "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  name"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v("'App'")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n\n  methods"),
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
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("async")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("onMapLoad")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          t._v("event"),
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
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("// Here we cathing 'load' map event")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("const")]
                          ),
                          t._v(" asyncActions "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("=")]
                          ),
                          t._v(" event"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("component"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          t._v("actions\n\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("const")]
                          ),
                          t._v(" newParams "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token operator" } },
                            [t._v("=")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("await")]
                          ),
                          t._v(" asyncActions"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("flyTo")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        center"),
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
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("30")]
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
                            [t._v("30")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("]")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        zoom"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("9")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n        speed"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token number" } },
                            [t._v("1")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          t._v("\n      console"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(".")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("log")]
                          ),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          t._v("newParams"),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          t._v("\n      "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                "/* => {\n              center: [30, 30],\n              zoom: 9,\n              bearing: 9,\n              pitch: 7\n            }\n      */"
                              )
                            ]
                          ),
                          t._v("\n    "),
                          s(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
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
                s(
                  "p",
                  [
                    t._v("See full list of actions on "),
                    s("router-link", { attrs: { to: "/api/#actions" } }, [
                      t._v("API")
                    ]),
                    t._v(" page.")
                  ],
                  1
                ),
                t._v(" "),
                s("h3", { attrs: { id: "method-actions-stop" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#method-actions-stop",
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Method "),
                  s("code", [t._v("actions.stop()")])
                ]),
                t._v(" "),
                s("p", [
                  t._v("Method "),
                  s("code", [t._v(".stop()")]),
                  t._v(
                    " just stops all animations on map, updates props with new positions and return Promise with map parameters at the moment when "
                  ),
                  s("code", [t._v(".stop()")]),
                  t._v(" called.")
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "events" } }, [
                  s(
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
                s(
                  "p",
                  [
                    t._v("See list of events on "),
                    s("router-link", { attrs: { to: "/api/#events" } }, [
                      t._v("API")
                    ]),
                    t._v(" page.")
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
      e.options.__file = "basemap.md";
      a.default = e.exports;
    }
  }
]);
