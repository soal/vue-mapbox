<template>
  <div id="map">
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
  style: {
    type: [String, Object],
    required: true,
    default: null
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
    default: []
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
    default: null
  },
  scrollZoom: {
    type: [Boolean, Object],
    default: true
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
    default: true
  },
  trackResize: {
    type: Boolean,
    default: true
  },
  center: {
    type: Array,
    default: [0, 0]
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
    default: true
  },
  renderWorldCopies: {
    type: Boolean,
    default: true
  }
};

export default {
  props: props,

  mounted() {
    this.loadMap().then(map => {
      this.$emit("mbx-load", map);
    });
  },

  methods: {
    loadMap() {
      return new Promise((resolve) => {
        if (this.props.accessToken) M.accessToken = this.props.accessToken;

        let map = new M.Map({ container: "#map", ...this.props });

        map.on("load", () => resolve(map));
      });
    }
  }
};
</script>
