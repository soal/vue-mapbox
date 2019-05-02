(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    161: function(e, r, t) {
      "use strict";
      t.r(r);
      var a = t(17),
        o = Object(a.a)(
          {},
          function() {
            var e = this,
              r = e.$createElement,
              t = e._self._c || r;
            return t(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": e.$parent.slotKey } },
              [
                t("h1", { attrs: { id: "layers-common" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#layers-common", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Layers common")
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
                t("h4", { attrs: { id: "props-for-mapbox-gl-source" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#props-for-mapbox-gl-source",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Props for Mapbox GL source")
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "sourceid" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sourceid", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("sourceId")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type:")]),
                    e._v(" "),
                    t("code", [e._v("String")])
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Required")])]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(
                      " ID of the source to add. Must not conflict with existing sources."
                    )
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See:")]),
                    e._v(" "),
                    t("code", [e._v(".addSource()")]),
                    e._v(" "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#map#addsource",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Map method"), t("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "source" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#source", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("source")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type:")]),
                    e._v(" "),
                    t("code", [e._v("Object | String")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Non-Synced")]),
                    e._v(" A source for layer or URL to it.")
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Description:")])]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See:")]),
                    e._v(" "),
                    t("code", [e._v("sources")]),
                    e._v(" in "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/style-spec/#sources",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Style Spec"), t("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                t("h4", { attrs: { id: "props-for-mapbox-gl-layer" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#props-for-mapbox-gl-layer",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Props for Mapbox GL layer")
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "layerid" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#layerid", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("layerId")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type")]),
                    e._v(" "),
                    t("code", [e._v("String")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(
                      " ID of the layer to add. Must not conflict with existing layers."
                    )
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Required")])]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See:")]),
                    e._v(" "),
                    t("code", [e._v("id")]),
                    e._v(" in "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/style-spec/#layer-id",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Layer Style Spec"), t("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "layer" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#layer", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("layer")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type")]),
                    e._v(" "),
                    t("code", [e._v("String")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(" Layer configuration object.")
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Required")])]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See:")]),
                    e._v(" "),
                    t("code", [e._v("layers")]),
                    e._v(" in "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/style-spec/#layers",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Layer Style Spec"), t("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                t("div", { staticClass: "tip custom-block" }, [
                  t("p", { staticClass: "custom-block-title" }, [
                    e._v("Reactivity")
                  ]),
                  e._v(" "),
                  t("p", [
                    t("code", [e._v("minzoom")]),
                    e._v(", "),
                    t("code", [e._v("maxzoom")]),
                    e._v(", "),
                    t("code", [e._v("paint")]),
                    e._v(", "),
                    t("code", [e._v("layout")]),
                    e._v(" and "),
                    t("code", [e._v("filter")]),
                    e._v(" fields of "),
                    t("code", [e._v("layer")]),
                    e._v(
                      " prop are reactive. If you change their value, changes automatically applied to the map."
                    )
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "before" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#before", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("before")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type:")]),
                    e._v(" "),
                    t("code", [e._v("String")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Default:")]),
                    e._v(" "),
                    t("code", [e._v("undefined")])
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(
                      " The ID of an existing layer to insert the new layer before."
                    )
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See:")]),
                    e._v(" "),
                    t("code", [e._v("metadata")]),
                    e._v(" in "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/style-spec/#layer-metadata",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [e._v("Mapbox Layer Style Spec"), t("OutboundLink")],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                t("h4", { attrs: { id: "props-for-vue-mapbox-component" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#props-for-vue-mapbox-component",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Props for Vue-Mapbox component")
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "clearsource" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#clearsource", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("clearSource")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type:")]),
                    e._v(" "),
                    t("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Default:")]),
                    e._v(" "),
                    t("code", [e._v("true")])
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(" If "),
                    t("code", [e._v("true")]),
                    e._v(
                      ", component will remove layer source from map on component destruction."
                    )
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "replacesource" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#replacesource", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("replaceSource")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type:")]),
                    e._v(" "),
                    t("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Default:")]),
                    e._v(" "),
                    t("code", [e._v("false")])
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(" If source passed to "),
                    t("code", [e._v("source")]),
                    e._v(
                      " prop of layer component already added ot the map, it will be ignored and existed "
                    ),
                    t("code", [e._v("source")]),
                    e._v(" will be used. If "),
                    t("code", [e._v("replaceSource")]),
                    e._v(" is "),
                    t("code", [e._v("true")]),
                    e._v(" source will be replaced with new instead.")
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "replace" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#replace", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("replace")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type:")]),
                    e._v(" "),
                    t("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Default:")]),
                    e._v(" "),
                    t("code", [e._v("false")])
                  ]),
                  e._v(" "),
                  t("li", [t("strong", [e._v("Non-Synced")])]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description:")]),
                    e._v(" If "),
                    t("code", [e._v("true")]),
                    e._v(
                      ", replaces existing layer with same id. Otherwise, error returns."
                    )
                  ])
                ]),
                e._v(" "),
                t("h2", { attrs: { id: "computed-properties" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: {
                        href: "#computed-properties",
                        "aria-hidden": "true"
                      }
                    },
                    [e._v("#")]
                  ),
                  e._v(" Computed properties")
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "sourceloaded" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#sourceloaded", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("sourceLoaded")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type")]),
                    e._v(" "),
                    t("code", [e._v("Boolean")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description")]),
                    e._v(" Flag that indicated if layer source already loaded.")
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "maplayer" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#maplayer", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("mapLayer")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type")]),
                    e._v(" "),
                    t("code", [e._v("Object")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description")]),
                    e._v(" Mapbox GL layer object.")
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See")]),
                    e._v(" "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#map#getlayer",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t("code", [e._v(".getLayer()")]), t("OutboundLink")],
                      1
                    ),
                    e._v(" map method")
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "mapsource" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#mapsource", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("mapSource")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Type")]),
                    e._v(" "),
                    t("code", [e._v("Object")])
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description")]),
                    e._v(" Source for this layer.")
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See")]),
                    e._v(" "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#sources",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [
                        t("code", [e._v("Mapbox GL source")]),
                        t("OutboundLink")
                      ],
                      1
                    )
                  ])
                ]),
                e._v(" "),
                t("h2", { attrs: { id: "methods" } }, [
                  t(
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
                t("h3", { attrs: { id: "move-beforeid" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#move-beforeid", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v(".move(beforeId?)")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [t("strong", [e._v("Arguments:")])]),
                  e._v(" "),
                  t("li", [
                    t("code", [e._v("beforeId")]),
                    e._v(" "),
                    t("code", [e._v("String")]),
                    e._v(
                      " The ID of an existing layer to insert the new layer before. If this argument is omitted, the layer will be appended to the end of the layers array."
                    )
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("Description")]),
                    e._v(" Moves a layer to a different z-position.")
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See")]),
                    e._v(" "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#map#movelayer",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t("code", [e._v(".moveLayer()")]), t("OutboundLink")],
                      1
                    ),
                    e._v(" map method")
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "remove" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#remove", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v(".remove()")])
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("strong", [e._v("Description")]),
                    e._v(
                      " Removes the layer with and source assosiated with it."
                    )
                  ]),
                  e._v(" "),
                  t("li", [
                    t("strong", [e._v("See")]),
                    e._v(" "),
                    t(
                      "a",
                      {
                        attrs: {
                          href:
                            "https://docs.mapbox.com/mapbox-gl-js/api/#map#removelayer",
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }
                      },
                      [t("code", [e._v(".removeLayer()")]), t("OutboundLink")],
                      1
                    ),
                    e._v(" map method")
                  ])
                ]),
                e._v(" "),
                t("h2", { attrs: { id: "events" } }, [
                  t(
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
                t("p", [
                  e._v("Payload of events contains object with properties:")
                ]),
                e._v(" "),
                t("ul", [
                  t("li", [
                    t("code", [e._v("mapboxEvent")]),
                    e._v(" Original Mapbox GL JS event")
                  ]),
                  e._v(" "),
                  t("li", [
                    t("code", [e._v("layerId")]),
                    e._v(" ID of current layer")
                  ]),
                  e._v(" "),
                  t("li", [
                    t("code", [e._v("map")]),
                    e._v(" Current map object")
                  ]),
                  e._v(" "),
                  t("li", [
                    t("code", [e._v("component")]),
                    e._v(" Component that emits event")
                  ])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "mousedown" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#mousedown", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@mousedown")])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "mouseup" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#mouseup", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@mouseup")])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "click" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#click", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@click")])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "dblclick" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#dblclick", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@dblclick")])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "mousemove" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#mousemove", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@mousemove")])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "mouseenter" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#mouseenter", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@mouseenter")])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "mouseleave" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#mouseleave", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@mouseleave")])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "mouseover" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#mouseover", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@mouseover")])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "mouseout" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#mouseout", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@mouseout")])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "contextmenu" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#contextmenu", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@contextmenu")])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "touchstart" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#touchstart", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@touchstart")])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "touchend" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#touchend", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@touchend")])
                ]),
                e._v(" "),
                t("h3", { attrs: { id: "touchcancel" } }, [
                  t(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#touchcancel", "aria-hidden": "true" }
                    },
                    [e._v("#")]
                  ),
                  e._v(" "),
                  t("code", [e._v("@touchcancel")])
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
      o.options.__file = "README.md";
      r.default = o.exports;
    }
  }
]);
