(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["shine"] = factory();
	else
		root["shine"] = factory();
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

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/directive-shine.js
var shine = function shine(el, binding) {
  var _ref = binding.value || {},
      event = _ref.event,
      time = _ref.time,
      ease = _ref.ease,
      blur = _ref.blur,
      opacity = _ref.opacity,
      size = _ref.size,
      fromLeft = _ref.fromLeft; // Constants


  var EVENT = event || 'mouseenter';
  var TIME = time || 1; //seconds

  var EASE = ease || 'ease';
  var BLUR_AMOUNT = blur || 3; //px

  var OPACITY = opacity || 0.3;
  var SHINE_HEIGHT = size || 30; //px

  var SHINE_DELAY = TIME * 80; //ms

  var FROM_LEFT = fromLeft === undefined ? true : fromLeft;
  var SHOW_NEGATIVE = FROM_LEFT ? '-' : ''; // Toggles

  var isAnimating = false;
  var mouseEntered = false;

  var createContainer = function createContainer() {
    var container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = 0;
    container.style.left = 0;
    container.style.height = '100%';
    container.style.width = '100%';
    container.style.overflow = 'hidden';
    container.style.filter = "blur(".concat(BLUR_AMOUNT, "px)");
    return container;
  };

  var createShineElement = function createShineElement(size, height) {
    var element = document.createElement('div');
    element.style.position = 'absolute';
    element.style.left = "calc(".concat(SHOW_NEGATIVE, "50% + ").concat(-SHINE_HEIGHT / 2, "px)");
    element.style.top = "calc(".concat(SHOW_NEGATIVE, "50% + ").concat(-SHINE_HEIGHT / 2, "px)");
    element.style.transform = "rotate(".concat(SHOW_NEGATIVE, "45deg) translate(-50%, -50%)");
    element.style.backgroundColor = '#fff';
    element.style.height = height + 'px';
    element.style.width = size + 'px';
    element.style.opacity = OPACITY;
    element.style.transition = "all ".concat(TIME, "s ").concat(EASE);
    return element;
  };

  var shineAnimation = function shineAnimation(element, size, height, width) {
    var container = createContainer();
    var shine = createShineElement(size, SHINE_HEIGHT);
    var shineBack = createShineElement(size, SHINE_HEIGHT / 3);
    container.appendChild(shine);
    container.appendChild(shineBack);
    element.appendChild(container);
    var h = height + SHINE_HEIGHT;
    var w = width + SHINE_HEIGHT;
    var left = (FROM_LEFT ? h / 2 : -h / 2) + 'px';
    var top = (FROM_LEFT ? w / 2 : w * 2) + 'px';
    setTimeout(function () {
      shine.style.left = left;
      shine.style.top = top;
      setTimeout(function () {
        shineBack.style.left = left;
        shineBack.style.top = top;
      }, SHINE_DELAY);
    }, 40);
    setTimeout(function () {
      el.removeChild(container);
      isAnimating = false;
    }, TIME * 1000 + SHINE_DELAY);
  };

  var onEventHandler = function onEventHandler(e) {
    if (isAnimating || mouseEntered) {
      return;
    }

    isAnimating = true;
    mouseEntered = true;
    var target = e.target; // If the user clicked the currently animating ripple or container, select the parent element.

    while (target !== el) {
      target = target.parentElement;
    }

    var width = target.clientWidth;
    var height = target.clientHeight;
    var size = (height ^ 2) + (width ^ 2);
    shineAnimation(target, size, height, width);
  };

  var onMouseLeaveHandler = function onMouseLeaveHandler(e) {
    mouseEntered = false;
  };

  el.style.position = 'relative';
  el.addEventListener(EVENT, onEventHandler);
  el.addEventListener('mouseleave', onMouseLeaveHandler);
};

/* harmony default export */ var directive_shine = (shine);
// CONCATENATED MODULE: ./src/shine.js

var ShineDirective = {
  install: function install(Vue) {
    Vue.directive('shine', directive_shine);
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ShineDirective);
}

/* harmony default export */ var src_shine = (ShineDirective);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_shine);



/***/ })

/******/ });
});
//# sourceMappingURL=shine.umd.js.map