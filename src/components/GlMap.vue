<template>
  <div :id="container">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from "vue";
  import M from "mapbox-gl";

  const events = [
    "resize",
    "webglcontextlost",
    "webglcontextrestored",
    "remove",
    "movestart",
    "load",
    "contextmenu",
    "dblclick",
    "click",
    "touchcancel",
    "touchmove",
    "touchend",
    "touchstart",
    "dataloading",
    "mousemove",
    "mouseup",
    "mousedown",
    "sourcedataloading",
    "error",
    "data",
    "styledata",
    "sourcedata",
    "mouseout",
    "styledataloading",
    "moveend",
    "move",
    "render",
    "zoom",
    "zoomstart",
    "zoomend",
    "boxzoomstart",
    "boxzoomcancel",
    "boxzoomend",
    "rotate",
    "rotatestart",
    "rotateend",
    "dragend",
    "drag",
    "dragstart",
    "pitch"
  ];

  const props = {
    container: {
      type: [String, HTMLElement],
      default () {
        return "map";
      }
    },
    accessToken: {
      type: String,
      default: null
    },
    minZoom: {
      type: Number,
      default: 0
    },
    maxZoom: {
      type: Number,
      default: 22
    },
    mapStyle: {
      type: [String, Object],
      required: true
    },
    hash: {
      type: Boolean,
      default: false
    },
    interactive: {
      type: Boolean,
      default: true
    },
    bearingSnap: {
      type: Number,
      default: 7
    },
    classes: {
      type: Array,
      default () {
        return [];
      }
    },
    attributionControl: {
      type: Boolean,
      default: true
    },
    logoPosition: {
      type: String,
      default: "bottom-left"
    },
    failIfMajorPerformanceCaveat: {
      type: Boolean,
      default: false
    },
    preserveDrawingBuffer: {
      type: Boolean,
      default: false
    },
    refreshExpiredTiles: {
      type: Boolean,
      default: false
    },
    maxBounds: {
      type: Array,
      default () {
        return undefined;
      }
    },
    scrollZoom: {
      type: [Boolean, Object],
      default () {
        return true;
      }
    },
    boxZoom: {
      type: Boolean,
      default: true
    },
    dragRotate: {
      type: Boolean,
      default: true
    },
    dragPan: {
      type: Boolean,
      default: true
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    doubleClickZoom: {
      type: Boolean,
      default: true
    },
    touchZoomRotate: {
      type: [Boolean, Object],
      default () {
        return true;
      }
    },
    trackResize: {
      type: Boolean,
      default: true
    },
    center: {
      type: Array,
      default () {
        return [0, 0];
      }
    },
    zoom: {
      type: Number,
      default: 0
    },
    bearing: {
      type: Number,
      default: 0
    },
    pitch: {
      type: Number,
      default: 0
    },
    renderWorldCopies: {
      type: Boolean,
      default: true
    }
  };

  export default {
    name: "GlMap",
    props,

    mounted() {
      this.loadMap().then(map => {
        this.$emit("mgl-load", map);
      });
    },

    methods: {
      loadMap() {
        return new Promise((resolve) => {
          if (this.accessToken) M.accessToken = this.accessToken;
          let map = new M.Map({
            ...this._props,
            style: this.mapStyle
          });
          map.on("load", () => resolve(map));
        });
      }
    }
  };
</script>
