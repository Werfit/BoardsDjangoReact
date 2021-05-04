/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkboards"] = self["webpackChunkboards"] || []).push([["frontend_src_components_common_Alerts_js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _arrayWithHoles)\n/* harmony export */ });\nfunction _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\n\n//# sourceURL=webpack://boards/./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _iterableToArrayLimit)\n/* harmony export */ });\nfunction _iterableToArrayLimit(arr, i) {\n  var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n\n  if (_i == null) return;\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n\n  var _s, _e;\n\n  try {\n    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\n//# sourceURL=webpack://boards/./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _nonIterableRest)\n/* harmony export */ });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n\n//# sourceURL=webpack://boards/./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _slicedToArray)\n/* harmony export */ });\n/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js\");\n\n\n\n\nfunction _slicedToArray(arr, i) {\n  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();\n}\n\n//# sourceURL=webpack://boards/./node_modules/@babel/runtime/helpers/esm/slicedToArray.js?");

/***/ }),

/***/ "./frontend/src/actions/alerts.js":
/*!****************************************!*\
  !*** ./frontend/src/actions/alerts.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createError\": () => (/* binding */ createError),\n/* harmony export */   \"createMessage\": () => (/* binding */ createMessage),\n/* harmony export */   \"clearAlerts\": () => (/* binding */ clearAlerts)\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ \"./node_modules/core-js/modules/es.object.entries.js\");\n/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ \"./frontend/src/actions/types.js\");\n\n\nvar createError = function createError(err) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__.ERROR_CREATE,\n    payload: Object.entries(err)\n  };\n};\nvar createMessage = function createMessage(msg) {\n  return {\n    type: _types__WEBPACK_IMPORTED_MODULE_1__.MESSAGE_CREATE,\n    payload: msg\n  };\n};\nvar clearAlerts = function clearAlerts() {\n  return function (dispatch) {\n    return dispatch({\n      type: _types__WEBPACK_IMPORTED_MODULE_1__.ALERTS_CLEAR\n    });\n  };\n};\n\n//# sourceURL=webpack://boards/./frontend/src/actions/alerts.js?");

/***/ }),

/***/ "./frontend/src/components/common/Alerts.js":
/*!**************************************************!*\
  !*** ./frontend/src/components/common/Alerts.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.timers.js */ \"./node_modules/core-js/modules/web.timers.js\");\n/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var actions_alerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions/alerts */ \"./frontend/src/actions/alerts.js\");\n\n\n\n\n\n\n\nvar Alerts = function Alerts() {\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {\n    return state.alerts;\n  }),\n      msgs = _useSelector.msgs,\n      errors = _useSelector.errors;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      _msgs = _useState2[0],\n      setMsgs = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),\n      _errs = _useState4[0],\n      setErrors = _useState4[1];\n\n  var dsp = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (msgs) {\n      setMsgs(msgs);\n      removeAlerts();\n    }\n  }, [msgs]);\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    if (errors) {\n      setErrors(errors);\n      removeAlerts();\n    }\n  }, [errors]);\n\n  var removeAlerts = function removeAlerts() {\n    setTimeout(function () {\n      setMsgs('');\n      setErrors(null);\n      dsp((0,actions_alerts__WEBPACK_IMPORTED_MODULE_5__.clearAlerts)());\n    }, 3000);\n  };\n\n  return _msgs && !_errs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    className: \"container alert alert-success my-4\"\n  }, _msgs) : _errs && !_msgs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    className: \"container alert alert-danger my-4\"\n  }, _errs.map(function (_err, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n      key: index\n    }, _err[1]);\n  })) : _errs && _msgs ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    className: \"container alert alert-danger my-4\"\n  }, _errs.map(function (_err, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n      key: index\n    }, _err[1]);\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"div\", {\n    className: \"container alert alert-success\"\n  }, _msgs)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, null);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alerts);\n\n//# sourceURL=webpack://boards/./frontend/src/components/common/Alerts.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-to-array.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-array.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar propertyIsEnumerable = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\").f;\n\n// `Object.{ entries, values }` methods implementation\nvar createMethod = function (TO_ENTRIES) {\n  return function (it) {\n    var O = toIndexedObject(it);\n    var keys = objectKeys(O);\n    var length = keys.length;\n    var i = 0;\n    var result = [];\n    var key;\n    while (length > i) {\n      key = keys[i++];\n      if (!DESCRIPTORS || propertyIsEnumerable.call(O, key)) {\n        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);\n      }\n    }\n    return result;\n  };\n};\n\nmodule.exports = {\n  // `Object.entries` method\n  // https://tc39.es/ecma262/#sec-object.entries\n  entries: createMethod(true),\n  // `Object.values` method\n  // https://tc39.es/ecma262/#sec-object.values\n  values: createMethod(false)\n};\n\n\n//# sourceURL=webpack://boards/./node_modules/core-js/internals/object-to-array.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $map = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").map;\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\n\nvar HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');\n\n// `Array.prototype.map` method\n// https://tc39.es/ecma262/#sec-array.prototype.map\n// with adding support of @@species\n$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {\n  map: function map(callbackfn /* , thisArg */) {\n    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://boards/./node_modules/core-js/modules/es.array.map.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.entries.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.entries.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $entries = __webpack_require__(/*! ../internals/object-to-array */ \"./node_modules/core-js/internals/object-to-array.js\").entries;\n\n// `Object.entries` method\n// https://tc39.es/ecma262/#sec-object.entries\n$({ target: 'Object', stat: true }, {\n  entries: function entries(O) {\n    return $entries(O);\n  }\n});\n\n\n//# sourceURL=webpack://boards/./node_modules/core-js/modules/es.object.entries.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar slice = [].slice;\nvar MSIE = /MSIE .\\./.test(userAgent); // <- dirty ie9- check\n\nvar wrap = function (scheduler) {\n  return function (handler, timeout /* , ...arguments */) {\n    var boundArgs = arguments.length > 2;\n    var args = boundArgs ? slice.call(arguments, 2) : undefined;\n    return scheduler(boundArgs ? function () {\n      // eslint-disable-next-line no-new-func -- spec requirement\n      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);\n    } : handler, timeout);\n  };\n};\n\n// ie9- setTimeout & setInterval additional parameters fix\n// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers\n$({ global: true, bind: true, forced: MSIE }, {\n  // `setTimeout` method\n  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout\n  setTimeout: wrap(global.setTimeout),\n  // `setInterval` method\n  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval\n  setInterval: wrap(global.setInterval)\n});\n\n\n//# sourceURL=webpack://boards/./node_modules/core-js/modules/web.timers.js?");

/***/ })

}]);