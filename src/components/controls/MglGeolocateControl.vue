<template></template>

<script>
  import M from 'mapbox-gl';

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
        control: undefined
      };
    },

    created() {
      this.control = new M.GeolocateControl(this._props);
      this.$parent.$once('mgl-load', map => {
        this.deferredMount(map)
      });

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
        if (this.control !== undefined) {
          map.addControl(this.control);
          this.$emit('mgl-geolocate-control-added', this.control);
        }

      }
    }
  };
</script>
