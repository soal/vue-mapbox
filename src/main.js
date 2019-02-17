import GlMap from "./components/map/GlMap.vue";

import NavigationControl from "./components/UI/controls/NavigationControl";
import GeolocateControl from "./components/UI/controls/GeolocateControl";
import FullscreenControl from "./components/UI/controls/FullscreenControl";
import AttributionControl from "./components/UI/controls/AttributionControl";
import ScaleControl from "./components/UI/controls/ScaleControl";
import Marker from "./components/UI/Marker.vue";
import Popup from "./components/UI/Popup.vue";

import GeojsonLayer from "./components/layer/GeojsonLayer";
import ImageLayer from "./components/layer/ImageLayer";
import CanvasLayer from "./components/layer/CanvasLayer";
import VideoLayer from "./components/layer/VideoLayer";
import VectorLayer from "./components/layer/VectorLayer";
import RasterLayer from "./components/layer/RasterLayer";

import withEventsMixin from "./lib/withEvents";
import withSelfEventsMixin from "./components/UI/withSelfEvents";
import controlMixin from "./components/UI/controls/controlMixin";
import layerMixin from "./components/layer/layerMixin";

export const withEvents = withEventsMixin;
export const withSelfEvents = withSelfEventsMixin;
export const asControl = controlMixin;
export const asLayer = layerMixin;

export const $helpers = {
  withEvents: withEventsMixin,
  withSelfEvents: withSelfEventsMixin,
  asControl: controlMixin,
  asLayer: layerMixin
};

export const MglMap = GlMap;

export const MglNavigationControl = NavigationControl;
export const MglGeolocateControl = GeolocateControl;
export const MglFullscreenControl = FullscreenControl;
export const MglAttributionControl = AttributionControl;
export const MglScaleControl = ScaleControl;

export const MglGeojsonLayer = GeojsonLayer;
export const MglImageLayer = ImageLayer;
export const MglCanvasLayer = CanvasLayer;
export const MglVideoLayer = VideoLayer;
export const MglVectorLayer = VectorLayer;
export const MglRasterLayer = RasterLayer;

export const MglMarker = Marker;
export const MglPopup = Popup;

export default GlMap;
