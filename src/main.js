// exports.MglMap = require('./components/GlMap.vue');
// exports.MglNavigationControl = require('./components/controls/MglNavigationControl.vue');

import GlMap from './components/GlMap.vue';
import NavigationControl from './components/controls/MglNavigationControl.vue';
import GeolocateControl from './components/controls/MglGeolocateControl.vue';

export const MglMap = GlMap;
export const MglNavigationControl = NavigationControl;
export const MglGeolocateControl = GeolocateControl;

// export default {
//   MglMap,
//   MglNavigationControl
// };
