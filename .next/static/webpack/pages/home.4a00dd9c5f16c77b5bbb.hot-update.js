webpackHotUpdate_N_E("pages/home",{

/***/ "./src/contexts/ChallengeContexts.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengeContexts.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LevelUpModal */ "./src/components/LevelUpModal.tsx");


var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\contexts\\ChallengeContexts.tsx",
    _s = $RefreshSig$();





var ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(props) {
  _s();

  var _props$level, _props$currentExperie, _props$challengesComp, _props$isDark;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_props$level = props.level) !== null && _props$level !== void 0 ? _props$level : 1),
      level = _useState[0],
      setLevel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_props$currentExperie = props.currentExperience) !== null && _props$currentExperie !== void 0 ? _props$currentExperie : 0),
      currentExperience = _useState2[0],
      setCurrentExperience = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_props$challengesComp = props.challengesCompleted) !== null && _props$challengesComp !== void 0 ? _props$challengesComp : 0),
      challengesCompleted = _useState3[0],
      setChallengesCompleted = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      activeChallenge = _useState4[0],
      setActiveChallenge = _useState4[1];

  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isLevelUpModalOpen = _useState5[0],
      setIsLevelUpModalOpen = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_props$isDark = props.isDark) !== null && _props$isDark !== void 0 ? _props$isDark : false),
      isDark = _useState6[0],
      setIsDark = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      accessToken = _useState7[0],
      setAccessToken = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (Notification) Notification.requestPermission();
    if (isDark) document.body.classList.add("body-dt");else document.body.classList.remove("body-dt");
    console.log(props.accessToken);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('isDark', isDark.toString());
  }, [isDark]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("level", level.toString());
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("currentExperience", currentExperience.toString());
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("challengesCompleted", challengesCompleted.toString());
  }, [level, currentExperience, challengesCompleted]);

  function SetDarkTheme(isSet) {
    if (isSet) document.body.classList.add("body-dt");else document.body.classList.remove("body-dt");
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('isDark', isDark.toString());
    setIsDark(isSet);
  }

  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }

  function closeLevelUpModal() {
    setIsLevelUpModalOpen(false);
  }

  function startNewChallenge() {
    var randomChallengIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengIndex];
    setActiveChallenge(challenge);

    if (Audio) {
      new Audio("/notification.mp3").play();
    }

    if (Notification) {
      if (Notification.permission === "granted") {
        new Notification("Novo desafio", {
          body: "Valendo: ".concat(challenge.amount, "xp!")
        });
      }
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) return;
    var amount = activeChallenge.amount;
    var finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ChallengesContext.Provider, {
    value: {
      isDark: isDark,
      level: level,
      experienceToNextLevel: experienceToNextLevel,
      currentExperience: currentExperience,
      challengesCompleted: challengesCompleted,
      startNewChallenge: startNewChallenge,
      activeChallenge: activeChallenge,
      resetChallenge: resetChallenge,
      completeChallenge: completeChallenge,
      levelUp: levelUp,
      closeLevelUpModal: closeLevelUpModal,
      SetDarkTheme: SetDarkTheme,
      accessToken: accessToken
    },
    children: [props.children, isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__["LevelUpModal"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 30
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 126,
    columnNumber: 5
  }, this);
}

_s(ChallengesProvider, "2ec51C4RZZDlGW4u7r6E2/YTX8w=");

_c = ChallengesProvider;

var _c;

