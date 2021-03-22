webpackHotUpdate_N_E("pages/home",{

/***/ "./src/pages/home.tsx":
/*!****************************!*\
  !*** ./src/pages/home.tsx ***!
  \****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ExperienceBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ExperienceBar */ "./src/components/ExperienceBar.tsx");
/* harmony import */ var _components_Profile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Profile */ "./src/components/Profile.tsx");
/* harmony import */ var _components_CompletedChallengs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/CompletedChallengs */ "./src/components/CompletedChallengs.tsx");
/* harmony import */ var _components_CountDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CountDown */ "./src/components/CountDown.tsx");
/* harmony import */ var _components_ChallengeBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ChallengeBox */ "./src/components/ChallengeBox.tsx");
/* harmony import */ var _components_SetDarkTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/SetDarkTheme */ "./src/components/SetDarkTheme.tsx");
/* harmony import */ var _contexts_CountdownContexts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contexts/CountdownContexts */ "./src/contexts/CountdownContexts.tsx");
/* harmony import */ var _contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contexts/ChallengeContexts */ "./src/contexts/ChallengeContexts.tsx");
/* harmony import */ var _contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contexts/LoginContexts */ "./src/contexts/LoginContexts.tsx");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/pages/Home.module.css */ "./src/styles/pages/Home.module.css");
/* harmony import */ var _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_14__);


var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\pages\\home.tsx",
    _s = $RefreshSig$();















var __N_SSP = true;
function Home(props) {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_12__["UserContext"]),
      urlProfilePicture = _useContext.urlProfilePicture,
      SearchUserDetails = _useContext.SearchUserDetails;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get("accessToken")) {
      if (!urlProfilePicture && js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get("accessToken")) SearchUserDetails(js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get("accessToken"));
    } else {
      router.push("/");
    }
  }, []);

  if (js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get("accessToken")) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_11__["ChallengesProvider"], {
      level: props.level,
      currentExperience: props.currentExperience,
      challengesCompleted: props.challengesCompleted,
      isDark: props.isDark,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SetDarkTheme__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
            children: "In\xEDcio | move.it"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_CountdownContexts__WEBPACK_IMPORTED_MODULE_10__["CountdownProvider"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CompletedChallengs__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CountDown__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this);
  } else {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 12
    }, this);
  }
}

