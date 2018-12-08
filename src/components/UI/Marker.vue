<template>
  <div style="display: none">
    <!-- slot for custom marker -->
    <slot name="marker"/>
    <!-- slot for popup -->
    <slot />
  </div>
</template>

<script>
import withRegistration from '../../lib/withRegistration'
import withEvents from '../../lib/withEvents'
import withSelfEvents from './withSelfEvents'

const markerEvents = {
  drag: 'drag',
  dragstart: 'dragstart',
  dragend: 'dragend'
}

export default {
  name: 'MapMarker',
  mixins: [withRegistration, withEvents, withSelfEvents],
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
    },
    anchor: {
      type: String,
      default: 'center'
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      initial: true,
      marker: undefined
    }
  },

  watch: {
    coordinates (lngLat) {
      if (this.initial) return
      this.marker.setLngLat(lngLat)
    },
    draggable (next, prev) {
      if (this.initial) return
      this.marker.setDraggable(next)
    }
  },

  mounted () {
    this.$_checkMapTree()
  },

  beforeDestroy () {
    if (this.map !== undefined && this.marker !== undefined) {
      this.marker.remove()
    }
  },

  methods: {
    $_deferredMount (payload) {
      if (!this.marker) {
        const markerOptions = {
          ...this._props
        }
        if (this.$slots.marker) {
          markerOptions.element = this.$slots.marker[0].elm
        }
        this.marker = new this.mapbox.Marker(markerOptions)
      }

      this.map = payload.map
      this.$_addMarker()
      if (this.$listeners['update:coordinates']) {
        this.marker.on('dragend', event => {
          let newCoordinates
          if (this.coordinates instanceof Array) {
            newCoordinates = [event.target._lngLat.lng, event.target._lngLat.lat]
          } else {
            newCoordinates = event.target._lngLat
          }
          this.$emit('update:coordinates', newCoordinates)
        })
      }

      const eventNames = Object.keys(markerEvents)
      this.$_bindSelfEvents(eventNames, this.marker)

      this.initial = false
      payload.component.$off('load', this.$_deferredMount)
    },

    $_addMarker () {
      this.marker
        .setLngLat(this.coordinates)
        .addTo(this.map)

      this.$_emitEvent('added', { marker: this.marker })
    },

    $_emitSelfEvent (event) {
      this.$_emitEvent(event.type, { mapboxEvent: event, marker: this.marker })
    },

    remove () {
      this.marker.remove()
      this.$_emitEvent('removed', { marker: this.marker })
    },

    togglePopup () {
      return this.marker.togglePopup()
    }
  }
}
</script>
