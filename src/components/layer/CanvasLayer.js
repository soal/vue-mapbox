
import layerEvents from '../../lib/layerEvents'
import mixin from './layerMixin'

export default {
  name: 'CanvasLayer',
  mixins: [mixin],
  props: {
    coordinates: {
      type: Array,
      required: true
    },
    animate: {
      type: Boolean,
      default: true
    },
    width: {
      type: Number,
      required: true
    },
    height: {
      type: Number,
      required: true
    }
  },

  computed: {
    canvas () {
      return this.mapSource ? this.mapSource.getCanvas() : null
    }
  },

  watch: {
    minzoom (val) {
      if (this.initial) return
      this.map.setLayerZoomRange(this.layerId, val, this.maxzoom)
    },
    maxzoom (val) {
      if (this.initial) return
      this.map.setLayerZoomRange(this.layerId, this.minzoom, val)
    },
    coordinates (val) {
      if (this.initial) return
      this.mapSource.setCoordinates(val)
    }
  },

  methods: {
    $_deferredMount (payload) {
      const canvasElement = document.createElement('canvas')
      canvasElement.id = this.sourceId
      canvasElement.width = this.width
      canvasElement.height = this.height

      const source = {
        type: 'canvas',
        coordinates: this.coordinates,
        animate: this.animate,
        canvas: canvasElement
      }

      this.map = payload.map
      this.map.on('dataloading', this.$_watchSourceLoading)
      try {
        this.map.addSource(this.sourceId, source)
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId)
          this.map.addSource(this.sourceId, source)
        } else {
          this.$_emitEvent('layer-source-error', { sourceId: this.sourceId, error: err })
        }
      }
      this.$_addLayer()
      if (this.listenUserEvents) {
        this.$_bindLayerEvents(layerEvents)
      }
      payload.component.$off('load', this.$_deferredMount)
      this.initial = false
    },

    $_addLayer () {
      let existed = this.map.getLayer(this.layerId)
      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId)
        } else {
          this.$_emitEvent('layer-exists', { layerId: this.layerId })
          return existed
        }
      }
      let layer = {
        id: this.layerId,
        source: this.sourceId,
        type: 'raster'
      }
      if (this.refLayer) {
        layer.ref = this.refLayer
      } else {
        if (this['source-layer']) {
          layer['source-layer'] = this['source-layer']
        }
        if (this.minzoom) layer.minzoom = this.minzoom
        if (this.maxzoom) layer.maxzoom = this.maxzoom
      }
      layer.paint = this.paint ? this.paint : { 'raster-opacity': 0.85 }
      layer.metadata = this.metadata

      this.map.addLayer(layer, this.before)
      this.$_emitEvent('added', { layerId: this.layerId, canvas: this.canvas })
    }
  }
}
