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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/stylePC.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/stylePC.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'img/cursore.png'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/img/cursore.png */ \"./src/img/cursore.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 100vh;\r\n    background-color: #fff;\r\n    font-family: 'Arial', sans-serif;\r\n  }\r\n\r\n/*NAVBAR*/\r\n.nav{\r\n    max-width: 300px;\r\n    text-align: center;\r\n    align-items: center;\r\n}\r\n.searchbar{\r\n  position: relative;\r\n}\r\n.searchbar input:focus{\r\n    border-color:#2E4057;\r\n    box-shadow: 0 0 8px rgba(27, 48, 34, 0.5);\r\n    outline: none; /* Rimuove il bordo predefinito */\r\n    transition: border-color 0.3s ease, box-shadow 0.3s ease;\r\n}\r\n.searchbtn{\r\ndisplay:flex;\r\npadding-left: 5px;\r\nalign-items: center;\r\nmin-width: 60px;\r\nborder-radius: 5px;\r\nbackground-color: #2E4057;\r\ncolor:#D7D9D1 ;\r\n}\r\n.searchbtn:hover{\r\n    background-color: #fff;\r\n    color:#2E4057;\r\n    border-color:#2E4057 ;\r\n    box-shadow: 0 0 8px rgba(27, 48, 34, 0.5);\r\n}\r\n\r\n/*SPINNER*/\r\n#loading-spinner {\r\n  display: none;\r\n  position: fixed;  \r\n   top: 6.5%; /*Centra verticalmente */\r\n  left: 65%;  /*Aggiusta la distanza dalla destra */\r\n transform: translateY(-50%);   /*Centra meglio verticalmente */\r\n}\r\n/* Animazione per far girare lo spinner */\r\n.spinner-border2 {\r\n  width: 2rem;  /* Dimensione dello spinner */\r\n  height: 2rem;  /* Dimensione dello spinner */\r\n  border: 0.25em solid #ccc;  /* Colore grigio per il bordo */\r\n  border-top: 0.25em solid #2E4057;  /* Colore nero per la parte in movimento */\r\n  border-radius: 50%;  /* Bordo rotondo */\r\n  animation: spin 1s linear infinite;  /* Animazione infinita di rotazione */\r\n\r\n}\r\n  @keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n\r\n\r\n  /*LIBRO*/\r\n  .book {\r\n    position: relative;\r\n    display: flex;\r\n    width: 700px;\r\n    height: 450px;\r\n    perspective: 1000px;\r\n    margin-bottom: 130px;\r\n    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);\r\n    border-radius: 10px;\r\n  }\r\n  \r\n  .page {\r\n    width: 50%;\r\n    height: 100%;\r\n    background: #D7D9D1;\r\n    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);\r\n    display: flex;\r\n    align-items: flex-start;\r\n    justify-content: flex-start;\r\n    padding: 20px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    flex-direction: column;\r\n  }\r\n\r\n.left-page {\r\n    border-right: 1px solid rgba(0, 0, 0, 0.2); /* Linea centrale  */\r\n    padding-right: 25px;\r\n    border-top-left-radius: 10px;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-left-radius: 10px ;   \r\n     overflow-y: auto;\r\n    scrollbar-width: none; /* Nasconde la barra su Firefox */\r\n  } \r\n  .left-page::-webkit-scrollbar {\r\n    display: none; /* Nasconde la barra su Chrome e Safari */\r\n}\r\n  \r\n  \r\n  .right-page {\r\n    border-left: 1px solid rgba(0, 0, 0, 0.2); /* Linea centrale */\r\n    padding-left: 25px;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 10px;\r\n    border-bottom-right-radius: 10px ;\r\n    overflow-y: auto;\r\n  }\r\n\r\n  .right-page::-webkit-scrollbar {\r\n    display: none; /* Nasconde la barra su Chrome e Safari */\r\n}\r\n  \r\n  .spine {\r\n    position: absolute;\r\n    width: 50px;\r\n    height: 100%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    background: linear-gradient(to right, #D7D9D1, rgba(0, 0, 0, 0.4), #D7D9D1);\r\n    z-index: 5;\r\n  }\r\n  /* Effetto profondità ai lati */\r\n  .page-depth {\r\n    position: absolute;\r\n    width: 20px;\r\n    height: 100%;\r\n    background: linear-gradient(to bottom, #e0e0e0, #c9c9c9);\r\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\r\n    z-index: -1;\r\n  }\r\n  \r\n  .left-depth {\r\n   margin-top: 4px;\r\n    max-height: 425px;\r\n    left: -18px;\r\n    box-shadow: -10px 0 20px rgba(0, 0, 0, 0.15); /* Ombra sinistra */\r\n  border-top-left-radius: 50px;\r\n  border-bottom-left-radius: 70px;\r\n  }\r\n  \r\n  .right-depth {\r\n    margin-top: 4px;\r\n    max-height: 425px;\r\n    right: -18px;\r\n    box-shadow: 10px 0 20px rgba(0, 0, 0, 0.15); /* Ombra destra */ \r\n    border-top-right-radius: 50px;\r\n  border-bottom-right-radius: 70px;\r\n  }\r\n\r\n  #book-description{\r\n   max-width: 300px;\r\n  }\r\n  \r\n  #book-author{\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    margin-bottom: 3%;\r\n  } \r\n  \r\n\r\n  /* Parte inferiore della copertina */\r\n.cover {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 20px;\r\n    background-color: #6e0f0e ; \r\n   z-index: 15; /*  Sopra le pagine */\r\n}\r\n\r\n.bottom-cover {\r\n    bottom: 0;\r\n    border-bottom-left-radius: 50px; /* Smusso per un look più realistico */\r\n    border-bottom-right-radius: 50px;\r\n}\r\n\r\n\r\n  .book:hover {\r\n    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4); /* Ombra più intensa */\r\n    transition: box-shadow 0.3s ease-in-out;\r\n    cursor: url(${___CSS_LOADER_URL_REPLACEMENT_0___}), auto;\r\n  }\r\n  .bookbtn {\r\n    height: 30px;\r\n    width: 30px;\r\n    border-radius: 50%;\r\n    background-color:rgba(46, 64, 87, 0.7); /* Semitrasparente con opacità 0.7 */\r\n    color: white;\r\n    border: none;\r\n    cursor: pointer;\r\n    font-size: 20px; /* Puoi regolare la dimensione della freccia */\r\n    position: absolute;\r\n    bottom: 25px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center; /* Questo centra il contenuto */\r\n}\r\n\r\n#previous-book {\r\n    left: 20px; /* Angolo sinistro in basso */\r\n    position: fixed;\r\n}\r\n\r\n#next-book {\r\n    right: 20px; /* Angolo destro in basso */\r\n    position: fixed;\r\n}\r\n\r\n#description-button {\r\n    margin-top: 20px;\r\n    width: 100%;\r\n    background-color: #2E4057;\r\n    border-color: #2E4057;\r\n    color: white;\r\n    border-radius: 5px;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n}\r\n  \r\n.line {\r\n    position: relative;\r\n    z-index: 1;\r\n    width: 100%;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    text-align: left;\r\n    font-size: 18px;\r\n    color: #2E4057;\r\n    border-bottom: 1px solid #2E4057;\r\n  }\r\n \r\n  p {\r\n    font-size: 18px;\r\n    color: #2E4057; /* Colore carbone */\r\n    text-align: center;\r\n  }\r\n  #book-cover {\r\n    width: 80%;\r\n    max-width: 250px;        /* Larghezza massima */\r\n    height: auto; /* Mantieni le proporzioni */\r\n    max-height: 350px;\r\n    display: block;\r\n    margin: 0 auto;/* Centra l'immagine */\r\n    border-radius: 5px;\r\n    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);\r\n  }\r\n\r\n  #book-title{\r\n    text-align: center;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  /*footer*/\r\n  .footer{\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    max-height: 200px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; \r\n    gap: 100px; /* Distanza flessibile tra le immagini */\r\n  }\r\n  .footer img {\r\n    margin-left: 20%;\r\n  margin-bottom: 50px;\r\n    width: 50%;\r\n    height: auto;\r\n    display: block; \r\n    transform: rotate(25deg);\r\n  }\r\n  .footer img:hover {\r\n    animation: bounce 0.6s ease 3;\r\n    cursor: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  }\r\n  \r\n  @keyframes bounce {\r\n    0%, 100% {\r\n      transform: translateY(0);\r\n    }\r\n    50% {\r\n      transform: translateY(-10px);\r\n    }\r\n  }\r\n\r\n/*SCHERMI PIU' PICCOLI*/\r\n  @media (min-width: 602px) and (max-width: 800px) {\r\n    .page-depth {\r\n        width: 12%; /* Ridotto per mantenere la proporzione */\r\n        height: 100%;\r\n        background: linear-gradient(to bottom, #e0e0e0, #c9c9c9);\r\n        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\r\n        position: absolute;\r\n        z-index: -1;\r\n    }\r\n\r\n    .left-depth {\r\n        left: -12px; /* Regolato per mantenere visibile */\r\n        box-shadow: -8px 0 12px rgba(0, 0, 0, 0.15);\r\n    }\r\n\r\n    .right-depth {\r\n        right: -12px;\r\n        box-shadow: 8px 0 12px rgba(0, 0, 0, 0.15);\r\n    }\r\n\r\n    .book {\r\n        max-width: 95%;\r\n        overflow: visible; /* Permette la visibilità */\r\n        margin: auto; \r\n    }\r\n}\r\n@media(max-width: 601px){\r\n  body{\r\n    display: none;\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./src/css/stylePC.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./node_modules/css-loader/dist/runtime/getUrl.js?");

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

