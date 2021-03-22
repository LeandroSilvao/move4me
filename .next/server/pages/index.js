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
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formLogin,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formInput,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaUser"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
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
          lineNumber: 30,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formInput,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaLock"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
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
          lineNumber: 44,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.formButton,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          onClick: SignIn,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiFillGitlab"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this), "Sign in"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.otherLogins,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_google_login__WEBPACK_IMPORTED_MODULE_6___default.a, {
            clientId: "543848303932-dbretbd5onphfc70vifaii3ldaclqhao.apps.googleusercontent.com",
            buttonText: "Sign in",
            onSuccess: SignInGoogle // onFailure={responseGoogleE}
            ,
            cookiePolicy: "single_host_origin",
            prompt: "consent"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL0xvZ2luQ29udGV4dHMudHN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2xvZ2luLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0xvZ2luLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlVzZXJQcm92aWRlciIsInByb3BzIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImZ1bGxOYW1lIiwic2V0RnVsbE5hbWUiLCJ1cmxQcm9maWxlUGljdHVyZSIsInNldFVybFByb2ZpbGVQaWN0dXJlIiwiYXV0aGVudGljYXRlZCIsInNldEF1dGhlbnRpY2F0ZWQiLCJnb29nbGVBdXRoZW50aWNhdGVkIiwic2V0R29vZ2xlQXV0aGVudGljYXRlZCIsImFjY2Vzc1Rva2VuIiwic2V0QWNjZXNzVG9rZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJDbGVhclVzZXJJbmZvIiwiQ29va2llcyIsInNldCIsInNldFVzZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRVc2VyUGFzc3dvcmQiLCJTaWduSW4iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImFjY2Vzc190b2tlbiIsImdldCIsIm5hbWUiLCJhdmF0YXJfdXJsIiwicmVwbGFjZSIsInB1c2giLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJTZWFyY2hVc2VyRGV0YWlscyIsInRva2VuIiwicGljdHVyZSIsImdpdmVuX25hbWUiLCJlbWFpbCIsInNwbGl0IiwiU2lnbkluR29vZ2xlIiwiU2lnbk91dCIsImNoaWxkcmVuIiwiSW5kZXgiLCJMb2dpbiIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJib2R5TG9naW4iLCJpbWdMb2dpbiIsImZvcm1Mb2dpbiIsImZvcm1JbnB1dCIsImljb24iLCJmb3JtQnV0dG9uIiwib3RoZXJMb2dpbnMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFz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O0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0RELEM7Ozs7Ozs7Ozs7O0FDeEVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1ZBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmludGVyZmFjZSBVc2VyQ29udGV4dERhdGEge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICBmdWxsTmFtZTogc3RyaW5nO1xyXG4gIHVybFByb2ZpbGVQaWN0dXJlOiBzdHJpbmc7XHJcbiAgc2V0VXNlcjogKGUpID0+IHZvaWQ7XHJcbiAgc2V0VXNlclBhc3N3b3JkOiAoZSkgPT4gdm9pZDtcclxuICBTaWduSW46ICgpID0+IHZvaWQ7XHJcbiAgU2lnbkluR29vZ2xlOiAocmVzKSA9PiB2b2lkO1xyXG4gIFNpZ25PdXQ6ICgpID0+IHZvaWQ7XHJcbiAgU2VhcmNoVXNlckRldGFpbHM6ICh0b2tlbikgPT4gdm9pZDtcclxuICBDbGVhclVzZXJJbmZvOiAoKSA9PiB2b2lkO1xyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgVXNlckNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUHJvdmlkZXI6IFJlYWN0LkZDID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmdWxsTmFtZSwgc2V0RnVsbE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VybFByb2ZpbGVQaWN0dXJlLCBzZXRVcmxQcm9maWxlUGljdHVyZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYXV0aGVudGljYXRlZCwgc2V0QXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2dvb2dsZUF1dGhlbnRpY2F0ZWQsIHNldEdvb2dsZUF1dGhlbnRpY2F0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW5dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGZ1bmN0aW9uIENsZWFyVXNlckluZm8oKXtcclxuICAgIHNldFVzZXJuYW1lKCcnKVxyXG4gICAgc2V0UGFzc3dvcmQoJycpXHJcbiAgICBzZXRGdWxsTmFtZSgnJylcclxuICAgIHNldEF1dGhlbnRpY2F0ZWQoZmFsc2UpXHJcbiAgICBzZXRHb29nbGVBdXRoZW50aWNhdGVkKGZhbHNlKVxyXG4gICAgc2V0QWNjZXNzVG9rZW4oJycpXHJcbiAgICBzZXRVcmxQcm9maWxlUGljdHVyZSgnJylcclxuICAgIENvb2tpZXMuc2V0KCdhY2Nlc3NUb2tlbicsICcnKVxyXG4gIH1cclxuICBmdW5jdGlvbiBzZXRVc2VyKGUpIHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRVc2VybmFtZSh1c2VybmFtZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNldFVzZXJQYXNzd29yZChlKSB7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcclxuICAgICAgICBgL2FwaS9hdXRoP2dyYW50X3R5cGU9cGFzc3dvcmQmdXNlcm5hbWU9JHt1c2VybmFtZX0mcGFzc3dvcmQ9JHtwYXNzd29yZH1gXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5hY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAgIHNldEFjY2Vzc1Rva2VuKHJlcy5kYXRhLmFjY2Vzc190b2tlbilcclxuICAgICAgICAgIHNldEF1dGhlbnRpY2F0ZWQodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2dpdGxhYi5jb20vYXBpL3Y0L3VzZXJzP3VzZXJuYW1lPSR7dXNlcm5hbWV9YClcclxuICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHNldEZ1bGxOYW1lKHJlcy5kYXRhWzBdLm5hbWUpXHJcbiAgICAgICAgICAgIGNvbnN0IHVybFByb2ZpbGVQaWN0dXJlID0gcmVzLmRhdGFbMF0uYXZhdGFyX3VybC5yZXBsYWNlKCcxMC4xMC4xLjM1JywnMTc3Ljg0LjI0Ni4xMjY6OTk1NScpXHJcbiAgICAgICAgICAgIHNldFVybFByb2ZpbGVQaWN0dXJlKHVybFByb2ZpbGVQaWN0dXJlKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFNlYXJjaFVzZXJEZXRhaWxzKHRva2VuKXtcclxuICAgIGF4aW9zLmdldChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL3VzZXJpbmZvP2FsdD1qc29uJmFjY2Vzc190b2tlbj0ke3Rva2VufWApXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBjb25zdCB7cGljdHVyZSwgZ2l2ZW5fbmFtZX0gPSByZXMuZGF0YVxyXG4gICAgICBzZXRVcmxQcm9maWxlUGljdHVyZShwaWN0dXJlKVxyXG4gICAgICBzZXRGdWxsTmFtZShnaXZlbl9uYW1lKVxyXG4gICAgICBzZXRVc2VybmFtZShyZXMuZGF0YS5lbWFpbC5zcGxpdChcIkBcIilbMF0pXHJcbiAgICB9KVxyXG4gIH1cclxuICBmdW5jdGlvbiBTaWduSW5Hb29nbGUoe2FjY2Vzc1Rva2VufSl7XHJcbiAgICAgIENvb2tpZXMuc2V0KCdhY2Nlc3NUb2tlbicsIGFjY2Vzc1Rva2VuKVxyXG4gICAgICBzZXRBY2Nlc3NUb2tlbihhY2Nlc3NUb2tlbilcclxuICAgICAgc2V0R29vZ2xlQXV0aGVudGljYXRlZCh0cnVlKVxyXG4gICAgICBTZWFyY2hVc2VyRGV0YWlscyhhY2Nlc3NUb2tlbilcclxuICAgICAgcm91dGVyLnB1c2goJy9ob21lJylcclxuICB9XHJcbiAgZnVuY3Rpb24gU2lnbk91dCgpe1xyXG4gICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgQ2xlYXJVc2VySW5mbygpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgc2V0VXNlcixcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICBzZXRVc2VyUGFzc3dvcmQsXHJcbiAgICAgICAgZnVsbE5hbWUsXHJcbiAgICAgICAgdXJsUHJvZmlsZVBpY3R1cmUsXHJcbiAgICAgICAgU2lnbkluLFxyXG4gICAgICAgIFNpZ25Jbkdvb2dsZSxcclxuICAgICAgICBTZWFyY2hVc2VyRGV0YWlscyxcclxuICAgICAgICBTaWduT3V0LFxyXG4gICAgICAgIENsZWFyVXNlckluZm9cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi9sb2dpblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XHJcbiAgcmV0dXJuIDxMb2dpbiAvPjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0xvZ2luQ29udGV4dHNcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9Mb2dpbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEZhVXNlciwgRmFMb2NrIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEFpRmlsbEdpdGxhYiB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5cclxuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gXCJyZWFjdC1nb29nbGUtbG9naW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IHsgU2lnbkluLCBTaWduSW5Hb29nbGUsIHNldFVzZXIsIHNldFVzZXJQYXNzd29yZCwgcGFzc3dvcmQsIHVzZXJuYW1lLCBDbGVhclVzZXJJbmZvIH0gPSB1c2VDb250ZXh0KFxyXG4gICAgVXNlckNvbnRleHRcclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ2xlYXJVc2VySW5mbygpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHlMb2dpbn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1nTG9naW59PlxyXG4gICAgICAgIDxpbWcgc3JjPVwibG9nby1mdWxsLnBuZ1wiIGFsdD1cIm1vdmUuaXRcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUxvZ2lufT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JbnB1dH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb259PlxyXG4gICAgICAgICAgICA8RmFVc2VyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgdGFiSW5kZXg9ezF9XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgaWQ9XCJ1c2VyLWxvZ2luXCJcclxuICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXIoZSl9XHJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybUlucHV0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0+XHJcbiAgICAgICAgICAgIDxGYUxvY2sgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICB0YWJJbmRleD17Mn1cclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1sb2dpblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyUGFzc3dvcmQoZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1CdXR0b259PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtTaWduSW59PlxyXG4gICAgICAgICAgICA8QWlGaWxsR2l0bGFiLz5cclxuICAgICAgICAgICAgU2lnbiBpbiBcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm90aGVyTG9naW5zfT5cclxuICAgICAgICAgICAgPEdvb2dsZUxvZ2luXHJcbiAgICAgICAgICAgICAgY2xpZW50SWQ9XCI1NDM4NDgzMDM5MzItZGJyZXRiZDVvbnBoZmM3MHZpZmFpaTNsZGFjbHFoYW8uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb21cIlxyXG4gICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJTaWduIGluXCJcclxuICAgICAgICAgICAgICBvblN1Y2Nlc3M9e1NpZ25Jbkdvb2dsZX1cclxuICAgICAgICAgICAgICAvLyBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlRX1cclxuICAgICAgICAgICAgICBjb29raWVQb2xpY3k9e1wic2luZ2xlX2hvc3Rfb3JpZ2luXCJ9XHJcbiAgICAgICAgICAgICAgcHJvbXB0PVwiY29uc2VudFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJvZHlMb2dpblwiOiBcIkxvZ2luX2JvZHlMb2dpbl9fVU1MbElcIixcblx0XCJpbWdMb2dpblwiOiBcIkxvZ2luX2ltZ0xvZ2luX18zVEF4YVwiLFxuXHRcImZvcm1Mb2dpblwiOiBcIkxvZ2luX2Zvcm1Mb2dpbl9fbjVUU2FcIixcblx0XCJmb3JtSW5wdXRcIjogXCJMb2dpbl9mb3JtSW5wdXRfXzFlOWJiXCIsXG5cdFwiaWNvblwiOiBcIkxvZ2luX2ljb25fXzJyUXFvXCIsXG5cdFwiZm9ybUJ1dHRvblwiOiBcIkxvZ2luX2Zvcm1CdXR0b25fXzFKTzlTXCIsXG5cdFwib3RoZXJMb2dpbnNcIjogXCJMb2dpbl9vdGhlckxvZ2luc19fcnA2cUhcIixcblx0XCJnb29nbGVCdXR0b25cIjogXCJMb2dpbl9nb29nbGVCdXR0b25fXzFVUEx6XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ29vZ2xlLWxvZ2luXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2FpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9