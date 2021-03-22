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

  if (props.accessToken) {
    if (!urlProfilePicture) SearchUserDetails(js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get("accessToken"));
  } else router.push("/");

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_11__["ChallengesProvider"], {
    level: props.level,
    currentExperience: props.currentExperience,
    challengesCompleted: props.challengesCompleted,
    isDark: props.isDark,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SetDarkTheme__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "In\xEDcio | move.it"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_CountdownContexts__WEBPACK_IMPORTED_MODULE_10__["CountdownProvider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CompletedChallengs__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CountDown__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s(Home, "HVd28bxz1AQNIYmKJH7mg14imBY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInVybFByb2ZpbGVQaWN0dXJlIiwiU2VhcmNoVXNlckRldGFpbHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhY2Nlc3NUb2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJwdXNoIiwibGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJpc0RhcmsiLCJTdHlsZXMiLCJjb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUEsb0JBQ2VDLHdEQUFVLENBQUNDLG9FQUFELENBRHpCO0FBQUEsTUFDMUJDLGlCQUQwQixlQUMxQkEsaUJBRDBCO0FBQUEsTUFDUEMsaUJBRE8sZUFDUEEsaUJBRE87O0FBRWxDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUUsTUFBSU4sS0FBSyxDQUFDTyxXQUFWLEVBQXVCO0FBQ3JCLFFBQUksQ0FBQ0osaUJBQUwsRUFBd0JDLGlCQUFpQixDQUFDSSxpREFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixDQUFELENBQWpCO0FBQ3pCLEdBRkQsTUFFT0osTUFBTSxDQUFDSyxJQUFQLENBQVksR0FBWjs7QUFFVCxzQkFDRSxxRUFBQywrRUFBRDtBQUNFLFNBQUssRUFBRVYsS0FBSyxDQUFDVyxLQURmO0FBRUUscUJBQWlCLEVBQUVYLEtBQUssQ0FBQ1ksaUJBRjNCO0FBR0UsdUJBQW1CLEVBQUVaLEtBQUssQ0FBQ2EsbUJBSDdCO0FBSUUsVUFBTSxFQUFFYixLQUFLLENBQUNjLE1BSmhCO0FBQUEsMkJBTUU7QUFBSyxlQUFTLEVBQUVDLHFFQUFNLENBQUNDLFNBQXZCO0FBQUEsOEJBQ0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0UscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQU9FLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVNFLHFFQUFDLDhFQUFEO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRTtBQUFBLG9DQUNFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSxxRUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBR0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFPRTtBQUFBLG1DQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQ0Q7O0dBeEN1QmpCLEk7VUFFUE8scUQ7OztLQUZPUCxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuOGIwZGQ3NDQyNjBiZjgyN2YzMWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgRXhwZXJpZW5jZUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9FeHBlcmllbmNlQmFyXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGVcIjtcclxuaW1wb3J0IENvbXBsZXRlZENoYWxsZW5ncyBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ3NcIjtcclxuaW1wb3J0IENvdW50RG93biBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudERvd25cIjtcclxuaW1wb3J0IENoYWxsZW5nZUJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFsbGVuZ2VCb3hcIjtcclxuaW1wb3J0IENoYW5nZVRoZW1lQ29sb3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2V0RGFya1RoZW1lXCI7XHJcblxyXG5pbXBvcnQgeyBDb3VudGRvd25Qcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0c1wiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvQ2hhbGxlbmdlQ29udGV4dHNcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvTG9naW5Db250ZXh0c1wiO1xyXG5cclxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgeyB1cmxQcm9maWxlUGljdHVyZSwgU2VhcmNoVXNlckRldGFpbHMgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGlmIChwcm9wcy5hY2Nlc3NUb2tlbikge1xyXG4gICAgICBpZiAoIXVybFByb2ZpbGVQaWN0dXJlKSBTZWFyY2hVc2VyRGV0YWlscyhDb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpKTtcclxuICAgIH0gZWxzZSByb3V0ZXIucHVzaChcIi9cIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hhbGxlbmdlc1Byb3ZpZGVyXHJcbiAgICAgIGxldmVsPXtwcm9wcy5sZXZlbH1cclxuICAgICAgY3VycmVudEV4cGVyaWVuY2U9e3Byb3BzLmN1cnJlbnRFeHBlcmllbmNlfVxyXG4gICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkPXtwcm9wcy5jaGFsbGVuZ2VzQ29tcGxldGVkfVxyXG4gICAgICBpc0Rhcms9e3Byb3BzLmlzRGFya31cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxDaGFuZ2VUaGVtZUNvbG9yIC8+XHJcblxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkluw61jaW8gfCBtb3ZlLml0PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgIDxFeHBlcmllbmNlQmFyIC8+XHJcblxyXG4gICAgICAgIDxDb3VudGRvd25Qcm92aWRlcj5cclxuICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxQcm9maWxlIC8+XHJcbiAgICAgICAgICAgICAgPENvbXBsZXRlZENoYWxsZW5ncyAvPlxyXG4gICAgICAgICAgICAgIDxDb3VudERvd24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxDaGFsbGVuZ2VCb3ggLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9Db3VudGRvd25Qcm92aWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NoYWxsZW5nZXNQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbGV2ZWwsXHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXHJcbiAgICBpc0RhcmssXHJcbiAgICBhY2Nlc3NUb2tlbixcclxuICB9ID0gY3R4LnJlcS5jb29raWVzO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbGV2ZWw6IE51bWJlcihsZXZlbCksXHJcbiAgICAgIGN1cnJlbnRFeHBlcmllbmNlOiBOdW1iZXIoY3VycmVudEV4cGVyaWVuY2UpLFxyXG4gICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBOdW1iZXIoY2hhbGxlbmdlc0NvbXBsZXRlZCksXHJcbiAgICAgIGlzRGFyazogaXNEYXJrID09PSBcImZhbHNlXCIgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlblxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9