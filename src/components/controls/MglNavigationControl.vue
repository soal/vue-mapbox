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

    mounted() {
      this.control = new M.NavigationControl();
      if (this.$parent._isMounted && this.$parent.map !== undefined) {
        this.deferredMount(this.$parent.map);
      } else {
        this.$parent.$once('mgl-load', map => {
          this.deferredMount(map);
        });
      }
    },

    beforeDestroy() {
      this.$parent.map.removeControl(this.control);
    },

    methods: {
      deferredMount(map) {
        map.addControl(this.control, this.position);
        this.$emit('mgl-nav-control-added', this.control);
      }
    }
  };
</script>
