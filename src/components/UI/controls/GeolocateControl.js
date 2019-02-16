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
    const GeolocateControl = this.mapbox.GeolocateControl;
    this.control = new GeolocateControl(this.$props);
    this.$_addControl();
    this.$_bindSelfEvents(Object.keys(geolocationEvents), this.control);
  },

  methods: {
    trigger() {
      if (this.control) {
        return this.control.trigger();
      }
    }
  }
};
