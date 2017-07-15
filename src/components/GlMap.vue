<template>
  <div :id="container">
    <slot></slot>
  </div>
</template>

<script>
  import mapEvents from '../lib/events';
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
      isStyleLoaded() { return this.map.isStyleLoaded(); },
      areTilesLoaded() { return this.map.areTilesLoaded(); },
      isMoving() { return this.map.isMoving(); },
      canvas() { return this.map.getCanvas() },
      canvasContainer() { return this.map.getCanvasContainer(); }
    },

    watch: {
      maxBounds(bounds) {
        if (this.initial) return;
        this.map.setMaxBounds(bounds);
        this.maxBounds = bounds;
      },
      minZoom(zoom) {
        if (this.initial) return;
        this.map.setMinZoom(zoom);
        this.minZoom = zoom;
      },
      maxZoom(zoom) {
        if (this.initial) return;
        this.map.setMaxZoom(zoom);
        this.maxZoom = zoom;
      },
      mapStyle(style) {
        if (this.initial) return;
        this.map.setStyle(style);
        this.mapStyle = style;
      },
      collisionBoxes(val) {
        if (this.initial) return;
        this.map.showCollisionBoxes = val;
        this.showCollisionBoxes = val;
      },
      tileBoundaries(val) {
        if (this.initial) return;
        this.map.showTileBoundaries = val;
        this.showTileBoundaries = val;
      },
      repaint(val) {
        if (this.initial) return;
        this.map.repaint = val;
        this.repaint = val;
      },
      zoom(val) {
        if (this.initial) return;
        this.map.setZoom(val);
        this.zoom = val;
      },
      center(val) {
        if (this.initial) return;
        this.map.setCenter(val);
        this.center = val;
      },
      bearing(val) {
        if (this.initial) return;
        this.map.setBearing(val);
        this.bearing = val
      },
      pitch(val) {
        if (this.initial) return;
        this.map.setPitch(val);
        this.pitch = val
      },
      light(val) {
        if (this.initial) return;
        this.map.setLight(val);
        this.light = val;
      }
    },

    mounted() {
      this._loadMap().then(map => {
        this.map = map;
        if (this.RTLTextPluginUrl !== undefined) {
          map.setRTLTextPlugin(this.RTLTextPluginUrl, this._RTLTextPluginError);
        }
        this.$emit('mgl-load', { map, component: this, mapId: this.container });
        this.bus.$emit('mgl-load', { map, component: this, mapId: this.container });
        this._bindEvents(this.eventsToListen);
        this.initial = false;
      });
    },

    destroyed() {
      if (this.map) this.map.remove();
    },

    methods: {
      // We wait in promise to ensure map is loaded and other components will receive map object
      _loadMap() {
        return new Promise((resolve) => {
          if (this.accessToken) this.mapbox.accessToken = this.accessToken;
          let map = new this.mapbox.Map({
            ...this._props,
            style: this.mapStyle
          });
          map.on('load', () => resolve(map));
        });
      },

      _RTLTextPluginError(error) {
        this.$emit('mgl-rtl-plugin-error', { map: this.map, error: error });
      },

      _bindEvents(events) {
        if (events.length === 0) return;
        for (let e of Object.keys(events)) {
          this.map.on(e, event => {
            this.$emit(`mgl-${ event }`, e);
            this.bus.$emit(`mgl-${ event }`, e);
          });
        }
      },

      _unBindEvents(events) {
        events.forEach(eventName => {
          this.map.off(eventName);
        });
      },
      supported(perfomanceCheck=false) {
        return this.map.supported({ failIfMajorPerformanceCaveat: perfomanceCheck });
      },

      resize() {
        this.map.resize();
      },

      project(mapCoordinates) {
        return this.map.project(mapCoordinates);
      },

      unproject(containerCoordinates) {
        return this.map.unproject(containerCoordinates);
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

      panBy(offset, options=undefined) {
        let eventData = {
          eventId: `panBy-${ ('' + Math.random()).split('.')[1] }`
        }
        function catchMoveEnds(options) {
          if (options.eventId !== eventData.eventId) return;
          this.$emit('update:center', this.map.getCenter())
          this.map.off('moveend', catchMoveEnds)
        }
        this.map.on('moveend', catchMoveEnds);
        this.map.panBy(offset, options, eventData);
      },

      panTo(coordinates, options=undefined) {
        let eventData = {
          eventId: `panTo-${ ('' + Math.random()).split('.')[1] }`
        }
        function catchMoveEnds(options) {
          if (options.eventId !== eventData.eventId) return;
          this.$emit('update:center', this.map.getCenter())
          this.map.off('moveend', catchMoveEnds)
        }
        this.map.on('moveend', catchMoveEnds);
        this.map.panTo(coordinates, options, eventData);
      },

      zoomTo(zoom, options=undefined) {
        let eventData = {
          eventId: `zoomTo-${ ('' + Math.random()).split('.')[1] }`
        }

        function catchZoomEnds(options) {
          if (options.eventId !== eventData.eventId) return;
          this.$emit('update:zoom', this.map.getZoom())
          this.map.off('zoomend', catchZoomEnds);
        }

        this.map.on('zoomend', catchZoomEnds);
        this.map.zoomTo(zoom, options, eventData);
      },

      zoomIn(options=undefined) {
        let eventData = {
          eventId: `zoomIn-${ ('' + Math.random()).split('.')[1] }`
        }
        function catchZoomEnds(options) {
          if (options.eventId !== eventData.eventId) return;
          this.$emit('update:zoom', this.map.getZoom())
          this.map.off('zoomend', catchZoomEnds);
        }
        this.map.on('zoomend', catchZoomEnds);
        this.map.zoomIn(options, eventData);
      },

      zoomOut(options=undefined) {
        let eventData = {
          eventId: `zoomOut-${ ('' + Math.random()).split('.')[1] }`
        }
        function catchZoomEnds(options) {
          if (options.eventId !== eventData.eventId) return;
          this.$emit('update:zoom', this.map.getZoom())
          this.map.off('zoomend', catchZoomEnds);
        }
        this.map.on('zoomend', catchZoomEnds);
        this.map.zoomOut(options, eventData);
      },

      rotateTo(bearing, options=undefined) {
        let eventData = {
          eventId: `rotateTo-${ ('' + Math.random()).split('.')[1] }`
        }
        function catchRotateEnds(options) {
          if (options.eventId !== eventData.eventId) return;
          this.$emit('update:bearing', this.map.getBearing())
          this.map.off('rotateend', catchRotateEnds);
        }
        this.map.on('rotateend', catchRotateEnds)
        this.map.rotateTo(bearing, options, eventData)
      },

      resetNorth(options=undefined) {
        let eventData = {
          eventId: `resetNorth-${ ('' + Math.random()).split('.')[1] }`
        }
        function catchRotateEnds(options) {
          if (options.eventId !== eventData.eventId) return
          this.$emit('update:bearing', this.map.getBearing())
          this.map.off('rotateend', catchRotateEnds);
        }
        this.map.on('rotateend', catchRotateEnds)
        this.map.resetNorth(options, eventData);
      },

      snapToNorth(options=undefined) {
        let eventData = {
          eventId: `snapToNorth-${ ('' + Math.random()).split('.')[1] }`
        }
        function catchRotateEnds(options) {
          if (options.eventId !== eventData.eventId) return
          this.$emit('update:bearing', this.map.getBearing())
          this.map.off('rotateend', catchRotateEnds);
        }
        this.map.on('rotateend', catchRotateEnds)
        this.map.snapToNorth(options, eventData);
      },

      fitBounds(bounds, options=undefined) {
        let eventData = {
          eventId: `fitBounds-${ ('' + Math.random()).split('.')[1] }`
        }
        function catchZoomEnds(options) {
          if (options.eventId !== eventData.eventId) return;
          this.$emit('update:zoom', this.map.getZoom())
          this.map.off('zoomend', catchZoomEnds);
        }
        function catchMoveEnds(options) {
          if (options.eventId !== eventData.eventId) return;
          this.$emit('update:center', this.map.getCenter())
          this.map.off('moveend', catchMoveEnds)
        }
        this.map.on('zoomend', catchZoomEnds);
        this.map.on('moveend', catchMoveEnds);
        this.map.fitBounds(bounds, options, eventData);
      },

      jumpTo(options) {
        let eventData = {
          eventId: `jumpTo-${ ('' + Math.random()).split('.')[1] }`
        }
        if (options.bearing) {
          function catchRotateEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.$emit('update:bearing', this.map.getBearing())
            this.map.off('rotateend', catchRotateEnds);
          }
          this.map.on('rotateend', catchRotateEnds)
        }
        if (options.zoom) {
          function catchZoomEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.$emit('update:zoom', this.map.getZoom())
            this.map.off('zoomend', catchZoomEnds);
          }
          this.map.on('zoomend', catchZoomEnds);
        }
        if (options.center) {
          function catchMoveEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.$emit('update:center', this.map.getCenter())
            this.map.off('moveend', catchMoveEnds)
          }
          this.map.on('moveend', catchMoveEnds);
        }
        if (options.pitch) {
          function catchPitchEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.$emit('update:pitch', this.map.getPitch())
            this.map.off('pitchend', catchPitchEnds)
          }
          this.map.on('pitchend', catchPitchEnds);
        }
        this.map.jumpTo(options, eventData);
      },

      easeTo(options) {
        let eventData = {
          eventId: `easeTo-${ ('' + Math.random()).split('.')[1] }`
        }
        if (options.bearing) {
          function catchRotateEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.$emit('update:bearing', this.map.getBearing())
            this.map.off('rotateend', catchRotateEnds);
          }
          this.map.on('rotateend', catchRotateEnds)
        }
        if (options.zoom) {
          function catchZoomEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.$emit('update:zoom', this.map.getZoom())
            this.map.off('zoomend', catchZoomEnds);
          }
          this.map.on('zoomend', catchZoomEnds);
        }
        if (options.center) {
          function catchMoveEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.$emit('update:center', this.map.getCenter())
            this.map.off('moveend', catchMoveEnds)
          }
          this.map.on('moveend', catchMoveEnds);
        }
        if (options.pitch) {
          function catchPitchEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.$emit('update:pitch', this.map.getPitch())
            this.map.off('pitchend', catchPitchEnds)
          }
          this.map.on('pitchend', catchPitchEnds);
        }
        this.map.easeTo(options, eventData);
      },

      flyTo(options) {
        let eventData = {
          eventId: `flyTo-${ ('' + Math.random()).split('.')[1] }`
        }
        if (options.bearing) {
          function catchRotateEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.$emit('update:bearing', this.map.getBearing())
            this.map.off('rotateend', catchRotateEnds);
          }
          this.map.on('rotateend', catchRotateEnds)
        }
        if (options.zoom) {
          function catchZoomEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.$emit('update:zoom', this.map.getZoom())
            this.map.off('zoomend', catchZoomEnds);
          }
          this.map.on('zoomend', catchZoomEnds);
        }
        if (options.center) {
          function catchMoveEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.$emit('update:center', this.map.getCenter())
            this.map.off('moveend', catchMoveEnds)
          }
          this.map.on('moveend', catchMoveEnds);
        }
        if (options.pitch) {
          function catchPitchEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.$emit('update:pitch', this.map.getPitch())
            this.map.off('pitchend', catchPitchEnds)
          }
          this.map.on('pitchend', catchPitchEnds);
        }
        this.map.flyTo(options, eventData);
      },

      stop() {
        this.map.stop();
        this.$emit('update:pitch', this.map.getPitch())
        this.$emit('update:zoom', this.map.getZoom())
        this.$emit('update:bearing', this.map.getBearing())
      }
    }
  };
</script>
