(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-mapbox"] = factory();
	else
		root["vue-mapbox"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1991":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var invoke = __webpack_require__("31f4");
var html = __webpack_require__("fab2");
var cel = __webpack_require__("230e");
var global = __webpack_require__("7726");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__("2d95")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "1fa8":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("cb7c");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split) {
  'use strict';
  var isRegExp = __webpack_require__("aae3");
  var _split = $split;
  var $push = [].push;
  var $SPLIT = 'split';
  var LENGTH = 'length';
  var LAST_INDEX = 'lastIndex';
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while (match = separatorCopy.exec(string)) {
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          // eslint-disable-next-line no-loop-func
          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
          });
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    $split = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit) {
    var O = defined(this);
    var fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "31f4":
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "37c8":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("2b4c");


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3a72":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var LIBRARY = __webpack_require__("2d00");
var wksExt = __webpack_require__("37c8");
var defineProperty = __webpack_require__("86cc").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "4a59":
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__("9b43");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var anObject = __webpack_require__("cb7c");
var toLength = __webpack_require__("9def");
var getIterFn = __webpack_require__("27ee");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "504c":
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__("0d58");
var toIObject = __webpack_require__("6821");
var isEnum = __webpack_require__("52a7").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "551c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var global = __webpack_require__("7726");
var ctx = __webpack_require__("9b43");
var classof = __webpack_require__("23c6");
var $export = __webpack_require__("5ca1");
var isObject = __webpack_require__("d3f4");
var aFunction = __webpack_require__("d8e8");
var anInstance = __webpack_require__("f605");
var forOf = __webpack_require__("4a59");
var speciesConstructor = __webpack_require__("ebd6");
var task = __webpack_require__("1991").set;
var microtask = __webpack_require__("8079")();
var newPromiseCapabilityModule = __webpack_require__("a5b8");
var perform = __webpack_require__("9c80");
var userAgent = __webpack_require__("a25f");
var promiseResolve = __webpack_require__("bcaa");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__("2b4c")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__("dcbc")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__("7f20")($Promise, PROMISE);
__webpack_require__("7a56")(PROMISE);
Wrapper = __webpack_require__("8378")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__("5cc5")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "67ab":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("ca5a")('meta');
var isObject = __webpack_require__("d3f4");
var has = __webpack_require__("69a8");
var setDesc = __webpack_require__("86cc").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("79e5")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7bbc":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("6821");
var gOPN = __webpack_require__("9093").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8079":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var macrotask = __webpack_require__("1991").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__("2d95")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "8615":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("5ca1");
var $values = __webpack_require__("504c")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "8a81":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var DESCRIPTORS = __webpack_require__("9e1e");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var META = __webpack_require__("67ab").KEY;
var $fails = __webpack_require__("79e5");
var shared = __webpack_require__("5537");
var setToStringTag = __webpack_require__("7f20");
var uid = __webpack_require__("ca5a");
var wks = __webpack_require__("2b4c");
var wksExt = __webpack_require__("37c8");
var wksDefine = __webpack_require__("3a72");
var enumKeys = __webpack_require__("d4c0");
var isArray = __webpack_require__("1169");
var anObject = __webpack_require__("cb7c");
var isObject = __webpack_require__("d3f4");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var createDesc = __webpack_require__("4630");
var _create = __webpack_require__("2aeb");
var gOPNExt = __webpack_require__("7bbc");
var $GOPD = __webpack_require__("11e9");
var $DP = __webpack_require__("86cc");
var $keys = __webpack_require__("0d58");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("9093").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("52a7").f = $propertyIsEnumerable;
  __webpack_require__("2621").f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("2d00")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("32e9")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9c80":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a25f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace) {
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue) {
    'use strict';
    var O = defined(this);
    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});


/***/ }),

/***/ "a5b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__("d8e8");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "aa77":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("5ca1");
var defined = __webpack_require__("be13");
var fails = __webpack_require__("79e5");
var spaces = __webpack_require__("fdef");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac4d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("3a72")('asyncIterator');


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "bcaa":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var isObject = __webpack_require__("d3f4");
var newPromiseCapability = __webpack_require__("a5b8");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c5f6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var cof = __webpack_require__("2d95");
var inheritIfRequired = __webpack_require__("5dbc");
var toPrimitive = __webpack_require__("6a99");
var fails = __webpack_require__("79e5");
var gOPN = __webpack_require__("9093").f;
var gOPD = __webpack_require__("11e9").f;
var dP = __webpack_require__("86cc").f;
var $trim = __webpack_require__("aa77").trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__("2aeb")(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__("9e1e") ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__("2aba")(global, NUMBER, $Number);
}


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d4c0":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "dcbc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("2aba");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "f605":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.values.js
var es7_object_values = __webpack_require__("8615");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GlMap.vue?vue&type=template&id=5fd219da&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",attrs:{"id":_vm.container}},[_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GlMap.vue?vue&type=template&id=5fd219da&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("ac4d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/builtin/es6/objectSpread.js

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__("551c");

