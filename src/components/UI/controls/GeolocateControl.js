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
    fitBoundsOptions: {
      type: Object,
      default: () => ({ maxZoom: 15 })
    },
    trackUserLocation: {
      type: Boolean,
      default: false
    },
    showUserLocation: {
      type: Boolean,
      default: true
    }
  },

  created() {
    this.control = new this.mapbox.GeolocateControl(this.$props);
    this.$_addControl();
    this.$_bindSelfEvents(Object.keys(geolocationEvents), this.control);
  },

  methods: {
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
