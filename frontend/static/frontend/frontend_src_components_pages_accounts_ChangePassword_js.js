/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkboards"] = self["webpackChunkboards"] || []).push([["frontend_src_components_pages_accounts_ChangePassword_js"],{

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

/***/ "./frontend/src/actions/profile.js":
/*!*****************************************!*\
  !*** ./frontend/src/actions/profile.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProfileData\": () => (/* binding */ getProfileData),\n/* harmony export */   \"patchProfileData\": () => (/* binding */ patchProfileData),\n/* harmony export */   \"changePasswords\": () => (/* binding */ changePasswords)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var utils_tokenConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/tokenConfig */ \"./frontend/src/utils/tokenConfig.js\");\n/* harmony import */ var _alerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alerts */ \"./frontend/src/actions/alerts.js\");\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types */ \"./frontend/src/actions/types.js\");\n\n\n\n\n\n\nvar getProfileData = function getProfileData() {\n  return /*#__PURE__*/function () {\n    var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(dispatch, getState) {\n      var result;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_5__.PROFILE_LOADING\n              });\n              _context.prev = 1;\n              _context.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default().get('/api/v1/accounts/settings/profile/', (0,utils_tokenConfig__WEBPACK_IMPORTED_MODULE_3__.default)(getState));\n\n            case 4:\n              result = _context.sent;\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_5__.PROFILE_LOADED,\n                payload: result.data\n              });\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](1);\n              dispatch((0,_alerts__WEBPACK_IMPORTED_MODULE_4__.createError)(_context.t0.response.data));\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 8]]);\n    }));\n\n    return function (_x, _x2) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\nvar patchProfileData = function patchProfileData(data) {\n  return /*#__PURE__*/function () {\n    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(dispatch, getState) {\n      var result;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default().patch('/api/v1/accounts/settings/profile/', data, (0,utils_tokenConfig__WEBPACK_IMPORTED_MODULE_3__.default)(getState));\n\n            case 3:\n              result = _context2.sent;\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_5__.PROFILE_PATCHED,\n                payload: result.data\n              });\n              dispatch((0,_alerts__WEBPACK_IMPORTED_MODULE_4__.createMessage)('Data successfully updated!'));\n              _context2.next = 11;\n              break;\n\n            case 8:\n              _context2.prev = 8;\n              _context2.t0 = _context2[\"catch\"](0);\n              dispatch((0,_alerts__WEBPACK_IMPORTED_MODULE_4__.createError)(_context2.t0.response.data));\n\n            case 11:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 8]]);\n    }));\n\n    return function (_x3, _x4) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n};\nvar changePasswords = function changePasswords(data) {\n  return /*#__PURE__*/function () {\n    var _ref3 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(dispatch, getState) {\n      var _data, result;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _data = {\n                old_password: data.oldPassword,\n                new_password: data.newPassword\n              };\n              _context3.prev = 1;\n              _context3.next = 4;\n              return axios__WEBPACK_IMPORTED_MODULE_2___default().post('/api/v1/accounts/settings/password/', _data, (0,utils_tokenConfig__WEBPACK_IMPORTED_MODULE_3__.default)(getState));\n\n            case 4:\n              result = _context3.sent;\n              dispatch((0,_alerts__WEBPACK_IMPORTED_MODULE_4__.createMessage)(result.data));\n              _context3.next = 11;\n              break;\n\n            case 8:\n              _context3.prev = 8;\n              _context3.t0 = _context3[\"catch\"](1);\n              dispatch({\n                type: _types__WEBPACK_IMPORTED_MODULE_5__.PASSWORD_CHANGE_FAILED,\n                payload: _context3.t0.response.data\n              });\n\n            case 11:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[1, 8]]);\n    }));\n\n    return function (_x5, _x6) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack://boards/./frontend/src/actions/profile.js?");

/***/ }),

