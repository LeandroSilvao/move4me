webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/login.tsx":
/*!*****************************!*\
  !*** ./src/pages/login.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/LoginContexts */ "./src/contexts/LoginContexts.tsx");
/* harmony import */ var _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pages/Login.module.css */ "./src/styles/pages/Login.module.css");
/* harmony import */ var _styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Login_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\pages\\login.tsx",
    _s = $RefreshSig$();







function Login() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_2__["UserContext"]),
      SignIn = _useContext.SignIn,
      SignInGoogle = _useContext.SignInGoogle,
      setUser = _useContext.setUser,
      setUserPassword = _useContext.setUserPassword,
      password = _useContext.password,
      username = _useContext.username,
      ClearUserInfo = _useContext.ClearUserInfo;

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
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
          onChange: function onChange(e) {
            return setUser(e);
          },
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
          onChange: function onChange(e) {
            return setUserPassword(e);
          }
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
          children: ["Sign in", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiFillGitlab"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this)]
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

_s(Login, "+DU/H8wZzikgoOKjNPKSl4fP2KA=");

_c = Login;

var _c;

$RefreshReg$(_c, "Login");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2xvZ2luLnRzeCJdLCJuYW1lcyI6WyJMb2dpbiIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsIlNpZ25JbiIsIlNpZ25Jbkdvb2dsZSIsInNldFVzZXIiLCJzZXRVc2VyUGFzc3dvcmQiLCJwYXNzd29yZCIsInVzZXJuYW1lIiwiQ2xlYXJVc2VySW5mbyIsInVzZUVmZmVjdCIsInN0eWxlcyIsImJvZHlMb2dpbiIsImltZ0xvZ2luIiwiZm9ybUxvZ2luIiwiZm9ybUlucHV0IiwiaWNvbiIsImUiLCJmb3JtQnV0dG9uIiwib3RoZXJMb2dpbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQUEsb0JBQ2dFQyx3REFBVSxDQUN0R0MsbUVBRHNHLENBRDFFO0FBQUEsTUFDdEJDLE1BRHNCLGVBQ3RCQSxNQURzQjtBQUFBLE1BQ2RDLFlBRGMsZUFDZEEsWUFEYztBQUFBLE1BQ0FDLE9BREEsZUFDQUEsT0FEQTtBQUFBLE1BQ1NDLGVBRFQsZUFDU0EsZUFEVDtBQUFBLE1BQzBCQyxRQUQxQixlQUMwQkEsUUFEMUI7QUFBQSxNQUNvQ0MsUUFEcEMsZUFDb0NBLFFBRHBDO0FBQUEsTUFDOENDLGFBRDlDLGVBQzhDQSxhQUQ5Qzs7QUFLOUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkRCxpQkFBYTtBQUNkLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUUscUVBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUQscUVBQU0sQ0FBQ0UsUUFBdkI7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBQyxlQUFUO0FBQXlCLFdBQUcsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBSyxlQUFTLEVBQUVGLHFFQUFNLENBQUNHLFNBQXZCO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFFSCxxRUFBTSxDQUFDSSxTQUF2QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBRUoscUVBQU0sQ0FBQ0ssSUFBdkI7QUFBQSxpQ0FDRSxxRUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQ0UscUJBQVcsRUFBQyxVQURkO0FBRUUsa0JBQVEsRUFBRSxDQUZaO0FBR0UsY0FBSSxFQUFDLE1BSFA7QUFJRSxZQUFFLEVBQUMsWUFKTDtBQUtFLGVBQUssRUFBRVIsUUFMVDtBQU1FLGtCQUFRLEVBQUUsa0JBQUNTLENBQUQ7QUFBQSxtQkFBT1osT0FBTyxDQUFDWSxDQUFELENBQWQ7QUFBQSxXQU5aO0FBT0Usc0JBQVksRUFBQztBQVBmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFlRTtBQUFLLGlCQUFTLEVBQUVOLHFFQUFNLENBQUNJLFNBQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFSixxRUFBTSxDQUFDSyxJQUF2QjtBQUFBLGlDQUNFLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFDRSxxQkFBVyxFQUFDLFVBRGQ7QUFFRSxrQkFBUSxFQUFFLENBRlo7QUFHRSxjQUFJLEVBQUMsVUFIUDtBQUlFLFlBQUUsRUFBQyxnQkFKTDtBQUtFLGVBQUssRUFBRVQsUUFMVDtBQU1FLGtCQUFRLEVBQUUsa0JBQUNVLENBQUQ7QUFBQSxtQkFBT1gsZUFBZSxDQUFDVyxDQUFELENBQXRCO0FBQUE7QUFOWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZGLGVBNkJFO0FBQUssaUJBQVMsRUFBRU4scUVBQU0sQ0FBQ08sVUFBdkI7QUFBQSxnQ0FDRTtBQUFRLGlCQUFPLEVBQUVmLE1BQWpCO0FBQUEsNkNBRUUscUVBQUMsMkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFLRTtBQUFLLG1CQUFTLEVBQUVRLHFFQUFNLENBQUNRLFdBQXZCO0FBQUEsaUNBQ0UscUVBQUMseURBQUQ7QUFDRSxvQkFBUSxFQUFDLDBFQURYO0FBRUUsc0JBQVUsRUFBQyxTQUZiO0FBR0UscUJBQVMsRUFBRWYsWUFIYixDQUlFO0FBSkY7QUFLRSx3QkFBWSxFQUFFLG9CQUxoQjtBQU1FLGtCQUFNLEVBQUM7QUFOVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzREQ7O0dBL0R1QkosSzs7S0FBQUEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZjIxYTRjYmQyMjBmYjFmZmQzYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9Mb2dpbkNvbnRleHRzXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcGFnZXMvTG9naW4ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBGYVVzZXIsIEZhTG9jayB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBBaUZpbGxHaXRsYWIgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuXHJcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tIFwicmVhY3QtZ29vZ2xlLWxvZ2luXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCB7IFNpZ25JbiwgU2lnbkluR29vZ2xlLCBzZXRVc2VyLCBzZXRVc2VyUGFzc3dvcmQsIHBhc3N3b3JkLCB1c2VybmFtZSwgQ2xlYXJVc2VySW5mbyB9ID0gdXNlQ29udGV4dChcclxuICAgIFVzZXJDb250ZXh0XHJcbiAgKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIENsZWFyVXNlckluZm8oKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5TG9naW59PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ0xvZ2lufT5cclxuICAgICAgICA8aW1nIHNyYz1cImxvZ28tZnVsbC5wbmdcIiBhbHQ9XCJtb3ZlLml0XCIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Mb2dpbn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtSW5wdXR9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufT5cclxuICAgICAgICAgICAgPEZhVXNlciAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgIHRhYkluZGV4PXsxfVxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIGlkPVwidXNlci1sb2dpblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyKGUpfVxyXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1JbnB1dH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb259PlxyXG4gICAgICAgICAgICA8RmFMb2NrIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdGFiSW5kZXg9ezJ9XHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtbG9naW5cIlxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlclBhc3N3b3JkKGUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtQnV0dG9ufT5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17U2lnbklufT5cclxuICAgICAgICAgICAgU2lnbiBpbiBcclxuICAgICAgICAgICAgPEFpRmlsbEdpdGxhYi8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdGhlckxvZ2luc30+XHJcbiAgICAgICAgICAgIDxHb29nbGVMb2dpblxyXG4gICAgICAgICAgICAgIGNsaWVudElkPVwiNTQzODQ4MzAzOTMyLWRicmV0YmQ1b25waGZjNzB2aWZhaWkzbGRhY2xxaGFvLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcclxuICAgICAgICAgICAgICBidXR0b25UZXh0PVwiU2lnbiBpblwiXHJcbiAgICAgICAgICAgICAgb25TdWNjZXNzPXtTaWduSW5Hb29nbGV9XHJcbiAgICAgICAgICAgICAgLy8gb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZUV9XHJcbiAgICAgICAgICAgICAgY29va2llUG9saWN5PXtcInNpbmdsZV9ob3N0X29yaWdpblwifVxyXG4gICAgICAgICAgICAgIHByb21wdD1cImNvbnNlbnRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9