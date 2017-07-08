<template></template>

<script>
  import M from 'mapbox-gl';
  import bus from '../../messageBus';

  export default {
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
      this.control = new M.AttributionControl({ compact: this.compact });
      bus.$once('mgl-load', this._deferredMount);
    },

    beforeDestroy() {
      this.map.removeControl(this.control);
    },

    methods: {
      _deferredMount(map) {
        this.map = map;
        this.map.addControl(this.control);
        this.$emit('mgl-attribution-control-added', this.control);
        bus.$emit('mgl-attribution-control-added', this.control);
      }
    }
  };
</script>
