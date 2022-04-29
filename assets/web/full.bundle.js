botpress = typeof botpress === "object" ? botpress : {}; botpress["duplicate-finder"] =
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
/******/ 	__webpack_require__.p = "/js/modules/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../build/module-builder/node_modules/css-loader/lib/css-base.js":
/*!*****************************************************************************************************!*\
  !*** /Users/dase/webprojekte/botpress/build/module-builder/node_modules/css-loader/lib/css-base.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../node_modules/css-modules-typescript-loader/index.js!../../build/module-builder/node_modules/css-loader/index.js?!../../node_modules/sass-loader/dist/cjs.js!./src/views/full/style.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/dase/webprojekte/botpress/node_modules/css-modules-typescript-loader!/Users/dase/webprojekte/botpress/build/module-builder/node_modules/css-loader??ref--6-2!/Users/dase/webprojekte/botpress/node_modules/sass-loader/dist/cjs.js!./src/views/full/style.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../build/module-builder/node_modules/css-loader/lib/css-base.js */ "../../build/module-builder/node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".duplicate-finder__style__container___WuyWl {\n  width: 80%;\n  margin: auto;\n  display: block;\n  height: 100%; }\n\n.duplicate-finder__style__parent___e78-c {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-rows: minmax(70px, auto);\n  grid-column-gap: 20px;\n  grid-row-gap: 10px;\n  height: 100%; }\n\n.duplicate-finder__style__output___3x0Dw {\n  display: block;\n  height: 87%;\n  width: 100%;\n  position: relative;\n  overflow-y: scroll; }\n\n.duplicate-finder__style__header___3j1J8 {\n  float: left; }\n\n.duplicate-finder__style__languageSelector___RJiAm {\n  width: 200px;\n  float: left;\n  margin-left: 52px;\n  position: relative;\n  height: 85px;\n  line-height: 70px; }\n\n.duplicate-finder__style__languageSelector___RJiAm select {\n  padding: 5px; }\n\n.duplicate-finder__style__languageSelector___RJiAm label {\n  margin-right: 10px; }\n\n.duplicate-finder__style__status___28oRa {\n  float: left;\n  position: relative;\n  margin-left: 20px;\n  font-size: 20px;\n  height: 85px;\n  line-height: 70px; }\n\n.duplicate-finder__style__id___aY7a2 {\n  display: block;\n  padding: 6px;\n  background: #1e81b0;\n  color: #fff;\n  font-weight: bold;\n  cursor: pointer;\n  height: 30px;\n  overflow: hidden; }\n\n.duplicate-finder__style__id___aY7a2.duplicate-finder__style__duplicate___2XmmU {\n  background-color: #e28743; }\n\n.duplicate-finder__style__question___3MYCi {\n  display: block;\n  padding: 6px;\n  background-color: #cde; }\n\n.duplicate-finder__style__question___3MYCi.duplicate-finder__style__duplicate___2XmmU {\n  background-color: #e9c190; }\n\n.duplicate-finder__style__context___3kV4s {\n  background-color: #e28743;\n  color: #ffffff;\n  padding: 5px;\n  border-bottom: 1px solid #a47f53; }\n\n.duplicate-finder__style__modal___o9fe5 {\n  position: absolute;\n  width: 200px;\n  height: 300px;\n  border: 1px solid black;\n  background-color: #ccc;\n  display: block;\n  z-index: 100;\n  top: 0;\n  left: 0; }\n\n.duplicate-finder__style__modalHeader___3Vzfu {\n  display: block;\n  background-color: #333;\n  font-size: 14px;\n  height: 30px; }\n\n.duplicate-finder__style__modalHeader___3Vzfu .duplicate-finder__style__modalClose___3skyw {\n  float: right;\n  font-weight: bold;\n  cursor: pointer;\n  background-color: #666;\n  padding: 5px;\n  color: #fff;\n  padding-left: 10px;\n  padding-right: 10px; }\n\n.duplicate-finder__style__modalHeader___3Vzfu .duplicate-finder__style__modalClose___3skyw:hover {\n  background-color: #999; }\n\n.duplicate-finder__style__modalHeader___3Vzfu .duplicate-finder__style__modalTitle___1hQ4S {\n  width: 72%;\n  height: 28px;\n  overflow-x: hidden;\n  display: block;\n  padding: 5px;\n  color: #ddd; }\n\n.duplicate-finder__style__modalContent___3s2NZ {\n  display: block;\n  color: #333;\n  font-size: 13px;\n  height: 79%;\n  overflow-y: scroll; }\n\n.duplicate-finder__style__modalContent___3s2NZ div {\n  padding: 5px;\n  margin-bottom: 1px; }\n\n.duplicate-finder__style__deleteID___SnL5Y {\n  color: #fff;\n  float: right;\n  margin-top: 7px;\n  margin-right: 16px;\n  cursor: pointer; }\n\n.duplicate-finder__style__deleteQuestion___2Dqp5 {\n  color: #000;\n  float: right;\n  margin-top: 1px;\n  margin-right: 4px;\n  cursor: pointer; }\n\n.duplicate-finder__style__deleteID___SnL5Y:hover {\n  color: #ddd; }\n\n.duplicate-finder__style__deleteQuestion___2Dqp5:hover {\n  color: #e28743; }\n\n.duplicate-finder__style__marked___1xFbS {\n  background-color: #f7e2c8; }\n", ""]);

// exports
exports.locals = {
	"container": "duplicate-finder__style__container___WuyWl",
	"parent": "duplicate-finder__style__parent___e78-c",
	"output": "duplicate-finder__style__output___3x0Dw",
	"header": "duplicate-finder__style__header___3j1J8",
	"languageSelector": "duplicate-finder__style__languageSelector___RJiAm",
	"status": "duplicate-finder__style__status___28oRa",
	"id": "duplicate-finder__style__id___aY7a2",
	"duplicate": "duplicate-finder__style__duplicate___2XmmU",
	"question": "duplicate-finder__style__question___3MYCi",
	"context": "duplicate-finder__style__context___3kV4s",
	"modal": "duplicate-finder__style__modal___o9fe5",
	"modalHeader": "duplicate-finder__style__modalHeader___3Vzfu",
	"modalClose": "duplicate-finder__style__modalClose___3skyw",
	"modalTitle": "duplicate-finder__style__modalTitle___1hQ4S",
	"modalContent": "duplicate-finder__style__modalContent___3s2NZ",
	"deleteID": "duplicate-finder__style__deleteID___SnL5Y",
	"deleteQuestion": "duplicate-finder__style__deleteQuestion___2Dqp5",
	"marked": "duplicate-finder__style__marked___1xFbS"
};

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!***********************************************************************************************************!*\
  !*** /Users/dase/webprojekte/botpress/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/views/full/index.jsx":
/*!**********************************!*\
  !*** ./src/views/full/index.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @blueprintjs/core */ "@blueprintjs/core");
