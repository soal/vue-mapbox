<template></template>

<script>
  import M from 'mapbox-gl';
  import bus from '../../mglMessageBus';

  export default {
    name: 'MglScaleControl',

    props: {
      maxWidth: {
        type: Number,
        default: 150
      },
      unit: {
        type: String,
        default: 'metric'
      }
    },

    data() {
      return {
        control: undefined,
        map: undefined
      };
    },

    created() {
      this.control = new M.ScaleControl();
      bus.$on('mgl-load', this.deferredMount);
    },

    beforeDestroy() {
      this.map.removeControl(this.control);
    },

    methods: {
      deferredMount(map) {
        this.map = map;
        this.map.addControl(this.control, this._props);
        this.$emit('mgl-scale-control-added', this.control);
        bus.$emit('mgl-scale-control-added', this.control);
      }
    }
  };
</script>
