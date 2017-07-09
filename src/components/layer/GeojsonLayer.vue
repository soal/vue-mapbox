<template></template>

<script>
  import bus from '../../messageBus';
  import layerEvents from '../../lib/layerEvents';
  import mixin from './layerMixin';


  export default {
    mixins: [mixin],
    props: {
      source: {
        type: [Object, String]
      },
      type: {
        validator(value) {
          let allowedValues = ['fill', 'line', 'symbol', 'circle', 'fill-extrusion', 'raster', 'background'];
          return (typeof value === 'string' && allowedValues.indexOf(value) !== -1) || value === undefined;
        },
        default: 'fill'
      }
    },

    mounted() {
      // We wait for "load" event from map component to ensure mapbox is loaded and map created
      bus.$once('mgl-load', map => {
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
              this._emitSourceError(err);
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
      }
    },

    methods: {
      _addLayer() {
        let existed = this.map.getLayer(this.layerId);
        if (existed) {
          if (this.replace) {
            this.map.removeLayer(this.layerId);
          } else {
            this._emitLayerExists();
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
        this._emitLayerAdded();
      }
    }
  }
</script>
