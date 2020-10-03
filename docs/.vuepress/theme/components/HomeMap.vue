<template>
  <div class="home-map">
    <MglMap :accessToken="accessToken" :mapStyle="mapStyle" :center="center" :zoom="zoom" />
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MglMap } from "../../../../src/main.js";
import {  }

export default {
  name: "HomeMap",
  components: {
    MglMap
  },

  data() {
    return {
      accessToken: "pk.eyJ1Ijoic29hbCIsImEiOiJja2Y5cDh5YnEwZzBiMzJsZGU5cjR5NDBwIn0.VYuaK2bUid8ygJaIX5yhGA",
      mapStyle: "mapbox://styles/soal/ckf9twpcz1mag19kah30bv435",
      center: [84.991275, 24.695102],
      zoom: 4
    }
  }
}
</script>

<style lang="stylus">
$borderRadius = 12px

.home-map
  border 1px solid transparent
  border-radius $borderRadius
  height 400px
  position relative
  width 100%

  &:focus
    border-color: $accentColor

  &:focus-within
    border-color: $accentColor

  canvas
    border-radius $borderRadius

    &:focus
      outline none

</style>
