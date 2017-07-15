<template></template>

<script>
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
      this.control = new this.mapbox.NavigationControl();
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
        this.$emit('mgl-nav-control-added', this.control);
        bus.$emit('mgl-nav-control-added', this.control);
        bus.$off('mgl-load', this._deferredMount);
      }
    }
  };
</script>
