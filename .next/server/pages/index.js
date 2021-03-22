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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.tsx");
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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login */ "./src/pages/login.tsx");

var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\pages\\index.tsx";


function Index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_login__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/LoginContexts */ "./src/contexts/LoginContexts.tsx");
/* harmony import */ var _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pages/Login.module.css */ "./src/styles/pages/Login.module.css");
/* harmony import */ var _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-login */ "react-google-login");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config */ "./src/config.js");

var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\pages\\login.tsx";







function Login() {
  const {
    SignIn,
    SignInGoogle,
    setUser,
    setUserPassword,
    password,
    username,
    ClearUserInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_2__["UserContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    ClearUserInfo();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.bodyLogin,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.imgLogin,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: "logo-full.png",
        alt: "move.it"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formLogin,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formInput,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaUser"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          placeholder: "Username",
          tabIndex: 1,
          type: "text",
          id: "user-login",
          value: username,
          onChange: e => setUser(e),
          autoComplete: "off"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formInput,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaLock"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          placeholder: "Password",
          tabIndex: 2,
          type: "password",
          id: "password-login",
          value: password,
          onChange: e => setUserPassword(e)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formButton,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: SignIn,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiFillGitlab"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this), "Sign in"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.otherLogins,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_google_login__WEBPACK_IMPORTED_MODULE_6___default.a, {
            clientId: _config__WEBPACK_IMPORTED_MODULE_7__["default"].clientIdGoogle,
            buttonText: "Sign in",
            onSuccess: SignInGoogle // onFailure={responseGoogleE}
            ,
            cookiePolicy: "single_host_origin",
            prompt: "consent"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/styles/pages/Login.module.css":
/*!*******************************************!*\
  !*** ./src/styles/pages/Login.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"bodyLogin": "Login_bodyLogin__UMLlI",
	"imgLogin": "Login_imgLogin__3TAxa",
	"formLogin": "Login_formLogin__n5TSa",
	"formInput": "Login_formInput__1e9bb",
	"icon": "Login_icon__2rQqo",
	"formButton": "Login_formButton__1JO9S",
	"otherLogins": "Login_otherLogins__rp6qH",
	"googleButton": "Login_googleButton__1UPLz"
};


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

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvTG9naW5Db250ZXh0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbG9naW4udHN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcGFnZXMvTG9naW4ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1nb29nbGUtbG9naW5cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9haVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiY29uZmlnIiwiY2xpZW50SWRHb29nbGUiLCJ1cmxVc2VySW5nb0dvb2dsZSIsInVybEdpdExhYkF1dGgiLCJ1cmxHaXRMYWJVc2VySW5mbyIsIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlVzZXJQcm92aWRlciIsInByb3BzIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImZ1bGxOYW1lIiwic2V0RnVsbE5hbWUiLCJ1cmxQcm9maWxlUGljdHVyZSIsInNldFVybFByb2ZpbGVQaWN0dXJlIiwiYXV0aGVudGljYXRlZCIsInNldEF1dGhlbnRpY2F0ZWQiLCJnb29nbGVBdXRoZW50aWNhdGVkIiwic2V0R29vZ2xlQXV0aGVudGljYXRlZCIsImFjY2Vzc1Rva2VuIiwic2V0QWNjZXNzVG9rZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJDbGVhclVzZXJJbmZvIiwiQ29va2llcyIsInNldCIsInNldFVzZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRVc2VyUGFzc3dvcmQiLCJTaWduSW4iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImFjY2Vzc190b2tlbiIsImdldCIsIm5hbWUiLCJhdmF0YXJfdXJsIiwicmVwbGFjZSIsInB1c2giLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJTZWFyY2hVc2VyRGV0YWlscyIsInRva2VuIiwicGljdHVyZSIsImdpdmVuX25hbWUiLCJlbWFpbCIsInNwbGl0IiwiU2lnbkluR29vZ2xlIiwiU2lnbk91dCIsImNoaWxkcmVuIiwiSW5kZXgiLCJMb2dpbiIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJib2R5TG9naW4iLCJpbWdMb2dpbiIsImZvcm1Mb2dpbiIsImZvcm1JbnB1dCIsImljb24iLCJmb3JtQnV0dG9uIiwib3RoZXJMb2dpbnMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1C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Q0FBQ00sVUFBdkI7QUFBQSxnQ0FDRTtBQUFRLGlCQUFPLEVBQUVuQyxNQUFqQjtBQUFBLGtDQUNFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBS0U7QUFBSyxtQkFBUyxFQUFFNkIscUVBQU0sQ0FBQ08sV0FBdkI7QUFBQSxpQ0FDRSxxRUFBQyx5REFBRDtBQUNFLG9CQUFRLEVBQUV0RSwrQ0FBTSxDQUFDQyxjQURuQjtBQUVFLHNCQUFVLEVBQUMsU0FGYjtBQUdFLHFCQUFTLEVBQUV1RCxZQUhiLENBSUU7QUFKRjtBQUtFLHdCQUFZLEVBQUUsb0JBTGhCO0FBTUUsa0JBQU0sRUFBQztBQU5UO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNERCxDOzs7Ozs7Ozs7OztBQzVFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGNsaWVudElkR29vZ2xlOiBcIjU0Mzg0ODMwMzkzMi1kYnJldGJkNW9ucGhmYzcwdmlmYWlpM2xkYWNscWhhby5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiLFxyXG4gICAgdXJsVXNlckluZ29Hb29nbGU6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL3VzZXJpbmZvP2FsdD1qc29uJmFjY2Vzc190b2tlbj1cIixcclxuICAgIHVybEdpdExhYkF1dGg6IFwiaHR0cHM6Ly9naXRsYWIuY29tL29hdXRoL3Rva2VuP2dyYW50X3R5cGU9cGFzc3dvcmQmdXNlcm5hbWU9XCIsXHJcbiAgICB1cmxHaXRMYWJVc2VySW5mbzogXCJodHRwczovL2dpdGxhYi5jb20vYXBpL3Y0L3VzZXJzP3VzZXJuYW1lPVwiLFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25maWciLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZydcclxuXHJcbmludGVyZmFjZSBVc2VyQ29udGV4dERhdGEge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICBmdWxsTmFtZTogc3RyaW5nO1xyXG4gIHVybFByb2ZpbGVQaWN0dXJlOiBzdHJpbmc7XHJcbiAgc2V0VXNlcjogKGUpID0+IHZvaWQ7XHJcbiAgc2V0VXNlclBhc3N3b3JkOiAoZSkgPT4gdm9pZDtcclxuICBTaWduSW46ICgpID0+IHZvaWQ7XHJcbiAgU2lnbkluR29vZ2xlOiAocmVzKSA9PiB2b2lkO1xyXG4gIFNpZ25PdXQ6ICgpID0+IHZvaWQ7XHJcbiAgU2VhcmNoVXNlckRldGFpbHM6ICh0b2tlbikgPT4gdm9pZDtcclxuICBDbGVhclVzZXJJbmZvOiAoKSA9PiB2b2lkO1xyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgVXNlckNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUHJvdmlkZXI6IFJlYWN0LkZDID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmdWxsTmFtZSwgc2V0RnVsbE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VybFByb2ZpbGVQaWN0dXJlLCBzZXRVcmxQcm9maWxlUGljdHVyZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYXV0aGVudGljYXRlZCwgc2V0QXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2dvb2dsZUF1dGhlbnRpY2F0ZWQsIHNldEdvb2dsZUF1dGhlbnRpY2F0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW5dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGZ1bmN0aW9uIENsZWFyVXNlckluZm8oKXtcclxuICAgIHNldFVzZXJuYW1lKCcnKVxyXG4gICAgc2V0UGFzc3dvcmQoJycpXHJcbiAgICBzZXRGdWxsTmFtZSgnJylcclxuICAgIHNldEF1dGhlbnRpY2F0ZWQoZmFsc2UpXHJcbiAgICBzZXRHb29nbGVBdXRoZW50aWNhdGVkKGZhbHNlKVxyXG4gICAgc2V0QWNjZXNzVG9rZW4oJycpXHJcbiAgICBzZXRVcmxQcm9maWxlUGljdHVyZSgnJylcclxuICAgIENvb2tpZXMuc2V0KCdhY2Nlc3NUb2tlbicsICcnKVxyXG4gIH1cclxuICBmdW5jdGlvbiBzZXRVc2VyKGUpIHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRVc2VybmFtZSh1c2VybmFtZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNldFVzZXJQYXNzd29yZChlKSB7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcclxuICAgICAgICBgL2FwaS9hdXRoP2dyYW50X3R5cGU9cGFzc3dvcmQmdXNlcm5hbWU9JHt1c2VybmFtZX0mcGFzc3dvcmQ9JHtwYXNzd29yZH1gXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5hY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAgIHNldEFjY2Vzc1Rva2VuKHJlcy5kYXRhLmFjY2Vzc190b2tlbilcclxuICAgICAgICAgIHNldEF1dGhlbnRpY2F0ZWQodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGAke2NvbmZpZy51cmxHaXRMYWJVc2VySW5mb30ke3VzZXJuYW1lfWApXHJcbiAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBzZXRGdWxsTmFtZShyZXMuZGF0YVswXS5uYW1lKVxyXG4gICAgICAgICAgICBjb25zdCB1cmxQcm9maWxlUGljdHVyZSA9IHJlcy5kYXRhWzBdLmF2YXRhcl91cmwucmVwbGFjZSgnMTAuMTAuMS4zNScsJzE3Ny44NC4yNDYuMTI2Ojk5NTUnKVxyXG4gICAgICAgICAgICBzZXRVcmxQcm9maWxlUGljdHVyZSh1cmxQcm9maWxlUGljdHVyZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBTZWFyY2hVc2VyRGV0YWlscyh0b2tlbil7XHJcbiAgICBheGlvcy5nZXQoYCR7Y29uZmlnLnVybFVzZXJJbmdvR29vZ2xlfSR7dG9rZW59YClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IHtwaWN0dXJlLCBnaXZlbl9uYW1lfSA9IHJlcy5kYXRhXHJcbiAgICAgIHNldFVybFByb2ZpbGVQaWN0dXJlKHBpY3R1cmUpXHJcbiAgICAgIHNldEZ1bGxOYW1lKGdpdmVuX25hbWUpXHJcbiAgICAgIHNldFVzZXJuYW1lKHJlcy5kYXRhLmVtYWlsLnNwbGl0KFwiQFwiKVswXSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFNpZ25Jbkdvb2dsZSh7YWNjZXNzVG9rZW59KXtcclxuICAgICAgQ29va2llcy5zZXQoJ2FjY2Vzc1Rva2VuJywgYWNjZXNzVG9rZW4pXHJcbiAgICAgIHNldEFjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuKVxyXG4gICAgICBzZXRHb29nbGVBdXRoZW50aWNhdGVkKHRydWUpXHJcbiAgICAgIFNlYXJjaFVzZXJEZXRhaWxzKGFjY2Vzc1Rva2VuKVxyXG4gICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gIH1cclxuICBmdW5jdGlvbiBTaWduT3V0KCl7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICBDbGVhclVzZXJJbmZvKClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBzZXRVc2VyLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIHNldFVzZXJQYXNzd29yZCxcclxuICAgICAgICBmdWxsTmFtZSxcclxuICAgICAgICB1cmxQcm9maWxlUGljdHVyZSxcclxuICAgICAgICBTaWduSW4sXHJcbiAgICAgICAgU2lnbkluR29vZ2xlLFxyXG4gICAgICAgIFNlYXJjaFVzZXJEZXRhaWxzLFxyXG4gICAgICAgIFNpZ25PdXQsXHJcbiAgICAgICAgQ2xlYXJVc2VySW5mb1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuL2xvZ2luXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcclxuICByZXR1cm4gPExvZ2luIC8+O1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvTG9naW5Db250ZXh0c1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0xvZ2luLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgRmFVc2VyLCBGYUxvY2sgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgQWlGaWxsR2l0bGFiIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcblxyXG5pbXBvcnQgR29vZ2xlTG9naW4gZnJvbSBcInJlYWN0LWdvb2dsZS1sb2dpblwiO1xyXG5cclxuaW1wb3J0IGNvbmZpZyBmcm9tICcuLi9jb25maWcnXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IHsgU2lnbkluLCBTaWduSW5Hb29nbGUsIHNldFVzZXIsIHNldFVzZXJQYXNzd29yZCwgcGFzc3dvcmQsIHVzZXJuYW1lLCBDbGVhclVzZXJJbmZvIH0gPSB1c2VDb250ZXh0KFxyXG4gICAgVXNlckNvbnRleHRcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ2xlYXJVc2VySW5mbygpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlMb2dpbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nTG9naW59PlxyXG4gICAgICAgIDxpbWcgc3JjPVwibG9nby1mdWxsLnBuZ1wiIGFsdD1cIm1vdmUuaXRcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUxvZ2lufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JbnB1dH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb259PlxyXG4gICAgICAgICAgICA8RmFVc2VyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgdGFiSW5kZXg9ezF9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJ1c2VyLWxvZ2luXCJcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXIoZSl9XHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlucHV0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0+XHJcbiAgICAgICAgICAgIDxGYUxvY2sgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB0YWJJbmRleD17Mn1cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1sb2dpblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyUGFzc3dvcmQoZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1CdXR0b259PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtTaWduSW59PlxyXG4gICAgICAgICAgICA8QWlGaWxsR2l0bGFiLz5cclxuICAgICAgICAgICAgU2lnbiBpbiBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm90aGVyTG9naW5zfT5cclxuICAgICAgICAgICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgY2xpZW50SWQ9e2NvbmZpZy5jbGllbnRJZEdvb2dsZX1cclxuICAgICAgICAgICAgICBidXR0b25UZXh0PVwiU2lnbiBpblwiXHJcbiAgICAgICAgICAgICAgb25TdWNjZXNzPXtTaWduSW5Hb29nbGV9XHJcbiAgICAgICAgICAgICAgLy8gb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZUV9XHJcbiAgICAgICAgICAgICAgY29va2llUG9saWN5PXtcInNpbmdsZV9ob3N0X29yaWdpblwifVxyXG4gICAgICAgICAgICAgIHByb21wdD1cImNvbnNlbnRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJib2R5TG9naW5cIjogXCJMb2dpbl9ib2R5TG9naW5fX1VNTGxJXCIsXG5cdFwiaW1nTG9naW5cIjogXCJMb2dpbl9pbWdMb2dpbl9fM1RBeGFcIixcblx0XCJmb3JtTG9naW5cIjogXCJMb2dpbl9mb3JtTG9naW5fX241VFNhXCIsXG5cdFwiZm9ybUlucHV0XCI6IFwiTG9naW5fZm9ybUlucHV0X18xZTliYlwiLFxuXHRcImljb25cIjogXCJMb2dpbl9pY29uX18yclFxb1wiLFxuXHRcImZvcm1CdXR0b25cIjogXCJMb2dpbl9mb3JtQnV0dG9uX18xSk85U1wiLFxuXHRcIm90aGVyTG9naW5zXCI6IFwiTG9naW5fb3RoZXJMb2dpbnNfX3JwNnFIXCIsXG5cdFwiZ29vZ2xlQnV0dG9uXCI6IFwiTG9naW5fZ29vZ2xlQnV0dG9uX18xVVBMelwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdvb2dsZS1sb2dpblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==