/* harmony import */ var _blueprintjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/views/full/style.scss");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var duplicateFinder = function duplicateFinder(_ref) {
  var bp = _ref.bp,
      languages = _ref.languages,
      defaultLanguage = _ref.defaultLanguage,
      contentLang = _ref.contentLang;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      qna = _useState2[0],
      setQNA = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isOpened = _useState4[0],
      setIsOpened = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      questionsArray = _useState6[0],
      setQuestionsArray = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      resultsArray = _useState8[0],
      setResultsArray = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState10 = _slicedToArray(_useState9, 2),
      outputArray = _useState10[0],
      setOutputArray = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('Loading & Scanning'),
      _useState12 = _slicedToArray(_useState11, 2),
      loadingStatus = _useState12[0],
      setLoadingStatus = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState14 = _slicedToArray(_useState13, 2),
      currentID = _useState14[0],
      setCurrentID = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState16 = _slicedToArray(_useState15, 2),
      modalQuestionList = _useState16[0],
      setModalQuestionList = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState18 = _slicedToArray(_useState17, 2),
      contexts = _useState18[0],
      setContexts = _useState18[1];

  var _useState19 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultLanguage),
      _useState20 = _slicedToArray(_useState19, 2),
      lang = _useState20[0],
      setLang = _useState20[1];

  var modal = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var modalTitle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var modalContent = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var output = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var container = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var deleteIDButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState21 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState22 = _slicedToArray(_useState21, 2),
      count = _useState22[0],
      setCount = _useState22[1];

  var _useState23 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(bp.axios.defaults.headers.common),
      _useState24 = _slicedToArray(_useState23, 2),
      header = _useState24[0],
      setHeader = _useState24[1]; //const header = bp.axios.defaults.headers.common


  var getQnaData = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var response, countData, limit, json;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(window.ROOT_PATH + bp.axios.defaults.baseURL + '/qna/questions', {
                method: 'GET',
                headers: header
              });

            case 2:
              response = _context.sent;

              if (!(response.status == '404')) {
                _context.next = 12;
                break;
              }

              _context.next = 6;
              return fetch(window.ROOT_PATH + bp.axios.defaults.baseURL + '/mod/qna/questions?limit=0', {
                method: 'GET',
                headers: header
              });

            case 6:
              countData = _context.sent;

              if (!(countData.status == '200')) {
                _context.next = 12;
                break;
              }

              limit = countData.json().count;
              _context.next = 11;
              return fetch(window.ROOT_PATH + bp.axios.defaults.baseURL + '/mod/qna/questions?limit=' + limit, {
                method: 'GET',
                headers: header
              });

            case 11:
              response = _context.sent;

            case 12:
              if (!(response.status == '200')) {
                _context.next = 19;
                break;
              }

              _context.next = 15;
              return response.json();

            case 15:
              json = _context.sent;

              if (json.count == 0) {
                setLoadingStatus('No questions available');
              } else {
                setQNA(json.items);
              }

              _context.next = 20;
              break;

            case 19:
              setLoadingStatus('Ups, something went wrong...');

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getQnaData() {
      return _ref2.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getQnaData();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    modal.current.style.display = 'none';
  }, [modal]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (qna && qna.length > 0) {
      pickDoublicates(qna);
    }
  }, [qna]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (modalQuestionList) {
      getQnaData();
    }
  }, [modalQuestionList]); // ----------------------------------------------------
  // scan for duplicate entries
  // ----------------------------------------------------

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (questionsArray.length > 0) {
      var rArray = [];
      var oArray = [];
      questionsArray.map(function (item) {
        item.questions.map(function (question) {
          questionsArray.map(function (i2) {
            var found = i2.questions.indexOf(question);

            if (found !== -1) {
              // compare both sides
              if (item.id !== i2.id) {
                // show result only one time
                var index1 = rArray.findIndex(function (e) {
                  return e.id === item.id && e.question == question;
                });
                var index2 = rArray.findIndex(function (e2) {
                  return e2.id === i2.id && e2.question == i2.questions[found];
                });

                if (index1 === -1 || index2 === -1) {
                  if (index1 === -1) {
                    rArray.push({
                      id: item.id,
                      question: question
                    });
                  }

                  if (index2 === -1) {
                    rArray.push({
                      id: i2.id,
                      question: i2.questions[found]
                    });
                  }

                  var Headline1 = '';
                  var Headline2 = ''; // get headlines

                  questionsArray.map(function (qa) {
                    if (item.id == qa.id) {
                      Headline1 = qa.questions[0];
                    }

                    if (i2.id == qa.id) {
                      Headline2 = qa.questions[0];
                    }
                  });
                  oArray.push({
                    id: item.id,
                    question: question,
                    headline: Headline1,
                    duplicate: false
                  });
                  oArray.push({
                    id: i2.id,
                    question: i2.questions[found],
                    headline: Headline2,
                    duplicate: true
                  });
                }
              }
            }
          });
        });
      });
      setResultsArray(rArray);
      setOutputArray(oArray); // count duplicate entries

      var duplicates = oArray.filter(function (d) {
        return d.duplicate == false;
      });
      setLoadingStatus('Results (' + duplicates.length + ')');
    }
  }, [questionsArray]); // ----------------------------------------------------
  // make QnA better readable
  // ----------------------------------------------------

  var pickDoublicates = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(json) {
      var tempQuestionsArray;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              tempQuestionsArray = []; // convert json to a better readable format

              json.forEach(function (item) {
                var questions = [];

                if (item.data.questions[lang]) {
                  item.data.questions[lang].forEach(function (q) {
                    questions.push(q.toLowerCase());
                  });
                  tempQuestionsArray.push({
                    id: item.id,
                    questions: questions
                  });
                }
              });
              setQuestionsArray(tempQuestionsArray);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function pickDoublicates(_x) {
      return _ref3.apply(this, arguments);
    };
  }(); // ----------------------------------------------------
  // Open Modal Method
  // ----------------------------------------------------


  var openModal = function openModal(el) {
    el.preventDefault();
    var myModal = modal.current;
    myModal.style.display = 'block';
    var header = modalTitle.current;

    if (el) {
      var offset = el.target.getBoundingClientRect();
      var parentOffset = output.current.getBoundingClientRect();
      myModal.style.left = parseInt(offset.left - parentOffset.left) + 'px';
      myModal.style.top = parseInt(offset.top - parentOffset.top) + output.current.scrollTop + 'px';
      myModal.style.width = offset.width + 'px';
      var id = el.target.dataset.id;
      header.innerHTML = el.target.innerHTML;
      setCurrentID(id);
      qna.map(function (qnaItem) {
        if (qnaItem.id == id) {
          setContexts(' ' + qnaItem.data.contexts);
        }
      });
      fillModalContent(id);
    }
  }; // ----------------------------------------------------
  // close Modal
  // ----------------------------------------------------


  var closeModal = function closeModal(el) {
    el.preventDefault();
    var myModal = modal.current;
    myModal.style.display = 'none';
  }; // ----------------------------------------------------
  // delete whole question
  // ----------------------------------------------------


  var fDeleteID = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var id, studioURL, response, countData, myModal;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = currentID;
              studioURL = bp.axios.defaults.baseURL.replace('bots', 'studio');
              _context3.next = 4;
              return fetch("".concat(window.ROOT_PATH).concat(studioURL, "/qna/questions/").concat(id, "/delete"), {
                method: 'POST',
                headers: header
              });

            case 4:
              response = _context3.sent;

              if (!(response.status == '404')) {
                _context3.next = 9;
                break;
              }

              _context3.next = 8;
              return fetch("".concat(window.ROOT_PATH).concat(bp.axios.defaults.baseURL, "/mod/qna/questions/").concat(id, "/delete"), {
                method: 'POST',
                headers: header
              });

            case 8:
              countData = _context3.sent;

            case 9:
              myModal = modal.current;
              myModal.style.display = 'none';
              getQnaData();

            case 12:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function fDeleteID() {
      return _ref4.apply(this, arguments);
    };
  }(); // ----------------------------------------------------
  // delete single question
  // ----------------------------------------------------


  var fDeleteQuestion = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e, question) {
      var id, qnaHeaders;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              e.preventDefault();
              id = currentID;
              qnaHeaders = _objectSpread(_objectSpread({}, header), {}, {
                'Content-Type': 'application/json'
              });
              qna.map( /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(item) {
                  var questions, studioURL, response, newModalQuestionList;
                  return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!(item.id == currentID)) {
                            _context4.next = 14;
                            break;
                          }

                          questions = item.data.questions[lang];
                          questions = questions.filter(function (q) {
                            return q.toLowerCase() !== question;
                          });
                          item.data.questions[lang] = questions;
                          studioURL = bp.axios.defaults.baseURL.replace('bots', 'studio');
                          _context4.next = 7;
                          return fetch("".concat(window.ROOT_PATH).concat(studioURL, "/qna/questions/").concat(currentID), {
                            method: 'POST',
                            headers: qnaHeaders,
                            body: JSON.stringify(item.data)
                          });

                        case 7:
                          response = _context4.sent;

                          if (!(response.status == '404')) {
                            _context4.next = 12;
                            break;
                          }

                          _context4.next = 11;
                          return fetch("".concat(window.ROOT_PATH).concat(bp.axios.defaults.baseURL, "/mod/qna/questions/").concat(currentID), {
                            method: 'POST',
                            headers: qnaHeaders,
                            body: JSON.stringify(item.data)
                          });

                        case 11:
                          response = _context4.sent;

                        case 12:
                          newModalQuestionList = modalQuestionList.filter(function (q) {
                            return q.question.toLowerCase() !== question;
                          });
                          setModalQuestionList(newModalQuestionList);

                        case 14:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x4) {
                  return _ref6.apply(this, arguments);
                };
              }());

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    return function fDeleteQuestion(_x2, _x3) {
      return _ref5.apply(this, arguments);
    };
  }();

  var fillModalContent = function fillModalContent(id) {
    var questionList = [];
    questionsArray.map(function (item) {
      if (item.id == id) {
        item.questions.map(function (question) {
          var qIndex = resultsArray.findIndex(function (e) {
            return e.question == question;
          });

          if (qIndex > -1) {
            questionList.push({
              question: question,
              marked: true,
              id: id
            });
          } else {
            questionList.push({
              question: question,
              marked: false
            });
          }
        });
      }
    });
    setModalQuestionList(questionList);
  };

  var changeLang = function changeLang(e) {
    e.preventDefault();
    console.log(e.target.value);
    setLang(e.target.value);
    getQnaData();
  }; // ----------------------------------------------------
  // JSX output to screen
  // ----------------------------------------------------


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].container,
    ref: container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].header
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Q&A Duplicate Finder V1.0.3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "\xA9 2022 by Frank Dase for publicplan GmbH")), languages.length > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].languageSelector
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Select Language"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
    onChange: function onChange(e) {
      return changeLang(e);
    },
    value: lang
  }, languages.map(function (lang, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: lang,
      key: index
    }, lang);
  }))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].status
  }, loadingStatus)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "output",
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].output,
    ref: output
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].parent
  }, outputArray && outputArray.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: !item.duplicate ? _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].id : _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].id + ' ' + _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].duplicate,
      onClick: function onClick(e) {
        return openModal(e);
      },
      "data-id": item.id
    }, item.headline), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: !item.duplicate ? _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].question : _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].question + ' ' + _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].duplicate
    }, item.question));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "modal",
    ref: modal,
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].modal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].modalHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    "class": _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].modalClose,
    onClick: function onClick(e) {
      return closeModal(e);
    }
  }, "X"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
    ref: deleteIDButton,
    icon: "trash",
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].deleteID,
    "data-id": "0",
    onClick: function onClick() {
      return fDeleteID();
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].modalTitle,
    id: "modalTitle",
    ref: modalTitle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].context
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b", null, "Contexts:"), " ", contexts), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].modalContent,
    id: "modalContent",
    ref: modalContent
  }, modalQuestionList && modalQuestionList.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: item.marked ? _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].marked : ''
    }, item.marked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_blueprintjs_core__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
      icon: "trash",
      className: _style_scss__WEBPACK_IMPORTED_MODULE_2__["default"].deleteQuestion,
      onClick: function onClick(e) {
        return fDeleteQuestion(e, item.question);
      },
      "data-question": item.question
    }) : '', item.question);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (duplicateFinder);

/***/ }),

/***/ "./src/views/full/style.scss":
/*!***********************************!*\
  !*** ./src/views/full/style.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_modules_typescript_loader_index_js_build_module_builder_node_modules_css_loader_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/css-modules-typescript-loader!../../../../../build/module-builder/node_modules/css-loader??ref--6-2!../../../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "../../node_modules/css-modules-typescript-loader/index.js!../../build/module-builder/node_modules/css-loader/index.js?!../../node_modules/sass-loader/dist/cjs.js!./src/views/full/style.scss");
/* harmony import */ var _node_modules_css_modules_typescript_loader_index_js_build_module_builder_node_modules_css_loader_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_modules_typescript_loader_index_js_build_module_builder_node_modules_css_loader_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_modules_typescript_loader_index_js_build_module_builder_node_modules_css_loader_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_modules_typescript_loader_index_js_build_module_builder_node_modules_css_loader_index_js_ref_6_2_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1___default.a.locals || {});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi ./src/views/full/index.jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/views/full/index.jsx */"./src/views/full/index.jsx");


/***/ }),

/***/ "@blueprintjs/core":
/*!**********************************!*\
  !*** external "BlueprintJsCore" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = BlueprintJsCore;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=full.bundle.js.map