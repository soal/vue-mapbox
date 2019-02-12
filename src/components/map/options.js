export default {
  container: {
    type: [String, HTMLElement],
    default() {
      return `map-${("" + Math.random()).split(".")[1]}`;
    }
  },
  accessToken: {
    type: String,
    default: undefined
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
  pitchWithRotate: {
    type: Boolean,
    default: true
  },
  clickTolerance: {
    type: Number,
    default: 3
  },
  // classes: {
  //   type: Array,
  //   default() {
  //     return []
  //   }
  // },
  attributionControl: {
    type: Boolean,
    default: true
  },
  customAttribution: {
    type: [String, Array],
    default: null
  },
  logoPosition: {
    type: String,
    default: "bottom-left",
    validator: val =>
      ["top-left", "top-right", "bottom-left", "bottom-right"].includes(val)
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
    default: true
  },
  maxBounds: {
    type: Array,
    default() {
      return undefined;
    }
  },
  scrollZoom: {
    type: [Boolean, Object],
    default() {
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
    default() {
      return true;
    }
  },
  trackResize: {
    type: Boolean,
    default: true
  },
  center: {
    type: [Object, Array],
    default: undefined
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
  initialBounds: {
    type: [Object, Array],
    default: undefined
  },
  renderWorldCopies: {
    type: Boolean,
    default: true
  },
  RTLTextPluginUrl: {
    type: String,
    default: undefined
  },
  light: {
    type: Object,
    default: undefined
  },
  tileBoundaries: {
    type: Boolean,
    default: false
  },
  collisionBoxes: {
    type: Boolean,
    default: false
  },
  repaint: {
    type: Boolean,
    default: false
  },
  transformRequest: {
    type: Function,
    default: null
  },
  maxTileCacheSize: {
    type: Number,
    default: null
  },
  localIdeographFontFamily: {
    type: String,
    default: null
  },
  collectResourceTiming: {
    type: Boolean,
    default: false
  },
  fadeDuration: {
    type: Number,
    default: 300
  },
  crossSourceCollisions: {
    type: Boolean,
    default: true
  }
};
