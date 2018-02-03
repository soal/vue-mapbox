<template></template>

<script>

  import baseMixin from '../../lib/mixin'
  import controlMixin from './controlMixin'

  export default {
    mixins: [baseMixin, controlMixin],

    props: {
      position: {
        type: String,
        default: 'top-right'
      }
    },

    data() {
      return {
        control: undefined,
        map: undefined
      }
    },

    created() {
      this.control = new this.mapbox.FullscreenControl()
    },

    methods: {
      $_deferredMount(payload) {
        this.map = payload.map
        this.map.addControl(this.control, this.position)
        this.$emit('fullscreen-control-added', this.control)
        payload.component.$off('load', this.$_deferredMount)
      }
    }
  }
</script>
