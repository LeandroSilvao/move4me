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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      accessToken = _useState7[0],
      setAccessToken = _useState7[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (Notification) Notification.requestPermission();
    if (isDark) document.body.classList.add("body-dt");else document.body.classList.remove("body-dt");
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("isDark", isDark.toString());
  }, [isDark]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("level", level.toString());
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("currentExperience", currentExperience.toString());
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("challengesCompleted", challengesCompleted.toString());
  }, [level, currentExperience, challengesCompleted]);

  function SetDarkTheme(isSet) {
    if (isSet) document.body.classList.add("body-dt");else document.body.classList.remove("body-dt");
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("isDark", isDark.toString());
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
        lineNumber: 136,
        columnNumber: 32
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, this);
  } else {
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
        lineNumber: 159,
        columnNumber: 32
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, this);
  }
}

_s(ChallengesProvider, "6LBrcvluu/Kk71J3+WEicMUJvko=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHRzLnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJpc0xldmVsVXBNb2RhbE9wZW4iLCJzZXRJc0xldmVsVXBNb2RhbE9wZW4iLCJpc0RhcmsiLCJzZXRJc0RhcmsiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJDb29raWVzIiwic2V0IiwidG9TdHJpbmciLCJTZXREYXJrVGhlbWUiLCJpc1NldCIsImxldmVsVXAiLCJjbG9zZUxldmVsVXBNb2RhbCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJhbW91bnQiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBa0NPLElBQU1BLGlCQUFpQixnQkFBR0Ms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QUFBQSxpQkFpQkdqQixLQUFLLENBQUNnRCxRQWpCVCxFQWtCR25DLGtCQUFrQixpQkFBSSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbEJ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQXNCRDtBQUNGOztHQTNIZWQsa0I7O0tBQUFBLGtCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuZGE0ZGMzMDYwNTAxNDE1MjJiY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2hhbGxlbmdlcyBmcm9tIFwiLi4vLi4vY2hhbGxlbmdlcy5qc29uXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgTGV2ZWxVcE1vZGFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsXCI7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlIHtcclxuICB0eXBlOiBcImJvZHlcIiB8IFwiZXllXCI7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBhbW91bnQ6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZUNvbnRleHREYXRhIHtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGV4cGVyaWVuY2VUb05leHRMZXZlbDogbnVtYmVyO1xyXG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG4gIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlO1xyXG4gIGlzRGFyazogYm9vbGVhbjtcclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG4gIHN0YXJ0TmV3Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xyXG4gIGxldmVsVXA6ICgpID0+IHZvaWQ7XHJcbiAgY2xvc2VMZXZlbFVwTW9kYWw6ICgpID0+IHZvaWQ7XHJcbiAgU2V0RGFya1RoZW1lOiAoaXNTZXQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxuICBsZXZlbDogbnVtYmVyO1xyXG4gIGN1cnJlbnRFeHBlcmllbmNlOiBudW1iZXI7XHJcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xyXG4gIGlzRGFyazogYm9vbGVhbjtcclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZUNvbnRleHREYXRhKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIocHJvcHM6IENoYWxsZW5nZXNQcm92aWRlclByb3BzKSB7XHJcbiAgY29uc3QgW2xldmVsLCBzZXRMZXZlbF0gPSB1c2VTdGF0ZShwcm9wcy5sZXZlbCA/PyAxKTtcclxuICBjb25zdCBbY3VycmVudEV4cGVyaWVuY2UsIHNldEN1cnJlbnRFeHBlcmllbmNlXSA9IHVzZVN0YXRlKFxyXG4gICAgcHJvcHMuY3VycmVudEV4cGVyaWVuY2UgPz8gMFxyXG4gICk7XHJcbiAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUoXHJcbiAgICBwcm9wcy5jaGFsbGVuZ2VzQ29tcGxldGVkID8/IDBcclxuICApO1xyXG4gIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldEFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBleHBlcmllbmNlVG9OZXh0TGV2ZWwgPSBNYXRoLnBvdygobGV2ZWwgKyAxKSAqIDQsIDIpO1xyXG4gIGNvbnN0IFtpc0xldmVsVXBNb2RhbE9wZW4sIHNldElzTGV2ZWxVcE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzRGFyaywgc2V0SXNEYXJrXSA9IHVzZVN0YXRlKHByb3BzLmlzRGFyayA/PyBmYWxzZSk7XHJcbiAgY29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChOb3RpZmljYXRpb24pIE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpO1xyXG4gICAgaWYgKGlzRGFyaykgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keS1kdFwiKTtcclxuICAgIGVsc2UgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiYm9keS1kdFwiKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWVzLnNldChcImlzRGFya1wiLCBpc0RhcmsudG9TdHJpbmcoKSk7XHJcbiAgfSwgW2lzRGFya10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llcy5zZXQoXCJsZXZlbFwiLCBsZXZlbC50b1N0cmluZygpKTtcclxuICAgIENvb2tpZXMuc2V0KFwiY3VycmVudEV4cGVyaWVuY2VcIiwgY3VycmVudEV4cGVyaWVuY2UudG9TdHJpbmcoKSk7XHJcbiAgICBDb29raWVzLnNldChcImNoYWxsZW5nZXNDb21wbGV0ZWRcIiwgY2hhbGxlbmdlc0NvbXBsZXRlZC50b1N0cmluZygpKTtcclxuICB9LCBbbGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLCBjaGFsbGVuZ2VzQ29tcGxldGVkXSk7XHJcblxyXG4gIGZ1bmN0aW9uIFNldERhcmtUaGVtZShpc1NldCkge1xyXG4gICAgaWYgKGlzU2V0KSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJib2R5LWR0XCIpO1xyXG4gICAgZWxzZSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5LWR0XCIpO1xyXG5cclxuICAgIENvb2tpZXMuc2V0KFwiaXNEYXJrXCIsIGlzRGFyay50b1N0cmluZygpKTtcclxuICAgIHNldElzRGFyayhpc1NldCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGxldmVsVXAoKSB7XHJcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xyXG4gICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKHRydWUpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjbG9zZUxldmVsVXBNb2RhbCgpIHtcclxuICAgIHNldElzTGV2ZWxVcE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCkge1xyXG4gICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYWxsZW5nZXMubGVuZ3RoKTtcclxuICAgIGNvbnN0IGNoYWxsZW5nZSA9IGNoYWxsZW5nZXNbcmFuZG9tQ2hhbGxlbmdJbmRleF07XHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcclxuXHJcbiAgICBpZiAoQXVkaW8pIHtcclxuICAgICAgbmV3IEF1ZGlvKFwiL25vdGlmaWNhdGlvbi5tcDNcIikucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChOb3RpZmljYXRpb24pIHtcclxuICAgICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSBcImdyYW50ZWRcIikge1xyXG4gICAgICAgIG5ldyBOb3RpZmljYXRpb24oXCJOb3ZvIGRlc2FmaW9cIiwge1xyXG4gICAgICAgICAgYm9keTogYFZhbGVuZG86ICR7Y2hhbGxlbmdlLmFtb3VudH14cCFgLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlKCkge1xyXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpIHtcclxuICAgIGlmICghYWN0aXZlQ2hhbGxlbmdlKSByZXR1cm47XHJcbiAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xyXG4gICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xyXG4gICAgaWYgKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpIHtcclxuICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xyXG4gICAgICBsZXZlbFVwKCk7XHJcbiAgICB9XHJcbiAgICBzZXRDdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xyXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gICAgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZChjaGFsbGVuZ2VzQ29tcGxldGVkICsgMSk7XHJcbiAgfVxyXG5cclxuICBpZiAocHJvcHMuYWNjZXNzVG9rZW4ubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgaXNEYXJrLFxyXG4gICAgICAgICAgbGV2ZWwsXHJcbiAgICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXHJcbiAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXHJcbiAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcclxuICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXHJcbiAgICAgICAgICBsZXZlbFVwLFxyXG4gICAgICAgICAgY2xvc2VMZXZlbFVwTW9kYWwsXHJcbiAgICAgICAgICBTZXREYXJrVGhlbWUsXHJcbiAgICAgICAgICBhY2Nlc3NUb2tlbixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2lzTGV2ZWxVcE1vZGFsT3BlbiAmJiA8TGV2ZWxVcE1vZGFsIC8+fVxyXG4gICAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgIGlzRGFyayxcclxuICAgICAgICAgIGxldmVsLFxyXG4gICAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsXHJcbiAgICAgICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxyXG4gICAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXHJcbiAgICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXHJcbiAgICAgICAgICByZXNldENoYWxsZW5nZSxcclxuICAgICAgICAgIGNvbXBsZXRlQ2hhbGxlbmdlLFxyXG4gICAgICAgICAgbGV2ZWxVcCxcclxuICAgICAgICAgIGNsb3NlTGV2ZWxVcE1vZGFsLFxyXG4gICAgICAgICAgU2V0RGFya1RoZW1lLFxyXG4gICAgICAgICAgYWNjZXNzVG9rZW4sXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICB7aXNMZXZlbFVwTW9kYWxPcGVuICYmIDxMZXZlbFVwTW9kYWwgLz59XHJcbiAgICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9