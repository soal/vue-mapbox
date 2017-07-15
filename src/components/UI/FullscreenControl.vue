<template></template>

<script>

  import baseMixin from '../../lib/mixin'
  import controlMixin from './controlMixin'

  export default {
    mixins: [baseMixin, controlMixin],

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
      this.control = new this.mapbox.FullscreenControl();
    },

    mounted() {
      this._checkMapId();
      this.bus.$on('mgl-load', this._deferredMount);
    },

    methods: {
      _deferredMount(payload) {
        if (payload.mapId !== this.mapId) return;
        this.map = payload.map;
        this.map.addControl(this.control, this.position);
        this.$emit('mgl-fullscreen-control-added', this.control);
        this.bus.$emit('mgl-fullscreen-control-added', this.control);
        this.bus.$off('mgl-load', this._deferredMount);
      }
    }
  };
</script>
