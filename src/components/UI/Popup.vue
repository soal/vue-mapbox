<template>
  <div style="display:none">
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
      closeButton: {
        type: Boolean,
        default: true
      },
      closeOnClick: {
        type: Boolean,
        default: true
      },
      anchor: {
        validator(value) {
          let allowedValues = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'];
          return (typeof value === 'string' && allowedValues.indexOf(value) !== -1) || value === undefined;
        },
        default: undefined
      },
      offset: {
        type: [Object, Array],
        default: () => [0, 0]
      },
      coordinates: {
        type: Array
      },

      // custom options for component
      onlyText: {
        type: Boolean,
        default: false
      }
    },

    data() {
      return {
        initial: true,
        map: undefined,
        popup: undefined
      };
    },

    computed: {
      isOpen() {
        if (this.popup !== undefined) {
          return this.popup.isOpen();
        }
        return false;
      }
    },

    mounted() {
      // We wait for "load" event from map component to ensure mapbox is loaded and map created
      bus.$on('mgl-load', this._deferredMount);
    },

    beforeDestroy() {
      if (this.map) {
        this.$emit('mgl-popup-removed', this.popup);
        bus.$emit('mgl-popup-removed', this.popup);
        this.popup.remove();
      }
    },

    watch: {
      coordinates(lngLat) {
        if (this.initial) return;
        this.popup.setLngLat(lngLat);
      }
    },

    methods: {
      _deferredMount(payload) {
        this._checkMapId();
        if (payload.mapId !== this.mapId) return;
        this.map = payload.map;
        this._addPopup()
        this.initial = false;
        bus.$off('mgl-load', this._deferredMount);
      },

      _addPopup() {
        this.popup = new this.mapbox.Popup({ ...this._props });
        if (this.coordinates !== undefined) this.popup.setLngLat(this.coordinates)
        if (this.$slots.default !== undefined) {
          if (this.onlyText) {
            if (this.$slots.default[0].elm.nodeType === 3) {
              let tmpEl = document.createElement('span');
              tmpEl.appendChild(this.$slots.default[0].elm)
              this.popup.setText(tmpEl.innerText)
            } else {
              this.popup.setText(this.$slots.default[0].elm.innerText)
            }
          } else {
            this.popup.setDOMContent(this.$slots.default[0].elm)
          }
        }
        this.popup.addTo(this.map);
        this.$emit('mgl-popup-added', this.popup);
        bus.$emit('mgl-popup-added', this.popup);

        this.popup.on('close', this._onClose);

        this.$parent.$on('mgl-marker-added', marker => {
          marker.setPopup(this.popup);
        });
      },

      _onClose() {
        this.$emit('mgl-popup-close', this.popup);
        bus.$emit('mgl-popup-close', this.popup);
      }
    }
  }
</script>
