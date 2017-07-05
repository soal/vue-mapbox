<template>
  <div style="display:none">
    <slot name="marker"></slot>
  </div>
</template>

<script>
  import M from 'mapbox-gl';
  import bus from '../mglMessageBus';
  // import layerEvents from '../lib/layerEvents';

  export default {
    props: {
      // mapbox marker options
      offset: {
        type: [Object, Array],
        default: () => [0, 0]
      },
      coordinates: {
        type: Array,
        required: true
      },

      // custom options for component
      listenUserEvents: {
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
        map: undefined,
        marker: undefined
      };
    },

    mounted() {
      // We wait for "load" event from map component to ensure mapbox is loaded and map created
      bus.$on('mgl-load', map => {
        this.marker = new M.Marker(this.$slots.marker[0].elm, { ...this._props });
        this.map = map;
        this.addMarker()
        this.initial = false;
      });
    },

    beforeDestroy() {
      if (this.map) {
        this.marker.remove()
      }
    },

    computed: {
    },

    watch: {
    },

    methods: {
      // Events?
      addMarker() {
        this.marker
          .setLngLat(this.coordinates)
          .addTo(this.map);

        this.$emit('mgl-marker-added', this.marker);
        bus.$emit('mgl-marker-added', this.marker);
      },

      remove() {
        this.marker.remove()
        this.$emit('mgl-marker-removed', this.marker);
        bus.$emit('mgl-marker-removed', this.marker);
      }
    }
  }
</script>
