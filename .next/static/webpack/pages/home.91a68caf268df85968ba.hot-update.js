webpackHotUpdate_N_E("pages/home",{

/***/ "./src/components/Profile.tsx":
/*!************************************!*\
  !*** ./src/components/Profile.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengeContexts */ "./src/contexts/ChallengeContexts.tsx");
/* harmony import */ var _contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/LoginContexts */ "./src/contexts/LoginContexts.tsx");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Profile.module.css */ "./src/styles/components/Profile.module.css");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");


var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\components\\Profile.tsx",
    _s = $RefreshSig$();






function Profile() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]),
      level = _useContext.level,
      isDark = _useContext.isDark;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_3__["UserContext"]),
      username = _useContext2.username,
      urlProfilePicture = _useContext2.urlProfilePicture,
      fullName = _useContext2.fullName,
      SignOut = _useContext2.SignOut;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: isDark ? "".concat(_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileContainer, " ").concat(_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.darkTheme) : "".concat(_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileContainer),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: urlProfilePicture,
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.infoLogin,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: fullName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: username
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level.svg",
          alt: "Level"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), "Level ", level]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.logout,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__["RiLogoutBoxRLine"], {
        onClick: SignOut
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_s(Profile, "C0qsm66pXrppEulvUFAKjSFJUxs=");

_c = Profile;

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS50c3giXSwibmFtZXMiOlsiUHJvZmlsZSIsInVzZUNvbnRleHQiLCJDaGFsbGVuZ2VzQ29udGV4dCIsImxldmVsIiwiaXNEYXJrIiwiVXNlckNvbnRleHQiLCJ1c2VybmFtZSIsInVybFByb2ZpbGVQaWN0dXJlIiwiZnVsbE5hbWUiLCJTaWduT3V0IiwiU3R5bGVzIiwicHJvZmlsZUNvbnRhaW5lciIsImRhcmtUaGVtZSIsImluZm9Mb2dpbiIsImxvZ291dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUFBLG9CQUNOQyx3REFBVSxDQUFDQyw2RUFBRCxDQURKO0FBQUEsTUFDeEJDLEtBRHdCLGVBQ3hCQSxLQUR3QjtBQUFBLE1BQ2pCQyxNQURpQixlQUNqQkEsTUFEaUI7O0FBQUEscUJBRTJCSCx3REFBVSxDQUFDSSxtRUFBRCxDQUZyQztBQUFBLE1BRXhCQyxRQUZ3QixnQkFFeEJBLFFBRndCO0FBQUEsTUFFZEMsaUJBRmMsZ0JBRWRBLGlCQUZjO0FBQUEsTUFFS0MsUUFGTCxnQkFFS0EsUUFGTDtBQUFBLE1BRWVDLE9BRmYsZ0JBRWVBLE9BRmY7O0FBSWhDLHNCQUNFO0FBQ0UsYUFBUyxFQUNQTCxNQUFNLGFBQ0NNLDRFQUFNLENBQUNDLGdCQURSLGNBQzRCRCw0RUFBTSxDQUFDRSxTQURuQyxjQUVDRiw0RUFBTSxDQUFDQyxnQkFGUixDQUZWO0FBQUEsNEJBT0U7QUFBSyxTQUFHLEVBQUVKLGlCQUFWO0FBQTZCLFNBQUcsRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFTRTtBQUFLLGVBQVMsRUFBRUcsNEVBQU0sQ0FBQ0csU0FBdkI7QUFBQSw4QkFFRTtBQUFBLGdDQUNFO0FBQUEsb0JBQVNMO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsb0JBQUlGO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQU9FO0FBQUEsZ0NBQ0U7QUFBSyxhQUFHLEVBQUMsaUJBQVQ7QUFBMkIsYUFBRyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsWUFFU0gsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQXVCRTtBQUFLLGVBQVMsRUFBRU8sNEVBQU0sQ0FBQ0ksTUFBdkI7QUFBQSw2QkFDRSxxRUFBQywrREFBRDtBQUFrQixlQUFPLEVBQUVMO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBOEJEOztHQWxDdUJULE87O0tBQUFBLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS45MWE2OGNhZjI2OGRmODU5NjhiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHRzXCI7XHJcbmltcG9ydCB7IFVzZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0xvZ2luQ29udGV4dHNcIjtcclxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvUHJvZmlsZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgeyBSaUxvZ291dEJveFJMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKCkge1xyXG4gIGNvbnN0IHsgbGV2ZWwsIGlzRGFyayB9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dCk7XHJcbiAgY29uc3QgeyB1c2VybmFtZSwgdXJsUHJvZmlsZVBpY3R1cmUsIGZ1bGxOYW1lLCBTaWduT3V0IH0gPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcclxuIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgaXNEYXJrXHJcbiAgICAgICAgICA/IGAke1N0eWxlcy5wcm9maWxlQ29udGFpbmVyfSAke1N0eWxlcy5kYXJrVGhlbWV9YFxyXG4gICAgICAgICAgOiBgJHtTdHlsZXMucHJvZmlsZUNvbnRhaW5lcn1gXHJcbiAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICA8aW1nIHNyYz17dXJsUHJvZmlsZVBpY3R1cmV9IGFsdD1cIlwiIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmluZm9Mb2dpbn0+XHJcbiAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Ryb25nPntmdWxsTmFtZX08L3N0cm9uZz5cclxuICAgICAgICAgIDxwPnt1c2VybmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJpY29ucy9sZXZlbC5zdmdcIiBhbHQ9XCJMZXZlbFwiIC8+XHJcbiAgICAgICAgICBMZXZlbCB7bGV2ZWx9XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmxvZ291dH0+XHJcbiAgICAgICAgPFJpTG9nb3V0Qm94UkxpbmUgb25DbGljaz17U2lnbk91dH0vPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=