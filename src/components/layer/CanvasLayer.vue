<template>
  <div style="display: none">
    <slot></slot>
  </div>
</template>

<script>
  import bus from '../../messageBus';
  import layerEvents from '../../lib/layerEvents';


  export default {
    props: {
      sourceId: {
        type: String
      },
      coordinates: {
        type: Array,
        required: true
      },
      animate: {
        type: Boolean,
        default: true
      },

      // mapbox layer style properties
      layerId: {
        type: String,
        required: true
      },
      metadata: Object,
      refLayer: String,
      'source-layer': String,
      minzoom: Number,
      maxzoom: Number,
      // filter: Object,
      // layout: Object,
      // paint: Object,

      // mapbox layer options
      before: Object,

      // custom options for component
      listenUserEvents: {
        type: Boolean,
        default: false
      },
      clearSource: {
        type: Boolean,
        default: true
      },
      hidden: {
        type: Boolean,
        default: false
      },
      replaceSource: {
        type: Boolean,
        default: false
      },
      replace: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        initial: true,
        map: undefined
      };
    },

    mounted() {
      if (this.$slots.default[0].tag !== 'canvas') {
        throw new Error(`Error in map layer component with source id "${this.sourceId}" and layer id "${this.layerId}"
          You need to add canvas element as child of canvas layer.`)
      }
      let source = {
        type: 'canvas',
        coordinates: this.coordinates,
        animate: this.animate,
        canvas: this.$slots.default[0].data.attrs.id
      }
      // We wait for "load" event from map component to ensure mapbox is loaded and map created
      bus.$on('mgl-load', map => {
        this.map = map;
        this.map.on('dataloading', this._watchSourceLoading);
        if (source) {
          try {
            this.map.addSource(this.sourceId, source)
          } catch (err) {
            if (this.replaceSource) {
              this.map.removeSource(this.sourceId);
              this.map.addSource(this.sourceId, source)
            } else {
              this.$emit('mgl-layer-source-error', err);
              bus.$emit('mgl-layer-source-error', err);
            }
          }
        }
        this._addLayer();
        if (this.listenUserEvents) {
          this._bindEvents(layerEvents);
        }
        this.initial = false;
      });
    },

    beforeDestroy() {
      if (this.map) {
        this.map.removeLayer(this.layerId);
        if (this.clearSource) {
          try {
            this.map.removeSource(this.sourceId)
          } catch (error) {
            this.$emit('mgl-source-does-not-exist', error);
            bus.$emit('mgl-source-does-not-exist', error);
          }
        }
      }
    },

    computed: {
      sourceLoaded() {
        return this.map.isSourceLoaded(this.sourceId);
      },
      mapLayer() {
        return this.map.getLayer(this.layerId);
      },
      canvas() {
        return this.map.getSource(this.sourceId).getCanvas();
      }
    },

    watch: {
      minzoom(val) {
        if (this.initial) return;
        this.map.setLayerZoomRange(this.layerId, val, this.maxzoom)
      },
      maxzoom(val) {
        if (this.initial) return;
        this.map.setLayerZoomRange(this.layerId, this.minzoom, val)
      },
      // paint(val) {
      //   // FIXME: save initial state and replace only changed fields?
      //   if (this.initial) return;
      //   val.keys().forEach(key => {
      //     this.map.setPaintProperty(this.layerId, key, val);
      //   });
      // },
      coordinates(val) {
        if (this.initial) return;
        this.map.setCoordinates(val);
      },
      // layout(val) {
      //   // FIXME: save initial state and replace only changed fields?
      //   if (this.initial) return;
      //   val.keys().forEach(key => {
      //     this.map.setPaintProperty(this.layerId, key, val);
      //   });
      // },
      listenedEvents(val) {
        if (this.initial) return;
        if (val) {
          this.bindEvents(layerEvents);
        } else {
          this.unBindEvents(layerEvents);
        }
      }
    },

    methods: {
      _bindEvents(events) {
        events.forEach(eventName => {
          this.map.on(eventName, this.layerId, event => {
            this.$emit(`mgl-${ event }`, event);
          })
        });
      },

      _unBindEvents(events) {
        events.forEach(eventName => {
          this.map.off(eventName, this.layerId);
        });
      },

      _watchSourceLoading(data) {
        if (data.dataType === 'source' && data.sourceId === this.sourceId) {
          this.$emit('mgl-layer-source-loading', this.sourceId);
          bus.$emit('mgl-layer-source-loading', this.sourceId);
          this.map.off('dataloading', this.watchSourceLoading)
        }
      },

      _addLayer() {
        let existed = this.map.getLayer(this.layerId);
        if (existed) {
          if (this.replace) {
            this.map.removeLayer(this.layerId);
          } else {
            this.$emit('mgl-layer-exists', this.layerId);
            bus.$emit('mgl-layer-exists', this.layerId);
            return existed;
          }
        }
        let layer = {
          id: this.layerId,
          source: this.sourceId,
          type: 'raster'
        }
        if (this.refLayer) {
          layer.ref = this.refLayer;
        } else {
          if (this['source-layer']) {
            layer['source-layer'] = this['source-layer']
          }
          if (this.minzoom) layer.minzoom = this.minzoom
          if (this.maxzoom) layer.maxzoom = this.maxzoom
          if (this.layout) {
            layer.layout = this.layout;
          }
          if (this.filter) layer.filter = this.filter
        }
        layer.paint = this.paint ? this.paint : { 'raster-opacity': 0.85 };
        layer.metadata = this.metadata

        this.map.addLayer(layer, this.before);
        this.$emit('mgl-layer-added', { component: this, layerId: this.layerId });
        bus.$emit('mgl-layer-added', { component: this, layerId: this.layerId });
      },

      move(beforeId) {
        this.map.moveLayer(this.layerId, beforeId);
      }
    }
  }
</script>
