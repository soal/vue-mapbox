(window.webpackJsonp = window.webpackJsonp || []).push([
  [14],
  {
    139: function(t, a, s) {
      "use strict";
      s.r(a);
      var n = s(15),
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
                s("h1", { attrs: { id: "vue-mapbox-plugin" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#vue-mapbox-plugin",
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Vue-mapbox plugin")
                ]),
                t._v(" "),
                s(
                  "h2",
                  { attrs: { id: "register-vue-mapbox-as-vue-plugin" } },
                  [
                    s(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#register-vue-mapbox-as-vue-plugin",
                          "aria-hidden": "true"
                        }
                      },
                      [t._v("#")]
                    ),
                    t._v(" Register Vue-Mapbox as Vue plugin")
                  ]
                ),
                t._v(" "),
                s("div", { staticClass: "language-javascript extra-class" }, [
                  s(
                    "pre",
                    { pre: !0, attrs: { class: "language-javascript" } },
                    [
                      s("code", [
                        t._v("Vue"),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("use")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("VueMapbox"),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" options"),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(")")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n")
                      ])
                    ]
                  )
                ]),
                s("h2", { attrs: { id: "options" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#options", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Options")
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "mapboxgl" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#mapboxgl", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  s("code", [t._v("mapboxgl")])
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("strong", [t._v("Type")]),
                    t._v(" "),
                    s("code", [t._v("Object")])
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("Description:")]),
                    t._v(" Mapbox GL JS module")
                  ])
                ]),
                t._v(" "),
                s("h3", { attrs: { id: "plugins" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#plugins", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" "),
                  s("code", [t._v("plugins")])
                ]),
                t._v(" "),
                s("ul", [
                  s("li", [
                    s("strong", [t._v("Type")]),
                    t._v(" "),
                    s("code", [t._v("Array<Object>")])
                  ]),
                  t._v(" "),
                  s("li", [
                    s("strong", [t._v("Description:")]),
                    t._v(" Vue-Mapbox Plugins")
                  ])
                ]),
                t._v(" "),
                s("h2", { attrs: { id: "example" } }, [
                  s(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#example", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Example")
                ]),
                t._v(" "),
                s("div", { staticClass: "language-javascript extra-class" }, [
                  s(
                    "pre",
                    { pre: !0, attrs: { class: "language-javascript" } },
                    [
                      s("code", [
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("import")]
                        ),
                        t._v(" VueMapbox "),
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
                        t._v("\n"),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("import")]
                        ),
                        t._v(" MapboxGeocoder "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token keyword" } },
                          [t._v("from")]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token string" } },
                          [t._v('"@mapbox/mapbox-gl-geocoder"')]
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
                        t._v("\n\nVue"),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(".")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token function" } },
                          [t._v("use")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("(")]
                        ),
                        t._v("VueMapbox"),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v(" "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v("\n  mapboxgl"),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(":")]
                        ),
                        t._v(" Mapbox"),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(",")]
                        ),
                        t._v("\n  plugins"),
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
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("{")]
                        ),
                        t._v(" mapboxGeocoder"),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(":")]
                        ),
                        t._v(" MapboxGeocoder "),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("}")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("]")]
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
                          [t._v(")")]
                        ),
                        s(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(";")]
                        ),
                        t._v("\n")
                      ])
                    ]
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
      e.options.__file = "README.md";
      a.default = e.exports;
    }
  }
]);
