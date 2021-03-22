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
      SearchUserDetails = _useContext.SearchUserDetails; // const router = useRouter();


  if (props.accessToken) {
    if (!urlProfilePicture) SearchUserDetails(js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get("accessToken"));
  } else Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])().push("/");

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

_s(Home, "9Gj98h7x2FbjwnN1n5WUkwrVMwo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInVzZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInVybFByb2ZpbGVQaWN0dXJlIiwiU2VhcmNoVXNlckRldGFpbHMiLCJhY2Nlc3NUb2tlbiIsIkNvb2tpZXMiLCJnZXQiLCJ1c2VSb3V0ZXIiLCJwdXNoIiwibGV2ZWwiLCJjdXJyZW50RXhwZXJpZW5jZSIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJpc0RhcmsiLCJTdHlsZXMiLCJjb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRWUsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQUEsb0JBQ2VDLHdEQUFVLENBQUNDLG9FQUFELENBRHpCO0FBQUEsTUFDMUJDLGlCQUQwQixlQUMxQkEsaUJBRDBCO0FBQUEsTUFDUEMsaUJBRE8sZUFDUEEsaUJBRE8sRUFFbEM7OztBQUVFLE1BQUlKLEtBQUssQ0FBQ0ssV0FBVixFQUF1QjtBQUNyQixRQUFJLENBQUNGLGlCQUFMLEVBQXdCQyxpQkFBaUIsQ0FBQ0UsaURBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosQ0FBRCxDQUFqQjtBQUN6QixHQUZELE1BRU9DLDZEQUFTLEdBQUdDLElBQVosQ0FBaUIsR0FBakI7O0FBRVQsc0JBQ0UscUVBQUMsK0VBQUQ7QUFDRSxTQUFLLEVBQUVULEtBQUssQ0FBQ1UsS0FEZjtBQUVFLHFCQUFpQixFQUFFVixLQUFLLENBQUNXLGlCQUYzQjtBQUdFLHVCQUFtQixFQUFFWCxLQUFLLENBQUNZLG1CQUg3QjtBQUlFLFVBQU0sRUFBRVosS0FBSyxDQUFDYSxNQUpoQjtBQUFBLDJCQU1FO0FBQUssZUFBUyxFQUFFQyxxRUFBTSxDQUFDQyxTQUF2QjtBQUFBLDhCQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUdFLHFFQUFDLGdEQUFEO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFPRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEYsZUFTRSxxRUFBQyw4RUFBRDtBQUFBLCtCQUNFO0FBQUEsa0NBQ0U7QUFBQSxvQ0FDRSxxRUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUUscUVBQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRixlQUdFLHFFQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBT0U7QUFBQSxtQ0FDRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0NEOztHQXhDdUJoQixJO1VBTWJTLHFEOzs7S0FOYVQsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLmQxZjM2OWFiZDVlYzkyMWI0OTIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IEV4cGVyaWVuY2VCYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRXhwZXJpZW5jZUJhclwiO1xyXG5pbXBvcnQgUHJvZmlsZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9maWxlXCI7XHJcbmltcG9ydCBDb21wbGV0ZWRDaGFsbGVuZ3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29tcGxldGVkQ2hhbGxlbmdzXCI7XHJcbmltcG9ydCBDb3VudERvd24gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnREb3duXCI7XHJcbmltcG9ydCBDaGFsbGVuZ2VCb3ggZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94XCI7XHJcbmltcG9ydCBDaGFuZ2VUaGVtZUNvbG9yIGZyb20gXCIuLi9jb21wb25lbnRzL1NldERhcmtUaGVtZVwiO1xyXG5cclxuaW1wb3J0IHsgQ291bnRkb3duUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvQ291bnRkb3duQ29udGV4dHNcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc1Byb3ZpZGVyIH0gZnJvbSBcIi4uL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHRzXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0xvZ2luQ29udGV4dHNcIjtcclxuXHJcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9wYWdlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZShwcm9wcykge1xyXG4gIGNvbnN0IHsgdXJsUHJvZmlsZVBpY3R1cmUsIFNlYXJjaFVzZXJEZXRhaWxzIH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBpZiAocHJvcHMuYWNjZXNzVG9rZW4pIHtcclxuICAgICAgaWYgKCF1cmxQcm9maWxlUGljdHVyZSkgU2VhcmNoVXNlckRldGFpbHMoQ29va2llcy5nZXQoXCJhY2Nlc3NUb2tlblwiKSk7XHJcbiAgICB9IGVsc2UgdXNlUm91dGVyKCkucHVzaChcIi9cIik7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hhbGxlbmdlc1Byb3ZpZGVyXHJcbiAgICAgIGxldmVsPXtwcm9wcy5sZXZlbH1cclxuICAgICAgY3VycmVudEV4cGVyaWVuY2U9e3Byb3BzLmN1cnJlbnRFeHBlcmllbmNlfVxyXG4gICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkPXtwcm9wcy5jaGFsbGVuZ2VzQ29tcGxldGVkfVxyXG4gICAgICBpc0Rhcms9e3Byb3BzLmlzRGFya31cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxDaGFuZ2VUaGVtZUNvbG9yIC8+XHJcblxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPkluw61jaW8gfCBtb3ZlLml0PC90aXRsZT5cclxuICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgIDxFeHBlcmllbmNlQmFyIC8+XHJcblxyXG4gICAgICAgIDxDb3VudGRvd25Qcm92aWRlcj5cclxuICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxQcm9maWxlIC8+XHJcbiAgICAgICAgICAgICAgPENvbXBsZXRlZENoYWxsZW5ncyAvPlxyXG4gICAgICAgICAgICAgIDxDb3VudERvd24gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxDaGFsbGVuZ2VCb3ggLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9Db3VudGRvd25Qcm92aWRlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NoYWxsZW5nZXNQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbGV2ZWwsXHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXHJcbiAgICBpc0RhcmssXHJcbiAgICBhY2Nlc3NUb2tlbixcclxuICB9ID0gY3R4LnJlcS5jb29raWVzO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbGV2ZWw6IE51bWJlcihsZXZlbCksXHJcbiAgICAgIGN1cnJlbnRFeHBlcmllbmNlOiBOdW1iZXIoY3VycmVudEV4cGVyaWVuY2UpLFxyXG4gICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBOdW1iZXIoY2hhbGxlbmdlc0NvbXBsZXRlZCksXHJcbiAgICAgIGlzRGFyazogaXNEYXJrID09PSBcImZhbHNlXCIgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlblxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9