module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const config = {
  clientIdGoogle: "543848303932-dbretbd5onphfc70vifaii3ldaclqhao.apps.googleusercontent.com",
  urlUserIngoGoogle: "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=",
  urlGitLabAuth: "https://gitlab.com/oauth/token?grant_type=password&username=",
  urlGitLabUserInfo: "https://gitlab.com/api/v4/users?username="
};
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./src/contexts/LoginContexts.tsx":
/*!****************************************!*\
  !*** ./src/contexts/LoginContexts.tsx ***!
  \****************************************/
/*! exports provided: UserContext, UserProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProvider", function() { return UserProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ "./src/config.js");

var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\contexts\\LoginContexts.tsx";





const UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
const UserProvider = props => {
  const {
    0: username,
    1: setUsername
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: fullName,
    1: setFullName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: urlProfilePicture,
    1: setUrlProfilePicture
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: authenticated,
    1: setAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: googleAuthenticated,
    1: setGoogleAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: accessToken,
    1: setAccessToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  function ClearUserInfo() {
    setUsername('');
    setPassword('');
    setFullName('');
    setAuthenticated(false);
    setGoogleAuthenticated(false);
    setAccessToken('');
    setUrlProfilePicture('');
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('accessToken', '');
  }

  function setUser(e) {
    const username = e.target.value;
    setUsername(username);
  }

  function setUserPassword(e) {
    const password = e.target.value;
    setPassword(password);
  }

  function SignIn() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/api/auth?grant_type=password&username=${username}&password=${password}`).then(res => {
      if (res.data.access_token) {
        setAccessToken(res.data.access_token);
        setAuthenticated(true);
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_5__["default"].urlGitLabUserInfo}${username}`).then(res => {
          setFullName(res.data[0].name);
          const urlProfilePicture = res.data[0].avatar_url.replace('10.10.1.35', '177.84.246.126:9955');
          setUrlProfilePicture(urlProfilePicture);
        });
        router.push('/home');
      }
    }).catch(err => console.log(err));
  }

  function SearchUserDetails(token) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_5__["default"].urlUserIngoGoogle}${token}`).then(res => {
      const {
        picture,
        given_name
      } = res.data;
      setUrlProfilePicture(picture);
      setFullName(given_name);
      setUsername(res.data.email.split("@")[0]);
    });
  }

  function SignInGoogle({
    accessToken
  }) {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('accessToken', accessToken);
    setAccessToken(accessToken);
    setGoogleAuthenticated(true);
    SearchUserDetails(accessToken);
    router.push('/home');
  }

  function SignOut() {
    router.push('/');
    ClearUserInfo();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserContext.Provider, {
    value: {
      username,
      setUser,
      password,
      setUserPassword,
      fullName,
      urlProfilePicture,
      SignIn,
      SignInGoogle,
      SearchUserDetails,
      SignOut,
      ClearUserInfo
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/LoginContexts */ "./src/contexts/LoginContexts.tsx");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_2__["UserProvider"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvTG9naW5Db250ZXh0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImNvbmZpZyIsImNsaWVudElkR29vZ2xlIiwidXJsVXNlckluZ29Hb29nbGUiLCJ1cmxHaXRMYWJBdXRoIiwidXJsR2l0TGFiVXNlckluZm8iLCJVc2VyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJwcm9wcyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJmdWxsTmFtZSIsInNldEZ1bGxOYW1lIiwidXJsUHJvZmlsZVBpY3R1cmUiLCJzZXRVcmxQcm9maWxlUGljdHVyZSIsImF1dGhlbnRpY2F0ZWQiLCJzZXRBdXRoZW50aWNhdGVkIiwiZ29vZ2xlQXV0aGVudGljYXRlZCIsInNldEdvb2dsZUF1dGhlbnRpY2F0ZWQiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwicm91dGVyIiwidXNlUm91dGVyIiwiQ2xlYXJVc2VySW5mbyIsIkNvb2tpZXMiLCJzZXQiLCJzZXRVc2VyIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0VXNlclBhc3N3b3JkIiwiU2lnbkluIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImRhdGEiLCJhY2Nlc3NfdG9rZW4iLCJnZXQiLCJuYW1lIiwiYXZhdGFyX3VybCIsInJlcGxhY2UiLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiU2VhcmNoVXNlckRldGFpbHMiLCJ0b2tlbiIsInBpY3R1cmUiLCJnaXZlbl9uYW1lIiwiZW1haWwiLCJzcGxpdCIsIlNpZ25Jbkdvb2dsZSIsIlNpZ25PdXQiLCJjaGlsZHJlbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUEsTUFBTUEsTUFBTSxHQUFHO0FBQ1hDLGdCQUFjLEVBQUUsMEVBREw7QUFFWEMsbUJBQWlCLEVBQUUsc0VBRlI7QUFHWEMsZUFBYSxFQUFFLDhEQUhKO0FBSVhDLG1CQUFpQixFQUFFO0FBSlIsQ0FBZjtBQU9lSixxRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUNrRDtBQWZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1CRCxDQXpGTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCUDtBQUNBO0FBRUE7O0FBRUEsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFmLEVBQXlDO0FBQ3ZDLHNCQUNFLHFFQUFDLG9FQUFEO0FBQUEsMkJBQ0UscUVBQUMsU0FBRCxvQkFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O0FBRWNGLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiY29uc3QgY29uZmlnID0ge1xyXG4gICAgY2xpZW50SWRHb29nbGU6IFwiNTQzODQ4MzAzOTMyLWRicmV0YmQ1b25waGZjNzB2aWZhaWkzbGRhY2xxaGFvLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCIsXHJcbiAgICB1cmxVc2VySW5nb0dvb2dsZTogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvdXNlcmluZm8/YWx0PWpzb24mYWNjZXNzX3Rva2VuPVwiLFxyXG4gICAgdXJsR2l0TGFiQXV0aDogXCJodHRwczovL2dpdGxhYi5jb20vb2F1dGgvdG9rZW4/Z3JhbnRfdHlwZT1wYXNzd29yZCZ1c2VybmFtZT1cIixcclxuICAgIHVybEdpdExhYlVzZXJJbmZvOiBcImh0dHBzOi8vZ2l0bGFiLmNvbS9hcGkvdjQvdXNlcnM/dXNlcm5hbWU9XCIsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbmZpZyIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnJ1xyXG5cclxuaW50ZXJmYWNlIFVzZXJDb250ZXh0RGF0YSB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgdXJsUHJvZmlsZVBpY3R1cmU6IHN0cmluZztcclxuICBzZXRVc2VyOiAoZSkgPT4gdm9pZDtcclxuICBzZXRVc2VyUGFzc3dvcmQ6IChlKSA9PiB2b2lkO1xyXG4gIFNpZ25JbjogKCkgPT4gdm9pZDtcclxuICBTaWduSW5Hb29nbGU6IChyZXMpID0+IHZvaWQ7XHJcbiAgU2lnbk91dDogKCkgPT4gdm9pZDtcclxuICBTZWFyY2hVc2VyRGV0YWlsczogKHRva2VuKSA9PiB2b2lkO1xyXG4gIENsZWFyVXNlckluZm86ICgpID0+IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBVc2VyQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJQcm92aWRlcjogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Z1bGxOYW1lLCBzZXRGdWxsTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXJsUHJvZmlsZVBpY3R1cmUsIHNldFVybFByb2ZpbGVQaWN0dXJlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthdXRoZW50aWNhdGVkLCBzZXRBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZ29vZ2xlQXV0aGVudGljYXRlZCwgc2V0R29vZ2xlQXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgZnVuY3Rpb24gQ2xlYXJVc2VySW5mbygpe1xyXG4gICAgc2V0VXNlcm5hbWUoJycpXHJcbiAgICBzZXRQYXNzd29yZCgnJylcclxuICAgIHNldEZ1bGxOYW1lKCcnKVxyXG4gICAgc2V0QXV0aGVudGljYXRlZChmYWxzZSlcclxuICAgIHNldEdvb2dsZUF1dGhlbnRpY2F0ZWQoZmFsc2UpXHJcbiAgICBzZXRBY2Nlc3NUb2tlbignJylcclxuICAgIHNldFVybFByb2ZpbGVQaWN0dXJlKCcnKVxyXG4gICAgQ29va2llcy5zZXQoJ2FjY2Vzc1Rva2VuJywgJycpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNldFVzZXIoZSkge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFVzZXJuYW1lKHVzZXJuYW1lKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gc2V0VXNlclBhc3N3b3JkKGUpIHtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRQYXNzd29yZChwYXNzd29yZCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFNpZ25JbigpIHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIGAvYXBpL2F1dGg/Z3JhbnRfdHlwZT1wYXNzd29yZCZ1c2VybmFtZT0ke3VzZXJuYW1lfSZwYXNzd29yZD0ke3Bhc3N3b3JkfWBcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLmFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgc2V0QWNjZXNzVG9rZW4ocmVzLmRhdGEuYWNjZXNzX3Rva2VuKVxyXG4gICAgICAgICAgc2V0QXV0aGVudGljYXRlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgICBheGlvcy5nZXQoYCR7Y29uZmlnLnVybEdpdExhYlVzZXJJbmZvfSR7dXNlcm5hbWV9YClcclxuICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHNldEZ1bGxOYW1lKHJlcy5kYXRhWzBdLm5hbWUpXHJcbiAgICAgICAgICAgIGNvbnN0IHVybFByb2ZpbGVQaWN0dXJlID0gcmVzLmRhdGFbMF0uYXZhdGFyX3VybC5yZXBsYWNlKCcxMC4xMC4xLjM1JywnMTc3Ljg0LjI0Ni4xMjY6OTk1NScpXHJcbiAgICAgICAgICAgIHNldFVybFByb2ZpbGVQaWN0dXJlKHVybFByb2ZpbGVQaWN0dXJlKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFNlYXJjaFVzZXJEZXRhaWxzKHRva2VuKXtcclxuICAgIGF4aW9zLmdldChgJHtjb25maWcudXJsVXNlckluZ29Hb29nbGV9JHt0b2tlbn1gKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgY29uc3Qge3BpY3R1cmUsIGdpdmVuX25hbWV9ID0gcmVzLmRhdGFcclxuICAgICAgc2V0VXJsUHJvZmlsZVBpY3R1cmUocGljdHVyZSlcclxuICAgICAgc2V0RnVsbE5hbWUoZ2l2ZW5fbmFtZSlcclxuICAgICAgc2V0VXNlcm5hbWUocmVzLmRhdGEuZW1haWwuc3BsaXQoXCJAXCIpWzBdKVxyXG4gICAgfSlcclxuICB9XHJcbiAgZnVuY3Rpb24gU2lnbkluR29vZ2xlKHthY2Nlc3NUb2tlbn0pe1xyXG4gICAgICBDb29raWVzLnNldCgnYWNjZXNzVG9rZW4nLCBhY2Nlc3NUb2tlbilcclxuICAgICAgc2V0QWNjZXNzVG9rZW4oYWNjZXNzVG9rZW4pXHJcbiAgICAgIHNldEdvb2dsZUF1dGhlbnRpY2F0ZWQodHJ1ZSlcclxuICAgICAgU2VhcmNoVXNlckRldGFpbHMoYWNjZXNzVG9rZW4pXHJcbiAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFNpZ25PdXQoKXtcclxuICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgIENsZWFyVXNlckluZm8oKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHNldFVzZXIsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgc2V0VXNlclBhc3N3b3JkLFxyXG4gICAgICAgIGZ1bGxOYW1lLFxyXG4gICAgICAgIHVybFByb2ZpbGVQaWN0dXJlLFxyXG4gICAgICAgIFNpZ25JbixcclxuICAgICAgICBTaWduSW5Hb29nbGUsXHJcbiAgICAgICAgU2VhcmNoVXNlckRldGFpbHMsXHJcbiAgICAgICAgU2lnbk91dCxcclxuICAgICAgICBDbGVhclVzZXJJbmZvXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVXNlclByb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRzL0xvZ2luQ29udGV4dHNcIjtcblxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPFVzZXJQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1VzZXJQcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=