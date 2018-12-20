import layerEvents from "../../lib/layerEvents";
import mixin from "./layerMixin";

export default {
  name: "VectorLayer",
  mixins: [mixin],
  props: {
    url: {
      type: String,
      default: undefined
    },
    tiles: {
      type: Array,
      default: null
    },
    tilesMinZoom: {
      type: Number,
      default: undefined
    },
    tilesMaxZoom: {
      type: Number,
      default: undefined
    },
    sourceLayer: {
      type: String,
      required: true
    }
  },

  computed: {
    getSourceFeatures() {
      return filter => {
        if (this.map) {
          return this.map.querySourceFeatures(this.sourceId, {
            sourceLayer: this["source-layer"],
            filter
          });
        }
        return null;
      };
    },

    getRenderedFeatures() {
      return (geometry, filter) => {
        if (this.map) {
          return this.map.queryRenderedFeatures(geometry, {
            layers: [this.layerId],
            filter
          });
        }
        return null;
      };
    }
  },

  watch: {
    filter(filter) {
      if (this.initial) return;
      this.map.setFilter(this.layerId, filter);
    }
  },

  methods: {
    $_deferredMount(payload) {
      if (payload.mapId !== this.mapId) return;
      this.map = payload.map;
      let source = {
        type: "vector",
        url: this.url
      };

      if (this.tiles) source.tiles = this.tiles;
      if (this.tilesMinZoom) source.tilesMinZoom = this.tilesMinZoom;
      if (this.tilesMaxZoom) source.tilesMaxZoom = this.tilesMinZoom;

      this.map.on("dataloading", this.$_watchSourceLoading);
      try {
        // FIXME: Check all props
        this.map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        } else {
          this.$_emitEvent("layer-source-error", {
            sourceId: this.sourceId,
            error: err
          });
        }
      }
      this.$_addLayer();
      this.$_bindLayerEvents(layerEvents);
      this.map.off("dataloading", this.$_watchSourceLoading);
      this.initial = false;
      payload.component.$off("load", this.$_deferredMount);
    },

    $_addLayer() {
      let existed = this.map.getLayer(this.layerId);
      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this.$_emitEvent("layer-exists", { layerId: this.layerId });
          return existed;
        }
      }
      let layer = {
        id: this.layerId,
        source: this.sourceId,
        "source-layer": this.sourceLayer
      };

      if (this.refLayer) {
        layer.ref = this.refLayer;
      } else {
        layer.type = this.type ? this.type : "fill";
        layer.source = this.sourceId;
        if (this.minzoom) layer.minzoom = this.minzoom;
        if (this.maxzoom) layer.maxzoom = this.maxzoom;
        if (this.layout) {
          layer.layout = this.layout;
        }
        if (this.filter) layer.filter = this.filter;
      }
      layer.paint = this.paint
        ? this.paint
        : {
            "fill-color": `rgba(${12 * (this.layerId.length * 3)},153,80,0.55)`
          };
      layer.metadata = this.metadata;

      this.map.addLayer(layer, this.before);
      this.$_emitEvent("added", { layerId: this.layerId });
    },

    setFeatureState(featureId, state) {
      if (this.map) {
        const params = {
          id: featureId,
          source: this.source,
          "source-layer": this["source-layer"]
        };
        return this.map.setFeatureState(params, state);
      }
    },

    getFeatureState(featureId) {
      if (this.map) {
        const params = {
          id: featureId,
          source: this.source,
          "source-layer": this["source-layer"]
        };
        return this.map.getFeatureState(params);
      }
    }
  }
};