// CONCATENATED MODULE: ./src/lib/events.js
/* eslint-disable key-spacing */
/* harmony default export */ var events = ({
  resize: 'resize',
  webglcontextlost: 'webglcontextlost',
  webglcontextrestored: 'webglcontextrestored',
  remove: 'remove',
  movestart: 'movestart',
  load: 'load',
  contextmenu: 'contextmenu',
  dblclick: 'dblclick',
  click: 'click',
  touchcancel: 'touchcancel',
  touchmove: 'touchmove',
  touchend: 'touchend',
  touchstart: 'touchstart',
  dataloading: 'dataloading',
  mousemove: 'mousemove',
  mouseup: 'mouseup',
  mousedown: 'mousedown',
  sourcedataloading: 'sourcedataloading',
  error: 'error',
  data: 'data',
  styledata: 'styledata',
  sourcedata: 'sourcedata',
  mouseout: 'mouseout',
  styledataloading: 'styledataloading',
  moveend: 'moveend',
  move: 'move',
  render: 'render',
  zoom: 'zoom',
  zoomstart: 'zoomstart',
  zoomend: 'zoomend',
  boxzoomstart: 'boxzoomstart',
  boxzoomcancel: 'boxzoomcancel',
  boxzoomend: 'boxzoomend',
  rotate: 'rotate',
  rotatestart: 'rotatestart',
  rotateend: 'rotateend',
  dragend: 'dragend',
  drag: 'drag',
  dragstart: 'dragstart',
  pitch: 'pitch'
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.number.constructor.js
var es6_number_constructor = __webpack_require__("c5f6");

// CONCATENATED MODULE: ./src/lib/options.js


/* harmony default export */ var lib_options = ({
  container: {
    type: [String, HTMLElement],
    default: function _default() {
      return "map-".concat(('' + Math.random()).split('.')[1]);
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
    type: Boolean,
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
  logoPosition: {
    // TODO: Add validator
    type: String,
    default: 'bottom-left'
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
  crossSourceCollisions: {
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
  renderWorldCopies: {
    type: Boolean,
    default: true
  },
  RTLTextPluginUrl: {
    type: String,
    default: undefined
  },
  light: {
    type: Object
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
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GlMap.vue?vue&type=script&lang=js&









//
//
//
//
//
//


/* harmony default export */ var GlMapvue_type_script_lang_js_ = ({
  name: 'GlMap',
  props: lib_options,
  data: function data() {
    return {
      initial: true,
      baseMap: true,
      mapLoaded: false
    };
  },
  computed: {
    loaded: function loaded() {
      return this.map ? this.map.loaded() : false;
    },
    version: function version() {
      return this.map ? this.map.version : null;
    },
    bounds: function bounds() {
      return this.map ? this.map.getBounds() : null;
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
  watch: {
    maxBounds: function maxBounds(bounds) {
      if (this.initial) return;
      this.map.setMaxBounds(bounds);
      this.maxBounds = bounds;
    },
    minZoom: function minZoom(zoom) {
      if (this.initial) return;
      this.map.setMinZoom(zoom);
      this.minZoom = zoom;
    },
    maxZoom: function maxZoom(zoom) {
      if (this.initial) return;
      this.map.setMaxZoom(zoom);
      this.maxZoom = zoom;
    },
    mapStyle: function mapStyle(style) {
      if (this.initial) return;
      this.map.setStyle(style);
      this.mapStyle = style;
    },
    collisionBoxes: function collisionBoxes(val) {
      if (this.initial) return;
      this.map.showCollisionBoxes = val;
      this.showCollisionBoxes = val;
    },
    tileBoundaries: function tileBoundaries(val) {
      if (this.initial) return;
      this.map.showTileBoundaries = val;
      this.showTileBoundaries = val;
    },
    repaint: function repaint(val) {
      if (this.initial) return;
      this.map.repaint = val;
      this.repaint = val;
    },
    zoom: function zoom(val) {
      if (this.initial) return;
      this.map.setZoom(val);
      this.zoom = val;
    },
    center: function center(val) {
      if (this.initial) return;
      this.map.setCenter(val);
      this.center = val;
    },
    bearing: function bearing(val) {
      if (this.initial) return;
      this.map.setBearing(val);
      this.bearing = val;
    },
    pitch: function pitch(val) {
      if (this.initial) return;
      this.map.setPitch(val);
      this.pitch = val;
    },
    light: function light(val) {
      if (this.initial) return;
      this.map.setLight(val);
      this.light = val;
    }
  },
  created: function created() {
    this.map = null;
  },
  mounted: function mounted() {
    var _this = this;

    this.$_loadMap().then(function (map) {
      _this.map = map;

      if (_this.RTLTextPluginUrl !== undefined) {
        map.setRTLTextPlugin(_this.RTLTextPluginUrl, _this.$_RTLTextPluginError);
      }

      _this.$emit('load', {
        map: map,
        component: _this
      });

      var eventNames = Object.keys(events);
      var eventsToListen = Object.keys(_this.$options._parentListeners).filter(function (eventName) {
        return eventNames.indexOf(eventName) !== -1;
      });

      _this.$_bindEvents(eventsToListen);

      _this.$_bindPropsUpdateEvents();

      _this.initial = false;
      _this.mapLoaded = true;
    });
  },
  destroyed: function destroyed() {
    if (this.map) this.map.remove();
  },
  methods: {
    // We wait in promise to ensure map is loaded and other components will receive map object
    $_bindPropsUpdateEvents: function $_bindPropsUpdateEvents() {
      var _this2 = this;

      this.map.on('moveend', function (event) {
        return _this2.$emit('update:center', _this2.map.getCenter());
      });
      this.map.on('zoomend', function (event) {
        return _this2.$emit('update:zoom', _this2.map.getZoom());
      });
      this.map.on('rotate', function (event) {
        return _this2.$emit('update:bearing', _this2.map.getBearing());
      });
      this.map.on('pitch', function (event) {
        return _this2.$emit('update:pitch', _this2.map.getPitch());
      });
    },
    $_loadMap: function $_loadMap() {
      var _this3 = this;

      return new Promise(function (resolve) {
        if (_this3.accessToken) _this3.mapbox.accessToken = _this3.accessToken;
        var map = new _this3.mapbox.Map(_objectSpread({}, _this3._props, {
          container: _this3.$el,
          style: _this3.mapStyle
        }));
        map.on('load', function () {
          return resolve(map);
        });
      });
    },
    $_RTLTextPluginError: function $_RTLTextPluginError(error) {
      this.$emit('rtl-plugin-error', {
        map: this.map,
        error: error
      });
    },
    $_bindEvents: function $_bindEvents(events) {
      var _this4 = this;

      if (events.length === 0) return;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        var _loop = function _loop() {
          var e = _step.value;

          _this4.map.on(e, function (event) {
            _this4.$emit(e, event);
          });
        };

        for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          _loop();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    },
    $_unBindEvents: function $_unBindEvents(events) {
      var _this5 = this;

      events.forEach(function (eventName) {
        _this5.map.off(eventName);
      });
    },
    supported: function supported() {
      var perfomanceCheck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return this.map.supported({
        failIfMajorPerformanceCaveat: perfomanceCheck
      });
    },
    resize: function resize() {
      this.map.resize();
    },
    project: function project(mapCoordinates) {
      return this.map.project(mapCoordinates);
    },
    unproject: function unproject(containerCoordinates) {
      return this.map.unproject(containerCoordinates);
    },
    queryRenderedFeatures: function queryRenderedFeatures(geometry, parameters) {
      return this.map.queryRenderedFeatures(geometry, parameters);
    },
    getFeatureState: function getFeatureState(feature) {
      return this.map.getFeatureState(feature);
    },
    setFeatureState: function setFeatureState(feature, state) {
      return this.map.setFeatureState(feature, state);
    },
    querySourceFeatures: function querySourceFeatures(sourceId, parameters) {
      return this.map.querySourceFeatures(sourceId, parameters);
    },
    cameraForBounds: function cameraForBounds(bounds, options) {
      return this.map.cameraForBounds(bounds, options);
    },
    addImage: function addImage(name, image, options) {
      return this.map.addImage(name, image, options);
    },
    hasImage: function hasImage(id) {
      return this.map.hasImage(id);
    },
    removeImage: function removeImage(name) {
      return this.map.removeImage(name);
    },
    loadImage: function loadImage(url, callback) {
      return this.map.loadImage(url, callback);
    },
    $_catchMoveFabric: function $_catchMoveFabric(eventData, resolve, reject) {
      var self = this;
      return function catchMove(options) {
        if (options.eventId !== eventData.eventId) return;
        var newCenter = self.map.getCenter();
        self.$emit('update:center', newCenter);
        self.map.off('moveend', catchMove);
        return resolve({
          eventData: eventData,
          center: newCenter
        });
      };
    },
    $_catchZoomFabric: function $_catchZoomFabric(eventData, resolve, reject) {
      var self = this;
      return function catchZoom(options) {
        if (options.eventId !== eventData.eventId) return;
        var newZoom = self.map.getZoom();
        self.$emit('update:zoom', newZoom);
        self.map.off('zoomend', catchZoom);
        return resolve({
          eventData: eventData,
          zoom: newZoom
        });
      };
    },
    $_catchRotateFabric: function $_catchRotateFabric(eventData, resolve, reject) {
      var self = this;
      return function catchRotate(options) {
        if (options.eventId !== eventData.eventId) return;
        var newBearing = self.map.getBearing();
        self.$emit('update:bearing', newBearing);
        self.map.off('rotate', catchRotate);
        resolve({
          eventData: eventData,
          bearing: newBearing
        });
      };
    },
    $_catchPitchFabric: function $_catchPitchFabric(eventData, resolve, reject) {
      var self = this;
      return function catchPitch(options) {
        if (options.eventId !== eventData.eventId) return;
        var newPitch = self.map.getPitch();
        self.$emit('update:pitch', newPitch);
        self.map.off('pitch', catchPitch);
        resolve({
          eventData: eventData,
          pitch: newPitch
        });
      };
    },
    panBy: function panBy(offset, options) {
      var _this6 = this;

      var eventData = {
        eventId: "panBy-".concat(('' + Math.random()).split('.')[1])
      };

      if (offset[0] === 0 && offset[1] === 0) {
        return new Promise(function (resolve, reject) {
          return resolve({
            center: _this6.map.getCenter()
          });
        });
      }

      return new Promise(function (resolve, reject) {
        _this6.map.on('moveend', _this6.$_catchMoveFabric(eventData, resolve, reject));

        _this6.map.panBy(offset, options, eventData);
      });
    },
    panTo: function panTo(coordinates, options) {
      var _this7 = this;

      if (!(coordinates instanceof Array)) {
        coordinates = coordinates.toArray();
      }

      var eventData = {
        eventId: "panTo-".concat(('' + Math.random()).split('.')[1])
      };

      if (coordinates[0] === 0 && coordinates[1] === 0) {
        return new Promise(function (resolve, reject) {
          return resolve({
            eventData: eventData,
            center: _this7.map.getCenter()
          });
        });
      }

      return new Promise(function (resolve, reject) {
        _this7.map.on('moveend', _this7.$_catchMoveFabric(eventData, resolve, reject));

        _this7.map.panTo(coordinates, options, eventData);
      });
    },
    zoomTo: function zoomTo(zoom, options) {
      var _this8 = this;

      var eventData = {
        eventId: "zoomTo-".concat(('' + Math.random()).split('.')[1])
      };

      if (zoom === this.map.getZoom()) {
        return new Promise(function (resolve, reject) {
          return resolve({
            eventData: eventData,
            zoom: _this8.map.getZoom()
          });
        });
      }

      return new Promise(function (resolve, reject) {
        _this8.map.on('zoomend', _this8.$_catchZoomFabric(eventData, resolve, reject));

        _this8.map.zoomTo(zoom, options, eventData);
      });
    },
    zoomIn: function zoomIn(options) {
      var _this9 = this;

      return new Promise(function (resolve, reject) {
        var eventData = {
          eventId: "zoomIn-".concat(('' + Math.random()).split('.')[1])
        };

        _this9.map.on('zoomend', _this9.$_catchZoomFabric(eventData, resolve, reject));

        _this9.map.zoomIn(options, eventData);
      });
    },
    zoomOut: function zoomOut(options) {
      var _this10 = this;

      return new Promise(function (resolve, reject) {
        var eventData = {
          eventId: "zoomOut-".concat(('' + Math.random()).split('.')[1])
        };

        _this10.map.on('zoomend', _this10.$_catchZoomFabric(eventData, resolve, reject));

        _this10.map.zoomOut(options, eventData);
      });
    },
    rotateTo: function rotateTo(bearing, options) {
      var _this11 = this;

      if (bearing === this.map.getBearing()) {
        return new Promise(function (resolve, reject) {
          return resolve({
            bearing: _this11.map.getBearing()
          });
        });
      }

      return new Promise(function (resolve, reject) {
        var eventData = {
          eventId: "rotateTo-".concat(('' + Math.random()).split('.')[1])
        };

        _this11.map.on('rotate', _this11.$_catchRotateFabric(eventData, resolve, reject));

        _this11.map.rotateTo(bearing, options, eventData);
      });
    },
    resetNorth: function resetNorth(options) {
      var _this12 = this;

      return new Promise(function (resolve, reject) {
        var eventData = {
          eventId: "resetNorth-".concat(('' + Math.random()).split('.')[1])
        };

        _this12.map.on('rotate', _this12.$_catchRotateFabric(eventData, resolve, reject));

        _this12.map.resetNorth(options, eventData);
      });
    },
    snapToNorth: function snapToNorth(options) {
      var _this13 = this;

      return new Promise(function (resolve, reject) {
        var eventData = {
          eventId: "snapToNorth-".concat(('' + Math.random()).split('.')[1])
        };

        _this13.map.on('rotate', _this13.$_catchRotateFabric(eventData, resolve, reject));

        _this13.map.snapToNorth(options, eventData);
      });
    },
    fitBounds: function fitBounds(bounds, options) {
      var _this14 = this;

      var eventData = {
        eventId: "fitBounds-".concat(('' + Math.random()).split('.')[1])
      };

      if (bounds === this.map.getBounds()) {
        return new Promise(function (resolve, reject) {
          return resolve({
            eventData: eventData,
            bounds: _this14.map.getBounds()
          });
        });
      }

      var zoomFunc = new Promise(function (resolve, reject) {
        _this14.map.on('zoomend', _this14.$_catchZoomFabric(eventData, resolve, reject));
      });
      var moveFunc = new Promise(function (resolve, reject) {
        _this14.map.on('moveend', _this14.$_catchMoveFabric(eventData, resolve, reject));
      });
      this.map.fitBounds(bounds, options, eventData);
      return Promise.all([zoomFunc, moveFunc]).then(function (results) {
        return {
          eventData: eventData,
          bounds: _this14.map.getBounds()
        };
      });
    },
    jumpTo: function jumpTo(options) {
      var _this15 = this;

      var eventData = {
        eventId: "jumpTo-".concat(('' + Math.random()).split('.')[1])
      };
      var funcs = [];

      if (options.bearing !== undefined && options.bearing !== this.map.getBearing()) {
        var rotateFunc = new Promise(function (resolve, reject) {
          _this15.map.on('rotate', _this15.$_catchRotateFabric(eventData, resolve, reject));
        });
        funcs.push(rotateFunc);
      }

      if (options.zoom !== undefined && options.zoom !== this.map.getZoom()) {
        var zoomFunc = new Promise(function (resolve, reject) {
          _this15.map.on('zoomend', _this15.$_catchZoomFabric(eventData, resolve, reject));
        });
        funcs.push(zoomFunc);
      }

      if (options.center !== undefined && options.center !== this.map.getCenter()) {
        var centerFunc = new Promise(function (resolve, reject) {
          _this15.map.on('moveend', _this15.$_catchMoveFabric(eventData, resolve, reject));
        });
        funcs.push(centerFunc);
      }

      if (options.pitch !== undefined && options.pitch !== this.map.getPitch()) {
        var pitchFunc = new Promise(function (resolve, reject) {
          _this15.map.on('pitch', _this15.$_catchPitchFabric(eventData, resolve, reject));
        });
        funcs.push(pitchFunc);
      }

      if (funcs.length === 0) {
        return new Promise(function (resolve, reject) {
          resolve({
            eventData: eventData,
            pitch: _this15.map.getPitch(),
            zoom: _this15.map.getZoom(),
            center: _this15.map.getCenter(),
            bearing: _this15.map.getBearing()
          });
        });
      }

      this.map.jumpTo(options, eventData);
      return Promise.all(funcs).then(function (results) {
        var resObj = {};
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = results[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var res = _step2.value;
            Object.assign(resObj, res);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return _objectSpread({}, resObj, {
          eventData: eventData
        });
      });
    },
    easeTo: function easeTo(options) {
      var _this16 = this;

      var funcs = [];
      var eventData = {
        eventId: "easeTo-".concat(('' + Math.random()).split('.')[1])
      };

      if (options.bearing !== undefined && options.bearing !== this.map.getBearing()) {
        var rotateFunc = new Promise(function (resolve, reject) {
          _this16.map.on('rotate', _this16.$_catchRotateFabric(eventData, resolve, reject));
        });
        funcs.push(rotateFunc);
      }

      if (options.zoom !== undefined && options.zoom !== this.map.getZoom()) {
        var zoomFunc = new Promise(function (resolve, reject) {
          _this16.map.on('zoomend', _this16.$_catchZoomFabric(eventData, resolve, reject));
        });
        funcs.push(zoomFunc);
      }

      if (options.center !== undefined && options.center !== this.map.getCenter()) {
        var centerFunc = new Promise(function (resolve, reject) {
          _this16.map.on('moveend', _this16.$_catchMoveFabric(eventData, resolve, reject));
        });
        funcs.push(centerFunc);
      }

      if (options.pitch !== undefined && options.pitch !== this.map.getPitch()) {
        var pitchFunc = new Promise(function (resolve, reject) {
          _this16.map.on('pitch', _this16.$_catchPitchFabric(eventData, resolve, reject));
        });
        funcs.push(pitchFunc);
      }

      if (funcs.length === 0) {
        return new Promise(function (resolve, reject) {
          resolve({
            eventData: eventData,
            pitch: _this16.map.getPitch(),
            zoom: _this16.map.getZoom(),
            center: _this16.map.getCenter(),
            bearing: _this16.map.getBearing()
          });
        });
      }

      this.map.easeTo(options, eventData);
      return Promise.all(funcs).then(function (results) {
        var resObj = {};
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = results[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var res = _step3.value;
            Object.assign(resObj, res);
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return _objectSpread({}, resObj, {
          eventData: eventData
        });
      });
    },
    flyTo: function flyTo(options) {
      var _this17 = this;

      var eventData = {
        eventId: "flyTo-".concat(('' + Math.random()).split('.')[1])
      };
      var funcs = [];

      if (options.bearing !== undefined && options.bearing !== this.map.getBearing()) {
        var rotateFunc = new Promise(function (resolve, reject) {
          _this17.map.on('rotate', _this17.$_catchRotateFabric(eventData, resolve, reject));
        });
        funcs.push(rotateFunc);
      }

      if (options.zoom !== undefined && options.zoom !== this.map.getZoom()) {
        var zoomFunc = new Promise(function (resolve, reject) {
          _this17.map.on('zoomend', _this17.$_catchZoomFabric(eventData, resolve, reject));
        });
        funcs.push(zoomFunc);
      }

      if (options.center !== undefined && options.center !== this.map.getCenter()) {
        var centerFunc = new Promise(function (resolve, reject) {
          _this17.map.on('moveend', _this17.$_catchMoveFabric(eventData, resolve, reject));
        });
        funcs.push(centerFunc);
      }

      if (options.pitch !== undefined && options.pitch !== this.map.getPitch()) {
        var pitchFunc = new Promise(function (resolve, reject) {
          _this17.map.on('pitch', _this17.$_catchPitchFabric(eventData, resolve, reject));
        });
        funcs.push(pitchFunc);
      }

      if (funcs.length === 0) {
        return new Promise(function (resolve, reject) {
          resolve({
            eventData: eventData,
            pitch: _this17.map.getPitch(),
            zoom: _this17.map.getZoom(),
            center: _this17.map.getCenter(),
            bearing: _this17.map.getBearing()
          });
        });
      }

      this.map.flyTo(options, eventData);
      return Promise.all(funcs).then(function (results) {
        var resObj = {};
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = results[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var res = _step4.value;
            Object.assign(resObj, res);
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        return _objectSpread({}, resObj, {
          eventData: eventData
        });
      });
    },
    stop: function stop() {
      this.map.stop();
      var _ref = [this.map.getPitch(), this.map.getZoom(), this.map.getBearing(), this.map.getCenter()],
          pitch = _ref[0],
          zoom = _ref[1],
          bearing = _ref[2],
          center = _ref[3];
      this.$emit('update:pitch', pitch);
      this.$emit('update:zoom', zoom);
      this.$emit('update:bearing', bearing);
      this.$emit('update:center', center);
      return Promise.resolve({
        pitch: pitch,
        zoom: zoom,
        bearing: bearing,
        center: center
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/GlMap.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GlMapvue_type_script_lang_js_ = (GlMapvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/GlMap.vue





/* normalize component */

var component = normalizeComponent(
  components_GlMapvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

component.options.__file = "GlMap.vue"
/* harmony default export */ var GlMap = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/NavigationControl.vue?vue&type=template&id=7bcc838b&
var NavigationControlvue_type_template_id_7bcc838b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var NavigationControlvue_type_template_id_7bcc838b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/UI/NavigationControl.vue?vue&type=template&id=7bcc838b&

// CONCATENATED MODULE: ./src/lib/mixin.js


// @ts-check

/**
 * @mixin
 */
/* harmony default export */ var mixin = ({
  created: function created() {
    this.map = null;
  },
  mounted: function mounted() {
    this.$_checkMapTree(); // We wait for "load" event from map component to ensure mapbox is loaded and map created
  },
  methods: {
    $_findBaseMap: function $_findBaseMap() {
      var baseMapComponent = null;

      function walkParents(component) {
        if (component.baseMap) {
          baseMapComponent = component;
        } else {
          if (component.$parent !== undefined) {
            walkParents(component.$parent);
          }
        }
      }

      walkParents(this.$parent);

      if (baseMapComponent === undefined) {
        throw new Error('Component must have root map');
      }

      return baseMapComponent;
    },
    $_checkMapTree: function $_checkMapTree() {
      var mapComponent = this.$_findBaseMap();

      if (mapComponent) {
        if (mapComponent.mapLoaded) {
          this.$_deferredMount({
            component: mapComponent,
            map: mapComponent.map
          });
        } else {
          mapComponent.$on('load', this.$_deferredMount);
        }
      }
    },
    $_emitMapEvent: function $_emitMapEvent(name) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.$emit(name, _objectSpread({
        map: this.map,
        component: this
      }, data));
    },
    $_bindSelfEvents: function $_bindSelfEvents(events) {
      var _this = this;

      var emitter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (events.length === 0) return;
      emitter = emitter || this.map;
      events.forEach(function (eventName) {
        emitter.on(eventName, function (event) {
          _this.$_emitMapEvent("".concat(eventName), {
            mapEvent: event
          });
        });
      });
    },
    $_unbindSelfEvents: function $_unbindSelfEvents(events) {
      var _this2 = this;

      var emitter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (events.length === 0) return;
      emitter = emitter || this.map;
      events.forEach(function (eventName) {
        emitter.off(eventName, _this2.layerId);
      });
    }
  }
});
// CONCATENATED MODULE: ./src/lib/controlMixin.js
/* harmony default export */ var controlMixin = ({
  beforeDestroy: function beforeDestroy() {
    if (this.map !== undefined) {
      this.map.removeControl(this.control);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/NavigationControl.vue?vue&type=script&lang=js&
//
//


/* harmony default export */ var NavigationControlvue_type_script_lang_js_ = ({
  name: 'NavigationControl',
  mixins: [mixin, controlMixin],
  props: {
    position: {
      type: String,
      default: 'top-right' // TODO: add validator

    }
  },
  data: function data() {
    return {
      control: undefined
    };
  },
  created: function created() {
    this.control = new this.mapbox.NavigationControl();
  },
  methods: {
    $_deferredMount: function $_deferredMount(payload) {
      this.map = payload.map;
      this.map.addControl(this.control, this.position);
      this.$_emitMapEvent('added', {
        control: this.control
      });
      payload.component.$off('load', this.$_deferredMount);
    }
  }
});
// CONCATENATED MODULE: ./src/components/UI/NavigationControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var UI_NavigationControlvue_type_script_lang_js_ = (NavigationControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/UI/NavigationControl.vue





/* normalize component */

var NavigationControl_component = normalizeComponent(
  UI_NavigationControlvue_type_script_lang_js_,
  NavigationControlvue_type_template_id_7bcc838b_render,
  NavigationControlvue_type_template_id_7bcc838b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

NavigationControl_component.options.__file = "NavigationControl.vue"
/* harmony default export */ var NavigationControl = (NavigationControl_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/GeolocateControl.vue?vue&type=template&id=c37f19ba&
var GeolocateControlvue_type_template_id_c37f19ba_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var GeolocateControlvue_type_template_id_c37f19ba_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/UI/GeolocateControl.vue?vue&type=template&id=c37f19ba&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/GeolocateControl.vue?vue&type=script&lang=js&
//
//


/* harmony default export */ var GeolocateControlvue_type_script_lang_js_ = ({
  name: 'GeolocateControl',
  mixins: [mixin, controlMixin],
  props: {
    position: {
      type: String,
      default: 'top-right'
    },
    positionOptions: {
      type: Object,
      default: function _default() {
        return {
          enableHighAccuracy: false,
          timeout: 6000
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
    },
    fitBoundsOptions: {
      type: Object,
      default: function _default() {
        return {
          maxZoom: 15
        };
      }
    }
  },
  data: function data() {
    return {
      control: undefined
    };
  },
  created: function created() {
    var _this = this;

    this.control = new this.mapbox.GeolocateControl(this._props);
    this.control.on('error', function (err) {
      _this.$emit('geolocate-error', err);
    });
    this.control.on('geolocate', function (position) {
      _this.$emit('geolocate-error', position);
    });
  },
  methods: {
    $_deferredMount: function $_deferredMount(payload) {
      this.map = payload.map;
      this.map.addControl(this.control);
      this.$emit('added', this.control);
      payload.component.$off('load', this.$_deferredMount);
    }
  }
});
// CONCATENATED MODULE: ./src/components/UI/GeolocateControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var UI_GeolocateControlvue_type_script_lang_js_ = (GeolocateControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/UI/GeolocateControl.vue





/* normalize component */

var GeolocateControl_component = normalizeComponent(
  UI_GeolocateControlvue_type_script_lang_js_,
  GeolocateControlvue_type_template_id_c37f19ba_render,
  GeolocateControlvue_type_template_id_c37f19ba_staticRenderFns,
  false,
  null,
  null,
  null
  
)

GeolocateControl_component.options.__file = "GeolocateControl.vue"
/* harmony default export */ var GeolocateControl = (GeolocateControl_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/FullscreenControl.vue?vue&type=template&id=48c582f7&
var FullscreenControlvue_type_template_id_48c582f7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var FullscreenControlvue_type_template_id_48c582f7_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/UI/FullscreenControl.vue?vue&type=template&id=48c582f7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/FullscreenControl.vue?vue&type=script&lang=js&
//
//


/* harmony default export */ var FullscreenControlvue_type_script_lang_js_ = ({
  name: 'FullscreenControl',
  mixins: [mixin, controlMixin],
  props: {
    position: {
      type: String,
      default: 'top-right'
    }
  },
  data: function data() {
    return {
      control: undefined
    };
  },
  created: function created() {
    this.control = new this.mapbox.FullscreenControl();
  },
  methods: {
    $_deferredMount: function $_deferredMount(payload) {
      this.map = payload.map;
      this.map.addControl(this.control, this.position);
      this.$emit('added', this.control);
      payload.component.$off('load', this.$_deferredMount);
    }
  }
});
// CONCATENATED MODULE: ./src/components/UI/FullscreenControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var UI_FullscreenControlvue_type_script_lang_js_ = (FullscreenControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/UI/FullscreenControl.vue





/* normalize component */

var FullscreenControl_component = normalizeComponent(
  UI_FullscreenControlvue_type_script_lang_js_,
  FullscreenControlvue_type_template_id_48c582f7_render,
  FullscreenControlvue_type_template_id_48c582f7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

FullscreenControl_component.options.__file = "FullscreenControl.vue"
/* harmony default export */ var FullscreenControl = (FullscreenControl_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/AttributionControl.vue?vue&type=template&id=dda74f4e&
var AttributionControlvue_type_template_id_dda74f4e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var AttributionControlvue_type_template_id_dda74f4e_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/UI/AttributionControl.vue?vue&type=template&id=dda74f4e&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/AttributionControl.vue?vue&type=script&lang=js&
//
//


/* harmony default export */ var AttributionControlvue_type_script_lang_js_ = ({
  name: 'AttributionControl',
  mixins: [mixin, controlMixin],
  props: {
    compact: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      control: undefined
    };
  },
  created: function created() {
    this.control = new this.mapbox.AttributionControl({
      compact: this.compact
    });
  },
  methods: {
    $_deferredMount: function $_deferredMount(payload) {
      this.map = payload.map;
      this.map.addControl(this.control);
      this.$emit('added', this.control);
      payload.component.$off('load', this.$_deferredMount);
    }
  }
});
// CONCATENATED MODULE: ./src/components/UI/AttributionControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var UI_AttributionControlvue_type_script_lang_js_ = (AttributionControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/UI/AttributionControl.vue





/* normalize component */

var AttributionControl_component = normalizeComponent(
  UI_AttributionControlvue_type_script_lang_js_,
  AttributionControlvue_type_template_id_dda74f4e_render,
  AttributionControlvue_type_template_id_dda74f4e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

AttributionControl_component.options.__file = "AttributionControl.vue"
/* harmony default export */ var AttributionControl = (AttributionControl_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/ScaleControl.vue?vue&type=template&id=5b7e5a34&
var ScaleControlvue_type_template_id_5b7e5a34_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var ScaleControlvue_type_template_id_5b7e5a34_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/UI/ScaleControl.vue?vue&type=template&id=5b7e5a34&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/ScaleControl.vue?vue&type=script&lang=js&

//
//


/* harmony default export */ var ScaleControlvue_type_script_lang_js_ = ({
  name: 'ScaleControl',
  mixins: [mixin, controlMixin],
  props: {
    maxWidth: {
      type: Number,
      default: 150
    },
    unit: {
      type: String,
      default: 'metric'
    }
  },
  data: function data() {
    return {
      control: undefined
    };
  },
  created: function created() {
    this.control = new this.mapbox.ScaleControl(this._props);
  },
  methods: {
    $_deferredMount: function $_deferredMount(payload) {
      this.map = payload.map;

      try {
        this.map.addControl(this.control);
      } catch (err) {
        console.log(err);
      }

      this.$emit('added', this.control);
      payload.component.$off('load', this.$_deferredMount);
    }
  }
});
// CONCATENATED MODULE: ./src/components/UI/ScaleControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var UI_ScaleControlvue_type_script_lang_js_ = (ScaleControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/UI/ScaleControl.vue





/* normalize component */

var ScaleControl_component = normalizeComponent(
  UI_ScaleControlvue_type_script_lang_js_,
  ScaleControlvue_type_template_id_5b7e5a34_render,
  ScaleControlvue_type_template_id_5b7e5a34_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ScaleControl_component.options.__file = "ScaleControl.vue"
/* harmony default export */ var ScaleControl = (ScaleControl_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/Marker.vue?vue&type=template&id=e31067e6&
var Markervue_type_template_id_e31067e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}},[_vm._t("marker"),_vm._t("default")],2)}
var Markervue_type_template_id_e31067e6_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/UI/Marker.vue?vue&type=template&id=e31067e6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/Marker.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//

var markerEvents = {
  drag: 'drag',
  dragstart: 'dragstart',
  dragend: 'dragend'
};
/* harmony default export */ var Markervue_type_script_lang_js_ = ({
  name: 'MapMarker',
  mixins: [mixin],
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
      default: 'center'
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
    draggable: function draggable(next, prev) {
      if (this.initial) return;
      this.marker.setDraggable(next);
    }
  },
  mounted: function mounted() {
    this.$_checkMapTree();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.map !== undefined && this.marker !== undefined) {
      this.marker.remove();
    }
  },
  methods: {
    $_deferredMount: function $_deferredMount(payload) {
      var _this = this;

      if (!this.marker) {
        var markerOptions = _objectSpread({}, this._props);

        if (this.$slots.marker) {
          markerOptions.element = this.$slots.marker[0].elm;
        }

        this.marker = new this.mapbox.Marker(markerOptions);
      }

      this.map = payload.map;
      this.$_addMarker();
      this.marker.on('dragend', function (event) {
        var newCoordinates;

        if (_this.coordinates instanceof Array) {
          newCoordinates = [event.target._lngLat.lng, event.target._lngLat.lat];
        } else {
          newCoordinates = event.target._lngLat;
        }

        _this.$emit('update:coordinates', newCoordinates);
      });
      var eventNames = Object.keys(markerEvents);

      if (this.$options._parentListeners) {
        var eventsToListen = Object.keys(this.$options._parentListeners).filter(function (eventName) {
          return eventNames.indexOf(eventName) !== -1;
        });
        this.$_bindSelfEvents(eventsToListen, this.marker);
      }

      this.initial = false;
      payload.component.$off('load', this.$_deferredMount);
    },
    $_addMarker: function $_addMarker() {
      this.marker.setLngLat(this.coordinates).addTo(this.map);
      this.$_emitMapEvent('added', {
        marker: this.marker
      });
    },
    remove: function remove() {
      this.$_emitMapEvent('removed', {
        marker: this.marker
      });
      return this.marker.remove();
    },
    togglePopup: function togglePopup() {
      return this.marker.togglePopup();
    }
  }
});
// CONCATENATED MODULE: ./src/components/UI/Marker.vue?vue&type=script&lang=js&
 /* harmony default export */ var UI_Markervue_type_script_lang_js_ = (Markervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/UI/Marker.vue





/* normalize component */

var Marker_component = normalizeComponent(
  UI_Markervue_type_script_lang_js_,
  Markervue_type_template_id_e31067e6_render,
  Markervue_type_template_id_e31067e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Marker_component.options.__file = "Marker.vue"
/* harmony default export */ var Marker = (Marker_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/Popup.vue?vue&type=template&id=3916a75f&
var Popupvue_type_template_id_3916a75f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}},[_vm._t("default")],2)}
var Popupvue_type_template_id_3916a75f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/UI/Popup.vue?vue&type=template&id=3916a75f&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/UI/Popup.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//

/**
 * Popup component.
 * @see See [Mapbox Gl JS Popup](https://www.mapbox.com/mapbox-gl-js/api/#popup)
 */

/* harmony default export */ var Popupvue_type_script_lang_js_ = ({
  name: 'Popup',
  mixins: [mixin],
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
        var allowedValues = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right'];
        return typeof value === 'string' && allowedValues.indexOf(value) !== -1 || value === undefined;
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
    }
  },
  data: function data() {
    return {
      initial: true,
      popup: undefined
    };
  },
  computed: {
    /**
     * true if popup is open
     * @returns {*}
     */
    isOpen: function isOpen() {
      if (this.popup !== undefined) {
        return this.popup.isOpen();
      }

      return false;
    }
  },
  mounted: function mounted() {
    this.$_checkMapTree();
  },
  beforeDestroy: function beforeDestroy() {
    if (this.map) {
      this.$_emitMapEvent('removed', {
        popup: this.popup
      });
      this.popup.remove();
    }
  },
  watch: {
    coordinates: function coordinates(lngLat) {
      if (this.initial) return;
      this.popup.setLngLat(lngLat);
    }
  },
  methods: {
    $_deferredMount: function $_deferredMount(payload) {
      this.map = payload.map;
      this.$_addPopup();
      this.initial = false;
      payload.component.$off('load', this.$_deferredMount);
    },
    $_addPopup: function $_addPopup() {
      var _this = this;

      this.popup = new this.mapbox.Popup(_objectSpread({}, this._props));
      if (this.coordinates !== undefined) this.popup.setLngLat(this.coordinates);

      if (this.$slots.default !== undefined) {
        if (this.onlyText) {
          if (this.$slots.default[0].elm.nodeType === 3) {
            var tmpEl = document.createElement('span');
            tmpEl.appendChild(this.$slots.default[0].elm);
            this.popup.setText(tmpEl.innerText);
          } else {
            this.popup.setText(this.$slots.default[0].elm.innerText);
          }
        } else {
          this.popup.setDOMContent(this.$slots.default[0].elm);
        }
      }

      this.popup.addTo(this.map);
      this.$_emitMapEvent('added', {
        popup: this.popup
      });
      this.popup.on('close', this.$_onClose);
      this.popup.on('open', this.$_onOpen);

      if (this.$parent.marker !== undefined) {
        this.$parent.marker.setPopup(this.popup);
      } else {
        this.$parent.$once('added', function (_ref) {
          var marker = _ref.marker;
          marker.setPopup(_this.popup);
        });
      }
    },
    $_onClose: function $_onClose() {
      /**
       * Popup close event
       * @event close
       * @type {object}
       */
      this.$_emitMapEvent('close', {
        popup: this.popup
      });
    },
    $_onOpen: function $_onOpen() {
      /**
       * Popup close event
       * @event open
       * @type {object}
       */
      this.$_emitMapEvent('open', {
        popup: this.popup
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/UI/Popup.vue?vue&type=script&lang=js&
 /* harmony default export */ var UI_Popupvue_type_script_lang_js_ = (Popupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/UI/Popup.vue





/* normalize component */

var Popup_component = normalizeComponent(
  UI_Popupvue_type_script_lang_js_,
  Popupvue_type_template_id_3916a75f_render,
  Popupvue_type_template_id_3916a75f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Popup_component.options.__file = "Popup.vue"
/* harmony default export */ var Popup = (Popup_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/layer/GeojsonLayer.vue?vue&type=template&id=8a912842&
var GeojsonLayervue_type_template_id_8a912842_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var GeojsonLayervue_type_template_id_8a912842_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/layer/GeojsonLayer.vue?vue&type=template&id=8a912842&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./src/lib/layerEvents.js
/* harmony default export */ var layerEvents = (['mousedown', 'mouseup', 'click', 'dblclick', 'mousemove', 'mouseenter', 'mouseleave', 'mouseover', 'mouseout', 'contextmenu', 'touchstart', 'touchend', 'touchcancel']);
// CONCATENATED MODULE: ./src/components/layer/layerMixin.js






var mapboxSourceProps = {
  sourceId: {
    type: String,
    required: true
  }
};
var mapboxLayerStyleProps = {
  layerId: {
    type: String,
    required: true
  },
  metadata: Object,
  refLayer: String,
  'source-layer': String,
  minZoom: Number,
  maxZoom: Number,
  paint: Object,
  layout: Object,
  before: Object
};
var componentProps = {
  clearSource: {
    type: Boolean,
    default: true
  },
  // hidden: {
  //   type: Boolean,
  //   default: false
  // },
  replaceSource: {
    type: Boolean,
    default: false
  },
  replace: {
    type: Boolean,
    default: false
  },
  listenUserEvents: {
    type: Boolean,
    default: false
  }
};
/* harmony default export */ var layerMixin = ({
  mixins: [mixin],
  props: _objectSpread({}, mapboxSourceProps, mapboxLayerStyleProps, componentProps),
  data: function data() {
    return {
      initial: true
    };
  },
  computed: {
    sourceLoaded: function sourceLoaded() {
      return this.map.isSourceLoaded(this.sourceId);
    },
    mapLayer: function mapLayer() {
      return this.map.getLayer(this.layerId);
    }
  },
  watch: {
    minzoom: function minzoom(val) {
      if (this.initial) return;
      this.map.setLayerZoomRange(this.layerId, val, this.maxzoom);
    },
    maxzoom: function maxzoom(val) {
      if (this.initial) return;
      this.map.setLayerZoomRange(this.layerId, this.minzoom, val);
    },
    paint: function paint(properties) {
      if (this.initial) return;

      var _arr = Object.keys(this.paint);

      for (var _i = 0; _i < _arr.length; _i++) {
        var prop = _arr[_i];

        if (this.paint[prop] !== properties[prop]) {
          this.map.setPaintProperty(this.layerId, prop, properties[prop]);
          this.paint[prop] = properties[prop];
        }
      }
    },
    layout: function layout(properties) {
      if (this.initial) return;

      var _arr2 = Object.keys(this.layout);

      for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
        var prop = _arr2[_i2];

        if (this.layout[prop] !== properties[prop]) {
          this.map.setLayoutProperty(this.layerId, prop, properties[prop]);
          this.layout[prop] = properties[prop];
        }
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.map) {
      try {
        this.map.removeLayer(this.layerId);
      } catch (err) {
        this.$_emitMapEvent('layer-does-not-exist', {
          map: this.map,
          component: this,
          layerId: this.sourceId,
          error: err
        });
      }

      if (this.clearSource) {
        try {
          this.map.removeSource(this.sourceId);
        } catch (err) {
          this.$_emitMapEvent('source-does-not-exist', {
            map: this.map,
            component: this,
            sourceId: this.sourceId,
            error: err
          });
        }
      }
    }
  },
  methods: {
    $_bindEvents: function $_bindEvents(events) {
      var _this = this;

      if (events.length === 0) return;
      events.forEach(function (eventName) {
        _this.map.on(eventName, _this.layerId, function (event) {
          _this.$_emitMapEvent("".concat(event), {
            mapEvent: event
          });
        });
      });
    },
    $_unBindEvents: function $_unBindEvents(events) {
      var _this2 = this;

      events.forEach(function (eventName) {
        _this2.map.off(eventName, _this2.layerId);
      });
    },
    $_watchSourceLoading: function $_watchSourceLoading(data) {
      if (data.dataType === 'source' && data.sourceId === this.sourceId) {
        this.$_emitMapEvent('layer-source-loading', {
          sourceId: this.sourceId
        });
        this.map.off('dataloading', this.$_watchSourceLoading);
      }
    },
    move: function move(beforeId) {
      this.map.moveLayer(this.layerId, beforeId);
      this.$_emitMapEvent('layer-moved', {
        layerId: this.layerId,
        beforeId: beforeId
      });
    },
    remove: function remove() {
      this.map.removeLayer(this.layerId);
      this.$_emitMapEvent('layer-removed', {
        layerId: this.layerId
      });
    }
  }
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/layer/GeojsonLayer.vue?vue&type=script&lang=js&

//
//


/* harmony default export */ var GeojsonLayervue_type_script_lang_js_ = ({
  name: 'GeojsonLayer',
  mixins: [layerMixin],
  props: {
    source: {
      type: [Object, String]
    },
    type: {
      validator: function validator(value) {
        var allowedValues = ['fill', 'line', 'symbol', 'circle', 'fill-extrusion', 'raster', 'background'];
        return typeof value === 'string' && allowedValues.indexOf(value) !== -1 || value === undefined;
      },
      default: 'fill'
    },
    filter: {
      type: Array,
      default: undefined
    }
  },
  watch: {
    source: function source(data) {
      if (this.initial) return;
      this.map.getSource(this.sourceId).setData(data);
    },
    filter: function filter(_filter) {
      if (this.initial) return;
      this.map.setFilter(this.layerId, _filter);
    }
  },
  methods: {
    $_deferredMount: function $_deferredMount(payload) {
      this.map = payload.map;
      this.map.on('dataloading', this.$_watchSourceLoading);

      if (this.source) {
        try {
          this.map.addSource(this.sourceId, {
            type: 'geojson',
            data: this.source
          });
        } catch (err) {
          if (this.replaceSource) {
            this.map.removeSource(this.sourceId);
            this.map.addSource(this.sourceId, {
              type: 'geojson',
              data: this.source
            });
          } else {
            this.$_emitMapEvent('layer-source-error', {
              sourceId: this.sourceId,
              error: err
            });
          }
        }
      }

      this._addLayer();

      if (this.listenUserEvents) {
        this.$_bindEvents(layerEvents);
      }

      this.map.off('dataloading', this.$_watchSourceLoading);
      this.initial = false;
      payload.component.$off('load', this.$_deferredMount);
    },
    _addLayer: function _addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this.$_emitMapEvent('layer-exists', {
            layerId: this.layerId
          });
          return existed;
        }
      }

      var layer = {
        id: this.layerId,
        source: this.sourceId
      };

      if (this.refLayer) {
        layer.ref = this.refLayer;
      } else {
        layer.type = this.type ? this.type : 'fill';
        layer.source = this.sourceId;

        if (this['source-layer']) {
          layer['source-layer'] = this['source-layer'];
        }

        if (this.minzoom) layer.minzoom = this.minzoom;
        if (this.maxzoom) layer.maxzoom = this.maxzoom;

        if (this.layout) {
          layer.layout = this.layout;
        }

        if (this.filter) layer.filter = this.filter;
      }

      layer.paint = this.paint ? this.paint : {
        'fill-color': "rgba(".concat(12 * (this.layerId.length * 3), ",153,80,0.55)")
      };
      layer.metadata = this.metadata;
      this.map.addLayer(layer, this.before);
      this.$_emitMapEvent('added', {
        layerId: this.layerId
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/layer/GeojsonLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layer_GeojsonLayervue_type_script_lang_js_ = (GeojsonLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/layer/GeojsonLayer.vue





/* normalize component */

var GeojsonLayer_component = normalizeComponent(
  layer_GeojsonLayervue_type_script_lang_js_,
  GeojsonLayervue_type_template_id_8a912842_render,
  GeojsonLayervue_type_template_id_8a912842_staticRenderFns,
  false,
  null,
  null,
  null
  
)

GeojsonLayer_component.options.__file = "GeojsonLayer.vue"
/* harmony default export */ var GeojsonLayer = (GeojsonLayer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/layer/ImageLayer.vue?vue&type=template&id=16019f32&
var ImageLayervue_type_template_id_16019f32_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var ImageLayervue_type_template_id_16019f32_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/layer/ImageLayer.vue?vue&type=template&id=16019f32&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/layer/ImageLayer.vue?vue&type=script&lang=js&

//
//


/* harmony default export */ var ImageLayervue_type_script_lang_js_ = ({
  name: 'ImageLayer',
  mixins: [layerMixin],
  props: {
    coordinates: {
      type: Array,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  data: function data() {
    return {
      source: undefined
    };
  },
  watch: {
    coordinates: function coordinates(val) {
      if (this.initial) return;
      this.source.setCoordinates(val);
    }
  },
  methods: {
    $_deferredMount: function $_deferredMount(payload) {
      var source = {
        type: 'image',
        url: this.url,
        coordinates: this.coordinates
      };
      this.map = payload.map;
      this.map.on('dataloading', this.$_watchSourceLoading);

      try {
        this.map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        } else {
          this.$_emitMapEvent('layer-source-error', {
            sourceId: this.sourceId,
            error: err
          });
        }
      }

      this.source = this.map.getSource(this.sourceId);
      this.$_addLayer();

      if (this.listenUserEvents) {
        this.$_bindEvents(layerEvents);
      }

      this.initial = false;
      payload.component.$off('load', this.$_deferredMount);
    },
    $_addLayer: function $_addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this._emitMapEvent('layer-exists', {
            layerId: this.layerId
          });

          return existed;
        }
      }

      var layer = {
        id: this.layerId,
        source: this.sourceId,
        type: 'raster'
      };

      if (this.refLayer) {
        layer.ref = this.refLayer;
      } else {
        if (this['source-layer']) {
          layer['source-layer'] = this['source-layer'];
        }

        if (this.minzoom) layer.minzoom = this.minzoom;
        if (this.maxzoom) layer.maxzoom = this.maxzoom;

        if (this.layout) {
          layer.layout = this.layout;
        }

        if (this.filter) layer.filter = this.filter;
      }

      layer.paint = this.paint ? this.paint : {
        'raster-opacity': 1
      };
      layer.metadata = this.metadata;
      this.map.addLayer(layer, this.before);
      this.$_emitMapEvent('added', {
        layerId: this.layerId
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/layer/ImageLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layer_ImageLayervue_type_script_lang_js_ = (ImageLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/layer/ImageLayer.vue





/* normalize component */

var ImageLayer_component = normalizeComponent(
  layer_ImageLayervue_type_script_lang_js_,
  ImageLayervue_type_template_id_16019f32_render,
  ImageLayervue_type_template_id_16019f32_staticRenderFns,
  false,
  null,
  null,
  null
  
)

ImageLayer_component.options.__file = "ImageLayer.vue"
/* harmony default export */ var ImageLayer = (ImageLayer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/layer/CanvasLayer.vue?vue&type=template&id=06b56351&
var CanvasLayervue_type_template_id_06b56351_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"none"}},[_vm._t("default")],2)}
var CanvasLayervue_type_template_id_06b56351_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/layer/CanvasLayer.vue?vue&type=template&id=06b56351&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/layer/CanvasLayer.vue?vue&type=script&lang=js&

//
//
//
//
//
//


/* harmony default export */ var CanvasLayervue_type_script_lang_js_ = ({
  name: 'CanvasLayer',
  mixins: [layerMixin],
  props: {
    coordinates: {
      type: Array,
      required: true
    },
    animate: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      source: undefined
    };
  },
  mounted: function mounted() {
    if (this.$slots.default[0].tag !== 'canvas') {
      throw new Error("Error in map layer component with source id \"".concat(this.sourceId, "\" and layer id \"").concat(this.layerId, "\"\n        You need to add canvas element as child of canvas layer."));
    }

    this.$_checkMapTree();
  },
  computed: {
    canvas: function canvas() {
      return this.map.getSource(this.sourceId).getCanvas();
    }
  },
  watch: {
    minzoom: function minzoom(val) {
      if (this.initial) return;
      this.map.setLayerZoomRange(this.layerId, val, this.maxzoom);
    },
    maxzoom: function maxzoom(val) {
      if (this.initial) return;
      this.map.setLayerZoomRange(this.layerId, this.minzoom, val);
    },
    coordinates: function coordinates(val) {
      if (this.initial) return;
      this.source.setCoordinates(val);
    }
  },
  methods: {
    $_deferredMount: function $_deferredMount(payload) {
      var source = {
        type: 'canvas',
        coordinates: this.coordinates,
        animate: this.animate,
        canvas: this.$slots.default[0].data.attrs.id
      };
      this.map = payload.map;
      this.map.on('dataloading', this.$_watchSourceLoading);

      try {
        this.map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        } else {
          this.$_emitMapEvent('layer-source-error', {
            sourceId: this.sourceId,
            error: err
          });
        }
      }

      this.source = this.map.getSource(this.sourceId);
      this.$_addLayer();

      if (this.listenUserEvents) {
        this.$_bindEvents(layerEvents);
      }

      payload.component.$off('load', this.$_deferredMount);
      this.initial = false;
    },
    $_addLayer: function $_addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this.$_emitMapEvent('layer-exists', {
            layerId: this.layerId
          });
          return existed;
        }
      }

      var layer = {
        id: this.layerId,
        source: this.sourceId,
        type: 'raster'
      };

      if (this.refLayer) {
        layer.ref = this.refLayer;
      } else {
        if (this['source-layer']) {
          layer['source-layer'] = this['source-layer'];
        }

        if (this.minzoom) layer.minzoom = this.minzoom;
        if (this.maxzoom) layer.maxzoom = this.maxzoom; // if (this.layout) {
        //   layer.layout = this.layout;
        // }
        // if (this.filter) layer.filter = this.filter
      }

      layer.paint = this.paint ? this.paint : {
        'raster-opacity': 0.85
      };
      layer.metadata = this.metadata;
      this.map.addLayer(layer, this.before);
      this.$_emitMapEvent('added', {
        layerId: this.layerId
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/layer/CanvasLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layer_CanvasLayervue_type_script_lang_js_ = (CanvasLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/layer/CanvasLayer.vue





/* normalize component */

var CanvasLayer_component = normalizeComponent(
  layer_CanvasLayervue_type_script_lang_js_,
  CanvasLayervue_type_template_id_06b56351_render,
  CanvasLayervue_type_template_id_06b56351_staticRenderFns,
  false,
  null,
  null,
  null
  
)

CanvasLayer_component.options.__file = "CanvasLayer.vue"
/* harmony default export */ var CanvasLayer = (CanvasLayer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/layer/VideoLayer.vue?vue&type=template&id=1ae5fdb2&
var VideoLayervue_type_template_id_1ae5fdb2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var VideoLayervue_type_template_id_1ae5fdb2_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/layer/VideoLayer.vue?vue&type=template&id=1ae5fdb2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/layer/VideoLayer.vue?vue&type=script&lang=js&

//
//


/* harmony default export */ var VideoLayervue_type_script_lang_js_ = ({
  name: 'VideoLayer',
  mixins: [layerMixin],
  props: {
    coordinates: {
      type: Array,
      required: true
    },
    urls: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      source: undefined
    };
  },
  computed: {
    video: function video() {
      return this.map.getSource(this.sourceId).getVideo();
    }
  },
  watch: {
    coordinates: function coordinates(val) {
      if (this.initial) return;
      this.source.setCoordinates(val);
    }
  },
  methods: {
    _deferredMount: function _deferredMount(payload) {
      var source = {
        type: 'video',
        urls: this.urls,
        coordinates: this.coordinates
      };
      this.map = payload.map;
      this.map.on('dataloading', this.$_watchSourceLoading);

      try {
        this.map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        } else {
          this.$_emitMapEvent('layer-source-error', {
            sourceId: this.sourceId,
            error: err
          });
        }
      }

      this.source = this.map.getSource(this.sourceId);
      this.$_addLayer();

      if (this.listenUserEvents) {
        this.$_bindEvents(layerEvents);
      }

      this.initial = false;
      payload.component.$off('load', this.$_deferredMount);
    },
    $_addLayer: function $_addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this.$_emitMapEvent('layer-exists', {
            layerId: this.layerId
          });
          return existed;
        }
      }

      var layer = {
        id: this.layerId,
        source: this.sourceId,
        type: 'background'
      };

      if (this.refLayer) {
        layer.ref = this.refLayer;
      } else {
        if (this['source-layer']) {
          layer['source-layer'] = this['source-layer'];
        }

        if (this.minzoom) layer.minzoom = this.minzoom;
        if (this.maxzoom) layer.maxzoom = this.maxzoom; // if (this.layout) {
        //   layer.layout = this.layout;
        // }
        // if (this.filter) layer.filter = this.filter
      } // layer.paint = this.paint ? this.paint : { 'raster-opacity': 0.85 };


      layer.metadata = this.metadata;
      this.map.addLayer(layer, this.before);
      this.$_emitMapEvent('added', {
        layerId: this.layerId
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/layer/VideoLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layer_VideoLayervue_type_script_lang_js_ = (VideoLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/layer/VideoLayer.vue





/* normalize component */

var VideoLayer_component = normalizeComponent(
  layer_VideoLayervue_type_script_lang_js_,
  VideoLayervue_type_template_id_1ae5fdb2_render,
  VideoLayervue_type_template_id_1ae5fdb2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

VideoLayer_component.options.__file = "VideoLayer.vue"
/* harmony default export */ var VideoLayer = (VideoLayer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"545da000-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/layer/VectorLayer.vue?vue&type=template&id=6f0e60d8&
var VectorLayervue_type_template_id_6f0e60d8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c("div")}
var VectorLayervue_type_template_id_6f0e60d8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/layer/VectorLayer.vue?vue&type=template&id=6f0e60d8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/layer/VectorLayer.vue?vue&type=script&lang=js&


//
//


/* harmony default export */ var VectorLayervue_type_script_lang_js_ = ({
  name: 'VectorLayer',
  mixins: [layerMixin],
  props: {
    url: {
      type: String,
      default: undefined
    },
    tiles: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    tilesMinZoom: {
      type: Number,
      default: undefined
    },
    tilesMaxZoom: {
      type: Number,
      default: undefined
    },
    filter: {
      type: Array,
      default: undefined
    }
  },
  watch: {
    filter: function filter(_filter) {
      if (this.initial) return;
      this.map.setFilter(this.layerId, _filter);
    }
  },
  methods: {
    $_deferredMount: function $_deferredMount(payload) {
      if (payload.mapId !== this.mapId) return;
      this.map = payload.map;
      var source = {
        type: 'vector',
        tilesMinZoom: this.tilesMinZoom,
        tilesMaxZoom: this.tilesMaxZoom,
        url: this.url,
        tiles: this.tiles
      };
      this.map.on('dataloading', this.$_watchSourceLoading);

      try {
        this.map.addSource(this.sourceId, source);
      } catch (err) {
        if (this.replaceSource) {
          this.map.removeSource(this.sourceId);
          this.map.addSource(this.sourceId, source);
        } else {
          this.$_emitMapEvent('layer-source-error', {
            sourceId: this.sourceId,
            error: err
          });
        }
      }

      this._addLayer();

      if (this.listenUserEvents) {
        this.$_bindEvents(layerEvents);
      }

      this.map.off('dataloading', this.$_watchSourceLoading);
      this.initial = false;
      payload.mapComponent.$on('load', this.$_deferredMount);
    },
    _addLayer: function _addLayer() {
      var existed = this.map.getLayer(this.layerId);

      if (existed) {
        if (this.replace) {
          this.map.removeLayer(this.layerId);
        } else {
          this.$_emitMapEvent('layer-exists', {
            layerId: this.layerId
          });
          return existed;
        }
      }

      var layer = {
        id: this.layerId,
        source: this.sourceId
      };

      if (this.refLayer) {
        layer.ref = this.refLayer;
      } else {
        layer.type = this.type ? this.type : 'fill';
        layer.source = this.sourceId;
        layer['source-layer'] = this['source-layer'];
        if (this.minzoom) layer.minzoom = this.minzoom;
        if (this.maxzoom) layer.maxzoom = this.maxzoom;

        if (this.layout) {
          layer.layout = this.layout;
        }

        if (this.filter) layer.filter = this.filter;
      }

      layer.paint = this.paint ? this.paint : {
        'fill-color': "rgba(".concat(12 * (this.layerId.length * 3), ",153,80,0.55)")
      };
      layer.metadata = this.metadata;
      this.map.addLayer(layer, this.before);
      this.$_emitMapEvent('added', {
        layerId: this.layerId
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/layer/VectorLayer.vue?vue&type=script&lang=js&
 /* harmony default export */ var layer_VectorLayervue_type_script_lang_js_ = (VectorLayervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/layer/VectorLayer.vue





/* normalize component */

var VectorLayer_component = normalizeComponent(
  layer_VectorLayervue_type_script_lang_js_,
  VectorLayervue_type_template_id_6f0e60d8_render,
  VectorLayervue_type_template_id_6f0e60d8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

VectorLayer_component.options.__file = "VectorLayer.vue"
/* harmony default export */ var VectorLayer = (VectorLayer_component.exports);
// CONCATENATED MODULE: ./src/main.js



















var mglBaseMixin = mixin;
var mglControlMixin = controlMixin;
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
var MglMarker = Marker;
var MglPopup = Popup;
var main_plugin = {
  /**
   *  Create Vue-mapbox plugin for Vue
   *
   * @param {Object} Vue
   * @param {Object} options: mapboxgl: MapboxGl JS instances
   * @returns
   */
  install: function install(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _data = {
      mapbox: options.mapboxgl
    };

    if (options.plugins && options.plugins.length) {
      options.plugins.forEach(function (plugin) {
        var key = Object.keys(plugin)[0];
        var value = Object.values(plugin)[0];
        _data[key] = value;
      });
    }

    Vue.mixin({
      data: function data() {
        return _data;
      }
    });
  }
};
/* harmony default export */ var main = (main_plugin);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport mglBaseMixin */__webpack_require__.d(__webpack_exports__, "mglBaseMixin", function() { return mglBaseMixin; });
/* concated harmony reexport mglControlMixin */__webpack_require__.d(__webpack_exports__, "mglControlMixin", function() { return mglControlMixin; });
/* concated harmony reexport MglMap */__webpack_require__.d(__webpack_exports__, "MglMap", function() { return MglMap; });
/* concated harmony reexport MglNavigationControl */__webpack_require__.d(__webpack_exports__, "MglNavigationControl", function() { return MglNavigationControl; });
/* concated harmony reexport MglGeolocateControl */__webpack_require__.d(__webpack_exports__, "MglGeolocateControl", function() { return MglGeolocateControl; });
/* concated harmony reexport MglFullscreenControl */__webpack_require__.d(__webpack_exports__, "MglFullscreenControl", function() { return MglFullscreenControl; });
/* concated harmony reexport MglAttributionControl */__webpack_require__.d(__webpack_exports__, "MglAttributionControl", function() { return MglAttributionControl; });
/* concated harmony reexport MglScaleControl */__webpack_require__.d(__webpack_exports__, "MglScaleControl", function() { return MglScaleControl; });
/* concated harmony reexport MglGeojsonLayer */__webpack_require__.d(__webpack_exports__, "MglGeojsonLayer", function() { return MglGeojsonLayer; });
/* concated harmony reexport MglImageLayer */__webpack_require__.d(__webpack_exports__, "MglImageLayer", function() { return MglImageLayer; });
/* concated harmony reexport MglCanvasLayer */__webpack_require__.d(__webpack_exports__, "MglCanvasLayer", function() { return MglCanvasLayer; });
/* concated harmony reexport MglVideoLayer */__webpack_require__.d(__webpack_exports__, "MglVideoLayer", function() { return MglVideoLayer; });
/* concated harmony reexport MglVectorLayer */__webpack_require__.d(__webpack_exports__, "MglVectorLayer", function() { return MglVectorLayer; });
/* concated harmony reexport MglMarker */__webpack_require__.d(__webpack_exports__, "MglMarker", function() { return MglMarker; });
/* concated harmony reexport MglPopup */__webpack_require__.d(__webpack_exports__, "MglPopup", function() { return MglPopup; });
/* concated harmony reexport plugin */__webpack_require__.d(__webpack_exports__, "plugin", function() { return main_plugin; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ }),

/***/ "fdef":
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ })

/******/ });
});