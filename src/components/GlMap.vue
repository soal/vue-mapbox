<template>
  <div :id="container">
    <slot></slot>
  </div>
</template>

<script>
  import M from 'mapbox-gl';
  import bus from '../mglMessageBus';

  // import events from '../lib/events';
  import props from '../lib/options';

  export default {
    name: 'GlMap',
    props,

    data() {
      return {
        map: undefined
      };
    },

    mounted() {
      // bus.$on('layer-source-error', err => console.log(err))
      this.loadMap().then(map => {
        this.map = map;
        this.$emit('mgl-load', map);
        bus.$emit('mgl-load', map);

      });
    },

    methods: {
      loadMap() {
        return new Promise((resolve) => {
          if (this.accessToken) M.accessToken = this.accessToken;
          let map = new M.Map({
            ...this._props,
            style: this.mapStyle
          });
          map.on('load', () => resolve(map));
        });
      },

      resize() {
        this.map.resize();
      }
    }
  };
</script>
