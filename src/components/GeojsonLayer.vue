<template></template>

<script>
  import M from 'mapbox-gl';
  // import { UIMixin } from '../mixins';
  import bus from '../mglMessageBus';

  export default {
    name: 'GeoJSONLayer',

    props: {
      sourceId: {
        type: String,
        required: true
      },
      source: {
        type: [Object, String]
      },
      hidden: {
        type: Boolean,
        default: false
      },
      force: {
        type: Boolean,
        default: false
      },
      layerId: {
        type: String,
        required: true
      },
      before: {
        type: Object
      },
      clearSource: {
        type: Boolean,
        default: true
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
        } finally {
          this.addLayer()
        }

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
          source: this.sourceId,
          type: 'fill',
          layout: {
            visibility: this.hidden ? 'none' : 'visible'
          },
          paint: { 'fill-color': `rgba(${12 * (this.layerId.length * 3)},153,80,0.55)` }
        }
        this.map.addLayer(this.layer, this.before);
        this.$emit('layer-added', this.layerId);
        bus.$emit('layer-added', this.layerId);
      }
    }
  }
</script>
