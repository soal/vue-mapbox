<template>
  <div class="home-map">
    <FloatCodeSnippet
      :code="code"
      name="<MglMap>"
      link="/guide/basemap"
      :position="{
        top: '-37px',
        left: '-199px',
      }"
      :targetPoint="{ x: -5, y: 300 }"
    />
    <MglMap
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      :center="center"
      :zoom="zoom"
      :interactive="false"
    >
      <HomeMarker />
    </MglMap>
    <!-- <div class="home-map-arrow">
            <svg
        xmlns:svg="http://www.w3.org/2000/svg"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
        version="1.1"
      >
          <path
            style="
              fill: none;
              fill-rule: evenodd;
              stroke: #000000;
              stroke-width: 3px;
              stroke-linecap: butt;
              stroke-linejoin: miter;
              stroke-opacity: 1;
            "
            d="M 0,0 0,98.506857"
            id="path2905"
          />
          <path
            style="
              fill: none;
              fill-rule: evenodd;
              stroke: #000000;
              stroke-width: 1.0015748;
              stroke-linecap: round;
              stroke-linejoin: miter;
              stroke-opacity: 1;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
            "
            d="M 1.5095429,98.506857 H 11.520264"
            id="path2907"
          />
          <path
            style="
              fill: none;
              fill-rule: evenodd;
              stroke: #000000;
              stroke-width: 1.00157;
              stroke-linecap: round;
              stroke-linejoin: miter;
              stroke-miterlimit: 4;
              stroke-dasharray: none;
              stroke-opacity: 1;
            "
            d="M 1.5095429,98.506856 V 88.496136"
            id="path2907-7"
          />
      </svg>
    </div> -->
  </div>
</template>

<script>
import Mapbox from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MglMap } from "../../../../src/main.js";
import HomeMarker from "@theme/components/HomeMarker";
import FloatCodeSnippet from "@theme/components/FloatCodeSnippet";

const code = `<MglMap
  :accessToken="mapboxAccessToken"
  :mapStyle="mapbox://myMapStyle"
  :center="[84.991275, 29]"
  :zoom="4"
  :interactive="false"
/>
`;

export default {
  name: "HomeMap",
  components: {
    MglMap,
    HomeMarker,
    FloatCodeSnippet,
  },

  data() {
    return {
      accessToken:
        "pk.eyJ1Ijoic29hbCIsImEiOiJja2Y5cDh5YnEwZzBiMzJsZGU5cjR5NDBwIn0.VYuaK2bUid8ygJaIX5yhGA",
      mapStyle: "mapbox://styles/soal/ckf9twpcz1mag19kah30bv435",
      center: [84.991275, 29],
      zoom: 4,
      code,
    };
  },
};
</script>

<style lang="stylus">
$borderRadius = 6px

.home-map
  border 1px solid transparent
  border-radius $borderRadius
  height 500px
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
