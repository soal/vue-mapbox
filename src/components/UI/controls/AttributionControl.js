import controlMixin from "./controlMixin";

export default {
  name: "AttributionControl",
  mixins: [controlMixin],
  props: {
    compact: {
      type: Boolean,
      default: true
    },
    customAttribution: {
      type: [String, Array],
      deafault: undefined
    }
  },

  data() {
    return {
      control: undefined
    };
  },

  created() {
    this.control = new this.mapbox.AttributionControl({
      compact: this.compact
    });
  },

  methods: {
    $_deferredMount(payload) {
      this.$_addControl(payload);
    }
  }
};
