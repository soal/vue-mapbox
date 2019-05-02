(window.webpackJsonp = window.webpackJsonp || []).push([
  [22],
  {
    147: function(t, a, e) {
      "use strict";
      e.r(a);
      var s = e(17),
        n = Object(s.a)(
          {},
          function() {
            var t = this,
              a = t.$createElement,
              e = t._self._c || a;
            return e(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": t.$parent.slotKey } },
              [
                e("h1", { attrs: { id: "layers-and-sources" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#layers-and-sources",
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Layers and sources")
                ]),
                t._v(" "),
                e("h2", { attrs: { id: "adding-layers" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#adding-layers", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Adding layers")
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "Geographic features on the map draws as layers.\nLayer use "
                  ),
                  e("code", [t._v("source")]),
                  t._v(
                    " object that contains data for layer (for example, GeoJSON object). Source must be added to map and several layers can use common "
                  ),
                  e("code", [t._v("source")]),
                  t._v(
                    " and draw it's data differently.\nAlso, layer has own configuration object that declares how layer draws on the map. You can read more about it in Mapbox GL JS docs for "
                  ),
                  e(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.mapbox.com/mapbox-gl-js/api/#sources",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("sources"), e("OutboundLink")],
                    1
                  ),
                  t._v(" ans "),
                  e(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("layers"), e("OutboundLink")],
                    1
                  ),
                  t._v(".")
                ]),
                t._v(" "),
                e("p", [
                  t._v("Vue-mapbox exposes layers as Vue components.\n"),
                  e("code", [t._v("source")]),
                  t._v(" and "),
                  e("code", [t._v("layer")]),
                  t._v(
                    " configuration object passed to layer component as props. There is several layers types for drawing different types of sources.\nFor example adding a layer with GeoJSON data:"
                  )
                ]),
                t._v(" "),
                e("div", { staticClass: "language-vue extra-class" }, [
                  e("pre", { pre: !0, attrs: { class: "language-vue" } }, [
                    e("code", [
                      e("span", { pre: !0, attrs: { class: "token tag" } }, [
                        e("span", { pre: !0, attrs: { class: "token tag" } }, [
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("template")
                        ]),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n  "),
                      e("span", { pre: !0, attrs: { class: "token tag" } }, [
                        e("span", { pre: !0, attrs: { class: "token tag" } }, [
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("MglMap")
                        ]),
                        t._v(" "),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":accessToken")]
                        ),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("accessToken"),
                            e(
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
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":mapStyle.sync")]
                        ),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("mapStyle"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n    "),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- Adding navigation control --\x3e")]
                      ),
                      t._v("\n    "),
                      e("span", { pre: !0, attrs: { class: "token tag" } }, [
                        e("span", { pre: !0, attrs: { class: "token tag" } }, [
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("MglNavigationControl")
                        ]),
                        t._v(" "),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("position")]
                        ),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("top-right"),
                            e(
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
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        )
                      ]),
                      t._v("\n    "),
                      e(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [t._v("\x3c!-- Adding GeoJSON layer --\x3e")]
                      ),
                      t._v("\n    "),
                      e("span", { pre: !0, attrs: { class: "token tag" } }, [
                        e("span", { pre: !0, attrs: { class: "token tag" } }, [
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("MglGeojsonLayer")
                        ]),
                        t._v("\n      "),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":sourceId")]
                        ),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("geoJsonSource.id"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n      "),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":source")]
                        ),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("geoJsonSource"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n      "),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v("layerId")]
                        ),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("myLayer"),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            )
                          ]
                        ),
                        t._v("\n      "),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token attr-name" } },
                          [t._v(":layer")]
                        ),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token attr-value" } },
                          [
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v("=")]
                            ),
                            e(
                              "span",
                              {
                                pre: !0,
                                attrs: { class: "token punctuation" }
                              },
                              [t._v('"')]
                            ),
                            t._v("geoJsonlayer"),
                            e(
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
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v("/>")]
                        )
                      ]),
                      t._v("\n  "),
                      e("span", { pre: !0, attrs: { class: "token tag" } }, [
                        e("span", { pre: !0, attrs: { class: "token tag" } }, [
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("MglMap")
                        ]),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n"),
                      e("span", { pre: !0, attrs: { class: "token tag" } }, [
                        e("span", { pre: !0, attrs: { class: "token tag" } }, [
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("template")
                        ]),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n\n"),
                      e("span", { pre: !0, attrs: { class: "token tag" } }, [
                        e("span", { pre: !0, attrs: { class: "token tag" } }, [
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("<")]
                          ),
                          t._v("script")
                        ]),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      e(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token script language-javascript" }
                        },
                        [
                          t._v("\n"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("import")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v(" MglMap"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" MglNavigationControl"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v(" MglGeojsonLayer "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("from")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"vue-mapbox"')]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n\n"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("export")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("default")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n  components"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    MglMap"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    MglNavigationControl"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n    MglGeojsonLayer\n  "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n  "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token function" } },
                            [t._v("data")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("(")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(")")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n    "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token keyword" } },
                            [t._v("return")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n      accessToken"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"some_token"')]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      mapStyle"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token string" } },
                            [t._v('"style_object"')]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      geoJsonSource"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [t._v("//...some GeoJSON object")]
                          ),
                          t._v("\n      "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(",")]
                          ),
                          t._v("\n      geoJsonLayer"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(":")]
                          ),
                          t._v(" "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("{")]
                          ),
                          t._v("\n        "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token comment" } },
                            [
                              t._v(
                                "//...some GeoJSON layer configuration object"
                              )
                            ]
                          ),
                          t._v("\n      "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n    "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n  "),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          t._v("\n"),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("}")]
                          ),
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v(";")]
                          ),
                          t._v("\n")
                        ]
                      ),
                      e("span", { pre: !0, attrs: { class: "token tag" } }, [
                        e("span", { pre: !0, attrs: { class: "token tag" } }, [
                          e(
                            "span",
                            { pre: !0, attrs: { class: "token punctuation" } },
                            [t._v("</")]
                          ),
                          t._v("script")
                        ]),
                        e(
                          "span",
                          { pre: !0, attrs: { class: "token punctuation" } },
                          [t._v(">")]
                        )
                      ]),
                      t._v("\n")
                    ])
                  ])
                ]),
                e("p", [
                  t._v("In this example "),
                  e("code", [t._v("geoJsonSource")]),
                  t._v(" can be an "),
                  e("code", [t._v("object")]),
                  t._v(", representing GeoJSON feature or "),
                  e("code", [t._v("string")]),
                  t._v(" with URL to GeoJSON.")
                ]),
                t._v(" "),
                e("p", [
                  t._v("Sources are stored in Mapbox GL JS "),
                  e("code", [t._v("Map")]),
                  t._v(" object by "),
                  e("code", [t._v("sourceId")]),
                  t._v(
                    ". If you sure that source already added to map, you can skip "
                  ),
                  e("code", [t._v("source")]),
                  t._v(" prop and just pass "),
                  e("code", [t._v("sourceId")]),
                  t._v(
                    " and use same source for different layers. If you try to add same source with same "
                  ),
                  e("code", [t._v("id")]),
                  t._v(" twice, VueMapbox would just use "),
                  e("code", [t._v("source")]),
                  t._v(" that already existed on the map, but you can set "),
                  e("code", [t._v("replaceSource")]),
                  t._v(" prop to "),
                  e("code", [t._v("true")]),
                  t._v(" to just replace old source with new one passed in "),
                  e("code", [t._v("source")]),
                  t._v(" prop.")
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "By default when Layer components destroying, it removes source from map. If you want to keep source on Map (for example, for future using or if other layers use this source), set "
                  ),
                  e("code", [t._v("clearSource")]),
                  t._v(" prop to "),
                  e("code", [t._v("false")]),
                  t._v(".")
                ]),
                t._v(" "),
                e("h2", { attrs: { id: "reactivity" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#reactivity", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Reactivity")
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "Layer components watch for changes in object in their "
                  ),
                  e("code", [t._v("layer")]),
                  t._v(
                    " prop and translate changes to map accordingly. For example, if you change content of "
                  ),
                  e("code", [t._v("filter")]),
                  t._v(
                    " prop in GeojsonLayer, changes will be automatically applied to layer on the map. Not all layer settings can be set dynamically, currently reactive properties are "
                  ),
                  e("code", [t._v("minzoom")]),
                  t._v(", "),
                  e("code", [t._v("maxzoom")]),
                  t._v(", "),
                  e("code", [t._v("paint")]),
                  t._v(", "),
                  e("code", [t._v("layout")]),
                  t._v(" and "),
                  e("code", [t._v("filter")]),
                  t._v(".")
                ]),
                t._v(" "),
                e("h2", { attrs: { id: "layer-getters" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#layer-getters", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Layer getters")
                ]),
                t._v(" "),
                e("p", [
                  t._v(
                    "GeoJSON and Vector layers has getters for their features: "
                  ),
                  e("code", [t._v(".getRenderedFeatures(filter?)")]),
                  t._v(", "),
                  e("code", [t._v(".getSourceFeatures(geometry?, filter?)")]),
                  t._v(" and "),
                  e("code", [t._v(".getFeatureState(featureId)")]),
                  t._v(". They works similar to "),
                  e(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.mapbox.com/mapbox-gl-js/api/#map#queryrenderedfeatures",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [
                      e("code", [t._v(".queryRenderedFeatures()")]),
                      e("OutboundLink")
                    ],
                    1
                  ),
                  t._v(" and "),
                  e(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.mapbox.com/mapbox-gl-js/api/#map#querysourcefeatures",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [
                      e("code", [t._v(".querySourceFeatures()")]),
                      e("OutboundLink")
                    ],
                    1
                  ),
                  t._v(
                    " Map methods, but returns features only from source of current layer."
                  )
                ]),
                t._v(" "),
                e("h2", { attrs: { id: "layer-methods" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#layer-methods", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Layer methods")
                ]),
                t._v(" "),
                e("p", [
                  t._v("Layer components has methods "),
                  e("code", [t._v("move()")]),
                  t._v(" and "),
                  e("code", [t._v("remove()")]),
                  t._v(
                    ".\nFirst moves a layer to a different z-position. Second destroys component and removes layer and source from map event if layer created with prop "
                  ),
                  e("code", [t._v("clearSource: false")]),
                  t._v(".")
                ]),
                t._v(" "),
                e("h2", { attrs: { id: "layer-events" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#layer-events", "aria-hidden": "true" }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Layer events")
                ]),
                t._v(" "),
                e(
                  "p",
                  [
                    t._v(
                      "Layers emits events when loading data or on user interaction like "
                    ),
                    e("code", [t._v("click")]),
                    t._v(". See full list of events in "),
                    e("router-link", { attrs: { to: "/api/Layers/#events" } }, [
                      t._v("API section")
                    ])
                  ],
                  1
                ),
                t._v(" "),
                e("h2", { attrs: { id: "migration-from-0-1" } }, [
                  e(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#migration-from-0-1",
                        "aria-hidden": "true"
                      }
                    },
                    [t._v("#")]
                  ),
                  t._v(" Migration from 0.1")
                ]),
                t._v(" "),
                e("p", [
                  t._v("In versoin "),
                  e("code", [t._v("0.1")]),
                  t._v(
                    " layer and source options was exposed via separate props.\nSince "
                  ),
                  e("code", [t._v("0.2")]),
                  t._v(" there are consolidated "),
                  e("code", [t._v("source")]),
                  t._v(" object props for data source and "),
                  e("code", [t._v("layer")]),
                  t._v(" for layer options. See "),
                  e(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.mapbox.com/mapbox-gl-js/api/#sources",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("sources"), e("OutboundLink")],
                    1
                  ),
                  t._v(" and "),
                  e(
                    "a",
                    {
                      attrs: {
                        href:
                          "https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers",
                        target: "_blank",
                        rel: "noopener noreferrer"
                      }
                    },
                    [t._v("layers"), e("OutboundLink")],
                    1
                  ),
                  t._v(" in Mapbox GL JS docs.")
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
      n.options.__file = "layers&sources.md";
      a.default = n.exports;
    }
  }
]);
