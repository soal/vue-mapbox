<template>
  <div :id="container">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from "vue";
  import M from "mapbox-gl";

  import events from "../lib/events";
  import props from "../lib/options";

  export default {
    name: "GlMap",
    props,

    mounted() {
      this.loadMap().then(map => {
        this.$emit("mgl-load", map);
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
          map.on("load", () => resolve(map));
        });
      }
    }
  };
</script>