/***/ "./frontend/src/components/pages/accounts/ChangePassword.js":
/*!******************************************************************!*\
  !*** ./frontend/src/components/pages/accounts/ChangePassword.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var actions_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions/profile */ \"./frontend/src/actions/profile.js\");\n/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Errors */ \"./frontend/src/components/pages/accounts/Errors.js\");\n\n\n\n\n\n\nvar ChangePassword = function ChangePassword() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      oldPassword = _useState2[0],\n      setOldPassword = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),\n      newPassword = _useState4[0],\n      setNewPassword = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),\n      confirmPassword = _useState6[0],\n      setConfirmPassword = _useState6[1];\n\n  var dsp = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n\n  var _changePasswords = function _changePasswords(e) {\n    e.preventDefault();\n\n    if (newPassword === confirmPassword) {\n      dsp((0,actions_profile__WEBPACK_IMPORTED_MODULE_3__.changePasswords)({\n        oldPassword: oldPassword,\n        newPassword: newPassword\n      }));\n      setOldPassword('');\n      setNewPassword('');\n      setConfirmPassword('');\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"ol\", {\n    className: \"breadcrumb my-4\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"li\", {\n    className: \"breadcrumb-item active\"\n  }, \"Change Password\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Errors__WEBPACK_IMPORTED_MODULE_4__.default, {\n    password1: newPassword,\n    password2: confirmPassword\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"form\", {\n    onSubmit: function onSubmit(e) {\n      return _changePasswords(e);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"label\", {\n    htmlFor: \"oldpassword\",\n    className: \"form-label\"\n  }, \"Old password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"input\", {\n    type: \"password\",\n    className: \"form-control\",\n    id: \"oldpassword\",\n    value: oldPassword,\n    onChange: function onChange(e) {\n      return setOldPassword(e.target.value);\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"label\", {\n    htmlFor: \"newpassword\",\n    className: \"form-label\"\n  }, \"New password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"input\", {\n    type: \"password\",\n    className: \"form-control\",\n    id: \"newpassword\",\n    value: newPassword,\n    onChange: function onChange(e) {\n      return setNewPassword(e.target.value);\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"mb-3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"label\", {\n    htmlFor: \"confirmpassword\",\n    className: \"form-label\"\n  }, \"Confirm password\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"input\", {\n    type: \"password\",\n    className: \"form-control\",\n    id: \"confirmpassword\",\n    value: confirmPassword,\n    onChange: function onChange(e) {\n      return setConfirmPassword(e.target.value);\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"button\", {\n    className: \"btn btn-success\"\n  }, \"Save password\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangePassword);\n\n//# sourceURL=webpack://boards/./frontend/src/components/pages/accounts/ChangePassword.js?");

/***/ }),

/***/ "./frontend/src/components/pages/accounts/Errors.js":
/*!**********************************************************!*\
  !*** ./frontend/src/components/pages/accounts/Errors.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ \"./node_modules/core-js/modules/es.array.map.js\");\n/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ \"./node_modules/core-js/modules/es.object.entries.js\");\n/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n\n\n\n\n\n\n\nvar Errors = function Errors(_ref) {\n  var _ref$checkPasswords = _ref.checkPasswords,\n      checkPasswords = _ref$checkPasswords === void 0 ? true : _ref$checkPasswords,\n      _ref$password = _ref.password1,\n      password1 = _ref$password === void 0 ? 'asd' : _ref$password,\n      _ref$password2 = _ref.password2,\n      password2 = _ref$password2 === void 0 ? 'asd' : _ref$password2;\n\n  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)(function (state) {\n    return state.accounts;\n  }),\n      errors = _useSelector.errors;\n\n  var passwordsCheck = password1 !== password2 && checkPasswords;\n\n  var checkErrorsFields = function checkErrorsFields(key, val) {\n    switch (key) {\n      case 'non_field_errors':\n        return val;\n\n      case 'username':\n      case 'password':\n      case 'email':\n        return \"\".concat(key, \": \").concat(val);\n\n      default:\n        return \"[server]: \".concat(val);\n    }\n  };\n\n  return (errors.length !== 0 || passwordsCheck) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"div\", {\n    className: \"alert alert-danger\"\n  }, passwordsCheck && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"div\", null, \"Passwords don't match\"), Object.entries(errors).map(function (_ref2, index) {\n    var _ref3 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref2, 2),\n        key = _ref3[0],\n        error = _ref3[1];\n\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"div\", {\n      key: index\n    }, checkErrorsFields(key, error));\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Errors);\n\n//# sourceURL=webpack://boards/./frontend/src/components/pages/accounts/Errors.js?");

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

/***/ })

}]);