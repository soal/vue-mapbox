import events from './events';

export default {
  container: {
    type: [String, HTMLElement],
    default () {
      return `map-${('' + Math.random()).split('.')[1]}`;
    }
  },
  accessToken: {
    type: String,
    default: undefined
  },
  initMinZoom: {
    type: Number,
    default: 0
  },
  initMaxZoom: {
    type: Number,
    default: 22
  },
  initMapStyle: {
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
  initMaxBounds: {
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
  initCenter: {
    type: Array,
    default() {
      return [0, 0];
    }
  },
  initZoom: {
    type: Number,
    default: 0
  },
  initBearing: {
    type: Number,
    default: 0
  },
  initPitch: {
    type: Number,
    default: 0
  },
  renderWorldCopies: {
    type: Boolean,
    default: true
  },
  RTLTextPluginUrl: {
    type: String,
    default: undefined
  },
  initLight: {
    type: Object
  },
  initTileBoundaries: {
    type: Boolean,
    default: false
  },
  initCollisionBoxes: {
    type: Boolean,
    default: false
  },
  initRepaint: {
    type: Boolean,
    default: false
  },
  eventsToListen: {
    type: Array,
    validator(eventsArray) {
      if (!(eventsArray instanceof Array)) {
        return false;
      }
      for (let e of eventsArray) {
        if (!(Object.keys(events).includes(e))) return false;
      }
      return true;
    },
    default: () => []
  }
};
