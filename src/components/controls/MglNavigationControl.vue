<template></template>

<script>
  import M from 'mapbox-gl';

  export default {
    name: 'MglNavigationControl',

    props: {
      position: {
        type: String,
        default: 'top-right'
      }
    },

    data() {
      return {
        control: undefined
      };
    },

    created() {
      this.control = new M.NavigationControl();

      this.$parent.$once('mgl-load', map => {
        this.deferredMount(map)
      });
    },

    mounted() {
      if (this.$parent._isMounted && this.$parent.map) {
        this.deferredMount(this.$parent.map);
      }
    },

    beforeDestroy() {
      this.$parent.map.removeControl(this.control);
    },

    methods: {
      deferredMount(map) {
        if (this.control !== undefined) {
          map.addControl(this.control, this.position);
          this.$emit('mgl-nav-control-added', this.control);
        }
      }
    }
  };
</script>
