<template></template>

<script>
  // import { UIMixin } from '../mixins';
  import bus from '../mglMessageBus';

  export default {
    name: 'GeoJSONLayer',

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
      clearSource: {
        type: Boolean,
        default: true
      },
      hidden: {
        type: Boolean,
        default: false
      },
      force: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        layer: undefined,
        map: undefined
      };
    },

    mounted() {
      bus.$on('mgl-load', map => {
        this.map = map;
        this.map.on('dataloading', this.watchSourceLoading);
        if (this.source) {
          try {
            this.map.addSource(this.sourceId, {
              type: 'geojson',
              data: this.source
            })
          } catch (err) {
            if (this.force) {
              this.map.removeSource(this.sourceId);
              this.map.addSource(this.sourceId, {
                type: 'geojson',
                data: this.source
              })
            } else {
              this.$emit('layer-source-error', err);
              bus.$emit('layer-source-error', err);
            }
          }
        } else if (!this.ref) {
          this.source = this.map.getSource(this.sourceId);
        }
        this.addLayer()

      });
    },

    beforeDestroy() {
      if (this.map) {
        this.map.removeLayer(this.layerId);
        if (this.clearSource) { this.map.removeSource(this.sourceId) }
      }
    },
    methods: {
      watchSourceLoading(data) {
        if (data.dataType === 'source' && data.sourceId === this.sourceId) {
          this.$emit('layer-source-loading', this.sourceId);
          bus.$emit('layer-source-loading', this.sourceId);
          this.map.off('dataloading', this.watchSourceLoading)
        }
      },

      addLayer() {
        this.layer = {
          id: this.layerId,
          source: this.sourceId
        }
        if (this.refLayer) {
          this.layer.ref = this.refLayer;
        } else {
          this.layer.type = this.type ? this.type : 'fill'
          this.layer.source = this.sourceId;
          if (this['source-layer']) {
            this.layout['source-layer'] = this['source-layer']
          }
          if (this.minzoom) this.layer.minzoom = this.minzoom
          if (this.maxzoom) this.layer.maxzoom = this.maxzoom
          if (this.layout) {
            this.layer.layout = this.layout;
          }
          if (this.filter)  this.layer.filter = this.filter
        }
        this.layer.paint = this.paint
                           ? this.paint
                           : {'fill-color': `rgba(${12 * (this.layerId.length * 3)},153,80,0.55)` };
        this.layer.metadata = this.metadata

        this.map.addLayer(this.layer, this.before);
        this.$emit('layer-added', this.layerId);
        bus.$emit('layer-added', this.layerId);
      }
    }
  }
</script>
