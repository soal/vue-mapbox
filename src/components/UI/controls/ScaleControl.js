import controlMixin from "./controlMixin";

export default {
  name: "ScaleControl",
  mixins: [controlMixin],

  props: {
    maxWidth: {
      type: Number,
      default: 150
    },
    unit: {
      type: String,
      default: "metric",
      validator(value) {
        return ["imperial", "metric", "nautical"].includes(value);
      }
    }
  },

  data() {
    return {
      control: undefined
    };
  },

  watch: {
    unit(next, prev) {
      if (this.control && next !== prev) {
        this.control.setUnit(next);
      }
    }
  },

  created() {
    this.control = new this.mapbox.ScaleControl(this._props);
  },

  methods: {
    $_deferredMount(payload) {
      this.$_addControl(payload);
    }
  }
};
