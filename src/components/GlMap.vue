<template>
  <div :id="container">
    <slot></slot>
  </div>
</template>

<script>
  import M from 'mapbox-gl';
  import bus from '../messageBus';

  // import events from '../lib/events';
  import props from '../lib/options';

  export default {
    props,

    data() {
      return {
        map: undefined
      };
    },

    computed: {
      version() { return this.map.version; }
    },

    mounted() {
      // bus.$on('layer-source-error', err => console.log(err))
      this._loadMap().then(map => {
        this.map = map;
        if (this.RTLTextPluginUrl !== undefined) {
          map.setRTLTextPlugin(this.RTLTextPluginUrl, this._RTLTextPluginError);
        }
        this.$emit('mgl-load', map);
        bus.$emit('mgl-load', map);

      });
    },

    methods: {
      // We wait in promise to ensure map is loaded and other components will receive map object
      _loadMap() {
        return new Promise((resolve) => {
          if (this.accessToken) M.accessToken = this.accessToken;
          let map = new M.Map({
            ...this._props,
            style: this.mapStyle
          });
          map.on('load', () => resolve(map));
        });
      },

      _RTLTextPluginError(error) {
        this.$emit('mgl-rtl-plugin-error', { map: this.map, error: error });
      },

      supported(perfomanceCheck=false) {
        return this.map.supported({ failIfMajorPerformanceCaveat: perfomanceCheck });
      },

      resize() {
        this.map.resize();
      }
    }
  };
</script>