$RefreshReg$(_c, "ChallengesProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHRzLnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJpc0xldmVsVXBNb2RhbE9wZW4iLCJzZXRJc0xldmVsVXBNb2RhbE9wZW4iLCJpc0RhcmsiLCJzZXRJc0RhcmsiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwiQ29va2llcyIsInNldCIsInRvU3RyaW5nIiwiU2V0RGFya1RoZW1lIiwiaXNTZXQiLCJsZXZlbFVwIiwiY2xvc2VMZXZlbFVwTW9kYWwiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJsZW5ndGgiLCJjaGFsbGVuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImZpbmFsRXhwZXJpZW5jZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWtDTyxJQUFN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QWxCO0FBQ0FGLDBCQUFzQixDQUFDRCxtQkFBbUIsR0FBRyxDQUF2QixDQUF0QjtBQUNEOztBQUVELHNCQUNFLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQ0UsU0FBSyxFQUFFO0FBQ0xTLFlBQU0sRUFBTkEsTUFESztBQUVMYixXQUFLLEVBQUxBLEtBRks7QUFHTFEsMkJBQXFCLEVBQXJCQSxxQkFISztBQUlMTix1QkFBaUIsRUFBakJBLGlCQUpLO0FBS0xFLHlCQUFtQixFQUFuQkEsbUJBTEs7QUFNTDhCLHVCQUFpQixFQUFqQkEsaUJBTks7QUFPTDVCLHFCQUFlLEVBQWZBLGVBUEs7QUFRTHVDLG9CQUFjLEVBQWRBLGNBUks7QUFTTEMsdUJBQWlCLEVBQWpCQSxpQkFUSztBQVVMZCxhQUFPLEVBQVBBLE9BVks7QUFXTEMsdUJBQWlCLEVBQWpCQSxpQkFYSztBQVlMSCxrQkFBWSxFQUFaQSxZQVpLO0FBYUxmLGlCQUFXLEVBQVhBO0FBYkssS0FEVDtBQUFBLGVBaUJHakIsS0FBSyxDQUFDa0QsUUFqQlQsRUFrQkdyQyxrQkFBa0IsaUJBQUkscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0dBM0dlZCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS40YTAwZGQ5YzVmMTZjNzdiNWJiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gXCIuLi8uLi9jaGFsbGVuZ2VzLmpzb25cIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBMZXZlbFVwTW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MZXZlbFVwTW9kYWxcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xyXG4gIHR5cGU6IFwiYm9keVwiIHwgXCJleWVcIjtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlQ29udGV4dERhdGEge1xyXG4gIGxldmVsOiBudW1iZXI7XHJcbiAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XHJcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XHJcbiAgaXNEYXJrOiBib29sZWFuO1xyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgY29tcGxldGVDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcclxuICBjbG9zZUxldmVsVXBNb2RhbDogKCkgPT4gdm9pZDtcclxuICBTZXREYXJrVGhlbWU6IChpc1NldCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gIGxldmVsOiBudW1iZXI7XHJcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgaXNEYXJrOiBib29sZWFuO1xyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcihwcm9wczogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpIHtcclxuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKHByb3BzLmxldmVsID8/IDEpO1xyXG4gIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUoXHJcbiAgICBwcm9wcy5jdXJyZW50RXhwZXJpZW5jZSA/PyAwXHJcbiAgKTtcclxuICBjb25zdCBbY2hhbGxlbmdlc0NvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZShcclxuICAgIHByb3BzLmNoYWxsZW5nZXNDb21wbGV0ZWQgPz8gMFxyXG4gICk7XHJcbiAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7XHJcbiAgY29uc3QgW2lzTGV2ZWxVcE1vZGFsT3Blbiwgc2V0SXNMZXZlbFVwTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNEYXJrLCBzZXRJc0RhcmtdID0gdXNlU3RhdGUocHJvcHMuaXNEYXJrID8/IGZhbHNlKTtcclxuICBjb25zdCBbYWNjZXNzVG9rZW4sIHNldEFjY2Vzc1Rva2VuXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChOb3RpZmljYXRpb24pIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gICAgaWYgKGlzRGFyaykgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keS1kdFwiKTtcclxuICAgIGVsc2UgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keS1kdFwiKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcy5hY2Nlc3NUb2tlbilcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWVzLnNldCgnaXNEYXJrJyxpc0RhcmsudG9TdHJpbmcoKSlcclxuICB9LCBbaXNEYXJrXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIENvb2tpZXMuc2V0KFwibGV2ZWxcIiwgbGV2ZWwudG9TdHJpbmcoKSk7XHJcbiAgICBDb29raWVzLnNldChcImN1cnJlbnRFeHBlcmllbmNlXCIsIGN1cnJlbnRFeHBlcmllbmNlLnRvU3RyaW5nKCkpO1xyXG4gICAgQ29va2llcy5zZXQoXCJjaGFsbGVuZ2VzQ29tcGxldGVkXCIsIGNoYWxsZW5nZXNDb21wbGV0ZWQudG9TdHJpbmcoKSk7XHJcbiAgfSwgW2xldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlc0NvbXBsZXRlZF0pO1xyXG5cclxuICBmdW5jdGlvbiBTZXREYXJrVGhlbWUoaXNTZXQpIHtcclxuICAgIGlmIChpc1NldCkgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keS1kdFwiKTtcclxuICAgIGVsc2UgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keS1kdFwiKTtcclxuXHJcbiAgICBDb29raWVzLnNldCgnaXNEYXJrJyxpc0RhcmsudG9TdHJpbmcoKSlcclxuICAgIHNldElzRGFyayhpc1NldCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxldmVsVXAoKSB7XHJcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKHRydWUpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjbG9zZUxldmVsVXBNb2RhbCgpIHtcclxuICAgIHNldElzTGV2ZWxVcE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xyXG4gICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdJbmRleF07XHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcclxuXHJcbiAgICBpZiAoQXVkaW8pIHtcclxuICAgICAgbmV3IEF1ZGlvKFwiL25vdGlmaWNhdGlvbi5tcDNcIikucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChOb3RpZmljYXRpb24pIHtcclxuICAgICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImdyYW50ZWRcIikge1xyXG4gICAgICAgIG5ldyBOb3RpZmljYXRpb24oXCJOb3ZvIGRlc2FmaW9cIiwge1xyXG4gICAgICAgICAgYm9keTogYFZhbGVuZG86ICR7Y2hhbGxlbmdlLmFtb3VudH14cCFgLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCkge1xyXG4gICAgaWYgKCFhY3RpdmVDaGFsbGVuZ2UpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xyXG5cclxuICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICBpZiAoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xyXG4gICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XHJcbiAgICAgIGxldmVsVXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZChjaGFsbGVuZ2VzQ29tcGxldGVkICsgMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgaXNEYXJrLFxyXG4gICAgICAgIGxldmVsLFxyXG4gICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcclxuICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxyXG4gICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxyXG4gICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICByZXNldENoYWxsZW5nZSxcclxuICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcclxuICAgICAgICBsZXZlbFVwLFxyXG4gICAgICAgIGNsb3NlTGV2ZWxVcE1vZGFsLFxyXG4gICAgICAgIFNldERhcmtUaGVtZSxcclxuICAgICAgICBhY2Nlc3NUb2tlblxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIHtpc0xldmVsVXBNb2RhbE9wZW4gJiYgPExldmVsVXBNb2RhbCAvPn1cclxuICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=