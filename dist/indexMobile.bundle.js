/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styleMobile.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styleMobile.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `html, body {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%; \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #f0f0f0; /* Colore di sfondo */\r\n}\r\n\r\n/* Contenitore dell'immagine */\r\n.img {\r\n    width: 95vw; \r\n    height: 100vh; \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    overflow: hidden;\r\n    position: relative; \r\n}\r\n\r\n/* Stile per l'immagine */\r\n.img img {\r\n    max-width: 100%; \r\n    max-height: 100%; \r\n    object-fit: contain; \r\n    object-position: center; \r\n   filter: drop-shadow(5px 4px 0px rgba(0, 0, 0, 0.2)); \r\n}\r\n\r\n\r\n/* Navbar */\r\n.navbar {\r\nposition: absolute;\r\ntop: 2%;  \r\nleft: 50%;\r\ntransform: translateX(-50%);\r\n\r\npadding: 5% 15%;\r\nborder-radius: 5px;\r\nfont-size: 18px;\r\nz-index: 1;\r\nwidth: 80%; \r\n}\r\n\r\n.navbar .d-flex {\r\nflex-direction: column;\r\nalign-items: center;\r\n}\r\n\r\n.navbar .form-control {\r\nwidth: 200px; \r\nheight: 35px; \r\npadding: 10px;\r\nmargin-bottom: 12px; \r\nbackground-color: #f8e5cd;\r\nfilter: drop-shadow(4px 3px 0px rgba(0, 0, 0, 0.2));\r\n}\r\n\r\n\r\n.navbar .btn {\r\nborder: none;\r\nwidth: 30px; \r\nheight: 30px;\r\nborder-radius: 50%;\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\nfont-size: 14px; \r\npadding: 0; \r\ndisplay: block;\r\n}\r\n\r\n.navbar .btn img {\r\nwidth: 60%; \r\nheight: auto;\r\nfilter: drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.4));\r\n}\r\n\r\n.navbar .btn img:focus,\r\n.navbar .btn img:active {\r\nfilter: drop-shadow(4px 4px 0px rgba(110, 15, 15, 0.8)); \r\n}\r\n\r\n.navbar .d-flex .form-control:focus {\r\nbox-shadow: 0 0 8px rgba(110, 15, 14, 0.8) !important;\r\nborder-color: #6e0f0e !important;\r\n}\r\n\r\n\r\n/*FOOTER*/\r\n.footer {\r\n    width: 100%;\r\ndisplay: flex;\r\njustify-content: center;\r\nposition: absolute;\r\nbottom: 2vh; \r\n}\r\n\r\n.footer img {\r\n\r\nobject-fit: contain;\r\nwidth: 75%;\r\nheight: auto; \r\nobject-fit: contain;\r\npadding-left: 2vh;\r\nfilter: drop-shadow(3px 5px 0px rgba(0, 0, 0, 0.2)); \r\n}\r\n/* Social icons */\r\n.social {\r\n    position: absolute; \r\n    top: 30%; \r\n    left: 25%;\r\n    display: flex;\r\n     gap:20% ; \r\n    z-index: 2; \r\n}\r\n\r\n.social img {\r\n    width: 45px; \r\n    height: 45px; \r\n    filter: drop-shadow(3px 3px 0px rgba(0, 0, 0, 0.2)); \r\n}\r\n.social img:focus,\r\n.social img:active {\r\n    width: 45px; \r\n    height: 45px; \r\n    filter: drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.4)); \r\n}\r\n\r\n/*CAROUSEL*/\r\n.carousel {\r\nposition: absolute;\r\ntop: 46%;\r\nleft: 50%;\r\ntransform: translate(-50%, -50%);\r\nwidth: 55%;\r\nmax-width: 300px;\r\nheight: 22%;\r\nborder: #6e0f0e 3px solid;\r\nborder-radius: 10px;\r\n}\r\n\r\n.carousel-item img {\r\nmargin-top: 3%;\r\nmax-width: 30%;    \r\nmax-height: 250px; \r\nwidth: auto; \r\nheight: auto; \r\nobject-fit: contain; \r\nmargin-left: 5%;\r\ndisplay: block; \r\n}\r\n.carousel-caption {\r\nposition: absolute;\r\ntop: 0px;\r\nz-index: 0;\r\npadding-left: 35px;\r\nfont-size: small;\r\n}\r\n.carousel-caption h6,\r\n.carousel-caption p{\r\npadding-left: 20%;\r\n}\r\n.carousel-inner{\r\nbackground-color: #6e0f0e;\r\nheight: 90%;\r\noverflow-y: auto;\r\n}\r\n.carousel-control-prev, .carousel-control-next {\r\nposition: absolute;\r\ntop: 50%;\r\ntransform: translateY(-50%);\r\nz-index: 1; \r\n}\r\n\r\n.carousel-control-prev {\r\nleft: 20%;\r\n}\r\n\r\n.carousel-control-next {\r\nright: 20%;\r\n}\r\n.standardcover img{\r\nfilter: drop-shadow(4px 4px 0px rgba(0, 0, 0, 0.8));    \r\n}\r\n.innerbtn{\r\nbackground-color: #f8e5cd;\r\nborder-radius: 10px;\r\nfilter: drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.4)); \r\nmargin-left: 20%;\r\n}\r\n\r\n/*DESCRIZIONE*/\r\n.modal {\r\nposition: fixed;\r\nz-index: 1000;\r\nleft: 0;\r\ntop: 0;\r\nwidth: 100%;\r\nheight: 100%;\r\nbackground: rgba(0, 0, 0, 0.5);\r\ndisplay: flex;\r\njustify-content: center;\r\nalign-items: center;\r\n}\r\n\r\n.modal-content {\r\nbackground:#f8e5cd;\r\npadding: 20px;\r\nborder-radius: 8px;\r\nheight: 50%;\r\nwidth: 80%;\r\nbox-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);\r\nposition: relative;\r\noverflow-y: auto;\r\noverflow-x: hidden;\r\n}\r\n\r\n.close-button {\r\nwidth: 30px;\r\nheight: 30px;\r\nborder-radius: 50%;\r\ntext-align: center;\r\nborder: #6e0f0e 1px solid ;\r\nbackground-color: #6e0f0e;\r\ncolor: #f8e5cd;\r\nfont: bold;\r\nposition: absolute;\r\ntop: 10px;\r\nright: 15px;\r\ncursor: pointer;\r\nfont-size: 18px;\r\n}\r\n.close-button:active,\r\n.close-button:hover{\r\nfilter: drop-shadow(2px 2px 0px rgba(0, 0, 0, 0.4));   \r\n}\r\n.no-results {\r\ntext-align: center;\r\nfont-size: 18px;\r\nfont-weight: bold;\r\ncolor:#f8e5cd;\r\npadding: 20px;\r\n}\r\n/*LOADER*/\r\n.spinner-border {\r\nposition: fixed;\r\ntop: 20%;\r\nleft: 47%;\r\nz-index: 9999;\r\ncolor: #6e0f0e;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./src/css/styleMobile.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/css/styleMobile.css":
/*!*********************************!*\
  !*** ./src/css/styleMobile.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styleMobile_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styleMobile.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/styleMobile.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styleMobile_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styleMobile_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styleMobile_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styleMobile_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./src/css/styleMobile.css?");

/***/ }),

/***/ "./src/js/indexMobile.js":
/*!*******************************!*\
  !*** ./src/js/indexMobile.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styleMobile_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styleMobile.css */ \"./src/css/styleMobile.css\");\n\r\n\r\n//DESCRIZIONE\r\nasync function fetchDescription(key) {\r\n    try {\r\n      const response = await fetch(`https://openlibrary.org${key}.json`);\r\n      const data = await response.json();\r\n  \r\n      let title = \"Unknown Title\";\r\n      if (data.title) {\r\n        title = data.title;\r\n      }\r\n  \r\n      let description = \"No description available\";\r\n      if (typeof data.description === \"string\") {\r\n        description = data.description;\r\n      } else if (typeof data.description === \"object\" && data.description.value) {\r\n        description = data.description.value;\r\n      }\r\n  \r\n      // Rimuove eventuali finestre modali precedenti\r\n      const existingModal = document.getElementById(\"bookDescriptionModal\");\r\n      if (existingModal) {\r\n        existingModal.remove();\r\n      }\r\n  \r\n      // Creazione del contenitore modale\r\n      const modal = document.createElement(\"div\");\r\n      modal.id = \"bookDescriptionModal\";\r\n      modal.classList.add(\"modal\");\r\n  \r\n      // Contenuto della finestra modale\r\n      const modalContent = document.createElement(\"div\");\r\n      modalContent.classList.add(\"modal-content\");\r\n  \r\n      // Titolo del libro\r\n      const titleElement = document.createElement(\"h2\");\r\n      titleElement.textContent = title; // Mostra il titolo corretto\r\n  \r\n      // Testo della descrizione\r\n      const descriptionText = document.createElement(\"p\");\r\n      descriptionText.textContent = description;\r\n  \r\n      // Pulsante di chiusura\r\n      const closeButton = document.createElement(\"span\");\r\n      closeButton.textContent = \"X\";\r\n      closeButton.classList.add(\"close-button\");\r\n  \r\n      // Event listener per chiudere la finestra modale\r\n      closeButton.addEventListener(\"click\", function () {\r\n        modal.remove();\r\n      });\r\n  \r\n      // Aggiunge tutto al modal\r\n      modalContent.appendChild(closeButton);\r\n      modalContent.appendChild(titleElement);\r\n      modalContent.appendChild(descriptionText);\r\n      modal.appendChild(modalContent);\r\n      document.body.appendChild(modal);\r\n    } catch (error) {\r\n      console.error(\"Errore durante il recupero della descrizione:\", error);\r\n    }\r\n  }\r\n  \r\n  // Rende la funzione accessibile globalmente\r\nwindow.fetchDescription = fetchDescription;\r\n  \r\n\r\n  document.addEventListener(\"DOMContentLoaded\", function () {\r\n    const searchInput = document.querySelector(\".form-control\");\r\n    const searchButton = document.querySelector(\".btn\");\r\n    const carousel = document.querySelector(\".carousel-inner\");\r\n    const indicatorsContainer = document.querySelector(\".carousel-indicators\");\r\n    const carouselContainer = document.querySelector(\".carousel\");\r\n    const prevButton = document.querySelector(\".carousel-control-prev\");\r\n    const nextButton = document.querySelector(\".carousel-control-next\");\r\n  \r\n    let currentBooks = []; // Array per memorizzare i libri trovati\r\n  \r\n   // ** Nasconde il carosello all'inizio **\r\n   carouselContainer.style.display = \"none\";\r\n   //nasconde le frecce//\r\n   prevButton.style.display = \"none\";\r\n   nextButton.style.display = \"none\";\r\n    // ** Crea il loader **\r\n  const loader = document.createElement(\"div\");\r\n  loader.innerHTML = `<div class=\"spinner-border text\" role=\"status\"></div>`;\r\n  loader.style.display = \"none\"; // Inizialmente nascosto\r\n  loader.style.textAlign = \"center\";\r\n  loader.style.margin = \"20px auto\"; // Per centrarlo\r\n  loader.style.width = \"50px\"; \r\n  loader.style.height = \"50px\";\r\n  \r\n  /* Aggiungilo dentro il carosello per evitare che sia fuori posto */\r\n  carouselContainer.parentNode.insertBefore(loader, carouselContainer);\r\n  \r\n    // Funzione per ottenere i libri dalla ricerca\r\n    async function fetchBooks(query) {\r\n      try {\r\n        //console.log(\"pippo\");//\r\n        \r\n        loader.style.display = \"block\"; // Mostra il loader prima della richiesta\r\n        let url = `https://openlibrary.org/search.json?q=${query}`;\r\n        \r\n        const response = await fetch(url);\r\n        const data = await response.json();\r\n  \r\n      // **Nasconde il loader quando i dati sono disponibili**\r\n      loader.style.display = \"none\";\r\n  \r\n        if (!data.docs || data.docs.length === 0) {\r\n          displayNoResults();\r\n          return;\r\n        }\r\n        currentBooks = data.docs;\r\n        displayBooks(currentBooks);\r\n        carouselContainer.style.display = \"block\";\r\n        prevButton.style.display=\"block\";\r\n        nextButton.style.display=\"block\";\r\n      } catch (error) {\r\n        console.error(\"Errore durante il recupero dei libri:\", error);\r\n      }\r\n    }\r\n  \r\n    // Funzione per mostrare un messaggio quando non ci sono risultati\r\n  function displayNoResults() {\r\n    carousel.innerHTML = `<div class=\"no-results\"><p>Mi dispiace, nessun libro con il seguente titolo è stato trovato.</p></div>`;\r\n  }\r\n  \r\n    // Funzione per visualizzare i libri nel carosello\r\n    function displayBooks(books) {\r\n      carousel.innerHTML = \"\"; // Pulisce il carosello\r\n      books.forEach((book, index) => {\r\n        const bookElement = document.createElement(\"div\");\r\n        bookElement.classList.add(\"carousel-item\");\r\n        if (index === 0) bookElement.classList.add(\"active\"); // Prima immagine attiva\r\n  \r\n        const bookImage = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : \"img/standardcover.png\";\r\n        const bookTitle = book.title;\r\n        const bookAuthors = book.author_name ? book.author_name.join(\", \") : \"Unknown Author\";\r\n  \r\n        bookElement.innerHTML = `\r\n          <img src=\"${bookImage}\" class=\"d-block w-100\" alt=\"${bookTitle}\">\r\n          <div class=\"carousel-caption\">\r\n            <h6>${bookTitle}</h6>\r\n            <p>${bookAuthors}</p>\r\n            <button class=\"innerbtn\" onclick=\"fetchDescription('${book.key}')\">See Description</button>\r\n          </div>\r\n        `;\r\n        carousel.appendChild(bookElement);\r\n  \r\n         // Creazione indicatori\r\n      const indicator = document.createElement(\"button\");\r\n      indicator.setAttribute(\"type\", \"button\");\r\n      indicator.setAttribute(\"data-bs-target\", \"#carouselExampleCaptions\");\r\n      indicator.setAttribute(\"data-bs-slide-to\", index);\r\n      if (index === 0) indicator.classList.add(\"active\");\r\n      indicatorsContainer.appendChild(indicator);\r\n      });\r\n    }\r\n  \r\n    // Funzione di ricerca (case-insensitive)\r\n    searchButton.addEventListener(\"click\", function () {\r\n      const query = searchInput.value.trim().toLowerCase();\r\n      if (query) {\r\n        fetchBooks(query);\r\n      }\r\n    });\r\n  \r\n    // Gestione della navigazione del carosello (freccia precedente)\r\n    prevButton.addEventListener(\"click\", function () {\r\n      const activeItem = document.querySelector(\".carousel-item.active\");\r\n      const prevItem = activeItem.previousElementSibling || carousel.lastElementChild;\r\n      activeItem.classList.remove(\"active\");\r\n      prevItem.classList.add(\"active\");\r\n    });\r\n  \r\n    // Gestione della navigazione del carosello (freccia successiva)\r\n    nextButton.addEventListener(\"click\", function () {\r\n      const activeItem = document.querySelector(\".carousel-item.active\");\r\n      const nextItem = activeItem.nextElementSibling || carousel.firstElementChild;\r\n      activeItem.classList.remove(\"active\");\r\n      nextItem.classList.add(\"active\");\r\n    });\r\n  });\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./src/js/indexMobile.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/indexMobile.js");
/******/ 	
/******/ })()
;