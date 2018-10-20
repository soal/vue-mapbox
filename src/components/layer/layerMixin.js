import baseMixin from '../../lib/mixin'

const mapboxSourceProps = {
  sourceId: {
    type: String,
    required: true
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
  },
  listenUserEvents: {
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

  data () {
    return {
      initial: true
    }
  },

  computed: {
    sourceLoaded () {
      return this.map.isSourceLoaded(this.sourceId)
    },
    mapLayer () {
      return this.map.getLayer(this.layerId)
    },
    mapSource () {
      this.map.getSource(this.sourceId)
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
    paint (properties) {
      if (this.initial) return
      for (let prop of Object.keys(this.paint)) {
        if (this.paint[prop] !== properties[prop]) {
          this.map.setPaintProperty(this.layerId, prop, properties[prop])
          this.paint[prop] = properties[prop]
        }
      }
    },
    layout (properties) {
      if (this.initial) return
      for (let prop of Object.keys(this.layout)) {
        if (this.layout[prop] !== properties[prop]) {
          this.map.setLayoutProperty(this.layerId, prop, properties[prop])
          this.layout[prop] = properties[prop]
        }
      }
    }
  },

  beforeDestroy () {
    if (this.map) {
      try {
        this.map.removeLayer(this.layerId)
      } catch (err) {
        this.$_emitMapEvent('layer-does-not-exist', { map: this.map, component: this, layerId: this.sourceId, error: err })
      }
      if (this.clearSource) {
        try {
          this.map.removeSource(this.sourceId)
        } catch (err) {
          this.$_emitMapEvent('source-does-not-exist', { map: this.map, component: this, sourceId: this.sourceId, error: err })
        }
      }
    }
  },

  methods: {
    $_bindEvents (events) {
      if (events.length === 0) return
      events.forEach(eventName => {
        this.map.on(eventName, this.layerId, event => {
          this.$_emitMapEvent(eventName, { mapEvent: event })
        })
      })
    },

    $_unBindEvents (events) {
      events.forEach(eventName => {
        this.map.off(eventName, this.layerId)
      })
    },

    $_watchSourceLoading (data) {
      if (data.dataType === 'source' && data.sourceId === this.sourceId) {
        this.$_emitMapEvent('layer-source-loading', { sourceId: this.sourceId })
        this.map.off('dataloading', this.$_watchSourceLoading)
      }
    },

    move (beforeId) {
      this.map.moveLayer(this.layerId, beforeId)
      this.$_emitMapEvent('layer-moved', { layerId: this.layerId, beforeId: beforeId })
    },

    remove () {
      this.map.removeLayer(this.layerId)
      this.$_emitMapEvent('layer-removed', { layerId: this.layerId })
    }
  },

  render (h) {}
}
