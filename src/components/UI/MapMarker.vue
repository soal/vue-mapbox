<template>
    <slot name="marker"/>
    <slot/>
</template>

<script>
  import baseMixin from '../../lib/mixin'

  export default {
    name: 'MapMarker',
    mixins: [baseMixin],
    props: {
      // mapbox marker options
      offset: {
        type: [Object, Array],
        default: () => [0, 0]
      },
      coordinates: {
        type: Array,
        required: true
      },
      element: {
        type: String,
        required: false
      },
      color: {
        type: String,
        required: false
      },
      anchor: {
        type: String,
        default: () => {
          return 'center'
        },
        required: false
      }
    },

    data() {
      return {
        marker: null
      }
    },

    mounted() {
      this.$_checkMapTree()
    },

    beforeDestroy() {
      if (this.map !== null && this.marker !== null) {
        this.marker.remove()
      }
    },

    watch: {
      coordinates: (lngLat) => {
        console.log(lngLat)
        if (lngLat instanceof Array) {
          this.marker.setLngLat(lngLat)
        }
      }
    },

    methods: {
      $_deferredMount(payload) {
        if (this.$slots.marker) {
          this.marker = new this.mapbox.Marker(this.$slots.marker[0].elm, {...this._props})
        } else {
          this.marker = new this.mapbox.Marker()
        }

        this.map = payload.map
        this.$_addMarker()
        payload.component.$off('load', this.$_deferredMount)
      },
      $_addMarker() {
        this.marker
        .setLngLat(this.coordinates)
        .addTo(this.map)

        this.$_emitMapEvent('added', {marker: this.marker})
      },
      onAdd () { },
      onRemove () { },
      remove() {
        this.marker.remove()
        this.$_emitMapEvent('removed', {marker: this.marker})
      },
      getLngLat() {
        return this.marker.getLngLat()
      },
      getPopup () {
        this.marker.getPopup()
      },
      setPopup () {
        this.marker.setPopup(this.popup)
      },
      togglePopup() {
        this.marker.togglePopup()
      }
    }
  }
</script>
