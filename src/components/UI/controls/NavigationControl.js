import controlMixin from "./controlMixin";

export default {
  name: "NavigationControl",
  mixins: [controlMixin],
  props: {
    position: {
      type: String,
      default: "top-right" // TODO: add validator
    }
  },

  data() {
    return {
      control: undefined
    };
  },

  created() {
    this.control = new this.mapbox.NavigationControl();
  },

  methods: {
    $_deferredMount(payload) {
      this.$_addControl(payload);
    }
  }
};
