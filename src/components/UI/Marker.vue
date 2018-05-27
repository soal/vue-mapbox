<template>
  <div style="display: none">
    <!-- slot for custom marker -->
    <slot name="marker"/>
    <!-- slot for popup -->
    <slot />
  </div>
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
      color: {
        type: String
      }
    },

    data() {
      return {
        initial: true,
        marker: undefined
      }
    },

    mounted() {
      this.$_checkMapTree()
    },

    beforeDestroy() {
      if (this.map !== undefined && this.marker !== undefined) {
        this.marker.remove()
      }
    },

    watch: {
      coordinates(lngLat) {
        if (this.initial) return
        this.marker.setLngLat(lngLat)
      }
    },

    methods: {
      $_deferredMount(payload) {
        if (!this.marker) {
          const markerOptions = {
            ...this._props
          }
          // console.log(this.$slots.marker)
          if (this.$slots.marker) {
            markerOptions.element = this.$slots.marker[0].elm
          }
          // console.log(markerOptions)
          this.marker = new this.mapbox.Marker(markerOptions)
          // console.log(this.marker)
        }

        this.map = payload.map
        this.$_addMarker()
        this.initial = false
        payload.component.$off('load', this.$_deferredMount)
      },
      $_addMarker() {
        this.marker
          .setLngLat(this.coordinates)
          .addTo(this.map)

        this.$_emitMapEvent('added', { marker: this.marker })
      },

      remove() {
        this.$_emitMapEvent('removed', { marker: this.marker })
        return this.marker.remove()
      },

      togglePopup() {
        return this.marker.togglePopup()
      }
    }
  }
</script>
