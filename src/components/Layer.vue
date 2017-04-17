<template></template>

<script>
  import M from 'mapbox-gl';
  // import { UIMixin } from '../mixins';
  import bus from '../mglMessageBus';

  export default {
    name: 'Layer',
    // mixins: [UIMixin],

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
      }
    },

    data() {
      return {
        layerID: undefined,
        layer: undefined,
        map: undefined
      };
    },

    created() {
      bus.$on('mgl-load', map => {
        this.map = map;
        this.map.addSource(this.sourceId, {
          type: 'geojson',
          data: this.source
        });
        this.$emit('layer-source-loaded', this.sourceId);
        bus.$emit('layer-source-loaded', this.sourceId);

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
        this.$emit('layer-loaded', this.sourceId);
        bus.$emit('layer-loaded', this.sourceId);
      });
    },

    mounted() {
    },

    methods: {

    }
  }
</script>
