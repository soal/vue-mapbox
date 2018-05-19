<template></template>

<script>
  import baseMixin from '../../lib/mixin'
  import controlMixin from './controlMixin'
  import MapboxGeocoder from 'mapbox-gl-geocoder'

  export default {
    name: 'GeolocateControl',
    mixins: [baseMixin, controlMixin],

    props: {
      position: {
        type: String,
        default: 'top-right'
      },
      accessToken: {
        type: String,
        default: undefined
      }
    },
    data() {
      return {
        control: undefined
      }
    },
    created() {
      if (this.accessToken) this.mapbox.accessToken = this.accessToken
      this.control = new MapboxGeocoder(this._props)

      this.control.on('error', err => {
        this.$emit('geocoder-error', err)
      })
      this.control.on('result', ev => {
        this.$emit('geocoder-result', ev)
      })
    },
    methods: {
      $_deferredMount(payload) {
        this.map = payload.map
        this.map.addControl(this.control, this.position)
        this.$emit('added', this.control)
        payload.component.$off('load', this.$_deferredMount)
      }
    }
  }
</script>
