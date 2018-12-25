import layerEvents from "../../lib/layerEvents";
import mixin from "./layerMixin";

export default {
  name: "RasterLayer",
  mixins: [mixin],
  props: {
    url: {
      type: String,
      default: undefined
    },
    tiles: {
      type: Array,
      default: undefined
    },
    tilesMinZoom: {
      type: Number,
      default: 0
    },
    tilesMaxZoom: {
      type: Number,
      default: 22
    },
    tileSize: {
      type: Number,
      defaul: 512
    },
    bounds: {
      type: Array,
      default: () => [-180, -85.051129, 180, 85.051129]
    },
    scheme: {
      type: String,
      default: undefined
    },
    attribution: {
      type: String,
      default: undefined
    }
  },

  methods: {
    $_deferredMount(payload) {
      this.map = payload.map;
      let source = {
        type: "raster",
        url: this.url,
        minzoom: this.tilesMinZoom,
        maxzoom: this.tilesMaxZoom,
        tileSize: this.tileSize,
        bounds: this.bounds
      };

      if (this.tiles) source.tiles = this.tiles;
      if (this.scheme) source.scheme = this.scheme;
      if (this.attribution) source.attribution = this.attribution;

      this.map.on("dataloading", this.$_watchSourceLoading);
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
        layer.type = "raster";
        layer.source = this.sourceId;
        layer["source-layer"] = this["source-layer"];
        if (this.minzoom) layer.minzoom = this.minzoom;
        if (this.maxzoom) layer.maxzoom = this.maxzoom;
        if (this.layout) {
          layer.layout = this.layout;
        }
      }
      layer.paint = this.paint ? this.paint : { "raster-opacity": 1 };
      layer.metadata = this.metadata;

      this.map.addLayer(layer, this.before);
      this.$_emitEvent("added", { layerId: this.layerId });
    }
  }
};