_s(Home, "LLOiypJjh53/NxXqL2wLSJL6xj0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInVybFByb2ZpbGVQaWN0dXJlIiwiU2VhcmNoVXNlckRldGFpbHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJDb29raWVzIiwiZ2V0IiwicHVzaCIsImxldmVsIiwiY3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwiaXNEYXJrIiwiU3R5bGVzIiwiY29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUFBLG9CQUNlQyx3REFBVSxDQUFDQyxvRUFBRCxDQUR6QjtBQUFBLE1BQzFCQyxpQkFEMEIsZUFDMUJBLGlCQUQwQjtBQUFBLE1BQ1BDLGlCQURPLGVBQ1BBLGlCQURPOztBQUVsQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlDLGlEQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLENBQUosRUFBZ0M7QUFDOUIsVUFBSSxDQUFDTixpQkFBRCxJQUFzQkssaURBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosQ0FBMUIsRUFDRUwsaUJBQWlCLENBQUNJLGlEQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLENBQUQsQ0FBakI7QUFDSCxLQUhELE1BR087QUFDTEosWUFBTSxDQUFDSyxJQUFQLENBQVksR0FBWjtBQUNEO0FBQ0YsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFTQSxNQUFJRixpREFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixDQUFKLEVBQWdDO0FBQzlCLHdCQUNFLHFFQUFDLCtFQUFEO0FBQ0UsV0FBSyxFQUFFVCxLQUFLLENBQUNXLEtBRGY7QUFFRSx1QkFBaUIsRUFBRVgsS0FBSyxDQUFDWSxpQkFGM0I7QUFHRSx5QkFBbUIsRUFBRVosS0FBSyxDQUFDYSxtQkFIN0I7QUFJRSxZQUFNLEVBQUViLEtBQUssQ0FBQ2MsTUFKaEI7QUFBQSw2QkFNRTtBQUFLLGlCQUFTLEVBQUVDLHFFQUFNLENBQUNDLFNBQXZCO0FBQUEsZ0NBQ0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUdFLHFFQUFDLGdEQUFEO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGLGVBT0UscUVBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRixlQVNFLHFFQUFDLDhFQUFEO0FBQUEsaUNBQ0U7QUFBQSxvQ0FDRTtBQUFBLHNDQUNFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFFRSxxRUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLGVBR0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFPRTtBQUFBLHFDQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBZ0NELEdBakNELE1Ba0NJO0FBQ0Ysd0JBQU8scUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEO0FBQ0Y7O0dBbER1QmpCLEk7VUFFUE8scUQ7OztLQUZPUCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuNmYwOTkyOWY1ZTgyYTU1OTQ2YTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgRXhwZXJpZW5jZUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9FeHBlcmllbmNlQmFyXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGVcIjtcclxuaW1wb3J0IENvbXBsZXRlZENoYWxsZW5ncyBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ3NcIjtcclxuaW1wb3J0IENvdW50RG93biBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudERvd25cIjtcclxuaW1wb3J0IENoYWxsZW5nZUJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFsbGVuZ2VCb3hcIjtcclxuaW1wb3J0IENoYW5nZVRoZW1lQ29sb3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2V0RGFya1RoZW1lXCI7XHJcblxyXG5pbXBvcnQgeyBDb3VudGRvd25Qcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0c1wiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvQ2hhbGxlbmdlQ29udGV4dHNcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvTG9naW5Db250ZXh0c1wiO1xyXG5cclxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgeyB1cmxQcm9maWxlUGljdHVyZSwgU2VhcmNoVXNlckRldGFpbHMgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKENvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIikpIHtcclxuICAgICAgaWYgKCF1cmxQcm9maWxlUGljdHVyZSAmJiBDb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpKVxyXG4gICAgICAgIFNlYXJjaFVzZXJEZXRhaWxzKENvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIikpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKENvb2tpZXMuZ2V0KFwiYWNjZXNzVG9rZW5cIikpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDaGFsbGVuZ2VzUHJvdmlkZXJcclxuICAgICAgICBsZXZlbD17cHJvcHMubGV2ZWx9XHJcbiAgICAgICAgY3VycmVudEV4cGVyaWVuY2U9e3Byb3BzLmN1cnJlbnRFeHBlcmllbmNlfVxyXG4gICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQ9e3Byb3BzLmNoYWxsZW5nZXNDb21wbGV0ZWR9XHJcbiAgICAgICAgaXNEYXJrPXtwcm9wcy5pc0Rhcmt9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8Q2hhbmdlVGhlbWVDb2xvciAvPlxyXG5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+SW7DrWNpbyB8IG1vdmUuaXQ8L3RpdGxlPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgIDxFeHBlcmllbmNlQmFyIC8+XHJcblxyXG4gICAgICAgICAgPENvdW50ZG93blByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFByb2ZpbGUgLz5cclxuICAgICAgICAgICAgICAgIDxDb21wbGV0ZWRDaGFsbGVuZ3MgLz5cclxuICAgICAgICAgICAgICAgIDxDb3VudERvd24gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxDaGFsbGVuZ2VCb3ggLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgPC9Db3VudGRvd25Qcm92aWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9DaGFsbGVuZ2VzUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxuICBlbHNle1xyXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD48L1JlYWN0LkZyYWdtZW50PlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIGxldmVsLFxyXG4gICAgY3VycmVudEV4cGVyaWVuY2UsXHJcbiAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxyXG4gICAgaXNEYXJrLFxyXG4gIH0gPSBjdHgucmVxLmNvb2tpZXM7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGxldmVsOiBOdW1iZXIobGV2ZWwpLFxyXG4gICAgICBjdXJyZW50RXhwZXJpZW5jZTogTnVtYmVyKGN1cnJlbnRFeHBlcmllbmNlKSxcclxuICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZDogTnVtYmVyKGNoYWxsZW5nZXNDb21wbGV0ZWQpLFxyXG4gICAgICBpc0Rhcms6IGlzRGFyayA9PT0gXCJmYWxzZVwiID8gZmFsc2UgOiB0cnVlLFxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9