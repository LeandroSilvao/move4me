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
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('accessToken', '');
    setUrlProfilePicture('');
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
    ClearUserInfo();
    router.push('/');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0xvZ2luQ29udGV4dHMudHN4Il0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlVzZXJQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImZ1bGxOYW1lIiwic2V0RnVsbE5hbWUiLCJ1cmxQcm9maWxlUGljdHVyZSIsInNldFVybFByb2ZpbGVQaWN0dXJlIiwiYXV0aGVudGljYXRlZCIsInNldEF1dGhlbnRpY2F0ZWQiLCJnb29nbGVBdXRoZW50aWNhdGVkIiwic2V0R29vZ2xlQXV0aGVudGljYXRlZCIsImFjY2Vzc1Rva2VuIiwic2V0QWNjZXNzVG9rZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJDbGVhclVzZXJJbmZvIiwiQ29va2llcyIsInNldCIsInNldFVzZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRVc2VyUGFzc3dvcmQiLCJTaWduSW4iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImFjY2Vzc190b2tlbiIsImdldCIsIm5hbWUiLCJhdmF0YXJfdXJsIiwicmVwbGFjZSIsInB1c2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiU2VhcmNoVXNlckRldGFpbHMiLCJ0b2tlbiIsInBpY3R1cmUiLCJnaXZlbl9uYW1lIiwiZW1haWwiLCJzcGxpdCIsIlNpZ25Jbkdvb2dsZSIsIlNpZ25PdXQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWVPLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFqQztBQUVBLElBQU1DLFlBQXNCLEdBQUcsU0FBekJBLFlBQXlCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNmQyxzREFBUSxDQUFDLEVBQUQs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QUFNbEQsWTtVQVFJa0IscUQ7OztLQVJKbEIsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjJhMjQ3MWZhNTlkMzdiYjliMmU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuaW50ZXJmYWNlIFVzZXJDb250ZXh0RGF0YSB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgdXJsUHJvZmlsZVBpY3R1cmU6IHN0cmluZztcclxuICBzZXRVc2VyOiAoZSkgPT4gdm9pZDtcclxuICBzZXRVc2VyUGFzc3dvcmQ6IChlKSA9PiB2b2lkO1xyXG4gIFNpZ25JbjogKCkgPT4gdm9pZDtcclxuICBTaWduSW5Hb29nbGU6IChyZXMpID0+IHZvaWQ7XHJcbiAgU2lnbk91dDogKCkgPT4gdm9pZDtcclxuICBTZWFyY2hVc2VyRGV0YWlsczogKHRva2VuKSA9PiB2b2lkO1xyXG4gIENsZWFyVXNlckluZm86ICgpID0+IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBVc2VyQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJQcm92aWRlcjogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Z1bGxOYW1lLCBzZXRGdWxsTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXJsUHJvZmlsZVBpY3R1cmUsIHNldFVybFByb2ZpbGVQaWN0dXJlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthdXRoZW50aWNhdGVkLCBzZXRBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZ29vZ2xlQXV0aGVudGljYXRlZCwgc2V0R29vZ2xlQXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgZnVuY3Rpb24gQ2xlYXJVc2VySW5mbygpe1xyXG4gICAgc2V0VXNlcm5hbWUoJycpXHJcbiAgICBzZXRQYXNzd29yZCgnJylcclxuICAgIHNldEZ1bGxOYW1lKCcnKVxyXG4gICAgc2V0QXV0aGVudGljYXRlZChmYWxzZSlcclxuICAgIHNldEdvb2dsZUF1dGhlbnRpY2F0ZWQoZmFsc2UpXHJcbiAgICBzZXRBY2Nlc3NUb2tlbignJylcclxuICAgIENvb2tpZXMuc2V0KCdhY2Nlc3NUb2tlbicsICcnKVxyXG4gICAgc2V0VXJsUHJvZmlsZVBpY3R1cmUoJycpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNldFVzZXIoZSkge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFVzZXJuYW1lKHVzZXJuYW1lKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gc2V0VXNlclBhc3N3b3JkKGUpIHtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRQYXNzd29yZChwYXNzd29yZCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFNpZ25JbigpIHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIGAvYXBpL2F1dGg/Z3JhbnRfdHlwZT1wYXNzd29yZCZ1c2VybmFtZT0ke3VzZXJuYW1lfSZwYXNzd29yZD0ke3Bhc3N3b3JkfWBcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLmFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgc2V0QWNjZXNzVG9rZW4ocmVzLmRhdGEuYWNjZXNzX3Rva2VuKVxyXG4gICAgICAgICAgc2V0QXV0aGVudGljYXRlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vZ2l0bGFiLmNvbS9hcGkvdjQvdXNlcnM/dXNlcm5hbWU9JHt1c2VybmFtZX1gKVxyXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgc2V0RnVsbE5hbWUocmVzLmRhdGFbMF0ubmFtZSlcclxuICAgICAgICAgICAgY29uc3QgdXJsUHJvZmlsZVBpY3R1cmUgPSByZXMuZGF0YVswXS5hdmF0YXJfdXJsLnJlcGxhY2UoJzEwLjEwLjEuMzUnLCcxNzcuODQuMjQ2LjEyNjo5OTU1JylcclxuICAgICAgICAgICAgc2V0VXJsUHJvZmlsZVBpY3R1cmUodXJsUHJvZmlsZVBpY3R1cmUpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9ob21lJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gU2VhcmNoVXNlckRldGFpbHModG9rZW4pe1xyXG4gICAgYXhpb3MuZ2V0KGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvdXNlcmluZm8/YWx0PWpzb24mYWNjZXNzX3Rva2VuPSR7dG9rZW59YClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IHtwaWN0dXJlLCBnaXZlbl9uYW1lfSA9IHJlcy5kYXRhXHJcbiAgICAgIHNldFVybFByb2ZpbGVQaWN0dXJlKHBpY3R1cmUpXHJcbiAgICAgIHNldEZ1bGxOYW1lKGdpdmVuX25hbWUpXHJcbiAgICAgIHNldFVzZXJuYW1lKHJlcy5kYXRhLmVtYWlsLnNwbGl0KFwiQFwiKVswXSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFNpZ25Jbkdvb2dsZSh7YWNjZXNzVG9rZW59KXtcclxuICAgICAgQ29va2llcy5zZXQoJ2FjY2Vzc1Rva2VuJywgYWNjZXNzVG9rZW4pXHJcbiAgICAgIHNldEFjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuKVxyXG4gICAgICBzZXRHb29nbGVBdXRoZW50aWNhdGVkKHRydWUpXHJcbiAgICAgIFNlYXJjaFVzZXJEZXRhaWxzKGFjY2Vzc1Rva2VuKVxyXG4gICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gIH1cclxuICBmdW5jdGlvbiBTaWduT3V0KCl7XHJcbiAgICBDbGVhclVzZXJJbmZvKClcclxuICAgIHJvdXRlci5wdXNoKCcvJylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBzZXRVc2VyLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIHNldFVzZXJQYXNzd29yZCxcclxuICAgICAgICBmdWxsTmFtZSxcclxuICAgICAgICB1cmxQcm9maWxlUGljdHVyZSxcclxuICAgICAgICBTaWduSW4sXHJcbiAgICAgICAgU2lnbkluR29vZ2xlLFxyXG4gICAgICAgIFNlYXJjaFVzZXJEZXRhaWxzLFxyXG4gICAgICAgIFNpZ25PdXQsXHJcbiAgICAgICAgQ2xlYXJVc2VySW5mb1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=