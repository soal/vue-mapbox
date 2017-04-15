// exports.MglMap = require('./components/GlMap.vue');
// exports.MglNavigationControl = require('./components/controls/MglNavigationControl.vue');

import GlMap from './components/GlMap.vue';
import NavigationControl from './components/controls/NavigationControl.vue';
import GeolocateControl from './components/controls/GeolocateControl.vue';
import FullscreenControl from './components/controls/FullscreenControl.vue';
import AttributionControl from './components/controls/AttributionControl.vue';
import ScaleControl from './components/controls/ScaleControl.vue';

export const MglMap = GlMap;
export const MglNavigationControl = NavigationControl;
export const MglGeolocateControl = GeolocateControl;
export const MglFullscreenControl = FullscreenControl;
export const MglAttributionControl = AttributionControl;
export const MglScaleControl = ScaleControl;

// export default {
//   MglMap,
//   MglNavigationControl
// };
