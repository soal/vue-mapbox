(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    119: function(t, e, n) {},
    141: function(t, e, n) {
      "use strict";
      var a = n(119);
      n.n(a).a;
    },
    163: function(t, e, n) {
      "use strict";
      n.r(e);
      var a = {
          functional: !0,
          props: {
            type: { type: String, default: "tip" },
            text: String,
            vertical: { type: String, default: "top" }
          },
          render: function(t, e) {
            var n = e.props,
              a = e.slots;
            return t(
              "span",
              { class: ["badge", n.type, n.vertical] },
              n.text || a().default
            );
          }
        },
        i = (n(141), n(17)),
        o = Object(i.a)(a, void 0, void 0, !1, null, "efceadb8", null);
      o.options.__file = "Badge.vue";
      e.default = o.exports;
    }
  }
]);
