import withRegistration from "../../../lib/withRegistration";
import withEvents from "../../../lib/withEvents";
import withSelfEvents from "../withSelfEvents";

export default {
  mixins: [withRegistration, withEvents, withSelfEvents],
  beforeDestroy() {
    if (this.map !== undefined) {
      this.map.removeControl(this.control);
    }
  },

  methods: {
    $_addControl(payload) {
      this.map = payload.map;
      try {
        this.map.addControl(this.control);
      } catch (err) {
        this.$_emitEvent("error", { error: err });
        return;
      }
      this.$_emitEvent("added", { control: this.control });
      payload.component.$off("load", this.$_deferredMount);
    }
  },

  render() {}
};
