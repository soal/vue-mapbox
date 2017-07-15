
<template></template>

<script>

  import baseMixin from '../../lib/mixin';

  export default {
    mixins: [baseMixin],
    props: {
      compact: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        control: undefined,
        map: undefined
      };
    },

    created() {
      this.control = new this.mapbox.AttributionControl({ compact: this.compact });
    },

    mounted() {
      this._checkMapId()
      this.bus.$on('mgl-load', this._deferredMount);
    },

    beforeDestroy() {
      this.map.removeControl(this.control);
    },

    methods: {
      _deferredMount(payload) {
        if (payload.mapId !== this.mapId) return;
        this.map = payload.map;
        this.map.addControl(this.control);
        this.$emit('mgl-attribution-control-added', this.control);
        this.bus.$emit('mgl-attribution-control-added', this.control);
        this.bus.$off('mgl-load', this._deferredMount);
      }
    }
  };
</script>
