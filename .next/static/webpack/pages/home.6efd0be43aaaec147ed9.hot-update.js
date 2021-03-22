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

    if (props.accessToken.length === 0) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {}, void 0, false);
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
      lineNumber: 148,
      columnNumber: 30
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 130,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHRzLnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJpc0xldmVsVXBNb2RhbE9wZW4iLCJzZXRJc0xldmVsVXBNb2RhbE9wZW4iLCJpc0RhcmsiLCJzZXRJc0RhcmsiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJsZW5ndGgiLCJDb29raWVzIiwic2V0IiwidG9TdHJpbmciLCJTZXREYXJrVGhlbWUiLCJpc1NldCIsImxldmVsVXAiLCJjbG9zZUxldmVsVXBNb2RhbCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJhbW91bnQiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWtDTyxJQUFNQSxpQkFBaUIsZ0JBQUdD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c0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBRiwwQkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUNFLFNBQUssRUFBRTtBQUNMUyxZQUFNLEVBQU5BLE1BREs7QUFFTGIsV0FBSyxFQUFMQSxLQUZLO0FBR0xRLDJCQUFxQixFQUFyQkEscUJBSEs7QUFJTE4sdUJBQWlCLEVBQWpCQSxpQkFKSztBQUtMRSx5QkFBbUIsRUFBbkJBLG1CQUxLO0FBTUw2Qix1QkFBaUIsRUFBakJBLGlCQU5LO0FBT0wzQixxQkFBZSxFQUFmQSxlQVBLO0FBUUxxQyxvQkFBYyxFQUFkQSxjQVJLO0FBU0xDLHVCQUFpQixFQUFqQkEsaUJBVEs7QUFVTGIsYUFBTyxFQUFQQSxPQVZLO0FBV0xDLHVCQUFpQixFQUFqQkEsaUJBWEs7QUFZTEgsa0JBQVksRUFBWkEsWUFaSztBQWFMZCxpQkFBVyxFQUFYQTtBQWJLLEtBRFQ7QUFBQSxlQWlCR2pCLEtBQUssQ0FBQ2dELFFBakJULEVBa0JHbkMsa0JBQWtCLGlCQUFJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0JEOztHQS9HZWQsa0I7O0tBQUFBLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuNmVmZDBiZTQzYWFhZWMxNDdlZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tIFwiLi4vLi4vY2hhbGxlbmdlcy5qc29uXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgTGV2ZWxVcE1vZGFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsXCI7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcclxuICB0eXBlOiBcImJvZHlcIiB8IFwiZXllXCI7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZUNvbnRleHREYXRhIHtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG4gIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlO1xyXG4gIGlzRGFyazogYm9vbGVhbjtcclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgY2xvc2VMZXZlbFVwTW9kYWw6ICgpID0+IHZvaWQ7XHJcbiAgU2V0RGFya1RoZW1lOiAoaXNTZXQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG4gIGlzRGFyazogYm9vbGVhbjtcclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZUNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIocHJvcHM6IENoYWxsZW5nZXNQcm92aWRlclByb3BzKSB7XHJcbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZShwcm9wcy5sZXZlbCA/PyAxKTtcclxuICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKFxyXG4gICAgcHJvcHMuY3VycmVudEV4cGVyaWVuY2UgPz8gMFxyXG4gICk7XHJcbiAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUoXHJcbiAgICBwcm9wcy5jaGFsbGVuZ2VzQ29tcGxldGVkID8/IDBcclxuICApO1xyXG4gIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpO1xyXG4gIGNvbnN0IFtpc0xldmVsVXBNb2RhbE9wZW4sIHNldElzTGV2ZWxVcE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRGFyaywgc2V0SXNEYXJrXSA9IHVzZVN0YXRlKHByb3BzLmlzRGFyayA/PyBmYWxzZSk7XHJcbiAgY29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoTm90aWZpY2F0aW9uKSBOb3RpZmljYXRpb24ucmVxdWVzdFBlcm1pc3Npb24oKTtcclxuICAgIGlmIChpc0RhcmspIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImJvZHktZHRcIik7XHJcbiAgICBlbHNlIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImJvZHktZHRcIik7XHJcblxyXG4gICAgaWYocHJvcHMuYWNjZXNzVG9rZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPD48Lz5cclxuICAgICAgKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWVzLnNldCgnaXNEYXJrJyxpc0RhcmsudG9TdHJpbmcoKSlcclxuICB9LCBbaXNEYXJrXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIENvb2tpZXMuc2V0KFwibGV2ZWxcIiwgbGV2ZWwudG9TdHJpbmcoKSk7XHJcbiAgICBDb29raWVzLnNldChcImN1cnJlbnRFeHBlcmllbmNlXCIsIGN1cnJlbnRFeHBlcmllbmNlLnRvU3RyaW5nKCkpO1xyXG4gICAgQ29va2llcy5zZXQoXCJjaGFsbGVuZ2VzQ29tcGxldGVkXCIsIGNoYWxsZW5nZXNDb21wbGV0ZWQudG9TdHJpbmcoKSk7XHJcbiAgfSwgW2xldmVsLCBjdXJyZW50RXhwZXJpZW5jZSwgY2hhbGxlbmdlc0NvbXBsZXRlZF0pO1xyXG5cclxuICBmdW5jdGlvbiBTZXREYXJrVGhlbWUoaXNTZXQpIHtcclxuICAgIGlmIChpc1NldCkgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keS1kdFwiKTtcclxuICAgIGVsc2UgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keS1kdFwiKTtcclxuXHJcbiAgICBDb29raWVzLnNldCgnaXNEYXJrJyxpc0RhcmsudG9TdHJpbmcoKSlcclxuICAgIHNldElzRGFyayhpc1NldCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxldmVsVXAoKSB7XHJcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKHRydWUpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjbG9zZUxldmVsVXBNb2RhbCgpIHtcclxuICAgIHNldElzTGV2ZWxVcE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xyXG4gICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdJbmRleF07XHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcclxuXHJcbiAgICBpZiAoQXVkaW8pIHtcclxuICAgICAgbmV3IEF1ZGlvKFwiL25vdGlmaWNhdGlvbi5tcDNcIikucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChOb3RpZmljYXRpb24pIHtcclxuICAgICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImdyYW50ZWRcIikge1xyXG4gICAgICAgIG5ldyBOb3RpZmljYXRpb24oXCJOb3ZvIGRlc2FmaW9cIiwge1xyXG4gICAgICAgICAgYm9keTogYFZhbGVuZG86ICR7Y2hhbGxlbmdlLmFtb3VudH14cCFgLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiByZXNldENoYWxsZW5nZSgpIHtcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCkge1xyXG4gICAgaWYgKCFhY3RpdmVDaGFsbGVuZ2UpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xyXG5cclxuICAgIGxldCBmaW5hbEV4cGVyaWVuY2UgPSBjdXJyZW50RXhwZXJpZW5jZSArIGFtb3VudDtcclxuXHJcbiAgICBpZiAoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xyXG4gICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XHJcbiAgICAgIGxldmVsVXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZChjaGFsbGVuZ2VzQ29tcGxldGVkICsgMSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgaXNEYXJrLFxyXG4gICAgICAgIGxldmVsLFxyXG4gICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcclxuICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxyXG4gICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxyXG4gICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICByZXNldENoYWxsZW5nZSxcclxuICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcclxuICAgICAgICBsZXZlbFVwLFxyXG4gICAgICAgIGNsb3NlTGV2ZWxVcE1vZGFsLFxyXG4gICAgICAgIFNldERhcmtUaGVtZSxcclxuICAgICAgICBhY2Nlc3NUb2tlblxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIHtpc0xldmVsVXBNb2RhbE9wZW4gJiYgPExldmVsVXBNb2RhbCAvPn1cclxuICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=