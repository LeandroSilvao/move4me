webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/contexts/LoginContexts.tsx":
/*!****************************************!*\
  !*** ./src/contexts/LoginContexts.tsx ***!
  \****************************************/
/*! exports provided: UserContext, UserProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProvider", function() { return UserProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\contexts\\LoginContexts.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var UserProvider = function UserProvider(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      fullName = _useState3[0],
      setFullName = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      urlProfilePicture = _useState4[0],
      setUrlProfilePicture = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      authenticated = _useState5[0],
      setAuthenticated = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      googleAuthenticated = _useState6[0],
      setGoogleAuthenticated = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      accessToken = _useState7[0],
      setAccessToken = _useState7[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

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
    var username = e.target.value;
    setUsername(username);
  }

  function setUserPassword(e) {
    var password = e.target.value;
    setPassword(password);
  }

  function SignIn() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/api/auth?grant_type=password&username=".concat(username, "&password=").concat(password)).then(function (res) {
      if (res.data.access_token) {
        setAccessToken(res.data.access_token);
        setAuthenticated(true);
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://gitlab.com/api/v4/users?username=".concat(username)).then(function (res) {
          setFullName(res.data[0].name);
          var urlProfilePicture = res.data[0].avatar_url.replace('10.10.1.35', '177.84.246.126:9955');
          setUrlProfilePicture(urlProfilePicture);
        });
        router.push('/home');
      }
    })["catch"](function (err) {
      return console.log(err);
    });
  }

  function SearchUserDetails(token) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=".concat(token)).then(function (res) {
      var _res$data = res.data,
          picture = _res$data.picture,
          given_name = _res$data.given_name;
      setUrlProfilePicture(picture);
      setFullName(given_name);
      setUsername(res.data.email.split("@")[0]);
    });
  }

  function SignInGoogle(_ref) {
    var accessToken = _ref.accessToken;
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
      username: username,
      setUser: setUser,
      password: password,
      setUserPassword: setUserPassword,
      fullName: fullName,
      urlProfilePicture: urlProfilePicture,
      SignIn: SignIn,
      SignInGoogle: SignInGoogle,
      SearchUserDetails: SearchUserDetails,
      SignOut: SignOut,
      ClearUserInfo: ClearUserInfo
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, _this);
};

_s(UserProvider, "P0U0a3T+tSk2OKnQdcMd9Dv79Is=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = UserProvider;

var _c;

$RefreshReg$(_c, "UserProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0xvZ2luQ29udGV4dHMudHN4Il0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlVzZXJQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImZ1bGxOYW1lIiwic2V0RnVsbE5hbWUiLCJ1cmxQcm9maWxlUGljdHVyZSIsInNldFVybFByb2ZpbGVQaWN0dXJlIiwiYXV0aGVudGljYXRlZCIsInNldEF1dGhlbnRpY2F0ZWQiLCJnb29nbGVBdXRoZW50aWNhdGVkIiwic2V0R29vZ2xlQXV0aGVudGljYXRlZCIsImFjY2Vzc1Rva2VuIiwic2V0QWNjZXNzVG9rZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJDbGVhclVzZXJJbmZvIiwiQ29va2llcyIsInNldCIsInNldFVzZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRVc2VyUGFzc3dvcmQiLCJTaWduSW4iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImFjY2Vzc190b2tlbiIsImdldCIsIm5hbWUiLCJhdmF0YXJfdXJsIiwicmVwbGFjZSIsInB1c2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiU2VhcmNoVXNlckRldGFpbHMiLCJ0b2tlbiIsInBpY3R1cmUiLCJnaXZlbl9uYW1lIiwiZW1haWwiLCJzcGxpdCIsIlNpZ25Jbkdvb2dsZSIsIlNpZ25PdXQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWVPLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFqQztBQUVBLElBQU1DLFlBQXNCLEdBQUcsU0FBekJBLFlBQXlCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNmQyxzREFBUSxDQUFDLEVBQUQs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R0FBTWxELFk7VUFRSWtCLHFEOzs7S0FSSmxCLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43OGY3MTNhMzc1OTRmMzQ1Zjk1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmludGVyZmFjZSBVc2VyQ29udGV4dERhdGEge1xyXG4gIHVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgcGFzc3dvcmQ6IHN0cmluZztcclxuICBmdWxsTmFtZTogc3RyaW5nO1xyXG4gIHVybFByb2ZpbGVQaWN0dXJlOiBzdHJpbmc7XHJcbiAgc2V0VXNlcjogKGUpID0+IHZvaWQ7XHJcbiAgc2V0VXNlclBhc3N3b3JkOiAoZSkgPT4gdm9pZDtcclxuICBTaWduSW46ICgpID0+IHZvaWQ7XHJcbiAgU2lnbkluR29vZ2xlOiAocmVzKSA9PiB2b2lkO1xyXG4gIFNpZ25PdXQ6ICgpID0+IHZvaWQ7XHJcbiAgU2VhcmNoVXNlckRldGFpbHM6ICh0b2tlbikgPT4gdm9pZDtcclxuICBDbGVhclVzZXJJbmZvOiAoKSA9PiB2b2lkO1xyXG59XHJcbmV4cG9ydCBjb25zdCBVc2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgVXNlckNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUHJvdmlkZXI6IFJlYWN0LkZDID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtmdWxsTmFtZSwgc2V0RnVsbE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VybFByb2ZpbGVQaWN0dXJlLCBzZXRVcmxQcm9maWxlUGljdHVyZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYXV0aGVudGljYXRlZCwgc2V0QXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2dvb2dsZUF1dGhlbnRpY2F0ZWQsIHNldEdvb2dsZUF1dGhlbnRpY2F0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFthY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW5dID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGZ1bmN0aW9uIENsZWFyVXNlckluZm8oKXtcclxuICAgIHNldFVzZXJuYW1lKCcnKVxyXG4gICAgc2V0UGFzc3dvcmQoJycpXHJcbiAgICBzZXRGdWxsTmFtZSgnJylcclxuICAgIHNldEF1dGhlbnRpY2F0ZWQoZmFsc2UpXHJcbiAgICBzZXRHb29nbGVBdXRoZW50aWNhdGVkKGZhbHNlKVxyXG4gICAgc2V0QWNjZXNzVG9rZW4oJycpXHJcbiAgICBzZXRVcmxQcm9maWxlUGljdHVyZSgnJylcclxuICAgIENvb2tpZXMuc2V0KCdhY2Nlc3NUb2tlbicsICcnKVxyXG4gIH1cclxuICBmdW5jdGlvbiBzZXRVc2VyKGUpIHtcclxuICAgIGNvbnN0IHVzZXJuYW1lID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRVc2VybmFtZSh1c2VybmFtZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNldFVzZXJQYXNzd29yZChlKSB7XHJcbiAgICBjb25zdCBwYXNzd29yZCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0UGFzc3dvcmQocGFzc3dvcmQpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgICBheGlvc1xyXG4gICAgICAucG9zdChcclxuICAgICAgICBgL2FwaS9hdXRoP2dyYW50X3R5cGU9cGFzc3dvcmQmdXNlcm5hbWU9JHt1c2VybmFtZX0mcGFzc3dvcmQ9JHtwYXNzd29yZH1gXHJcbiAgICAgIClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuZGF0YS5hY2Nlc3NfdG9rZW4pIHtcclxuICAgICAgICAgIHNldEFjY2Vzc1Rva2VuKHJlcy5kYXRhLmFjY2Vzc190b2tlbilcclxuICAgICAgICAgIHNldEF1dGhlbnRpY2F0ZWQodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL2dpdGxhYi5jb20vYXBpL3Y0L3VzZXJzP3VzZXJuYW1lPSR7dXNlcm5hbWV9YClcclxuICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHNldEZ1bGxOYW1lKHJlcy5kYXRhWzBdLm5hbWUpXHJcbiAgICAgICAgICAgIGNvbnN0IHVybFByb2ZpbGVQaWN0dXJlID0gcmVzLmRhdGFbMF0uYXZhdGFyX3VybC5yZXBsYWNlKCcxMC4xMC4xLjM1JywnMTc3Ljg0LjI0Ni4xMjY6OTk1NScpXHJcbiAgICAgICAgICAgIHNldFVybFByb2ZpbGVQaWN0dXJlKHVybFByb2ZpbGVQaWN0dXJlKVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFNlYXJjaFVzZXJEZXRhaWxzKHRva2VuKXtcclxuICAgIGF4aW9zLmdldChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vb2F1dGgyL3YxL3VzZXJpbmZvP2FsdD1qc29uJmFjY2Vzc190b2tlbj0ke3Rva2VufWApXHJcbiAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICBjb25zdCB7cGljdHVyZSwgZ2l2ZW5fbmFtZX0gPSByZXMuZGF0YVxyXG4gICAgICBzZXRVcmxQcm9maWxlUGljdHVyZShwaWN0dXJlKVxyXG4gICAgICBzZXRGdWxsTmFtZShnaXZlbl9uYW1lKVxyXG4gICAgICBzZXRVc2VybmFtZShyZXMuZGF0YS5lbWFpbC5zcGxpdChcIkBcIilbMF0pXHJcbiAgICB9KVxyXG4gIH1cclxuICBmdW5jdGlvbiBTaWduSW5Hb29nbGUoe2FjY2Vzc1Rva2VufSl7XHJcbiAgICAgIENvb2tpZXMuc2V0KCdhY2Nlc3NUb2tlbicsIGFjY2Vzc1Rva2VuKVxyXG4gICAgICBzZXRBY2Nlc3NUb2tlbihhY2Nlc3NUb2tlbilcclxuICAgICAgc2V0R29vZ2xlQXV0aGVudGljYXRlZCh0cnVlKVxyXG4gICAgICBTZWFyY2hVc2VyRGV0YWlscyhhY2Nlc3NUb2tlbilcclxuICAgICAgcm91dGVyLnB1c2goJy9ob21lJylcclxuICB9XHJcbiAgZnVuY3Rpb24gU2lnbk91dCgpe1xyXG4gICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgQ2xlYXJVc2VySW5mbygpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFVzZXJDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgc2V0VXNlcixcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICBzZXRVc2VyUGFzc3dvcmQsXHJcbiAgICAgICAgZnVsbE5hbWUsXHJcbiAgICAgICAgdXJsUHJvZmlsZVBpY3R1cmUsXHJcbiAgICAgICAgU2lnbkluLFxyXG4gICAgICAgIFNpZ25Jbkdvb2dsZSxcclxuICAgICAgICBTZWFyY2hVc2VyRGV0YWlscyxcclxuICAgICAgICBTaWduT3V0LFxyXG4gICAgICAgIENsZWFyVXNlckluZm9cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9