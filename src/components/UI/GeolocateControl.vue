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
      this.control = new this.mapbox.GeolocateControl(this._props);

      this.control.on('error', err => {
        this.$emit('geolocate-error', err);
        this.bus.$emit('geolocate-error', err);
      });
      this.control.on('geolocate', position => {
        this.$emit('geolocate', position);
        this.bus.$emit('geolocate-error', position);
      })
    },

    mounted() {
      this._checkMapId();
      this.bus.$on('mgl-load', this._deferredMount);
    },

    methods: {
      _deferredMount(payload) {
        if (payload.mapId !== this.mapId) return;
        this.map = payload.map;
        this.map.addControl(this.control);
        this.$emit('mgl-geolocate-control-added', this.control);
        this.bus.$emit('mgl-geolocate-control-added', this.control);
        this.bus.$off('mgl-load', this._deferredMount);
      }
    }
  };
</script>
