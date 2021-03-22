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
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`https://gitlab.com/api/v4/users?username=${username}`).then(res => {
          setFullName(res.data[0].name);
          const urlProfilePicture = res.data[0].avatar_url.replace('10.10.1.35', '177.84.246.126:9955');
          setUrlProfilePicture(urlProfilePicture);
        });
        router.push('/home');
      }
    }).catch(err => console.log(err));
  }

  function SearchUserDetails(token) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`).then(res => {
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
    lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL0xvZ2luQ29udGV4dHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJVc2VyQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJVc2VyUHJvdmlkZXIiLCJwcm9wcyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VTdGF0ZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJmdWxsTmFtZSIsInNldEZ1bGxOYW1lIiwidXJsUHJvZmlsZVBpY3R1cmUiLCJzZXRVcmxQcm9maWxlUGljdHVyZSIsImF1dGhlbnRpY2F0ZWQiLCJzZXRBdXRoZW50aWNhdGVkIiwiZ29vZ2xlQXV0aGVudGljYXRlZCIsInNldEdvb2dsZUF1dGhlbnRpY2F0ZWQiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwicm91dGVyIiwidXNlUm91dGVyIiwiQ2xlYXJVc2VySW5mbyIsIkNvb2tpZXMiLCJzZXQiLCJzZXRVc2VyIiwiZSIsInRhcmdldCIsInZhbHVlIiwic2V0VXNlclBhc3N3b3JkIiwiU2lnbkluIiwiYXhpb3MiLCJwb3N0IiwidGhlbiIsInJlcyIsImRhdGEiLCJhY2Nlc3NfdG9rZW4iLCJnZXQiLCJuYW1lIiwiYXZhdGFyX3VybCIsInJlcGxhY2UiLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiU2VhcmNoVXNlckRldGFpbHMiLCJ0b2tlbiIsInBpY3R1cmUiLCJnaXZlbl9uYW1lIiwiZW1haWwiLCJzcGxpdCIsIlNpZ25Jbkdvb2dsZSIsIlNpZ25PdXQiLCJjaGlsZHJlbiIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBZU8sTUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQWpDO0FBRUEsTUFBTUMsWUFBc0IsR0FBSUMsS0FBRCxJQUFXO0FBQy9DLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFN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LGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuaW50ZXJmYWNlIFVzZXJDb250ZXh0RGF0YSB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgdXJsUHJvZmlsZVBpY3R1cmU6IHN0cmluZztcclxuICBzZXRVc2VyOiAoZSkgPT4gdm9pZDtcclxuICBzZXRVc2VyUGFzc3dvcmQ6IChlKSA9PiB2b2lkO1xyXG4gIFNpZ25JbjogKCkgPT4gdm9pZDtcclxuICBTaWduSW5Hb29nbGU6IChyZXMpID0+IHZvaWQ7XHJcbiAgU2lnbk91dDogKCkgPT4gdm9pZDtcclxuICBTZWFyY2hVc2VyRGV0YWlsczogKHRva2VuKSA9PiB2b2lkO1xyXG4gIENsZWFyVXNlckluZm86ICgpID0+IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBVc2VyQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJQcm92aWRlcjogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Z1bGxOYW1lLCBzZXRGdWxsTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXJsUHJvZmlsZVBpY3R1cmUsIHNldFVybFByb2ZpbGVQaWN0dXJlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthdXRoZW50aWNhdGVkLCBzZXRBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZ29vZ2xlQXV0aGVudGljYXRlZCwgc2V0R29vZ2xlQXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgZnVuY3Rpb24gQ2xlYXJVc2VySW5mbygpe1xyXG4gICAgc2V0VXNlcm5hbWUoJycpXHJcbiAgICBzZXRQYXNzd29yZCgnJylcclxuICAgIHNldEZ1bGxOYW1lKCcnKVxyXG4gICAgc2V0QXV0aGVudGljYXRlZChmYWxzZSlcclxuICAgIHNldEdvb2dsZUF1dGhlbnRpY2F0ZWQoZmFsc2UpXHJcbiAgICBzZXRBY2Nlc3NUb2tlbignJylcclxuICAgIHNldFVybFByb2ZpbGVQaWN0dXJlKCcnKVxyXG4gICAgQ29va2llcy5zZXQoJ2FjY2Vzc1Rva2VuJywgJycpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNldFVzZXIoZSkge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFVzZXJuYW1lKHVzZXJuYW1lKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gc2V0VXNlclBhc3N3b3JkKGUpIHtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRQYXNzd29yZChwYXNzd29yZCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFNpZ25JbigpIHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIGAvYXBpL2F1dGg/Z3JhbnRfdHlwZT1wYXNzd29yZCZ1c2VybmFtZT0ke3VzZXJuYW1lfSZwYXNzd29yZD0ke3Bhc3N3b3JkfWBcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLmFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgc2V0QWNjZXNzVG9rZW4ocmVzLmRhdGEuYWNjZXNzX3Rva2VuKVxyXG4gICAgICAgICAgc2V0QXV0aGVudGljYXRlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vZ2l0bGFiLmNvbS9hcGkvdjQvdXNlcnM/dXNlcm5hbWU9JHt1c2VybmFtZX1gKVxyXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgc2V0RnVsbE5hbWUocmVzLmRhdGFbMF0ubmFtZSlcclxuICAgICAgICAgICAgY29uc3QgdXJsUHJvZmlsZVBpY3R1cmUgPSByZXMuZGF0YVswXS5hdmF0YXJfdXJsLnJlcGxhY2UoJzEwLjEwLjEuMzUnLCcxNzcuODQuMjQ2LjEyNjo5OTU1JylcclxuICAgICAgICAgICAgc2V0VXJsUHJvZmlsZVBpY3R1cmUodXJsUHJvZmlsZVBpY3R1cmUpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9ob21lJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gU2VhcmNoVXNlckRldGFpbHModG9rZW4pe1xyXG4gICAgYXhpb3MuZ2V0KGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvdXNlcmluZm8/YWx0PWpzb24mYWNjZXNzX3Rva2VuPSR7dG9rZW59YClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IHtwaWN0dXJlLCBnaXZlbl9uYW1lfSA9IHJlcy5kYXRhXHJcbiAgICAgIHNldFVybFByb2ZpbGVQaWN0dXJlKHBpY3R1cmUpXHJcbiAgICAgIHNldEZ1bGxOYW1lKGdpdmVuX25hbWUpXHJcbiAgICAgIHNldFVzZXJuYW1lKHJlcy5kYXRhLmVtYWlsLnNwbGl0KFwiQFwiKVswXSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFNpZ25Jbkdvb2dsZSh7YWNjZXNzVG9rZW59KXtcclxuICAgICAgQ29va2llcy5zZXQoJ2FjY2Vzc1Rva2VuJywgYWNjZXNzVG9rZW4pXHJcbiAgICAgIHNldEFjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuKVxyXG4gICAgICBzZXRHb29nbGVBdXRoZW50aWNhdGVkKHRydWUpXHJcbiAgICAgIFNlYXJjaFVzZXJEZXRhaWxzKGFjY2Vzc1Rva2VuKVxyXG4gICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gIH1cclxuICBmdW5jdGlvbiBTaWduT3V0KCl7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICBDbGVhclVzZXJJbmZvKClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBzZXRVc2VyLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIHNldFVzZXJQYXNzd29yZCxcclxuICAgICAgICBmdWxsTmFtZSxcclxuICAgICAgICB1cmxQcm9maWxlUGljdHVyZSxcclxuICAgICAgICBTaWduSW4sXHJcbiAgICAgICAgU2lnbkluR29vZ2xlLFxyXG4gICAgICAgIFNlYXJjaFVzZXJEZXRhaWxzLFxyXG4gICAgICAgIFNpZ25PdXQsXHJcbiAgICAgICAgQ2xlYXJVc2VySW5mb1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVzZXJQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9Mb2dpbkNvbnRleHRzXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWwuY3NzXCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxVc2VyUHJvdmlkZXI+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9Vc2VyUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9