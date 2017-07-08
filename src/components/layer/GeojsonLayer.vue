<template></template>

<script>
  import bus from '../../messageBus';
  import layerEvents from '../../lib/layerEvents';


  export default {
    props: {
      sourceId: {
        type: String
      },
      source: {
        type: [Object, String]
      },

      // mapbox layer style properties
      layerId: {
        type: String,
        required: true
      },
      type: {
        validator(value) {
          let allowedValues = ['fill', 'line', 'symbol', 'circle', 'fill-extrusion', 'raster', 'background'];
          return (typeof value === 'string' && allowedValues.indexOf(value) !== -1) || value === undefined;
        },
        default: 'fill'
      },
      metadata: Object,
      refLayer: String,
      'source-layer': String,
      minzoom: Number,
      maxzoom: Number,
      filter: Object,
      layout: Object,
      paint: Object,

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
      // We wait for "load" event from map component to ensure mapbox is loaded and map created
      bus.$on('mgl-load', map => {
        this.map = map;
        this.map.on('dataloading', this._watchSourceLoading);
        if (this.source) {
          try {
            this.map.addSource(this.sourceId, {
              type: 'geojson',
              data: this.source
            })
          } catch (err) {
            if (this.replaceSource) {
              this.map.removeSource(this.sourceId);
              this.map.addSource(this.sourceId, {
                type: 'geojson',
                data: this.source
              })
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
      maplayer() {
        return this.map.getLayer(this.layerId);
      }
    },

    watch: {
      source(data) {
        if (this.initial) return;
        this.map.getSource(this.sourceId).setData(data);
      },
      filter(filter) {
        if (this.initial) return;
        this.map.setFilter(this.layerId, filter);
      },
      minzoom(val) {
        if (this.initial) return;
        this.map.setLayerZoomRange(this.layerId, val, this.maxzoom)
      },
      maxzoom(val) {
        if (this.initial) return;
        this.map.setLayerZoomRange(this.layerId, this.minzoom, val)
      },
      paint(val) {
        // FIXME: save initial state and replace only changed fields?
        if (this.initial) return;
        val.keys().forEach(key => {
          this.map.setPaintProperty(this.layerId, key, val);
        });
      },
      layout(val) {
        // FIXME: save initial state and replace only changed fields?
        if (this.initial) return;
        val.keys().forEach(key => {
          this.map.setPaintProperty(this.layerId, key, val);
        });
      },
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
          source: this.sourceId
        }
        if (this.refLayer) {
          layer.ref = this.refLayer;
        } else {
          layer.type = this.type ? this.type : 'fill'
          layer.source = this.sourceId;
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
        layer.paint = this.paint
                           ? this.paint
                           : {'fill-color': `rgba(${12 * (this.layerId.length * 3)},153,80,0.55)` };
        layer.metadata = this.metadata

        this.map.addLayer(layer, this.before);
        this.$emit('mgl-layer-added', this.layerId);
        bus.$emit('mgl-layer-added', this.layerId);
      },

      move(beforeId) {
        this.map.moveLayer(this.layerId, beforeId);
      }
    }
  }
</script>
