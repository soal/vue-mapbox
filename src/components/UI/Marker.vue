<template>
  <div v-show style="display:none">
    <slot name="marker"></slot>
    <slot></slot>
  </div>
</template>

<script>
  import M from 'mapbox-gl';
  import bus from '../../messageBus';
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
      bus.$once('mgl-load', map => {
        if (this.$slots.marker) {
          this.marker = new M.Marker(this.$slots.marker[0].elm, { ...this._props });
        } else {
          this.marker = new M.Marker({ ...this._props });
        }

        this.map = map;
        this._addMarker()
        this.initial = false;
      });
    },

    beforeDestroy() {
      if (this.map) {
        this.marker.remove();
      }
    },

    watch: {
      coordinates(lngLat) {
        if (this.initial) return;
        this.marker.setLngLat(lngLat);
      }
    },

    methods: {
      // Events?
      _addMarker() {
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
      },

      togglePopup() {
        this.marker.togglePopup();
      }
    }
  }
</script>
