<template>
  <div style="display: none">
    <slot name="marker"/><slot/>
    <slot name="popup"/><slot/>
  </div>
</template>

<script>
  import baseMixin from '../../lib/mixin'

  export default {
    name: 'Marker',
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

          if (this.$slots.marker) {
            markerOptions.element = this.$slots.marker[0].elm
          }

          this.marker = new this.mapbox.Marker(markerOptions)

          if (this.$slots.popup) {
            const popup = this.popup = new this.mapbox.Popup()
              .setLngLat(this.coordinates)
              .setDOMContent(this.$slots.popup[0].elm)

            this.marker.setPopup(popup)
          }
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
        this.marker.remove()
        this.$_emitMapEvent('removed', { marker: this.marker })
      },

      togglePopup() {
        this.marker.togglePopup()
      }
    }
  }
</script>
