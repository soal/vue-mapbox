<template></template>

<script>
  import M from 'mapbox-gl';
  import bus from '../../messageBus';
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
      this.control = new M.ScaleControl(this._props);
    },

    mounted() {
      bus.$on('mgl-load', this.deferredMount);
    },

    beforeDestroy() {
      this.map.removeControl(this.control);
    },

    methods: {
      deferredMount(payload) {
        if (payload.mapId !== this.mapId) return;
        this.map = payload.map;
        try {
          this.map.addControl(this.control);
        } catch (err) {
          console.log(err);
        }
        this.$emit('mgl-scale-control-added', this.control);
        bus.$emit('mgl-scale-control-added', this.control);
        bus.$off('mgl-load', this.deferredMount);
      }
    }
  };
</script>
