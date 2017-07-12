<template></template>

<script>
  import bus from '../../messageBus';
  import mixin from './layerMixin';
  import layerEvents from '../../lib/layerEvents';

  export default {
    mixins: [mixin],
    props: {
      coordinates: {
        type: Array,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    },

    mounted() {
      this._checkMapId();
      // We wait for "load" event from map component to ensure mapbox is loaded and map created
      bus.$on('mgl-load', this._deferredMount);
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
      paint(val) {
        // FIXME: save initial state and replace only changed fields?
        if (this.initial) return;
        val.keys().forEach(key => {
          this.map.setPaintProperty(this.layerId, key, val);
        });
      },
      coordinates(val) {
        if (this.initial) return;
        this.map.setCoordinates(val);
      }
    },

    methods: {
      _deferredMount(payload) {
        if (payload.mapId !== this.mapId) return;
        let source = {
          type: 'image',
          url: this.url,
          coordinates: this.coordinates
        }

        this.map = payload.map;
        this.map.on('dataloading', this._watchSourceLoading);
        if (source) {
          try {
            this.map.addSource(this.sourceId, source)
          } catch (err) {
            if (this.replaceSource) {
              this.map.removeSource(this.sourceId);
              this.map.addSource(this.sourceId, source)
            } else {
              this._emitMapEvent('mgl-layer-source-error', { sourceId: this.sourceId, error: err });
            }
          }
        }
        this._addLayer();
        if (this.listenUserEvents) {
          this._bindEvents(layerEvents);
        }
        this.initial = false;
        bus.$off('mgl-load', this._deferredMount);
      },

      _addLayer() {
        let existed = this.map.getLayer(this.layerId);
        if (existed) {
          if (this.replace) {
            this.map.removeLayer(this.layerId);
          } else {
            this._emitMapEvent('mgl-layer-exists', { layerId: this.layerId });
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
        layer.paint = this.paint ? this.paint : { 'raster-opacity': 1 };
        layer.metadata = this.metadata

        this.map.addLayer(layer, this.before);
        this._emitMapEvent('mgl-layer-added', { layerId: this.layerId });
      }
    }
  }
</script>
