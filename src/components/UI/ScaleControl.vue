<template></template>

<script>

  import baseMixin from '../../lib/mixin'
  import controlMixin from './controlMixin'

  export default {
    mixins: [baseMixin, controlMixin],

    props: {
      maxWidth: {
        type: Number,
        default: 150
      },
      unit: {
        type: String,
        default: 'metric'
      }
    },

    data() {
      return {
        control: undefined,
        map: undefined
      };
    },

    created() {
      this.control = new this.mapbox.ScaleControl(this._props)
    },

    methods: {
      _deferredMount(payload) {
        this.map = payload.map
        try {
          this.map.addControl(this.control)
        } catch (err) {
          console.log(err)
        }
        this.$emit('mgl-scale-control-added', this.control)
        payload.component.$off('mgl-load', this._deferredMount)
      }
    }
  };
</script>
