export default {
  container: {
    type: [String, HTMLElement],
    default () {
      return `map-${('' + Math.random()).split('.')[1]}`;
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
    default() {
      return [];
    }
  },
  attributionControl: {
    type: Boolean,
    default: true
  },
  logoPosition: {
    type: String,
    default: 'bottom-left'
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
    type: Array,
    default() {
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
