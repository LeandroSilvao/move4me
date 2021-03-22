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

  var _props$level,
      _props$currentExperie,
      _props$challengesComp,
      _props$isDark,
      _this = this;

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

    if (props.accessToken.length === 0) {
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
        children: isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__["LevelUpModal"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 34
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this);
    }
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
      lineNumber: 166,
      columnNumber: 30
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 148,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHRzLnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJpc0xldmVsVXBNb2RhbE9wZW4iLCJzZXRJc0xldmVsVXBNb2RhbE9wZW4iLCJpc0RhcmsiLCJzZXRJc0RhcmsiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJsZW5ndGgiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJlc2V0Q2hhbGxlbmdlIiwiY29tcGxldGVDaGFsbGVuZ2UiLCJsZXZlbFVwIiwiY2xvc2VMZXZlbFVwTW9kYWwiLCJTZXREYXJrVGhlbWUiLCJDb29raWVzIiwic2V0IiwidG9TdHJpbmciLCJpc1NldCIsInJhbmRvbUNoYWxsZW5nSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJjaGFsbGVuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYW1vdW50IiwiZmluYWxFeHBlcmllbmNlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBa0NPLElBQU1BLGlCQUFpQixnQkFBR0Ms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LGlCQUFXLEVBQVhBO0FBYkssS0FEVDtBQUFBLGVBaUJHakIsS0FBSyxDQUFDZ0QsUUFqQlQsRUFrQkduQyxrQkFBa0IsaUJBQUkscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzQkQ7O0dBakllZCxrQjs7S0FBQUEsa0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS4xNjg5ZTljNmMwZjA4Y2IzMGI1Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gXCIuLi8uLi9jaGFsbGVuZ2VzLmpzb25cIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBMZXZlbFVwTW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MZXZlbFVwTW9kYWxcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xyXG4gIHR5cGU6IFwiYm9keVwiIHwgXCJleWVcIjtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlQ29udGV4dERhdGEge1xyXG4gIGxldmVsOiBudW1iZXI7XHJcbiAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XHJcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XHJcbiAgaXNEYXJrOiBib29sZWFuO1xyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgY29tcGxldGVDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcclxuICBjbG9zZUxldmVsVXBNb2RhbDogKCkgPT4gdm9pZDtcclxuICBTZXREYXJrVGhlbWU6IChpc1NldCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gIGxldmVsOiBudW1iZXI7XHJcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgaXNEYXJrOiBib29sZWFuO1xyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcihwcm9wczogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpIHtcclxuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKHByb3BzLmxldmVsID8/IDEpO1xyXG4gIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUoXHJcbiAgICBwcm9wcy5jdXJyZW50RXhwZXJpZW5jZSA/PyAwXHJcbiAgKTtcclxuICBjb25zdCBbY2hhbGxlbmdlc0NvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZShcclxuICAgIHByb3BzLmNoYWxsZW5nZXNDb21wbGV0ZWQgPz8gMFxyXG4gICk7XHJcbiAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7XHJcbiAgY29uc3QgW2lzTGV2ZWxVcE1vZGFsT3Blbiwgc2V0SXNMZXZlbFVwTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNEYXJrLCBzZXRJc0RhcmtdID0gdXNlU3RhdGUocHJvcHMuaXNEYXJrID8/IGZhbHNlKTtcclxuICBjb25zdCBbYWNjZXNzVG9rZW4sIHNldEFjY2Vzc1Rva2VuXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChOb3RpZmljYXRpb24pIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gICAgaWYgKGlzRGFyaykgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keS1kdFwiKTtcclxuICAgIGVsc2UgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keS1kdFwiKTtcclxuXHJcbiAgICBpZihwcm9wcy5hY2Nlc3NUb2tlbi5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIGlzRGFyayxcclxuICAgICAgICAgICAgbGV2ZWwsXHJcbiAgICAgICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcclxuICAgICAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsXHJcbiAgICAgICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXHJcbiAgICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXHJcbiAgICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcclxuICAgICAgICAgICAgbGV2ZWxVcCxcclxuICAgICAgICAgICAgY2xvc2VMZXZlbFVwTW9kYWwsXHJcbiAgICAgICAgICAgIFNldERhcmtUaGVtZSxcclxuICAgICAgICAgICAgYWNjZXNzVG9rZW5cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2lzTGV2ZWxVcE1vZGFsT3BlbiAmJiA8TGV2ZWxVcE1vZGFsIC8+fVxyXG4gICAgICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llcy5zZXQoJ2lzRGFyaycsaXNEYXJrLnRvU3RyaW5nKCkpXHJcbiAgfSwgW2lzRGFya10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWVzLnNldChcImxldmVsXCIsIGxldmVsLnRvU3RyaW5nKCkpO1xyXG4gICAgQ29va2llcy5zZXQoXCJjdXJyZW50RXhwZXJpZW5jZVwiLCBjdXJyZW50RXhwZXJpZW5jZS50b1N0cmluZygpKTtcclxuICAgIENvb2tpZXMuc2V0KFwiY2hhbGxlbmdlc0NvbXBsZXRlZFwiLCBjaGFsbGVuZ2VzQ29tcGxldGVkLnRvU3RyaW5nKCkpO1xyXG4gIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWRdKTtcclxuXHJcbiAgZnVuY3Rpb24gU2V0RGFya1RoZW1lKGlzU2V0KSB7XHJcbiAgICBpZiAoaXNTZXQpIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImJvZHktZHRcIik7XHJcbiAgICBlbHNlIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImJvZHktZHRcIik7XHJcblxyXG4gICAgQ29va2llcy5zZXQoJ2lzRGFyaycsaXNEYXJrLnRvU3RyaW5nKCkpXHJcbiAgICBzZXRJc0RhcmsoaXNTZXQpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBsZXZlbFVwKCkge1xyXG4gICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcclxuICAgIHNldElzTGV2ZWxVcE1vZGFsT3Blbih0cnVlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY2xvc2VMZXZlbFVwTW9kYWwoKSB7XHJcbiAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcclxuICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XHJcbiAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nSW5kZXhdO1xyXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XHJcblxyXG4gICAgaWYgKEF1ZGlvKSB7XHJcbiAgICAgIG5ldyBBdWRpbyhcIi9ub3RpZmljYXRpb24ubXAzXCIpLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoTm90aWZpY2F0aW9uKSB7XHJcbiAgICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gXCJncmFudGVkXCIpIHtcclxuICAgICAgICBuZXcgTm90aWZpY2F0aW9uKFwiTm92byBkZXNhZmlvXCIsIHtcclxuICAgICAgICAgIGJvZHk6IGBWYWxlbmRvOiAke2NoYWxsZW5nZS5hbW91bnR9eHAhYCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpIHtcclxuICAgIGlmICghYWN0aXZlQ2hhbGxlbmdlKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcclxuXHJcbiAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XHJcblxyXG4gICAgaWYgKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpIHtcclxuICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xyXG4gICAgICBsZXZlbFVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWQoY2hhbGxlbmdlc0NvbXBsZXRlZCArIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGlzRGFyayxcclxuICAgICAgICBsZXZlbCxcclxuICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXHJcbiAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsXHJcbiAgICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZCxcclxuICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcclxuICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXHJcbiAgICAgICAgcmVzZXRDaGFsbGVuZ2UsXHJcbiAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXHJcbiAgICAgICAgbGV2ZWxVcCxcclxuICAgICAgICBjbG9zZUxldmVsVXBNb2RhbCxcclxuICAgICAgICBTZXREYXJrVGhlbWUsXHJcbiAgICAgICAgYWNjZXNzVG9rZW5cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICB7aXNMZXZlbFVwTW9kYWxPcGVuICYmIDxMZXZlbFVwTW9kYWwgLz59XHJcbiAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9