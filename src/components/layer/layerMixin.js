
import layerEvents from '../../lib/layerEvents'
import baseMixin from '../../lib/mixin'

const mapboxSourceProps = {
  sourceId: {
    type: String
  }
}

const mapboxLayerStyleProps = {
  layerId: {
    type: String,
    required: true
  },
  metadata: Object,
  refLayer: String,
  'source-layer': String,
  minZoom: Number,
  maxZoom: Number,
  paint: Object,
  layout: Object,
  before: Object
}

const componentProps = {
  eventsToListen: {
    validator(eventsArray) {
      if (!(eventsArray instanceof Array)) {
        return false
      }
      for (let e of eventsArray) {
        if (!layerEvents.includes(e)) return false
      }
      return true
    },
    default: () => []
  },
  clearSource: {
    type: Boolean,
    default: true
  },
  // hidden: {
  //   type: Boolean,
  //   default: false
  // },
  replaceSource: {
    type: Boolean,
    default: false
  },
  replace: {
    type: Boolean,
    default: false
  }
}

export default {
  mixins: [baseMixin],
  props: {
    ...mapboxSourceProps,
    ...mapboxLayerStyleProps,
    ...componentProps
  },

  data() {
    return {
      initial: true,
      map: undefined
    }
  },

  computed: {
    sourceLoaded() {
      return this.map.isSourceLoaded(this.sourceId)
    },
    mapLayer() {
      return this.map.getLayer(this.layerId)
    }
  },

  watch: {
    eventsToListen(events) {
      if (this.initial) return
      this.unBindEvents(layerEvents)
      this.bindEvents(events)
    },
    minzoom(val) {
      if (this.initial) return
      this.map.setLayerZoomRange(this.layerId, val, this.maxzoom)
    },
    maxzoom(val) {
      if (this.initial) return
      this.map.setLayerZoomRange(this.layerId, this.minzoom, val)
    },
    paint(properties) {
      if (this.initial) return
      for (let prop in Object.keys(this.paint)) {
        if (this.paint[prop] !== properties[prop]) {
          this.map.setPaintProperty(this.layerId, prop, properties[prop])
          this.paint[prop] = properties[prop]
        }
      }
    },
    layout(properties) {
      if (this.initial) return
      for (let prop in Object.keys(this.layout)) {
        if (this.layout[prop] !== properties[prop]) {
          this.map.setLayoutProperty(this.layerId, prop, properties[prop])
          this.layout[prop] = properties[prop]
        }
      }
    }
  },

  beforeDestroy() {
    if (this.map) {
      this.map.removeLayer(this.layerId)
      if (this.clearSource) {
        try {
          this.map.removeSource(this.sourceId)
        } catch (err) {
          this._emitMapEvent('mgl-source-does-not-exist', { sourceId: this.sourceId, error: err })
        }
      }
    }
  },

  methods: {
    _bindEvents(events) {
      if (events.length === 0) return
      events.forEach(eventName => {
        this.map.on(eventName, this.layerId, event => {
          this.$emit(`mgl-${event}`, event)
        })
      })
    },

    _unBindEvents(events) {
      events.forEach(eventName => {
        this.map.off(eventName, this.layerId)
      })
    },

    _watchSourceLoading(data) {
      if (data.dataType === 'source' && data.sourceId === this.sourceId) {
        this._emitMapEvent('mgl-layer-source-loading', { sourceId: this.sourceId })
        this.map.off('dataloading', this.watchSourceLoading)
      }
    },

    _emitMapEvent(name, data={}) {
      this.$emit(name, {
        map: this.map,
        component: this,
        ...data
      })
      this.bus.$emit(name, {
        map: this.map,
        component: this,
        ...data
      })
    },

    move(beforeId) {
      this.map.moveLayer(this.layerId, beforeId)
      this._emitMapEvent('mgl-layer-moved', { layerId: this.layerId, beforeId: beforeId })
    },

    remove() {
      this.map.removeLayer(this.layerId)
    }
  }
}
