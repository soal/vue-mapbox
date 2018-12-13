import controlMixin from "./controlMixin";
import withEvents from "../../../lib/withEvents";
import withSelfEvents from "../withSelfEvents";

const geolocationEvents = {
  trackuserlocationstart: "trackuserlocationstart",
  trackuserlocationend: "trackuserlocationend",
  geolocate: "geolocate",
  error: "error"
};

export default {
  name: "GeolocateControl",
  mixins: [withEvents, withSelfEvents, controlMixin],

  props: {
    positionOptions: {
      type: Object,
      default() {
        return {
          enableHighAccuracy: false,
          timeout: 6000
        };
      }
    },
    trackUserLocation: {
      type: Boolean,
      default: false
    },
    showUserLocation: {
      type: Boolean,
      default: true
    },
    fitBoundsOptions: {
      type: Object,
      default: () => ({ maxZoom: 15 })
    }
  },

  data() {
    return {
      control: undefined
    };
  },

  created() {
    this.control = new this.mapbox.GeolocateControl(this._props);
  },

  methods: {
    $_deferredMount(payload) {
      this.$_addControl(payload);
      this.$_bindSelfEvents(Object.keys(geolocationEvents), this.control);
    },

    $_emitSelfEvent(event) {
      if (event.type === "error") {
        this.$_emitMapEvent("geolocate-error", { control: this.control });
      }
      if (event.type === "geolocate") {
        this.$_emitMapEvent("geolocate", { control: this.control });
      }
    },

    trigger() {
      if (this.control) {
        return this.control.trigger();
      }
    }
  }
};
