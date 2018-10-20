import layerEvents from '../../lib/layerEvents'
import mixin from './layerMixin'

export default {
  name: 'GeojsonLayer',
  mixins: [mixin],
  props: {
    source: {
      type: [Object, String]
    },
    type: {
      validator (value) {
        let allowedValues = ['fill', 'line', 'symbol', 'circle', 'fill-extrusion', 'raster', 'background']
        return (typeof value === 'string' && allowedValues.indexOf(value) !== -1) || value === undefined
      },
      default: 'fill'
    },
    filter: {
      type: Array,
      default: undefined
    }
  },

  watch: {
    source (data) {
      if (this.initial) return
      this.mapSource.setData(data)
    },
    filter (filter) {
      if (this.initial) return
      this.map.setFilter(this.layerId, filter)
    }
  },

  methods: {
    $_deferredMount (payload) {
      this.map = payload.map
      this.map.on('dataloading', this.$_watchSourceLoading)
      if (this.source) {
        try {
          this.map.addSource(this.sourceId, {
            type: 'geojson',
            data: this.source
          })
        } catch (err) {
          if (this.replaceSource) {
            this.map.removeSource(this.sourceId)
            this.map.addSource(this.sourceId, {
              type: 'geojson',
              data: this.source
            })
          } else {
            this.$_emitMapEvent('layer-source-error', { sourceId: this.sourceId, error: err })
          }
        }
      }
      this._addLayer()
      if (this.listenUserEvents) {
        this.$_bindEvents(layerEvents)
      }
      this.map.off('dataloading', this.$_watchSourceLoading)
      this.initial = false
      payload.component.$off('load', this.$_deferredMount)
    },

    _addLayer () {
      let existed = this.map.getLayer(this.layerId)
      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId)
        } else {
          this.$_emitMapEvent('layer-exists', { layerId: this.layerId })
          return existed
        }
      }
      let layer = {
        id: this.layerId,
        source: this.sourceId
      }
      if (this.refLayer) {
        layer.ref = this.refLayer
      } else {
        layer.type = this.type ? this.type : 'fill'
        layer.source = this.sourceId
        if (this['source-layer']) {
          layer['source-layer'] = this['source-layer']
        }
        if (this.minzoom) layer.minzoom = this.minzoom
        if (this.maxzoom) layer.maxzoom = this.maxzoom
        if (this.layout) {
          layer.layout = this.layout
        }
        if (this.filter) layer.filter = this.filter
      }
      layer.paint = this.paint
        ? this.paint
        : { 'fill-color': `rgba(${12 * (this.layerId.length * 3)},153,80,0.55)` }
      layer.metadata = this.metadata

      this.map.addLayer(layer, this.before)
      this.$_emitMapEvent('added', { layerId: this.layerId })
    }
  }
}
