<template>
  <div style="display: none">
    <!-- slot for custom marker -->
    <slot name="marker"/>
    <!-- slot for popup -->
    <slot/>
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
          if (this.$slots.marker) {
            this.marker = new this.mapbox.Marker(this.$slots.marker[0].elm, { ...this._props })
          } else {
            this.marker = new this.mapbox.Marker()
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
        this.$_emitMapEvent('removed', { marker: this.marker })
        return this.marker.remove()
      },

      togglePopup() {
        return this.marker.togglePopup()
      }
    }
  }
</script>
