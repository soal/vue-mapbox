<template></template>

<script>
  import baseMixin from '../../lib/mixin'
  import controlMixin from '../../lib/controlMixin'

  export default {
    name: 'NavigationControl',
    mixins: [baseMixin, controlMixin],
    props: {
      position: {
        type: String,
        default: 'top-right' // TODO: add validator
      }
    },

    data() {
      return {
        control: undefined
      }
    },

    created() {
      this.control = new this.mapbox.NavigationControl()
    },

    methods: {
      $_deferredMount(payload) {
        this.map = payload.map
        this.map.addControl(this.control, this.position)
        this.$_emitMapEvent('added', { control: this.control })

        payload.component.$off('load', this.$_deferredMount)
      }
    }
  }
</script>
