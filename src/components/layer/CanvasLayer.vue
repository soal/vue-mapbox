<template>
  <div style="display: none">
    <slot/>
  </div>
</template>

<script>
  import layerEvents from '../../lib/layerEvents'
  import mixin from './layerMixin'

  export default {
    mixins: [mixin],
    props: {
      coordinates: {
        type: Array,
        required: true
      },
      animate: {
        type: Boolean,
        default: true
      }
    },

    data() {
      return {
        source: undefined
      }
    },

    mounted() {
      if (this.$slots.default[0].tag !== 'canvas') {
        throw new Error(`Error in map layer component with source id "${this.sourceId}" and layer id "${this.layerId}"
          You need to add canvas element as child of canvas layer.`)
      }
      this.$_checkMapTree()
    },

    computed: {
      canvas() {
        return this.map.getSource(this.sourceId).getCanvas()
      }
    },

    watch: {
      minzoom(val) {
        if (this.initial) return
        this.map.setLayerZoomRange(this.layerId, val, this.maxzoom)
      },
      maxzoom(val) {
        if (this.initial) return
        this.map.setLayerZoomRange(this.layerId, this.minzoom, val)
      },
      coordinates(val) {
        if (this.initial) return
        this.source.setCoordinates(val)
      }
    },

    methods: {
      $_deferredMount(payload) {
        const source = {
          type: 'canvas',
          coordinates: this.coordinates,
          animate: this.animate,
          canvas: this.$slots.default[0].data.attrs.id
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
            this.$_emitMapEvent('layer-source-error', { sourceId: this.sourceId, error: err })
          }
        }
        this.source = this.map.getSource(this.sourceId)
        this.$_addLayer()
        if (this.listenUserEvents) {
          this.$_bindEvents(layerEvents)
        }
        payload.component.$off('load', this.$_deferredMount)
        this.initial = false
      },

      $_addLayer() {
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
          // if (this.layout) {
          //   layer.layout = this.layout;
          // }
          // if (this.filter) layer.filter = this.filter
        }
        layer.paint = this.paint ? this.paint : { 'raster-opacity': 0.85 }
        layer.metadata = this.metadata

        this.map.addLayer(layer, this.before)
        this.$_emitMapEvent('layer-added', { layerId: this.layerId })
      }
    }
  }
</script>
