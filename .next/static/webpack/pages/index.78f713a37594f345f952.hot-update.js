webpackHotUpdate_N_E("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0xvZ2luQ29udGV4dHMudHN4Il0sIm5hbWVzIjpbIlVzZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlVzZXJQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImZ1bGxOYW1lIiwic2V0RnVsbE5hbWUiLCJ1cmxQcm9maWxlUGljdHVyZSIsInNldFVybFByb2ZpbGVQaWN0dXJlIiwiYXV0aGVudGljYXRlZCIsInNldEF1dGhlbnRpY2F0ZWQiLCJnb29nbGVBdXRoZW50aWNhdGVkIiwic2V0R29vZ2xlQXV0aGVudGljYXRlZCIsImFjY2Vzc1Rva2VuIiwic2V0QWNjZXNzVG9rZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJDbGVhclVzZXJJbmZvIiwiQ29va2llcyIsInNldCIsInNldFVzZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRVc2VyUGFzc3dvcmQiLCJTaWduSW4iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImFjY2Vzc190b2tlbiIsImdldCIsIm5hbWUiLCJhdmF0YXJfdXJsIiwicmVwbGFjZSIsInB1c2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiU2VhcmNoVXNlckRldGFpbHMiLCJ0b2tlbiIsInBpY3R1cmUiLCJnaXZlbl9uYW1lIiwiZW1haWwiLCJzcGxpdCIsIlNpZ25Jbkdvb2dsZSIsIlNpZ25PdXQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWVPLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFqQztBQUVBLElBQU1DLFlBQXNCLEdBQUcsU0FBekJBLFlBQXlCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNmQyxzREFBUSxDQUFDLEVBQUQsQ0FETztBQUFBLE1BQ3hDQyxRQUR3QztBQUFBLE1BQzlCQyxXQUQ4Qjs7QUFBQSxtQkFFZkYsc0RBQVEsQ0FBQyxFQUFELENBRk87QUFBQSxNQUV4Q0csUUFGd0M7QUFBQSxNQUU5QkMsV0FGOEI7O0FBQUEsbUJBR2ZKLHNEQUFRLENBQUMsRUFBRCxDQUhPO0FBQUEsTUFHeENLLFFBSHdDO0FBQUEsTUFHOUJDLFdBSDhCOztBQUFBLG1CQUlHTixzREFBUSxDQUFDLEVBQUQsQ0FKWDtBQUFBLE1BSXhDTyxpQkFKd0M7QUFBQSxNQUlyQkMsb0JBSnFCOztBQUFBLG1CQUtMUixzREFBUSxDQUFDLEtBQUQsQ0FMSDtBQUFBLE1BS3hDUyxhQUx3QztBQUFBLE1BS3pCQyxnQkFMeUI7O0FBQUEsbUJBTU9WLHNEQUFRLENBQUMsS0FBRCxDQU5mO0FBQUEsTUFNeENXLG1CQU53QztBQUFBLE1BTW5CQyxzQkFObUI7O0FBQUEsbUJBT1RaLHNEQUFRLENBQUMsRUFBRCxDQVBDO0FBQUEsTUFPeENhLFdBUHdDO0FBQUEsTUFPM0JDLGNBUDJCOztBQVEvQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFdBQVNDLGFBQVQsR0FBd0I7QUFDdEJmLGVBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUUsZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBRSxlQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0FJLG9CQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDQUUsMEJBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUNBRSxrQkFBYyxDQUFDLEVBQUQsQ0FBZDtBQUNBTix3QkFBb0IsQ0FBQyxFQUFELENBQXBCO0FBQ0FVLG9EQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCLEVBQTNCO0FBQ0Q7O0FBQ0QsV0FBU0MsT0FBVCxDQUFpQkMsQ0FBakIsRUFBb0I7QUFDbEIsUUFBTXBCLFFBQVEsR0FBR29CLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUExQjtBQUNBckIsZUFBVyxDQUFDRCxRQUFELENBQVg7QUFDRDs7QUFDRCxXQUFTdUIsZUFBVCxDQUF5QkgsQ0FBekIsRUFBNEI7QUFDMUIsUUFBTWxCLFFBQVEsR0FBR2tCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUExQjtBQUNBbkIsZUFBVyxDQUFDRCxRQUFELENBQVg7QUFDRDs7QUFDRCxXQUFTc0IsTUFBVCxHQUFrQjtBQUNoQkMsZ0RBQUssQ0FDRkMsSUFESCxrREFFOEMxQixRQUY5Qyx1QkFFbUVFLFFBRm5FLEdBSUd5QixJQUpILENBSVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2IsVUFBSUEsR0FBRyxDQUFDQyxJQUFKLENBQVNDLFlBQWIsRUFBMkI7QUFDekJqQixzQkFBYyxDQUFDZSxHQUFHLENBQUNDLElBQUosQ0FBU0MsWUFBVixDQUFkO0FBQ0FyQix3QkFBZ0IsQ0FBQyxJQUFELENBQWhCO0FBRUFnQixvREFBSyxDQUFDTSxHQUFOLG9EQUFzRC9CLFFBQXRELEdBQ0MyQixJQURELENBQ00sVUFBQUMsR0FBRyxFQUFJO0FBQ1h2QixxQkFBVyxDQUFDdUIsR0FBRyxDQUFDQyxJQUFKLENBQVMsQ0FBVCxFQUFZRyxJQUFiLENBQVg7QUFDQSxjQUFNMUIsaUJBQWlCLEdBQUdzQixHQUFHLENBQUNDLElBQUosQ0FBUyxDQUFULEVBQVlJLFVBQVosQ0FBdUJDLE9BQXZCLENBQStCLFlBQS9CLEVBQTRDLHFCQUE1QyxDQUExQjtBQUNBM0IsOEJBQW9CLENBQUNELGlCQUFELENBQXBCO0FBQ0QsU0FMRDtBQU1BUSxjQUFNLENBQUNxQixJQUFQLENBQVksT0FBWjtBQUNEO0FBQ0YsS0FqQkgsV0FrQlMsVUFBQ0MsR0FBRDtBQUFBLGFBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBQVQ7QUFBQSxLQWxCVDtBQW1CRDs7QUFDRCxXQUFTRyxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBaUM7QUFDL0JmLGdEQUFLLENBQUNNLEdBQU4sK0VBQWlGUyxLQUFqRixHQUNDYixJQURELENBQ00sVUFBQUMsR0FBRyxFQUFJO0FBQUEsc0JBQ21CQSxHQUFHLENBQUNDLElBRHZCO0FBQUEsVUFDSlksT0FESSxhQUNKQSxPQURJO0FBQUEsVUFDS0MsVUFETCxhQUNLQSxVQURMO0FBRVhuQywwQkFBb0IsQ0FBQ2tDLE9BQUQsQ0FBcEI7QUFDQXBDLGlCQUFXLENBQUNxQyxVQUFELENBQVg7QUFDQXpDLGlCQUFXLENBQUMyQixHQUFHLENBQUNDLElBQUosQ0FBU2MsS0FBVCxDQUFlQyxLQUFmLENBQXFCLEdBQXJCLEVBQTBCLENBQTFCLENBQUQsQ0FBWDtBQUNELEtBTkQ7QUFPRDs7QUFDRCxXQUFTQyxZQUFULE9BQW9DO0FBQUEsUUFBYmpDLFdBQWEsUUFBYkEsV0FBYTtBQUNoQ0ssb0RBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJOLFdBQTNCO0FBQ0FDLGtCQUFjLENBQUNELFdBQUQsQ0FBZDtBQUNBRCwwQkFBc0IsQ0FBQyxJQUFELENBQXRCO0FBQ0E0QixxQkFBaUIsQ0FBQzNCLFdBQUQsQ0FBakI7QUFDQUUsVUFBTSxDQUFDcUIsSUFBUCxDQUFZLE9BQVo7QUFDSDs7QUFDRCxXQUFTVyxPQUFULEdBQWtCO0FBQ2hCaEMsVUFBTSxDQUFDcUIsSUFBUCxDQUFZLEdBQVo7QUFDQW5CLGlCQUFhO0FBQ2Q7O0FBRUQsc0JBQ0UscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFDRSxTQUFLLEVBQUU7QUFDTGhCLGNBQVEsRUFBUkEsUUFESztBQUVMbUIsYUFBTyxFQUFQQSxPQUZLO0FBR0xqQixjQUFRLEVBQVJBLFFBSEs7QUFJTHFCLHFCQUFlLEVBQWZBLGVBSks7QUFLTG5CLGNBQVEsRUFBUkEsUUFMSztBQU1MRSx1QkFBaUIsRUFBakJBLGlCQU5LO0FBT0xrQixZQUFNLEVBQU5BLE1BUEs7QUFRTHFCLGtCQUFZLEVBQVpBLFlBUks7QUFTTE4sdUJBQWlCLEVBQWpCQSxpQkFUSztBQVVMTyxhQUFPLEVBQVBBLE9BVks7QUFXTDlCLG1CQUFhLEVBQWJBO0FBWEssS0FEVDtBQUFBLGNBZUdsQixLQUFLLENBQUNpRDtBQWZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQXpGTTs7R0FBTWxELFk7VUFRSWtCLHFEOzs7S0FSSmxCLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzhmNzEzYTM3NTk0ZjM0NWY5NTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5pbnRlcmZhY2UgVXNlckNvbnRleHREYXRhIHtcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgZnVsbE5hbWU6IHN0cmluZztcclxuICB1cmxQcm9maWxlUGljdHVyZTogc3RyaW5nO1xyXG4gIHNldFVzZXI6IChlKSA9PiB2b2lkO1xyXG4gIHNldFVzZXJQYXNzd29yZDogKGUpID0+IHZvaWQ7XHJcbiAgU2lnbkluOiAoKSA9PiB2b2lkO1xyXG4gIFNpZ25Jbkdvb2dsZTogKHJlcykgPT4gdm9pZDtcclxuICBTaWduT3V0OiAoKSA9PiB2b2lkO1xyXG4gIFNlYXJjaFVzZXJEZXRhaWxzOiAodG9rZW4pID0+IHZvaWQ7XHJcbiAgQ2xlYXJVc2VySW5mbzogKCkgPT4gdm9pZDtcclxufVxyXG5leHBvcnQgY29uc3QgVXNlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIFVzZXJDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclByb3ZpZGVyOiBSZWFjdC5GQyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZnVsbE5hbWUsIHNldEZ1bGxOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1cmxQcm9maWxlUGljdHVyZSwgc2V0VXJsUHJvZmlsZVBpY3R1cmVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2F1dGhlbnRpY2F0ZWQsIHNldEF1dGhlbnRpY2F0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtnb29nbGVBdXRoZW50aWNhdGVkLCBzZXRHb29nbGVBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbYWNjZXNzVG9rZW4sIHNldEFjY2Vzc1Rva2VuXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBmdW5jdGlvbiBDbGVhclVzZXJJbmZvKCl7XHJcbiAgICBzZXRVc2VybmFtZSgnJylcclxuICAgIHNldFBhc3N3b3JkKCcnKVxyXG4gICAgc2V0RnVsbE5hbWUoJycpXHJcbiAgICBzZXRBdXRoZW50aWNhdGVkKGZhbHNlKVxyXG4gICAgc2V0R29vZ2xlQXV0aGVudGljYXRlZChmYWxzZSlcclxuICAgIHNldEFjY2Vzc1Rva2VuKCcnKVxyXG4gICAgc2V0VXJsUHJvZmlsZVBpY3R1cmUoJycpXHJcbiAgICBDb29raWVzLnNldCgnYWNjZXNzVG9rZW4nLCAnJylcclxuICB9XHJcbiAgZnVuY3Rpb24gc2V0VXNlcihlKSB7XHJcbiAgICBjb25zdCB1c2VybmFtZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0VXNlcm5hbWUodXNlcm5hbWUpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBzZXRVc2VyUGFzc3dvcmQoZSkge1xyXG4gICAgY29uc3QgcGFzc3dvcmQgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFBhc3N3b3JkKHBhc3N3b3JkKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gU2lnbkluKCkge1xyXG4gICAgYXhpb3NcclxuICAgICAgLnBvc3QoXHJcbiAgICAgICAgYC9hcGkvYXV0aD9ncmFudF90eXBlPXBhc3N3b3JkJnVzZXJuYW1lPSR7dXNlcm5hbWV9JnBhc3N3b3JkPSR7cGFzc3dvcmR9YFxyXG4gICAgICApXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLmRhdGEuYWNjZXNzX3Rva2VuKSB7XHJcbiAgICAgICAgICBzZXRBY2Nlc3NUb2tlbihyZXMuZGF0YS5hY2Nlc3NfdG9rZW4pXHJcbiAgICAgICAgICBzZXRBdXRoZW50aWNhdGVkKHRydWUpO1xyXG5cclxuICAgICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9naXRsYWIuY29tL2FwaS92NC91c2Vycz91c2VybmFtZT0ke3VzZXJuYW1lfWApXHJcbiAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBzZXRGdWxsTmFtZShyZXMuZGF0YVswXS5uYW1lKVxyXG4gICAgICAgICAgICBjb25zdCB1cmxQcm9maWxlUGljdHVyZSA9IHJlcy5kYXRhWzBdLmF2YXRhcl91cmwucmVwbGFjZSgnMTAuMTAuMS4zNScsJzE3Ny44NC4yNDYuMTI2Ojk5NTUnKVxyXG4gICAgICAgICAgICBzZXRVcmxQcm9maWxlUGljdHVyZSh1cmxQcm9maWxlUGljdHVyZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBTZWFyY2hVc2VyRGV0YWlscyh0b2tlbil7XHJcbiAgICBheGlvcy5nZXQoYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL29hdXRoMi92MS91c2VyaW5mbz9hbHQ9anNvbiZhY2Nlc3NfdG9rZW49JHt0b2tlbn1gKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgY29uc3Qge3BpY3R1cmUsIGdpdmVuX25hbWV9ID0gcmVzLmRhdGFcclxuICAgICAgc2V0VXJsUHJvZmlsZVBpY3R1cmUocGljdHVyZSlcclxuICAgICAgc2V0RnVsbE5hbWUoZ2l2ZW5fbmFtZSlcclxuICAgICAgc2V0VXNlcm5hbWUocmVzLmRhdGEuZW1haWwuc3BsaXQoXCJAXCIpWzBdKVxyXG4gICAgfSlcclxuICB9XHJcbiAgZnVuY3Rpb24gU2lnbkluR29vZ2xlKHthY2Nlc3NUb2tlbn0pe1xyXG4gICAgICBDb29raWVzLnNldCgnYWNjZXNzVG9rZW4nLCBhY2Nlc3NUb2tlbilcclxuICAgICAgc2V0QWNjZXNzVG9rZW4oYWNjZXNzVG9rZW4pXHJcbiAgICAgIHNldEdvb2dsZUF1dGhlbnRpY2F0ZWQodHJ1ZSlcclxuICAgICAgU2VhcmNoVXNlckRldGFpbHMoYWNjZXNzVG9rZW4pXHJcbiAgICAgIHJvdXRlci5wdXNoKCcvaG9tZScpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFNpZ25PdXQoKXtcclxuICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgIENsZWFyVXNlckluZm8oKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxVc2VyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIHVzZXJuYW1lLFxyXG4gICAgICAgIHNldFVzZXIsXHJcbiAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgc2V0VXNlclBhc3N3b3JkLFxyXG4gICAgICAgIGZ1bGxOYW1lLFxyXG4gICAgICAgIHVybFByb2ZpbGVQaWN0dXJlLFxyXG4gICAgICAgIFNpZ25JbixcclxuICAgICAgICBTaWduSW5Hb29nbGUsXHJcbiAgICAgICAgU2VhcmNoVXNlckRldGFpbHMsXHJcbiAgICAgICAgU2lnbk91dCxcclxuICAgICAgICBDbGVhclVzZXJJbmZvXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==