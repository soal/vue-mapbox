import layerEvents from "../../lib/layerEvents";
import mixin from "./layerMixin";

export default {
  name: "GeojsonLayer",
  mixins: [mixin],
  props: {
    source: {
      type: [Object, String]
    },
    type: {
      validator(value) {
        let allowedValues = [
          "fill",
          "line",
          "symbol",
          "circle",
          "fill-extrusion",
          "raster",
          "background",
          "heatmap"
        ];
        return (
          (typeof value === "string" && allowedValues.indexOf(value) !== -1) ||
          value === undefined
        );
      },
      default: "fill"
    },
    cluster: {
      type: Boolean,
      default: false
    },
    clusterMaxZoom: {
      type: Number,
      default: 14
    },
    clusterRadius: {
      type: Number,
      default: 50
    },
    lineMetrics: {
      type: Boolean,
      default: false
    },
    buffer: {
      type: Number,
      default: 128
    },
    tolerance: {
      type: Number,
      default: 0.375
    },
    generateId: {
      type: Boolean,
      default: false
    },
    attribution: {
      type: String,
      default: ""
    }
  },

  computed: {
    getSourceFeatures() {
      return filter => {
        if (this.map) {
          return this.map.querySourceFeatures(this.sourceId, { filter });
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
    source(data) {
      if (this.initial) return;
      this.mapSource.setData(data);
    },
    filter(filter) {
      if (this.initial) return;
      this.map.setFilter(this.layerId, filter);
    }
  },

  methods: {
    $_deferredMount(payload) {
      this.map = payload.map;
      this.map.on("dataloading", this.$_watchSourceLoading);
      if (this.source) {
        const source = {
          type: "geojson",
          data: this.source,
          cluster: this.cluster,
          clusterMaxZoom: this.clusterMaxZoom,
          clusterRadius: this.clusterRadius,
          lineMetrics: this.lineMetrics,
          buffer: this.buffer,
          tolerance: this.tolerance,
          generateId: this.generateId,
          attribution: this.attribution
        };
        try {
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
        source: this.sourceId
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
      if (this.type !== "symbol") {
        layer.paint = this.paint
          ? this.paint
          : {
              "fill-color": `rgba(${12 *
                (this.layerId.length * 3)},153,80,0.55)`
            };
      }
      layer.metadata = this.metadata;

      this.map.addLayer(layer, this.before);
      this.$_emitEvent("added", { layerId: this.layerId });
    },

    setFeatureState(featureId, state) {
      if (this.map) {
        const params = { id: featureId, source: this.source };
        return this.map.setFeatureState(params, state);
      }
    },

    getFeatureState(featureId) {
      if (this.map) {
        const params = { id: featureId, source: this.source };
        return this.map.getFeatureState(params);
      }
    }
  }
};
