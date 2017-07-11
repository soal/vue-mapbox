<template></template>

<script>
  import M from 'mapbox-gl';
  import bus from '../../messageBus';
  import baseMixin from '../../lib/mixin';

  export default {
    mixins: [baseMixin],

    props: {
      position: {
        type: String,
        default: 'top-right'
      }
    },

    data() {
      return {
        control: undefined,
        map: undefined
      };
    },

    created() {
      this.control = new M.FullscreenControl();
    },

    mounted() {
      this._checkMapId();
      bus.$on('mgl-load', this._deferredMount);
    },

    beforeDestroy() {
      this.map.removeControl(this.control);
    },

    methods: {
      _deferredMount(payload) {
        if (payload.mapId !== this.mapId) return;
        this.map = payload.map;
        this.map.addControl(this.control, this.position);
        this.$emit('mgl-fullscreen-control-added', this.control);
        bus.$emit('mgl-fullscreen-control-added', this.control);
        bus.$off('mgl-load', this._deferredMount);
      }
    }
  };
</script>
