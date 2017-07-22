<template>
  <div style="display:none">
    <slot></slot>
  </div>
</template>

<script>

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
      this._checkMapTree()
    },

    beforeDestroy() {
      if (this.map) {
        this._emitMapEvent('mgl-popup-removed', { popup: this.popup });
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
        this.map = payload.map;
        this._addPopup()
        this.initial = false;
        payload.component.$off('mgl-load', this._deferredMount)
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
        this.popup.addTo(this.map)
        this._emitMapEvent('mgl-popup-added', {popup: this.popup })

        this.popup.on('close', this._onClose)

        if (this.$parent.marker !== undefined) {
          this.$parent.marker.setPopup(this.popup)
        } else {
          this.$parent.$once('mgl-marker-added', ({ marker }) => {
            console.log(marker)
            marker.setPopup(this.popup)
          });
        }
      },

      _onClose() {
        this._emitMapEvent('mgl-popup-close', { popup: this.popup })
      }
    }
  }
</script>
