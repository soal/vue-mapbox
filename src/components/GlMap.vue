<template>
  <div :id="container">
    <slot></slot>
  </div>
</template>

<script>
  import M from 'mapbox-gl';
  import bus from '../messageBus';

  import events from '../lib/events';
  import props from '../lib/options';


  export default {
    props,

    data() {
      return {
        initial: true,
        map: undefined,
        mapOptions: {
          minZoom:          this.initMinZoom,
          maxZoom:          this.initMaxZoom,
          maxBounds:        this.initMaxBounds,
          mapStyle:         this.initMapStyle,
          center:           this.initCenter,
          zoom:             this.initZoom,
          bearing:          this.initBearing,
          pitch:            this.initPitch,
          collisionBoxes:   this.initCollisionBoxes,
          titleBoundaries:  this.initTileBoundaries,
          repaint:          this.initRepaint,
          light:            this.initLight
        }
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
      initMaxBounds(bounds) {
        if (this.initial) return;
        this.map.setMaxBounds(bounds);
        this.mapOptions.maxBounds = bounds;
      },
      initMinZoom(zoom) {
        if (this.initial) return;
        this.map.setMinZoom(zoom);
        this.mapOptions.minZoom = zoom;
      },
      initMaxZoom(zoom) {
        if (this.initial) return;
        this.map.setMaxZoom(zoom);
        this.mapOptions.maxZoom = zoom;
      },
      initMapStyle(style) {
        if (this.initial) return;
        this.map.setStyle(style);
        this.mapOptions.mapStyle = style;
      },
      initCollisionBoxes(val) {
        if (this.initial) return;
        this.map.showCollisionBoxes = val;
        this.mapOptions.showCollisionBoxes = val;
      },
      initTileBoundaries(val) {
        if (this.initial) return;
        this.map.showTileBoundaries = val;
        this.mapOptions.showTileBoundaries = val;
      },
      initRepaint(val) {
        if (this.initial) return;
        this.map.repaint = val;
        this.mapOptions.repaint = val;
      },
      initZoom(val) {
        if (this.initial) return;
        this.map.setZoom(val);
        this.mapOptions.zoom = val;
      },
      initCenter(val) {
        if (this.initial) return;
        this.map.setCenter(val);
        this.mapOptions.center = val;
      },
      initBearing(val) {
        if (this.initial) return;
        this.map.setBearing(val);
        this.mapOptions.bearing = val
      },
      initPitch(val) {
        if (this.initial) return;
        this.map.setPitch(val);
        this.mapOptions.pitch = val
      },
      initLight(val) {
        if (this.initial) return;
        this.map.setLight(val);
        this.mapOptions.light = val;
      }
    },

    mounted() {
      this._loadMap().then(map => {
        this.map = map;
        if (this.RTLTextPluginUrl !== undefined) {
          map.setRTLTextPlugin(this.RTLTextPluginUrl, this._RTLTextPluginError);
        }
        this.$emit('mgl-load', map);
        bus.$emit('mgl-load', map);
        this._bindEvents(this.eventsToListen);
        this.initial = false;
        console.log(this);
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
            ...this.mapOptions,
            style: this.initMapStyle
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
            bus.$emit(`mgl-${ event }`, e);
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
          this.mapOptions.center = this.map.getCenter();
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
          this.mapOptions.center = this.map.getCenter();
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
          this.mapOptions.zoom = this.map.getZoom();
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
          this.mapOptions.zoom = this.map.getZoom();
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
          this.mapOptions.zoom = this.map.getZoom();
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
          this.mapOptions.bearing = this.map.getBearing();
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
          if (options.eventId !== eventData.eventId) return;
          this.mapOptions.bearing = this.map.getBearing();
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
          if (options.eventId !== eventData.eventId) return;
          this.mapOptions.bearing = this.map.getBearing();
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
          this.mapOptions.zoom = this.map.getZoom();
          this.map.off('zoomend', catchZoomEnds);
        }
        this.map.on('zoomend', catchZoomEnds);
        function catchMoveEnds(options) {
          if (options.eventId !== eventData.eventId) return;
          this.mapOptions.center = this.map.getCenter();
          this.map.off('moveend', catchMoveEnds)
        }
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
            this.mapOptions.bearing = this.map.getBearing();
            this.map.off('rotateend', catchRotateEnds);
          }
          this.map.on('rotateend', catchRotateEnds)
        }
        if (options.zoom) {
          function catchZoomEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.mapOptions.zoom = this.map.getZoom();
            this.map.off('zoomend', catchZoomEnds);
          }
          this.map.on('zoomend', catchZoomEnds);
        }
        if (options.center) {
          function catchMoveEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.mapOptions.center = this.map.getCenter();
            this.map.off('moveend', catchMoveEnds)
          }
          this.map.on('moveend', catchMoveEnds);
        }
        if (options.pitch) {
          function catchPitchEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.mapOptions.pitch = this.map.getPitch();
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
            this.mapOptions.bearing = this.map.getBearing();
            this.map.off('rotateend', catchRotateEnds);
          }
          this.map.on('rotateend', catchRotateEnds)
        }
        if (options.zoom) {
          function catchZoomEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.mapOptions.zoom = this.map.getZoom();
            this.map.off('zoomend', catchZoomEnds);
          }
          this.map.on('zoomend', catchZoomEnds);
        }
        if (options.center) {
          function catchMoveEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.mapOptions.center = this.map.getCenter();
            this.map.off('moveend', catchMoveEnds)
          }
          this.map.on('moveend', catchMoveEnds);
        }
        if (options.pitch) {
          function catchPitchEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.mapOptions.pitch = this.map.getPitch();
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
            this.mapOptions.bearing = this.map.getBearing();
            this.map.off('rotateend', catchRotateEnds);
          }
          this.map.on('rotateend', catchRotateEnds)
        }
        if (options.zoom) {
          function catchZoomEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.mapOptions.zoom = this.map.getZoom();
            this.map.off('zoomend', catchZoomEnds);
          }
          this.map.on('zoomend', catchZoomEnds);
        }
        if (options.center) {
          function catchMoveEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.mapOptions.center = this.map.getCenter();
            this.map.off('moveend', catchMoveEnds)
          }
          this.map.on('moveend', catchMoveEnds);
        }
        if (options.pitch) {
          function catchPitchEnds(options) {
            if (options.eventId !== eventData.eventId) return;
            this.mapOptions.pitch = this.map.getPitch();
            this.map.off('pitchend', catchPitchEnds)
          }
          this.map.on('pitchend', catchPitchEnds);
        }
        this.map.flyTo(options, eventData);
      },

      stop() {
        this.map.stop();
        this.mapOptions.pitch = this.map.getPitch();
        this.mapOptions.zoom = this.map.getZoom();
        this.mapOptions.bearing = this.map.getBearing();
      }
    }
  };
</script>
