(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(
        exports,
        require("@babel/runtime/helpers/defineProperty"),
        require("@babel/runtime/helpers/typeof")
      )
    : typeof define === "function" && define.amd
    ? define([
        "exports",
        "@babel/runtime/helpers/defineProperty",
        "@babel/runtime/helpers/typeof"
      ], factory)
    : ((global =
        typeof globalThis !== "undefined" ? globalThis : global || self),
      factory(
        (global["vue-mapbox"] = {}),
        global._defineProperty,
        global._typeof
      ));
})(this, function(exports, _defineProperty, _typeof) {
  "use strict";

  function _interopDefaultLegacy(e) {
    return e && typeof e === "object" && "default" in e ? e : { default: e };
  }

  var _defineProperty__default = /*#__PURE__*/ _interopDefaultLegacy(
    _defineProperty
  );
  var _typeof__default = /*#__PURE__*/ _interopDefaultLegacy(_typeof);

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }

  var withEventsMixin = {
    methods: {
      /**
       * Emit Vue event with additional data
       *
       * @param {string} name EventName
       * @param {Object} [data={}] Additional data
       */
      $_emitEvent: function $_emitEvent(name) {
        var data =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        this.$emit(
          name,
          _objectSpread(
            {
              map: this.map,
              component: this
            },
            data
          )
        );
      },

      /**
       * Emit Vue event with Mapbox event as additional data
       *
       * @param {Object} event
       */
      $_emitMapEvent: function $_emitMapEvent(event) {
        var data =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        this.$_emitEvent(
          event.type,
          _objectSpread(
            {
              mapboxEvent: event
            },
            data
          )
        );
      }
    }
  };

  /* eslint-disable key-spacing */
  var mapEvents = {
    resize: {
      name: "resize"
    },
    webglcontextlost: {
      name: "webglcontextlost"
    },
    webglcontextrestored: {
      name: "webglcontextrestored"
    },
    remove: {
      name: "remove"
    },
    movestart: {
      name: "movestart"
    },
    load: {
      name: "load"
    },
    contextmenu: {
      name: "contextmenu"
    },
    dblclick: {
      name: "dblclick"
    },
    click: {
      name: "click"
    },
    touchcancel: {
      name: "touchcancel"
    },
    touchmove: {
      name: "touchmove"
    },
    touchend: {
      name: "touchend"
    },
    touchstart: {
      name: "touchstart"
    },
    dataloading: {
      name: "dataloading"
    },
    mousemove: {
      name: "mousemove"
    },
    mouseup: {
      name: "mouseup"
    },
    mousedown: {
      name: "mousedown"
    },
    sourcedataloading: {
      name: "sourcedataloading"
    },
    error: {
      name: "error"
    },
    data: {
      name: "data"
    },
    styledata: {
      name: "styledata"
    },
    sourcedata: {
      name: "sourcedata"
    },
    mouseout: {
      name: "mouseout"
    },
    styledataloading: {
      name: "styledataloading"
    },
    moveend: {
      name: "moveend"
    },
    move: {
      name: "move"
    },
    render: {
      name: "render"
    },
    zoom: {
      name: "zoom"
    },
    zoomstart: {
      name: "zoomstart"
    },
    zoomend: {
      name: "zoomend"
    },
    boxzoomstart: {
      name: "boxzoomstart"
    },
    boxzoomcancel: {
      name: "boxzoomcancel"
    },
    boxzoomend: {
      name: "boxzoomend"
    },
    rotate: {
      name: "rotate"
    },
    rotatestart: {
      name: "rotatestart"
    },
    rotateend: {
      name: "rotateend"
    },
    dragend: {
      name: "dragend"
    },
    drag: {
      name: "drag"
    },
    dragstart: {
      name: "dragstart"
    },
    pitch: {
      name: "pitch"
    },
    idle: {
      name: "idle"
    }
  };

  var options = {
    container: {
      type: [String, HTMLElement],
      default: function _default() {
        return "map-".concat(("" + Math.random()).split(".")[1]);
      }
    },
    accessToken: {
      type: String,
      default: undefined
    },
    minZoom: {
      type: Number,
      default: 0
    },
    maxZoom: {
      type: Number,
      default: 22
    },
    mapStyle: {
      type: [String, Object],
      required: true
    },
    hash: {
      type: [Boolean, String],
      default: false
    },
    interactive: {
      type: Boolean,
      default: true
    },
    bearingSnap: {
      type: Number,
      default: 7
    },
    pitchWithRotate: {
      type: Boolean,
      default: true
    },
    clickTolerance: {
      type: Number,
      default: 3
    },
    // classes: {
    //   type: Array,
    //   default() {
    //     return []
    //   }
    // },
    attributionControl: {
      type: Boolean,
      default: true
    },
    customAttribution: {
      type: [String, Array],
      default: null
    },
    logoPosition: {
      type: String,
      default: "bottom-left",
      validator: function validator(val) {
        return [
          "top-left",
          "top-right",
          "bottom-left",
          "bottom-right"
        ].includes(val);
      }
    },
    failIfMajorPerformanceCaveat: {
      type: Boolean,
      default: false
    },
    preserveDrawingBuffer: {
      type: Boolean,
      default: false
    },
    refreshExpiredTiles: {
      type: Boolean,
      default: true
    },
    maxBounds: {
      type: Array,
      default: function _default() {
        return undefined;
      }
    },
    scrollZoom: {
      type: [Boolean, Object],
      default: function _default() {
        return true;
      }
    },
    boxZoom: {
      type: Boolean,
      default: true
    },
    dragRotate: {
      type: Boolean,
      default: true
    },
    dragPan: {
      type: Boolean,
      default: true
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    doubleClickZoom: {
      type: Boolean,
      default: true
    },
    touchZoomRotate: {
      type: [Boolean, Object],
      default: function _default() {
        return true;
      }
    },
    trackResize: {
      type: Boolean,
      default: true
    },
    center: {
      type: [Object, Array],
      default: undefined
    },
    zoom: {
      type: Number,
      default: 0
    },
    bearing: {
      type: Number,
      default: 0
    },
    pitch: {
      type: Number,
      default: 0
    },
    bounds: {
      type: [Object, Array],
      default: undefined
    },
    fitBoundsOptions: {
      type: Object,
      default: undefined
    },
    renderWorldCopies: {
      type: Boolean,
      default: true
    },
    RTLTextPluginUrl: {
      type: String,
      default: undefined
    },
    light: {
      type: Object,
      default: undefined
    },
    tileBoundaries: {
      type: Boolean,
      default: false
    },
    collisionBoxes: {
      type: Boolean,
      default: false
    },
    repaint: {
      type: Boolean,
      default: false
    },
    transformRequest: {
      type: Function,
      default: null
    },
    maxTileCacheSize: {
      type: Number,
      default: null
    },
    localIdeographFontFamily: {
      type: String,
      default: null
    },
    collectResourceTiming: {
      type: Boolean,
      default: false
    },
    fadeDuration: {
      type: Number,
      default: 300
    },
    crossSourceCollisions: {
      type: Boolean,
      default: true
    }
  };

  var watchers = {
    maxBounds: function maxBounds(next) {
      this.map.setMaxBounds(next);
    },
    minZoom: function minZoom(next) {
      this.map.setMinZoom(next);
    },
    maxZoom: function maxZoom(next) {
      this.map.setMaxZoom(next);
    },
    mapStyle: function mapStyle(next) {
      this.map.setStyle(next);
    },
    // TODO: make 'bounds' synced prop
    // bounds (next) { this.map.fitBounds(next, { linear: true, duration: 0 }) },
    collisionBoxes: function collisionBoxes(next) {
      this.map.showCollisionBoxes = next;
    },
    tileBoundaries: function tileBoundaries(next) {
      this.map.showTileBoundaries = next;
    },
    repaint: function repaint(next) {
      this.map.repaint = next;
    },
    zoom: function zoom(next) {
      this.map.setZoom(next);
    },
    center: function center(next) {
      this.map.setCenter(next);
    },
    bearing: function bearing(next) {
      this.map.setBearing(next);
    },
    pitch: function pitch(next) {
      this.map.setPitch(next);
    },
    light: function light(next) {
      this.map.setLigh(next);
    }
  };

  function watcher(prop, callback, next, prev) {
    var _this = this;

    if (this.initial) return;

    if (this.$listeners["update:".concat(prop)]) {
      if (this.propsIsUpdating[prop]) {
        this._watcher.active = false;
        this.$nextTick(function() {
          _this._watcher.active = true;
        });
      } else {
        this._watcher.active = true;
        callback(next, prev);
      }

      this.propsIsUpdating[prop] = false;
    } else {
      callback(next, prev);
    }
  }

  function makeWatchers() {
    var wrappers = {};
    Object.entries(watchers).forEach(function(prop) {
      wrappers[prop[0]] = function(next, prev) {
        return watcher.call(this, prop[0], prop[1].bind(this), next, prev);
      };
    });
    return wrappers;
  }

  var withWatchers = {
    watch: makeWatchers()
  };

  function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$1(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys$1(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }

  var withPrivateMethods = {
    methods: {
      $_updateSyncedPropsFabric: function $_updateSyncedPropsFabric(
        prop,
        data
      ) {
        var _this = this;

        return function() {
          _this.propsIsUpdating[prop] = true;
          var info = typeof data === "function" ? data() : data;
          return _this.$emit("update:".concat(prop), info);
        };
      },
      $_bindPropsUpdateEvents: function $_bindPropsUpdateEvents() {
        var _this2 = this;

        var syncedProps = [
          {
            events: ["moveend"],
            prop: "center",
            getter: this.map.getCenter.bind(this.map)
          },
          {
            events: ["zoomend"],
            prop: "zoom",
            getter: this.map.getZoom.bind(this.map)
          },
          {
            events: ["rotate"],
            prop: "bearing",
            getter: this.map.getBearing.bind(this.map)
          },
          {
            events: ["pitch"],
            prop: "pitch",
            getter: this.map.getPitch.bind(this.map)
          },
          {
            events: ["moveend", "zoomend", "rotate", "pitch"],
            prop: "bounds",
            getter: function getter() {
              var newBounds = _this2.map.getBounds();

              if (_this2.$props.bounds instanceof Array) {
                newBounds = newBounds.toArray();
              }

              return newBounds;
            }
          }
        ];
        syncedProps.forEach(function(_ref) {
          var events = _ref.events,
            prop = _ref.prop,
            getter = _ref.getter;
          events.forEach(function(event) {
            if (_this2.$listeners["update:".concat(prop)]) {
              _this2.map.on(
                event,
                _this2.$_updateSyncedPropsFabric(prop, getter)
              );
            }
          });
        });
      },
      $_loadMap: function $_loadMap() {
        var _this3 = this;

        return this.mapboxPromise.then(function(mapbox) {
          _this3.mapbox = mapbox.default ? mapbox.default : mapbox;
          return new Promise(function(resolve) {
            if (_this3.accessToken)
              _this3.mapbox.accessToken = _this3.accessToken;
            var map = new _this3.mapbox.Map(
              _objectSpread$1(
                _objectSpread$1({}, _this3._props),
                {},
                {
                  container: _this3.$refs.container,
                  style: _this3.mapStyle
                }
              )
            );
            map.on("load", function() {
              return resolve(map);
            });
          });
        });
      },
      $_RTLTextPluginError: function $_RTLTextPluginError(error) {
        this.$emit("rtl-plugin-error", {
          map: this.map,
          error: error
        });
      },
      $_bindMapEvents: function $_bindMapEvents(events) {
        var _this4 = this;

        Object.keys(this.$listeners).forEach(function(eventName) {
          if (events.includes(eventName)) {
            _this4.map.on(eventName, _this4.$_emitMapEvent);
          }
        });
      },
      $_unbindEvents: function $_unbindEvents(events) {
        var _this5 = this;

        events.forEach(function(eventName) {
          _this5.map.off(eventName, _this5.$_emitMapEvent);
        });
      }
    }
  };

  function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread$2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$2(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys$2(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }

  var composedMethodEvents = [
    {
      name: "moveend",
      check: function check(map, options) {
        return options.center && map.isMoving();
      }
    },
    {
      name: "zoomend",
      check: function check(map, options) {
        return (
          options.zoom !== undefined && options.zoom !== null && map.isZooming()
        );
      }
    },
    {
      name: "rotateend",
      check: function check(map, options) {
        return (
          options.bearing !== undefined &&
          options.bearing !== null &&
          map.isRotating()
        );
      }
    },
    {
      name: "pitchend",
      check: function check(map, options) {
        return (
          options.pitch !== undefined &&
          options.bearing !== null &&
          map.isMoving()
        );
      }
    }
  ];

  var composedMethodGetter = function composedMethodGetter(map) {
    return {
      center: map.getCenter(),
      zoom: map.getZoom(),
      bearing: map.getBearing(),
      pitch: map.getPitch()
    };
  };

  var composedMethodConfig = {
    events: composedMethodEvents,
    getter: composedMethodGetter
  };
  var moveMethodConfig = {
    events: [
      {
        name: "moveend",
        check: function check(map) {
          return map.isMoving();
        }
      }
    ],
    getter: function getter(map) {
      return {
        center: map.getCenter()
      };
    }
  };
  var zoomMethodConfig = {
    events: [
      {
        name: "zoomend",
        check: function check(map) {
          return map.isZooming();
        }
      }
    ],
    getter: function getter(map) {
      return {
        zoom: map.getZoom()
      };
    }
  };
  var rotateMethodConfig = {
    events: [
      {
        name: "rotateend",
        check: function check(map) {
          return map.isRotating();
        }
      }
    ],
    getter: function getter(map) {
      return {
        bearing: map.getBearing()
      };
    }
  };
  var methodsData = {
    setCenter: moveMethodConfig,
    panBy: moveMethodConfig,
    panTo: moveMethodConfig,
    setZoom: zoomMethodConfig,
    zoomTo: zoomMethodConfig,
    zoomIn: zoomMethodConfig,
    zoomOut: zoomMethodConfig,
    setBearing: rotateMethodConfig,
    rotateTo: rotateMethodConfig,
    resetNorth: rotateMethodConfig,
    snapToNorth: rotateMethodConfig,
    setPitch: {
      events: [
        {
          name: "pitchend",
          check: function check(map) {
            return true;
          }
        }
      ],
      getter: function getter(map) {
        return {
          pitch: map.getPitch()
        };
      }
    },
    fitBounds: {
      events: [
        {
          name: "zoomend",
          check: function check(map) {
            return map.isZooming();
          }
        },
        {
          name: "moveend",
          check: function check(map) {
            return map.isMoving();
          }
        },
        {
          name: "rotateend",
          check: function check(map) {
            return map.isRotating();
          }
        }
      ],
      getter: function getter(map) {
        return {
          zoom: map.getZoom(),
          bearing: map.getBearing(),
          pitch: map.getPitch(),
          center: map.getCenter()
        };
      }
    },
    fitScreenCoordinates: {
      events: [
        {
          name: "zoomend",
          check: function check(map, options) {
            return map.isZooming();
          }
        },
        {
          name: "moveend",
          check: function check(map, options) {
            return map.isMoving();
          }
        },
        {
          name: "rotateend",
          check: function check(map, options) {
            return options.bearing && map.isRotating();
          }
        }
      ],
      getter: function getter(map) {
        return {
          zoom: map.getZoom(),
          center: map.getCenter(),
          bearing: map.getBearing(),
          pitch: map.getPitch()
        };
      }
    },
    jumpTo: composedMethodConfig,
    easeTo: composedMethodConfig,
    flyTo: composedMethodConfig
  };

  function generateEventId(methodName) {
    return ""
      .concat(methodName, "-")
      .concat(("" + Math.random()).split(".")[1]);
  }

  function catchEventFabric(map, eventName, eventId, resolve) {
    var catchEvent = function catchEvent(event) {
      if (event.type !== eventName || event.eventId !== eventId) {
        return;
      }

      map.off(eventName, catchEvent);
      resolve(event);
    };

    return catchEvent;
  }

  function promisifyMethod(map, methodName) {
    var method = map[methodName];
    var argsCount = method.length;
    return function() {
      var handlers = [];
      var eventData = {
        eventId: generateEventId(methodName)
      }; // Creating list of events and event listeners

      var catchers = methodsData[methodName].events.map(function(event, index) {
        return {
          event: event,
          func: new Promise(function(resolve, reject) {
            handlers[index] = {
              event: event,
              func: catchEventFabric(
                map,
                event.name,
                eventData.eventId,
                resolve
              )
            };
            map.on(event.name, handlers[index].func);
          })
        };
      });
      var argsArray = []; // Creating list of arguments.

      for (var i = 0; i < argsCount; i++) {
        if (i === argsCount - 1) {
          // If args[i] is last argument, we assume that this is eventData argument,
          // merge it with eventData passed by user and add in the end of list of arguments
          argsArray.push(
            _objectSpread$2(
              _objectSpread$2({}, eventData),
              (i < 0 || arguments.length <= i ? undefined : arguments[i]) || {}
            )
          );
        } else {
          // If args[i] is not last argument, just add it in the list of arguments
          argsArray.push(
            (i < 0 || arguments.length <= i ? undefined : arguments[i]) || null
          );
        }
      }

      var funcs = [];
      var options = (arguments.length <= 0 ? undefined : arguments[0]) || {};

      try {
        method.apply(map, argsArray); // Filter catchers.
        // If map state is not changes (e.g. zoomTo(1) don't produce any events if map already on zoom 1),
        // just return resolved promise
        // .fitBounds() and .fitScreenCoordinates() needs special processing due to different number of arguments

        if (methodName === "fitBounds") {
          // args[0] is bounding box, options is args[1], but we don't need them to calculate events to listen
          options = {};
        }

        if (methodName === "fitScreenCoordinates") {
          options = {
            bearing: null
          };
          options.bearing = null; // bearing can be passed by user as optional argument

          if (
            typeof (arguments.length <= 2 ? undefined : arguments[2]) ===
            "number"
          ) {
            options.bearing = arguments.length <= 2 ? undefined : arguments[2];
          } // pass bearing merged with other options

          if (
            (arguments.length <= 3 ? undefined : arguments[3]) &&
            _typeof__default["default"](
              arguments.length <= 3 ? undefined : arguments[3]
            ) === "object"
          ) {
            options = _objectSpread$2(
              _objectSpread$2({}, options),
              arguments.length <= 3 ? undefined : arguments[3]
            );
          }
        }

        funcs = catchers.map(function(_ref) {
          var event = _ref.event,
            func = _ref.func;

          if (event.check(map, options)) {
            return func;
          } else {
            map.off(event.name, func);
            return Promise.resolve();
          }
        });
      } catch (err) {
        handlers.forEach(function(_ref2) {
          var event = _ref2.event,
            func = _ref2.func;
          map.off(event.name, func);
        });
        throw err;
      }

      return Promise.all(funcs).then(function() {
        return methodsData[methodName].getter(map);
      });
    };
  }

  function promisifyMap(map) {
    var toPromisify = Object.keys(methodsData);
    var actions = {};
    toPromisify.forEach(function(key) {
      if (toPromisify.indexOf(key) !== -1) {
        actions[key] = promisifyMethod(map, key);
      }
    });
    return actions;
  }

  function promisify(map) {
    var methodName =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    if (methodName) {
      return promisifyMethod(map, methodName);
    } else {
      return promisifyMap(map);
    }
  }

  function ownKeys$3(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread$3(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$3(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys$3(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
  var withAsyncActions = {
    created: function created() {
      this.actions = {};
    },
    methods: {
      $_registerAsyncActions: function $_registerAsyncActions(map) {
        this.actions = _objectSpread$3(
          _objectSpread$3({}, promisify(map)),
          {},
          {
            stop: function stop() {
              var _this = this;

              this.map.stop();
              var updatedProps = {
                pitch: this.map.getPitch(),
                zoom: this.map.getZoom(),
                bearing: this.map.getBearing(),
                center: this.map.getCenter()
              };
              Object.entries(updatedProps).forEach(function(prop) {
                _this.$_updateSyncedPropsFabric(prop[0], prop[1])();
              });
              return Promise.resolve(updatedProps);
            }
          }
        );
      }
    }
  };

  function ownKeys$4(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread$4(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$4(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys$4(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
  var GlMap = {
    name: "GlMap",
    mixins: [
      withWatchers,
      withAsyncActions,
      withPrivateMethods,
      withEventsMixin
    ],
    props: _objectSpread$4(
      {
        mapboxGl: {
          type: Object,
          default: null
        }
      },
      options
    ),
    provide: function provide() {
      var self = this;
      return {
        get mapbox() {
          return self.mapbox;
        },

        get map() {
          return self.map;
        },

        get actions() {
          return self.actions;
        }
      };
    },
    data: function data() {
      return {
        initial: true,
        initialized: false
      };
    },
    computed: {
      loaded: function loaded() {
        return this.map ? this.map.loaded() : false;
      },
      version: function version() {
        return this.map ? this.map.version : null;
      },
      isStyleLoaded: function isStyleLoaded() {
        return this.map ? this.map.isStyleLoaded() : false;
      },
      areTilesLoaded: function areTilesLoaded() {
        return this.map ? this.map.areTilesLoaded() : false;
      },
      isMoving: function isMoving() {
        return this.map ? this.map.isMoving() : false;
      },
      canvas: function canvas() {
        return this.map ? this.map.getCanvas() : null;
      },
      canvasContainer: function canvasContainer() {
        return this.map ? this.map.getCanvasContainer() : null;
      },
      images: function images() {
        return this.map ? this.map.listImages() : null;
      }
    },
    created: function created() {
      this.map = null;
      this.propsIsUpdating = {};
      this.$_containerVNode = null;
      this.mapboxPromise = this.mapboxGl
        ? Promise.resolve(this.mapboxGl)
        : import("mapbox-gl");
    },
    mounted: function mounted() {
      var _this = this;

      this.$_loadMap().then(function(map) {
        _this.map = map;

        if (
          _this.RTLTextPluginUrl !== undefined &&
          _this.mapbox.getRTLTextPluginStatus() !== "loaded"
        ) {
          _this.mapbox.setRTLTextPlugin(
            _this.RTLTextPluginUrl,
            _this.$_RTLTextPluginError
          );
        }

        var eventNames = Object.keys(mapEvents);

        _this.$_bindMapEvents(eventNames);

        _this.$_registerAsyncActions(map);

        _this.$_bindPropsUpdateEvents();

        _this.initial = false;
        _this.initialized = true;

        _this.$emit("load", {
          map: map,
          component: _this
        });
      });
    },
    beforeDestroy: function beforeDestroy() {
      var _this2 = this;

      this.$nextTick(function() {
        if (_this2.map) _this2.map.remove();
      });
    },
    render: function render(h) {
      if (!this.$$_containerVNode) {
        this.$_containerVNode = h("div", {
          id: this.container,
          ref: "container"
        });
      }

      return h(
        "div",
        {
          class: "mgl-map-wrapper"
        },
        [this.$_containerVNode, this.initialized ? this.$slots.default : null]
      );
    }
  };

  function ownKeys$5(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread$5(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$5(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys$5(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }

  var withSelfEventsMixin = {
    methods: {
      $_emitSelfEvent: function $_emitSelfEvent(event) {
        var data =
          arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {};
        this.$_emitMapEvent(
          event,
          _objectSpread$5(
            {
              control: this.control
            },
            data
          )
        );
      },

      /** Bind events for markers, popups and controls.
       * MapboxGL JS emits this events on popup or marker object,
       * so we treat them as 'self' events of these objects
       */
      $_bindSelfEvents: function $_bindSelfEvents(events, emitter) {
        var _this = this;

        Object.keys(this.$listeners).forEach(function(eventName) {
          if (events.includes(eventName)) {
            emitter.on(eventName, _this.$_emitSelfEvent);
          }
        });
      },
      $_unbindSelfEvents: function $_unbindSelfEvents(events, emitter) {
        var _this2 = this;

        if (events.length === 0) return;
        if (!emitter) return;
        events.forEach(function(eventName) {
          emitter.off(eventName, _this2.$_emitSelfEvent);
        });
      }
    }
  };

  var controlMixin = {
    mixins: [withEventsMixin, withSelfEventsMixin],
    inject: ["mapbox", "map", "actions"],
    props: {
      position: {
        type: String,
        default: "top-right"
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (this.map && this.control) {
        this.map.removeControl(this.control);
      }
    },
    methods: {
      $_addControl: function $_addControl() {
        try {
          this.map.addControl(this.control, this.position);
        } catch (err) {
          this.$_emitEvent("error", {
            error: err
          });
          return;
        }

        this.$_emitEvent("added", {
          control: this.control
        });
      }
    },
    render: function render() {}
  };

  var NavigationControl = {
    name: "NavigationControl",
    mixins: [controlMixin],
    props: {
      showCompass: {
        type: Boolean,
        default: true
      },
      showZoom: {
        type: Boolean,
        default: true
      }
    },
    created: function created() {
      this.control = new this.mapbox.NavigationControl(this.$props);
      this.$_addControl();
    }
  };

  var geolocationEvents = {
    trackuserlocationstart: "trackuserlocationstart",
    trackuserlocationend: "trackuserlocationend",
    geolocate: "geolocate",
    error: "error"
  };
  var GeolocateControl = {
    name: "GeolocateControl",
    mixins: [withEventsMixin, withSelfEventsMixin, controlMixin],
    props: {
      positionOptions: {
        type: Object,
        default: function _default() {
          return {
            enableHighAccuracy: false,
            timeout: 6000
          };
        }
      },
      fitBoundsOptions: {
        type: Object,
        default: function _default() {
          return {
            maxZoom: 15
          };
        }
      },
      trackUserLocation: {
        type: Boolean,
        default: false
      },
      showUserLocation: {
        type: Boolean,
        default: true
      }
    },
    created: function created() {
      var GeolocateControl = this.mapbox.GeolocateControl;
      this.control = new GeolocateControl(this.$props);
      this.$_addControl();
      this.$_bindSelfEvents(Object.keys(geolocationEvents), this.control);
    },
    methods: {
      trigger: function trigger() {
        if (this.control) {
          return this.control.trigger();
        }
      }
    }
  };

  var FullscreenControl = {
    name: "FullscreenControl",
    mixins: [controlMixin],
    props: {
      container: {
        type: HTMLElement,
        default: undefined
      }
    },
    created: function created() {
      this.control = new this.mapbox.FullscreenControl(this.$props);
      this.$_addControl();
    }
  };

  var AttributionControl = {
    name: "AttributionControl",
    mixins: [controlMixin],
    props: {
      compact: {
        type: Boolean,
        default: true
      },
      customAttribution: {
        type: [String, Array],
        deafault: undefined
      }
    },
    created: function created() {
      this.control = new this.mapbox.AttributionControl(this.$props);
      this.$_addControl();
    }
  };

  var ScaleControl = {
    name: "ScaleControl",
    mixins: [controlMixin],
    props: {
      maxWidth: {
        type: Number,
        default: 150
      },
      unit: {
        type: String,
        default: "metric",
        validator: function validator(value) {
          return ["imperial", "metric", "nautical"].includes(value);
        }
      }
    },
    watch: {
      unit: function unit(next, prev) {
        if (this.control && next !== prev) {
          this.control.setUnit(next);
        }
      }
    },
    created: function created() {
      this.control = new this.mapbox.ScaleControl(this.$props);
      this.$_addControl();
    }
  };

  function ownKeys$6(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread$6(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$6(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys$6(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
  var markerEvents = {
    drag: "drag",
    dragstart: "dragstart",
    dragend: "dragend"
  };
  var markerDOMEvents = {
    click: "click",
    mouseenter: "mouseenter",
    mouseleave: "mouseleave"
  };
  var Marker = {
    name: "MapMarker",
    mixins: [withEventsMixin, withSelfEventsMixin],
    inject: ["mapbox", "map"],
    provide: function provide() {
      var self = this;
      return {
        get marker() {
          return self.marker;
        }
      };
    },
    props: {
      // mapbox marker options
      offset: {
        type: [Object, Array],
        default: function _default() {
          return [0, 0];
        }
      },
      coordinates: {
        type: Array,
        required: true
      },
      color: {
        type: String
      },
      anchor: {
        type: String,
        default: "center"
      },
      draggable: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        initial: true,
        marker: undefined
      };
    },
    watch: {
      coordinates: function coordinates(lngLat) {
        if (this.initial) return;
        this.marker.setLngLat(lngLat);
      },
      draggable: function draggable(next) {
        if (this.initial) return;
        this.marker.setDraggable(next);
      }
    },
    mounted: function mounted() {
      var _this = this;

      var markerOptions = _objectSpread$6({}, this.$props);

      if (this.$slots.marker) {
        markerOptions.element = this.$slots.marker[0].elm;
      }

      this.marker = new this.mapbox.Marker(markerOptions);

      if (this.$listeners["update:coordinates"]) {
        this.marker.on("dragend", function(event) {
          var newCoordinates;

          if (_this.coordinates instanceof Array) {
            newCoordinates = [
              event.target._lngLat.lng,
              event.target._lngLat.lat
            ];
          } else {
            newCoordinates = event.target._lngLat;
          }

          _this.$emit("update:coordinates", newCoordinates);
        });
      }

      var eventNames = Object.keys(markerEvents);
      this.$_bindSelfEvents(eventNames, this.marker);
      this.initial = false;
      this.$_addMarker();
    },
    beforeDestroy: function beforeDestroy() {
      if (this.map !== undefined && this.marker !== undefined) {
        this.marker.remove();
      }
    },
    methods: {
      $_addMarker: function $_addMarker() {
        this.marker.setLngLat(this.coordinates).addTo(this.map);
        this.$_bindMarkerDOMEvents();
        this.$_emitEvent("added", {
          marker: this.marker
        });
      },
      $_emitSelfEvent: function $_emitSelfEvent(event) {
        this.$_emitMapEvent(event, {
          marker: this.marker
        });
      },
      $_bindMarkerDOMEvents: function $_bindMarkerDOMEvents() {
        var _this2 = this;

        Object.keys(this.$listeners).forEach(function(key) {
          if (Object.values(markerDOMEvents).includes(key)) {
            _this2.marker._element.addEventListener(key, function(event) {
              _this2.$_emitSelfEvent(event);
            });
          }
        });
      },
      remove: function remove() {
        this.marker.remove();
        this.$_emitEvent("removed");
      },
      togglePopup: function togglePopup() {
        return this.marker.togglePopup();
      }
    },
    render: function render(h) {
      return h(
        "div",
        {
          style: {
            display: "none"
          }
        },
        [this.$slots.marker, this.marker ? this.$slots.default : null]
      );
    }
  };

  var popupEvents = {
    open: "open",
    close: "close"
  };
  /**
   * Popup component.
   * @see See [Mapbox Gl JS Popup](https://www.mapbox.com/mapbox-gl-js/api/#popup)
   */

  var Popup = {
    name: "Popup",
    mixins: [withEventsMixin, withSelfEventsMixin],
    inject: {
      mapbox: {
        default: null
      },
      map: {
        default: null
      },
      marker: {
        default: null
      }
    },
    props: {
      /**
       * If `true`, a close button will appear in the top right corner of the popup.
       * Mapbox GL popup option.
       */
      closeButton: {
        type: Boolean,
        default: true
      },

      /**
       * Mapbox GL popup option.
       * If `true`, the popup will closed when the map is clicked. .
       */
      closeOnClick: {
        type: Boolean,
        default: true
      },

      /**
       * Mapbox GL popup option.
       * A string indicating the popup's location relative to the coordinate set.
       * If unset the anchor will be dynamically set to ensure the popup falls within the map container with a preference for 'bottom' .
       *  'top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'
       */
      anchor: {
        validator: function validator(value) {
          var allowedValues = [
            "top",
            "bottom",
            "left",
            "right",
            "top-left",
            "top-right",
            "bottom-left",
            "bottom-right"
          ];
          return typeof value === "string" && allowedValues.includes(value);
        },
        default: undefined
      },

      /**
       * Mapbox GL popup option.
       * A pixel offset applied to the popup's location
       * a single number specifying a distance from the popup's location
       * a PointLike specifying a constant offset
       * an object of Points specifing an offset for each anchor position Negative offsets indicate left and up.
       */
      offset: {
        type: [Number, Object, Array],
        default: function _default() {
          return [0, 0];
        }
      },
      coordinates: {
        type: Array
      },

      /**
       * Component option.
       * If `true`, popup treats data in deafult slot as plain text
       */
      onlyText: {
        type: Boolean,
        default: false
      },
      showed: {
        type: Boolean,
        default: false
      }
    },
    data: function data() {
      return {
        initial: true,
        popup: undefined
      };
    },
    computed: {
      open: {
        get: function get() {
          if (this.popup !== undefined) {
            return this.popup.isOpen();
          }

          return false;
        },
        set: function set(value) {
          if (this.map && this.popup) {
            if (!value) {
              this.popup.remove();
            } else {
              this.popup.addTo(this.map);
            }
          }
        }
      }
    },
    watch: {
      coordinates: function coordinates(lngLat) {
        if (this.initial) return;
        this.popup.setLngLat(lngLat);
      },
      showed: function showed(next, prev) {
        if (next !== prev) {
          this.open = next;

          if (this.marker) {
            this.marker.togglePopup();
          }
        }
      }
    },
    created: function created() {
      this.popup = new this.mapbox.Popup(this.$props);
    },
    mounted: function mounted() {
      this.$_addPopup();
      this.initial = false;
    },
    beforeDestroy: function beforeDestroy() {
      if (this.map) {
        this.popup.remove();
        this.$_emitEvent("removed");
      }
    },
    methods: {
      $_addPopup: function $_addPopup() {
        this.popup = new this.mapbox.Popup(this.$props);

        if (this.coordinates !== undefined) {
          this.popup.setLngLat(this.coordinates);
        }

        if (this.$slots.default !== undefined) {
          if (this.onlyText) {
            if (this.$slots.default[0].elm.nodeType === 3) {
              var tmpEl = document.createElement("span");
              tmpEl.appendChild(this.$slots.default[0].elm);
              this.popup.setText(tmpEl.innerText);
            } else {
              this.popup.setText(this.$slots.default[0].elm.innerText);
            }
          } else {
            this.popup.setDOMContent(this.$slots.default[0].elm);
          }
        }

        this.$_bindSelfEvents(Object.keys(popupEvents), this.popup);
        this.$_emitEvent("added", {
          popup: this.popup
        });

        if (this.marker) {
          this.marker.setPopup(this.popup);
        }

        if (this.showed) {
          this.open = true;

          if (this.marker) {
            this.marker.togglePopup();
          }
        }
      },
      $_emitSelfEvent: function $_emitSelfEvent(event) {
        this.$_emitMapEvent(event, {
          popup: this.popup
        });
      },
      remove: function remove() {
        this.popup.remove();
        this.$_emitEvent("remove", {
          popup: this.popup
        });
      }
    },
    render: function render(h) {
      return h(
        "div",
        {
          style: {
            display: "none"
          }
        },
        [this.$slots.default]
      );
    }
  };

  var layerEvents = [
    "mousedown",
    "mouseup",
    "click",
    "dblclick",
    "mousemove",
    "mouseenter",
    "mouseleave",
    "mouseover",
    "mouseout",
    "contextmenu",
    "touchstart",
    "touchend",
    "touchcancel"
  ];

  function ownKeys$7(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread$7(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$7(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys$7(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
  var mapboxSourceProps = {
    sourceId: {
      type: String,
      required: true
    },
    source: {
      type: [Object, String],
      default: undefined
    }
  };
  var mapboxLayerStyleProps = {
    layerId: {
      type: String,
      required: true
    },
    layer: {
      type: Object,
      required: true
    },
    before: {
      type: String,
      default: undefined
    }
  };
  var componentProps = {
    clearSource: {
      type: Boolean,
      default: true
    },
    replaceSource: {
      type: Boolean,
      default: false
    },
    replace: {
      type: Boolean,
      default: false
    }
  };
  var layerMixin = {
    mixins: [withEventsMixin],
    props: _objectSpread$7(
      _objectSpread$7(
        _objectSpread$7({}, mapboxSourceProps),
        mapboxLayerStyleProps
      ),
      componentProps
    ),
    inject: ["mapbox", "map"],
    data: function data() {
      return {
        initial: true
      };
    },
    computed: {
      sourceLoaded: function sourceLoaded() {
        return this.map ? this.map.isSourceLoaded(this.sourceId) : false;
      },
      mapLayer: function mapLayer() {
        return this.map ? this.map.getLayer(this.layerId) : null;
      },
      mapSource: function mapSource() {
        return this.map ? this.map.getSource(this.sourceId) : null;
      }
    },
    created: function created() {
      if (this.layer.minzoom) {
        this.$watch("layer.minzoom", function(next) {
          if (this.initial) return;
          this.map.setLayerZoomRange(this.layerId, next, this.layer.maxzoom);
        });
      }

      if (this.layer.maxzoom) {
        this.$watch("layer.maxzoom", function(next) {
          if (this.initial) return;
          this.map.setLayerZoomRange(this.layerId, this.layer.minzoom, next);
        });
      }

      if (this.layer.paint) {
        this.$watch(
          "layer.paint",
          function(next) {
            if (this.initial) return;

            if (next) {
              for (
                var _i = 0, _Object$keys = Object.keys(next);
                _i < _Object$keys.length;
                _i++
              ) {
                var prop = _Object$keys[_i];
                this.map.setPaintProperty(this.layerId, prop, next[prop]);
              }
            }
          },
          {
            deep: true
          }
        );
      }

      if (this.layer.layout) {
        this.$watch(
          "layer.layout",
          function(next) {
            if (this.initial) return;

            if (next) {
              for (
                var _i2 = 0, _Object$keys2 = Object.keys(next);
                _i2 < _Object$keys2.length;
                _i2++
              ) {
                var prop = _Object$keys2[_i2];
                this.map.setLayoutProperty(this.layerId, prop, next[prop]);
              }
            }
          },
          {
            deep: true
          }
        );
      }

      if (this.layer.filter) {
        this.$watch(
          "layer.filter",
          function(next) {
            if (this.initial) return;
            this.map.setFilter(this.layerId, next);
          },
          {
            deep: true
          }
        );
      }
    },
    beforeDestroy: function beforeDestroy() {
      if (this.map && this.map.loaded()) {
        try {
          this.map.removeLayer(this.layerId);
        } catch (err) {
          this.$_emitEvent("layer-does-not-exist", {
            layerId: this.sourceId,
            error: err
          });
        }

        if (this.clearSource) {
          try {
            this.map.removeSource(this.sourceId);
          } catch (err) {
            this.$_emitEvent("source-does-not-exist", {
              sourceId: this.sourceId,
              error: err
            });
          }
        }
      }
    },
    methods: {
      $_emitLayerMapEvent: function $_emitLayerMapEvent(event) {
        return this.$_emitMapEvent(event, {
          layerId: this.layerId
        });
      },
      $_bindLayerEvents: function $_bindLayerEvents(events) {
        var _this = this;

        Object.keys(this.$listeners).forEach(function(eventName) {
          if (events.includes(eventName)) {
            _this.map.on(eventName, _this.layerId, _this.$_emitLayerMapEvent);
          }
        });
      },
      $_unbindEvents: function $_unbindEvents(events) {
        var _this2 = this;

        if (this.map) {
          events.forEach(function(eventName) {
            _this2.map.off(
              eventName,
              _this2.layerId,
              _this2.$_emitLayerMapEvent
            );
          });
        }
      },
      $_watchSourceLoading: function $_watchSourceLoading(data) {
        if (data.dataType === "source" && data.sourceId === this.sourceId) {
          this.$_emitEvent("layer-source-loading", {
            sourceId: this.sourceId
          });
          this.map.off("dataloading", this.$_watchSourceLoading);
        }
      },
      move: function move(beforeId) {
        this.map.moveLayer(this.layerId, beforeId);
        this.$_emitEvent("layer-moved", {
          layerId: this.layerId,
          beforeId: beforeId
        });
      },
      remove: function remove() {
        this.map.removeLayer(this.layerId);
        this.map.removeSource(this.sourceId);
        this.$_emitEvent("layer-removed", {
          layerId: this.layerId
        });
        this.$destroy();
      }
    },
    render: function render() {}
  };

  function ownKeys$8(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread$8(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$8(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys$8(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
  var GeojsonLayer = {
    name: "GeojsonLayer",
    mixins: [layerMixin],
    computed: {
      getSourceFeatures: function getSourceFeatures() {
        var _this = this;

        return function(filter) {
          if (_this.map) {
            return _this.map.querySourceFeatures(_this.sourceId, {
              filter: filter
            });
          }

          return null;
        };
      },
      getRenderedFeatures: function getRenderedFeatures() {
        var _this2 = this;

        return function(geometry, filter) {
          if (_this2.map) {
            return _this2.map.queryRenderedFeatures(geometry, {
              layers: [_this2.layerId],
              filter: filter
            });
          }

          return null;
        };
      },
      getClusterExpansionZoom: function getClusterExpansionZoom() {
        var _this3 = this;

        return function(clusterId) {
          return new Promise(function(resolve, reject) {
            if (_this3.mapSource) {
              _this3.mapSource.getClusterExpansionZoom(clusterId, function(
                err,
                zoom
              ) {
                if (err) {
                  return reject(err);
                }

                return resolve(zoom);
              });
            } else {
              return reject(
                new Error(
                  "Map source with id ".concat(_this3.sourceId, " not found.")
                )
              );
            }
          });
        };
      },
      getClusterChildren: function getClusterChildren() {
        var _this4 = this;

        return function(clusterId) {
          return new Promise(function(resolve, reject) {
            var source = _this4.mapSource;

            if (source) {
              source.getClusterChildren(clusterId, function(err, features) {
                if (err) {
                  return reject(err);
                }

                return resolve(features);
              });
            } else {
              return reject(
                new Error(
                  "Map source with id ".concat(_this4.sourceId, " not found.")
                )
              );
            }
          });
        };
      },
      getClusterLeaves: function getClusterLeaves() {
        var _this5 = this;

        return function() {
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }

          return new Promise(function(resolve, reject) {
            if (_this5.mapSource) {
              var _this5$mapSource;

              (_this5$mapSource = _this5.mapSource).getClusterLeaves.apply(
                _this5$mapSource,
                args.concat([
                  function(err, features) {
                    if (err) {
                      return reject(err);
                    }

                    return resolve(features);
                  }
                ])
              );
            } else {
              return reject(
                new Error(
                  "Map source with id ".concat(_this5.sourceId, " not found.")
                )
              );
            }
          });
        };
      }
    },
    created: function created() {
      if (this.source) {
        this.$watch(
          "source.data",
          function(next) {
            if (this.initial) return;
            this.mapSource.setData(next);
          },
          {
            deep: true
          }
        );
      }

      this.$_deferredMount();
    },
    methods: {
      $_deferredMount: function $_deferredMount() {
        // this.map = payload.map;
        this.map.on("dataloading", this.$_watchSourceLoading);

        if (this.source) {
          var source = _objectSpread$8(
            {
              type: "geojson"
            },
            this.source
          );

          try {
            this.map.addSource(this.sourceId, source);
          } catch (err) {
            if (this.replaceSource) {
              this.map.removeSource(this.sourceId);
              this.map.addSource(this.sourceId, source);
            }
          }
        }

        this.$_addLayer();
        this.$_bindLayerEvents(layerEvents);
        this.map.off("dataloading", this.$_watchSourceLoading);
        this.initial = false;
      },
      $_addLayer: function $_addLayer() {
        var existed = this.map.getLayer(this.layerId);

        if (existed) {
          if (this.replace) {
            this.map.removeLayer(this.layerId);
          } else {
            this.$_emitEvent("layer-exists", {
              layerId: this.layerId
            });
            return existed;
          }
        }

        var layer = _objectSpread$8(
          {
            id: this.layerId,
            source: this.sourceId
          },
          this.layer
        );

        this.map.addLayer(layer, this.before);
        this.$_emitEvent("added", {
          layerId: this.layerId
        });
      },
      setFeatureState: function setFeatureState(featureId, state) {
        if (this.map) {
          var params = {
            id: featureId,
            source: this.source
          };
          return this.map.setFeatureState(params, state);
        }
      },
      getFeatureState: function getFeatureState(featureId) {
        if (this.map) {
          var params = {
            id: featureId,
            source: this.source
          };
          return this.map.getFeatureState(params);
        }
      },
      removeFeatureState: function removeFeatureState(
        featureId,
        sourceLayer,
        key
      ) {
        if (this.map) {
          var params = {
            id: featureId,
            source: this.source,
            sourceLayer: sourceLayer
          };
          return this.map.removeFeatureState(params, key);
        }
      }
    }
  };

  function ownKeys$9(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread$9(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$9(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys$9(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
  var ImageLayer = {
    name: "ImageLayer",
    mixins: [layerMixin],
    created: function created() {
      if (this.source) {
        if (this.source.coordinates) {
          this.$watch(
            "source.coordinates",
            function(next) {
              if (this.initial) return;

              if (next) {
                this.mapSource.setCoordinates(next);
              }
            },
            {
              deep: true
            }
          );
        }

        if (this.source.url) {
          this.$watch(
            "source.url",
            function(next) {
              if (this.initial) return;

              if (next) {
                this.mapSource.updateImage({
                  url: next,
                  coordinates: this.source.coordinates
                });
              }
            },
            {
              deep: true
            }
          );
        }
      }

      this.$_deferredMount();
    },
    methods: {
      $_deferredMount: function $_deferredMount() {
        var source = _objectSpread$9(
          {
            type: "image"
          },
          this.source
        );

        this.map.on("dataloading", this.$_watchSourceLoading);

        try {
          this.map.addSource(this.sourceId, source);
        } catch (err) {
          if (this.replaceSource) {
            this.map.removeSource(this.sourceId);
            this.map.addSource(this.sourceId, source);
          }
        }

        this.$_addLayer();
        this.$_bindLayerEvents(layerEvents);
        this.initial = false;
      },
      $_addLayer: function $_addLayer() {
        var existed = this.map.getLayer(this.layerId);

        if (existed) {
          if (this.replace) {
            this.map.removeLayer(this.layerId);
          } else {
            this.$_emitEvent("layer-exists", {
              layerId: this.layerId
            });
            return existed;
          }
        }

        var layer = _objectSpread$9(
          {
            id: this.layerId,
            source: this.sourceId,
            type: "raster"
          },
          this.layer
        );

        this.map.addLayer(layer, this.before);
        this.$_emitEvent("added", {
          layerId: this.layerId
        });
      }
    }
  };

  function ownKeys$a(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread$a(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$a(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys$a(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
  var CanvasLayer = {
    name: "CanvasLayer",
    mixins: [layerMixin],
    inject: ["mapbox", "map"],
    props: {
      source: {
        type: Object,
        required: true
      },
      layer: {
        type: Object,
        default: null
      }
    },
    computed: {
      canvasElement: function canvasElement() {
        return this.mapSource ? this.mapSource.getCanvas() : null;
      }
    },
    watch: {
      coordinates: function coordinates(val) {
        if (this.initial) return;
        this.mapSource.setCoordinates(val);
      }
    },
    created: function created() {
      this.$_deferredMount();
    },
    methods: {
      $_deferredMount: function $_deferredMount() {
        var source = _objectSpread$a(
          {
            type: "canvas"
          },
          this.source
        );

        this.map.on("dataloading", this.$_watchSourceLoading);

        try {
          this.map.addSource(this.sourceId, source);
        } catch (err) {
          if (this.replaceSource) {
            this.map.removeSource(this.sourceId);
            this.map.addSource(this.sourceId, source);
          }
        }

        this.$_addLayer();
        this.$_bindLayerEvents(layerEvents);
        this.initial = false;
      },
      $_addLayer: function $_addLayer() {
        var existed = this.map.getLayer(this.layerId);

        if (existed) {
          if (this.replace) {
            this.map.removeLayer(this.layerId);
          } else {
            this.$_emitEvent("layer-exists", {
              layerId: this.layerId
            });
            return existed;
          }
        }

        var layer = _objectSpread$a(
          {
            id: this.layerId,
            source: this.sourceId,
            type: "raster"
          },
          this.layer
        );

        this.map.addLayer(layer, this.before);
        this.$_emitEvent("added", {
          layerId: this.layerId,
          canvas: this.canvasElement
        });
      }
    }
  };

  function ownKeys$b(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread$b(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$b(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys$b(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
  var VideoLayer = {
    name: "VideoLayer",
    mixins: [layerMixin],
    computed: {
      video: function video() {
        return this.map.getSource(this.sourceId).getVideo();
      }
    },
    created: function created() {
      if (this.source && this.source.coordinates) {
        this.$watch("source.coordinates", function(next) {
          if (this.initial) return;
          this.mapSource.setCoordinates(next);
        });
      }

      this.$_deferredMount();
    },
    methods: {
      $_deferredMount: function $_deferredMount() {
        var source = _objectSpread$b(
          {
            type: "video"
          },
          this.source
        );

        this.map.on("dataloading", this.$_watchSourceLoading);

        try {
          this.map.addSource(this.sourceId, source);
        } catch (err) {
          if (this.replaceSource) {
            this.map.removeSource(this.sourceId);
            this.map.addSource(this.sourceId, source);
          }
        }

        this.$_addLayer();
        this.$_bindLayerEvents(layerEvents);
        this.initial = false;
      },
      $_addLayer: function $_addLayer() {
        var existed = this.map.getLayer(this.layerId);

        if (existed) {
          if (this.replace) {
            this.map.removeLayer(this.layerId);
          } else {
            this.$_emitEvent("layer-exists", {
              layerId: this.layerId
            });
            return existed;
          }
        }

        var layer = _objectSpread$b(
          {
            id: this.layerId,
            source: this.sourceId,
            type: "background"
          },
          this.layer
        );

        this.map.addLayer(layer, this.before);
        this.$_emitEvent("added", {
          layerId: this.layerId
        });
      }
    }
  };

  function ownKeys$c(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread$c(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$c(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys$c(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
  var VectorLayer = {
    name: "VectorLayer",
    mixins: [layerMixin],
    computed: {
      getSourceFeatures: function getSourceFeatures() {
        var _this = this;

        return function(filter) {
          if (_this.map) {
            return _this.map.querySourceFeatures(_this.sourceId, {
              sourceLayer: _this.layer["source-layer"],
              filter: filter
            });
          }

          return null;
        };
      },
      getRenderedFeatures: function getRenderedFeatures() {
        var _this2 = this;

        return function(geometry, filter) {
          if (_this2.map) {
            return _this2.map.queryRenderedFeatures(geometry, {
              layers: [_this2.layerId],
              filter: filter
            });
          }

          return null;
        };
      }
    },
    watch: {
      filter: function filter(_filter) {
        if (this.initial) return;
        this.map.setFilter(this.layerId, _filter);
      }
    },
    created: function created() {
      this.$_deferredMount();
    },
    methods: {
      $_deferredMount: function $_deferredMount() {
        var source = _objectSpread$c(
          {
            type: "vector"
          },
          this.source
        );

        this.map.on("dataloading", this.$_watchSourceLoading);

        try {
          this.map.addSource(this.sourceId, source);
        } catch (err) {
          if (this.replaceSource) {
            this.map.removeSource(this.sourceId);
            this.map.addSource(this.sourceId, source);
          }
        }

        this.$_addLayer();
        this.$_bindLayerEvents(layerEvents);
        this.map.off("dataloading", this.$_watchSourceLoading);
        this.initial = false;
      },
      $_addLayer: function $_addLayer() {
        var existed = this.map.getLayer(this.layerId);

        if (existed) {
          if (this.replace) {
            this.map.removeLayer(this.layerId);
          } else {
            this.$_emitEvent("layer-exists", {
              layerId: this.layerId
            });
            return existed;
          }
        }

        var layer = _objectSpread$c(
          {
            id: this.layerId,
            source: this.sourceId
          },
          this.layer
        );

        this.map.addLayer(layer, this.before);
        this.$_emitEvent("added", {
          layerId: this.layerId
        });
      },
      setFeatureState: function setFeatureState(featureId, state) {
        if (this.map) {
          var params = {
            id: featureId,
            source: this.sourceId,
            "source-layer": this.layer["source-layer"]
          };
          return this.map.setFeatureState(params, state);
        }
      },
      getFeatureState: function getFeatureState(featureId) {
        if (this.map) {
          var params = {
            id: featureId,
            source: this.source,
            "source-layer": this.layer["source-layer"]
          };
          return this.map.getFeatureState(params);
        }
      }
    }
  };

  function ownKeys$d(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys.push.apply(keys, symbols);
    }
    return keys;
  }

  function _objectSpread$d(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys$d(Object(source), true).forEach(function(key) {
          _defineProperty__default["default"](target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        );
      } else {
        ownKeys$d(Object(source)).forEach(function(key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
      }
    }
    return target;
  }
  var RasterLayer = {
    name: "RasterLayer",
    mixins: [layerMixin],
    created: function created() {
      this.$_deferredMount();
    },
    methods: {
      $_deferredMount: function $_deferredMount() {
        var source = _objectSpread$d(
          {
            type: "raster"
          },
          this.source
        );

        this.map.on("dataloading", this.$_watchSourceLoading);

        try {
          this.map.addSource(this.sourceId, source);
        } catch (err) {
          if (this.replaceSource) {
            this.map.removeSource(this.sourceId);
            this.map.addSource(this.sourceId, source);
          }
        }

        this.$_addLayer();
        this.$_bindLayerEvents(layerEvents);
        this.map.off("dataloading", this.$_watchSourceLoading);
        this.initial = false;
      },
      $_addLayer: function $_addLayer() {
        var existed = this.map.getLayer(this.layerId);

        if (existed) {
          if (this.replace) {
            this.map.removeLayer(this.layerId);
          } else {
            this.$_emitEvent("layer-exists", {
              layerId: this.layerId
            });
            return existed;
          }
        }

        var layer = _objectSpread$d(
          {
            id: this.layerId,
            type: "raster",
            source: this.sourceId
          },
          this.layer
        );

        this.map.addLayer(layer, this.before);
        this.$_emitEvent("added", {
          layerId: this.layerId
        });
      }
    }
  };

  var withEvents = withEventsMixin;
  var withSelfEvents = withSelfEventsMixin;
  var asControl = controlMixin;
  var asLayer = layerMixin;
  var $helpers = {
    withEvents: withEventsMixin,
    withSelfEvents: withSelfEventsMixin,
    asControl: controlMixin,
    asLayer: layerMixin
  };
  var MglMap = GlMap;
  var MglNavigationControl = NavigationControl;
  var MglGeolocateControl = GeolocateControl;
  var MglFullscreenControl = FullscreenControl;
  var MglAttributionControl = AttributionControl;
  var MglScaleControl = ScaleControl;
  var MglGeojsonLayer = GeojsonLayer;
  var MglImageLayer = ImageLayer;
  var MglCanvasLayer = CanvasLayer;
  var MglVideoLayer = VideoLayer;
  var MglVectorLayer = VectorLayer;
  var MglRasterLayer = RasterLayer;
  var MglMarker = Marker;
  var MglPopup = Popup;

  exports.$helpers = $helpers;
  exports.MglAttributionControl = MglAttributionControl;
  exports.MglCanvasLayer = MglCanvasLayer;
  exports.MglFullscreenControl = MglFullscreenControl;
  exports.MglGeojsonLayer = MglGeojsonLayer;
  exports.MglGeolocateControl = MglGeolocateControl;
  exports.MglImageLayer = MglImageLayer;
  exports.MglMap = MglMap;
  exports.MglMarker = MglMarker;
  exports.MglNavigationControl = MglNavigationControl;
  exports.MglPopup = MglPopup;
  exports.MglRasterLayer = MglRasterLayer;
  exports.MglScaleControl = MglScaleControl;
  exports.MglVectorLayer = MglVectorLayer;
  exports.MglVideoLayer = MglVideoLayer;
  exports.asControl = asControl;
  exports.asLayer = asLayer;
  exports.withEvents = withEvents;
  exports.withSelfEvents = withSelfEvents;

  Object.defineProperty(exports, "__esModule", { value: true });
});
