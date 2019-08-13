/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lesson_11/lesson_11.js":
/*!************************************!*\
  !*** ./src/lesson_11/lesson_11.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lesson_11_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lesson_11.scss */ "./src/lesson_11/lesson_11.scss");
/* harmony import */ var _lesson_11_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lesson_11_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/button */ "./src/lesson_11/scripts/button.js");
/* harmony import */ var _scripts_paragraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/paragraph */ "./src/lesson_11/scripts/paragraph.js");



var btnAddParagraph = new _scripts_button__WEBPACK_IMPORTED_MODULE_1__["Button"]('Добавить параграф', _scripts_paragraph__WEBPACK_IMPORTED_MODULE_2__["addParagraph"]);

/***/ }),

/***/ "./src/lesson_11/lesson_11.scss":
/*!**************************************!*\
  !*** ./src/lesson_11/lesson_11.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/lesson_11/scripts/button.js":
/*!*****************************************!*\
  !*** ./src/lesson_11/scripts/button.js ***!
  \*****************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
function Button(text, clickHandler) {
  this.target = document.querySelector('.content');
  this.btn = document.createElement('button');
  this.btn.className = 'btn';
  this.btn.textContent = text;
  this.btn.onclick = clickHandler;
  this.target.append(this.btn);
}



/***/ }),

/***/ "./src/lesson_11/scripts/paragraph.js":
/*!********************************************!*\
  !*** ./src/lesson_11/scripts/paragraph.js ***!
  \********************************************/
/*! exports provided: addParagraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addParagraph", function() { return addParagraph; });
function addParagraph() {
  var paragraphText = prompt('Введите текст параграфа');

  while (paragraphText === '') {
    paragraphText = prompt('Введите текст параграфа');
  }

  if (paragraphText === null) {
    return;
  }

  this.target = document.querySelector('.content');
  this.parag = document.createElement('div');
  this.parag.className = 'paragraph';
  this.parag.innerHTML = paragraphText;
  this.target.append(this.parag);
}



/***/ }),

/***/ 15:
/*!******************************************!*\
  !*** multi ./src/lesson_11/lesson_11.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/lesson_11/lesson_11.js */"./src/lesson_11/lesson_11.js");


/***/ })

/******/ });
//# sourceMappingURL=lesson_11.js.map