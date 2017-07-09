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
        initial: true,
        map: undefined
      };
    },

    computed: {
      loaded() { return this.map.loaded(); },
      version() { return this.map.version; },
      bounds() { return this.map.getBounds(); },
      styleLoaded() { return this.map.isStyleLoaded(); },
      tilesLoaded() { return this.map.areTilesLoaded(); },
      isMoving() { return this.map.isMoving(); },
      canvas() { return this.map.getCanvas() },
      canvasContainer() { return this.map.getCanvasContainer(); }
    },

    watch: {
      maxBounds(bounds) {
        if (this.initital) return;
        this.map.setMaxBounds(bounds);
      },
      minZoom(zoom) {
        if (this.initital) return;
        this.map.setMinZoom(zoom);
      },
      maxZoom(zoom) {
        if (this.initital) return;
        this.map.setMaxZoom(zoom);
      },
      mapStyle(style) {
        if (this.initital) return;
        this.map.setStyle(style);
      },
      collisionBoxes(val) {
        if (this.initital) return;
        this.map.showCollisionBoxes = val;
      },
      tileBoundaries(val) {
        if (this.initital) return;
        this.map.showTileBoundaries = val;
      },
      repaint(val) {
        if (this.initial) return;
        this.map.repaint = val;
      }
    },

    mounted() {
      // bus.$on('layer-source-error', err => console.log(err))
      this._loadMap().then(map => {
        this.map = map;
        if (this.RTLTextPluginUrl !== undefined) {
          map.setRTLTextPlugin(this.RTLTextPluginUrl, this._RTLTextPluginError);
        }
        this.initial = false;
        this.$emit('mgl-load', map);
        bus.$emit('mgl-load', map);
      });
    },

    beforeDestroy() {
      if (this.map) this.map.remove();
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
      },

      project(coordinates) {
        return this.map.project(coordinates);
      },

      unproject(coordinates) {
        return this.map.unproject(coordinates);
      },

      queryRenderedFeatures(geometry=undefined, parameters=undefined) {
        return this.map.queryRenderedFeatures(geometry, parameters)
      },

      querySourceFeatures(sourceId, parameters=undefined) {
        return this.map.querySourceFeatures(sourceId, parameters);
      },

      addImage(name, image, options=undefined) {
        this.map.addImage(name, image, options);
      },

      removeImage(name) {
        this.map.addImage(name);
      },

      loadImage(url, callback) {
        this.map.loadImage(url, callback);
      },

      panBy(offset, options=undefined, eventData=undefined) {
        return this.map.panBy(offset, options, eventData);
      },

      zoomTo(zoom, options=undefined, eventData=undefined) {
        return this.map.zoomTo(zoom, options, eventData);
      },

      zoomIn(options=undefined, eventData=undefined) {
        return this.map.zoomIn(options, eventData);
      },

      zoomOut(options=undefined, eventData=undefined) {
        return this.map.zoomOut(options, eventData);
      },

      rotateTo(bearing, options=undefined, eventData=undefined) {
        return this.map.rotateTo(bearing, options, eventData)
      },

      resetNorth(options=undefined, eventData=undefined) {
        return this.map.resetNorth(options, eventData);
      },

      snapToNorth(options=undefined, eventData=undefined) {
        return this.map.snapToNorth(options, eventData);
      },

      fitBounds(bounds, options=undefined, eventData=undefined) {
        return this.map.fitBounds(bounds, options, eventData);
      },

      jumpTo(options, eventData=undefined) {
        return this.map.jumpTo(options, eventData);
      },

      easeTo(options, eventData=undefined) {
        return this.map.easeTo(options, eventData);
      },

      flyTo(options, eventData=undefined) {
        return this.map.flyTo(options, eventData);
      },

      stop() {
        this.map.stop();
      }
    }
  };
</script>
