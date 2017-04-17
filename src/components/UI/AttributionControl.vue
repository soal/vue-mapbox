<template></template>

<script>
  import M from 'mapbox-gl';
  import bus from '../../mglMessageBus';

  export default {
    name: 'MglAttributionControl',

    props: {
      compact: {
        type: Boolean
      }
    },

    data() {
      return {
        control: undefined,
        map: undefined
      };
    },

    created() {
      this.control = new M.AttributionControl();
      bus.$on('mgl-load', this.deferredMount);
    },

    beforeDestroy() {
      this.map.removeControl(this.control);
    },

    methods: {
      deferredMount(map) {
        this.map = map;
        this.map.addControl(this.control, { compact: this.compact });
        this.$emit('mgl-attribution-control-added', this.control);
        bus.$emit('mgl-attribution-control-added', this.control);
      }
    }
  };
</script>
