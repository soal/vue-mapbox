<template>
  <div style="display:none">
    <slot name="marker"></slot>
    <slot></slot>
  </div>
</template>

<script>
  import bus from '../../messageBus';
  import baseMixin from '../../lib/mixin';

  export default {
    mixins: [baseMixin],
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
      mapContainerId: {
        type: String
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
      this._checkMapId();
      // We wait for "load" event from map component to ensure mapbox is loaded and map created
      bus.$on('mgl-load', this._deferredMount)
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
      _deferredMount(payload) {
        if (payload.mapId !== this.mapId) return;
        if (this.$slots.marker) {
          this.marker = new this.mapbox.Marker(this.$slots.marker[0].elm, { ...this._props });
        } else {
          this.marker = new this.mapbox.Marker({ ...this._props });
        }

        this.map = payload.map;
        this._addMarker()
        this.initial = false;
        bus.$off('mgl-load', this._deferredMount)
      },
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
