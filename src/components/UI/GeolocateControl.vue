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
      });
      this.control.on('geolocate', position => {
        this.$emit('geolocate-error', position);
      })
    },

    methods: {
      _deferredMount(payload) {
        this.map = payload.map;
        this.map.addControl(this.control);
        this.$emit('mgl-geolocate-control-added', this.control);
        payload.component.$off('mgl-load', this._deferredMount)
      }
    }
  };
</script>