/***/ "./src/css/stylePC.css":
/*!*****************************!*\
  !*** ./src/css/stylePC.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_stylePC_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./stylePC.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/stylePC.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_stylePC_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_stylePC_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_stylePC_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_stylePC_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./src/css/stylePC.css?");

/***/ }),

/***/ "./src/img/cursore.png":
/*!*****************************!*\
  !*** ./src/img/cursore.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"img/cursore.png\";\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./src/img/cursore.png?");

/***/ }),

/***/ "./src/js/indexPC.js":
/*!***************************!*\
  !*** ./src/js/indexPC.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_stylePC_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/stylePC.css */ \"./src/css/stylePC.css\");\n\r\n\r\n//ANIMAZIONI\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    // Riferimenti agli elementi\r\n    const book = document.querySelector('.book');\r\n    const navbar = document.querySelector('.nav');\r\n    const footer = document.querySelector('.footer');\r\n    const postIts = document.querySelectorAll('.post-it');  // Assicurati che esistano gli elementi con classe 'post-it'\r\n\r\n    // Inizializza la posizione degli elementi\r\n    function initializePositions() {\r\n        // Imposta inizialmente gli elementi fuori dallo schermo\r\n        book.style.transform = \"translateX(-200%)\";  // Partenza libro fuori schermo a sinistra\r\n        navbar.style.opacity = \"0\";  // Navbar invisibile all'inizio\r\n        postIts.forEach(postIt => {\r\n            postIt.style.transform = \"translateY(120%)\";  // Post-it parte sotto lo schermo\r\n        });\r\n    }\r\n\r\n    // Funzione per animare il libro da sinistra a destra\r\n    function animateBook() {\r\n        book.style.transition = \"transform 1s ease-in-out\";\r\n        book.style.transform = \"translateX(0)\"; // Spostamento verso la posizione finale\r\n    }\r\n\r\n    // Funzione per animare i post-it da sotto verso l'alto\r\n    function animatePostIts() {\r\n        postIts.forEach(postIt => {\r\n            postIt.style.transition = \"transform 1s ease-in-out\";\r\n            postIt.style.transform = \"translateY(0)\";  // Spostamento verso la posizione finale\r\n        });\r\n    }\r\n\r\n    // Funzione per fare comparire la navbar con un effetto fade-in\r\n    function fadeInNavbar() {\r\n        navbar.style.transition = \"opacity 1s ease-in-out\";\r\n        navbar.style.opacity = \"1\";\r\n    }\r\n\r\n    // Funzione per animare l'intera pagina\r\n    function startAnimations() {\r\n        initializePositions();  // Imposta la posizione iniziale degli elementi\r\n        setTimeout(() => {\r\n            animateBook();  // Anima il libro\r\n            animatePostIts();  // Anima i post-it\r\n            setTimeout(fadeInNavbar, 1000); // Navbar appare dopo 1 secondo\r\n        }, 500);  // Ritardo di 0.5 secondi per avviare l'animazione\r\n    }\r\n\r\n    // Avvia le animazioni al caricamento della pagina\r\n    startAnimations();\r\n});\r\n\r\n\r\n\r\n//LIBRO\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", function () {\r\n    const searchInput = document.querySelector(\".form-control\");\r\n    const searchButton = document.querySelector(\".searchbtn\");\r\n    const leftPage = document.getElementById(\"left-page\");\r\n    const rightPage = document.getElementById(\"right-page\");\r\n    const bookCover = document.getElementById(\"book-cover\");\r\n    const bookTitle = document.getElementById(\"book-title\");\r\n    const bookDescription = document.getElementById(\"book-description\");\r\n    const descriptionButton = document.getElementById(\"description-button\");\r\n    const previousButton = document.getElementById(\"previous-book\");\r\n    const nextButton = document.getElementById(\"next-book\");\r\n    const bookAuthor = document.getElementById(\"book-author\");\r\n    const loader = document.getElementById(\"loading-spinner\");  // Aggiungi il riferimento al loader\r\n\r\n    let currentBooks = []; // Array per memorizzare i libri trovati\r\n    let currentBookIndex = 0; // Indice del libro attuale\r\n   \r\n    // Funzione per ottenere i libri dalla ricerca\r\n    async function fetchBooks(query) {\r\n      try {\r\n        loader.style.display = \"block\"; // Mostra il loader prima della richiesta\r\n        let url = `https://openlibrary.org/search.json?q=${query}`;\r\n        const response = await fetch(url);\r\n        const data = await response.json();\r\n  \r\n        loader.style.display = \"none\"; // Nasconde il loader quando i dati sono disponibili\r\n  \r\n        if (!data.docs || data.docs.length === 0) {\r\n          displayNoResults();\r\n          return;\r\n        }\r\n        currentBooks = data.docs;\r\n        displayBook(currentBooks[currentBookIndex]);\r\n      } catch (error) {\r\n        console.error(\"Errore durante il recupero dei libri:\", error);\r\n      }\r\n    }\r\n  \r\n    // Funzione per ottenere la descrizione dettagliata del libro\r\n    async function fetchBookDetails(bookKey) {\r\n        try {\r\n          const url = `https://openlibrary.org${bookKey}.json`;  // Costruisce l'URL per la descrizione\r\n          const response = await fetch(url);\r\n          const bookDetails = await response.json();\r\n      \r\n          if (bookDetails.description) {\r\n            // Se la descrizione è un oggetto, prova a convertirlo in una stringa\r\n            if (typeof bookDetails.description === 'object') {\r\n              return bookDetails.description.value || \"No description available.\";\r\n            }\r\n            return bookDetails.description;\r\n          } else {\r\n            return \"No description available.\";  // Fallback se la descrizione non è disponibile\r\n          }\r\n        } catch (error) {\r\n          console.error(\"Errore durante il recupero della descrizione:\", error);\r\n          return \"Error loading description.\";\r\n        }\r\n      }\r\n  \r\n    // Funzione per visualizzare i libri trovati\r\n    async function displayBook(book) {\r\n      const bookImage = book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : \"img/standardcover2.png\";\r\n      bookCover.src = bookImage;\r\n      bookTitle.textContent = book.title || \"Titolo non disponibile\";\r\n      const bookAuthorText = book.author_name ? book.author_name.join(\", \") : \"Autore sconosciuto\";\r\n      bookAuthor.textContent = bookAuthorText;  // Aggiorna l'autore nel DOM\r\n\r\n      // Chiamata per ottenere la descrizione completa\r\n      const description = await fetchBookDetails(book.key);\r\n      bookDescription.querySelector(\"#description-text\").textContent = description;\r\n\r\n      // Nascondi la descrizione inizialmente\r\n      //bookDescription.style.display = \"none\"; \r\n    }\r\n  \r\n    // Funzione di ricerca\r\n    searchButton.addEventListener(\"click\", function(event) {\r\n      event.preventDefault(); // Impedisce il comportamento predefinito (il ricaricamento della pagina)\r\n      const query = searchInput.value.trim().toLowerCase();\r\n      if (query) {\r\n        currentBookIndex = 0; // Resetta l'indice del libro alla ricerca successiva\r\n        fetchBooks(query);\r\n      }\r\n    });\r\n  \r\n    // Mostra/Nascondi la descrizione del libro (a toggle)\r\n    descriptionButton.addEventListener(\"click\", function() {\r\n      if (bookDescription.style.display === \"none\" || bookDescription.style.display === \"\") {\r\n        bookDescription.style.display = \"block\";  // Mostra la descrizione nella pagina destra\r\n      } else {\r\n        bookDescription.style.display = \"none\";  // Nascondi la descrizione\r\n      }\r\n    });\r\n  \r\n    // Navigazione libro precedente\r\n    previousButton.addEventListener(\"click\", function () {\r\n      if (currentBookIndex > 0) {\r\n        currentBookIndex--;\r\n        displayBook(currentBooks[currentBookIndex]);\r\n      }\r\n    });\r\n  \r\n    // Navigazione libro successivo\r\n    nextButton.addEventListener(\"click\", function () {\r\n      if (currentBookIndex < currentBooks.length - 1) {\r\n        currentBookIndex++;\r\n        displayBook(currentBooks[currentBookIndex]);\r\n      }\r\n    });\r\n  \r\n    // Funzione quando non ci sono risultati\r\n    function displayNoResults() {\r\n      bookCover.src = \"img/standardcover2.png\";\r\n      bookTitle.textContent = \"Nessun risultato\";\r\n      bookAuthor.textContent = \"\"; // Pulisce il campo autore\r\n      bookDescription.querySelector(\"#description-text\").textContent = \"Sembra che la ricerca non abbia prodotto risultati\";\r\n      bookDescription.style.display = \"none\";\r\n    }\r\n  });\n\n//# sourceURL=webpack://progetto-javascript-advanced-di-antonio-laudani/./src/js/indexPC.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"indexPC": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/indexPC.js");
/******/ 	
/******/ })()
;