<template></template>

<script>
  import M from 'mapbox-gl';
  import bus from '../../mglMessageBus';

  export default {
    name: 'MglGeolocateControl',

    props: {
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
      bus.$on('mgl-load', this.deferredMount);

      this.control.on('error', err => {
        this.$emit('geolocate-error', err);
      });
      this.control.on('geolocate', position => {
        this.$emit('geolocate', position);
      })
    },

    mounted() {
      if (this.$parent._isMounted && this.$parent.map) {
        this.deferredMount(this.$parent.map);
      }
    },

    beforeDestroy() {
      this.$parent.map.removeControl(this.control);
    },

    methods: {
      deferredMount(map) {
        this.map = map;
        map.addControl(this.control);
        this.$emit('mgl-geolocate-control-added', this.control);
        bus.$emit('mgl-geolocate-control-added', this.control);
      }
    }
  };
</script>
