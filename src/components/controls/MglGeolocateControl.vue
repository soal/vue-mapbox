<template></template>

<script>
  import M from 'mapbox-gl';
  import bus from '../mglMessageBus';

  export default {
    name: 'MglGeolocateControl',

    props: {
      position: {
        type: String,
        default: 'top-right'
      },
      positionOptions: {
        type: Object,
        default() {
          return {
            enableHighAccuracy: false,
            timeout: 6000
          };
        }
      },
      watchPosition: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        control: undefined,
        map: undefined
      };
    },

    created() {
      this.control = new M.GeolocateControl(this._props);

      this.control.on('error', err => {
        this.$emit('geolocate-error', err);
        bus.$emit('geolocate-error', err);
      });
      this.control.on('geolocate', position => {
        this.$emit('geolocate', position);
        bus.$emit('geolocate-error', position);
      })
      bus.$on('mgl-load', this.deferredMount);
    },

    beforeDestroy() {
      this.map.removeControl(this.control);
    },

    methods: {
      deferredMount(map) {
        this.map = map;
        this.map.addControl(this.control);
        this.$emit('mgl-geolocate-control-added', this.control);
        bus.$emit('mgl-geolocate-control-added', this.control);
      }
    }
  };
</script>
