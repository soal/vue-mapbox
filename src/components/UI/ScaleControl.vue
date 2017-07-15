<template></template>

<script>

  import baseMixin from '../../lib/mixin';

  export default {
    mixins: [baseMixin],

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
      this.control = new this.mapbox.ScaleControl(this._props);
    },

    mounted() {
      this._checkMapId();
      this.bus.$on('mgl-load', this._deferredMount);
    },

    beforeDestroy() {
      this.map.removeControl(this.control);
    },

    methods: {
      _deferredMount(payload) {
        if (payload.mapId !== this.mapId) return;
        this.map = payload.map;
        try {
          this.map.addControl(this.control);
        } catch (err) {
          console.log(err);
        }
        this.$emit('mgl-scale-control-added', this.control);
        this.bus.$emit('mgl-scale-control-added', this.control);
        this.bus.$off('mgl-load', this._deferredMount);
      }
    }
  };
</script>
