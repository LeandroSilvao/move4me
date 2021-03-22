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
    console.log(props.accessToken.length);

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
      lineNumber: 149,
      columnNumber: 30
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 131,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHRzLnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJpc0xldmVsVXBNb2RhbE9wZW4iLCJzZXRJc0xldmVsVXBNb2RhbE9wZW4iLCJpc0RhcmsiLCJzZXRJc0RhcmsiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiQ29va2llcyIsInNldCIsInRvU3RyaW5nIiwiU2V0RGFya1RoZW1lIiwiaXNTZXQiLCJsZXZlbFVwIiwiY2xvc2VMZXZlbFVwTW9kYWwiLCJzdGFydE5ld0NoYWxsZW5nZSIsInJhbmRvbUNoYWxsZW5nSW5kZXgiLCJmbG9vciIsInJhbmRvbSIsImNoYWxsZW5nZXMiLCJjaGFsbGVuZ2UiLCJBdWRpbyIsInBsYXkiLCJwZXJtaXNzaW9uIiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImZpbmFsRXhwZXJpZW5jZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFrQ08sSUFB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QUFHQSxlQUFlLEdBQUd2QyxxQkFBcEM7QUFDQXlCLGFBQU87QUFDUjs7QUFFRDlCLHdCQUFvQixDQUFDNEMsZUFBRCxDQUFwQjtBQUNBeEMsc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBRiwwQkFBc0IsQ0FBQ0QsbUJBQW1CLEdBQUcsQ0FBdkIsQ0FBdEI7QUFDRDs7QUFFRCxzQkFDRSxxRUFBQyxpQkFBRCxDQUFtQixRQUFuQjtBQUNFLFNBQUssRUFBRTtBQUNMUyxZQUFNLEVBQU5BLE1BREs7QUFFTGIsV0FBSyxFQUFMQSxLQUZLO0FBR0xRLDJCQUFxQixFQUFyQkEscUJBSEs7QUFJTE4sdUJBQWlCLEVBQWpCQSxpQkFKSztBQUtMRSx5QkFBbUIsRUFBbkJBLG1CQUxLO0FBTUwrQix1QkFBaUIsRUFBakJBLGlCQU5LO0FBT0w3QixxQkFBZSxFQUFmQSxlQVBLO0FBUUx1QyxvQkFBYyxFQUFkQSxjQVJLO0FBU0xDLHVCQUFpQixFQUFqQkEsaUJBVEs7QUFVTGIsYUFBTyxFQUFQQSxPQVZLO0FBV0xDLHVCQUFpQixFQUFqQkEsaUJBWEs7QUFZTEgsa0JBQVksRUFBWkEsWUFaSztBQWFMaEIsaUJBQVcsRUFBWEE7QUFiSyxLQURUO0FBQUEsZUFpQkdqQixLQUFLLENBQUNrRCxRQWpCVCxFQWtCR3JDLGtCQUFrQixpQkFBSSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRDs7R0FoSGVkLGtCOztLQUFBQSxrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLmQ2Nzc0ZTgyNmI4ODc2OTk1YjQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSBcIi4uLy4uL2NoYWxsZW5nZXMuanNvblwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IExldmVsVXBNb2RhbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xldmVsVXBNb2RhbFwiO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XHJcbiAgdHlwZTogXCJib2R5XCIgfCBcImV5ZVwiO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VDb250ZXh0RGF0YSB7XHJcbiAgbGV2ZWw6IG51bWJlcjtcclxuICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcclxuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcclxuICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcclxuICBpc0Rhcms6IGJvb2xlYW47XHJcbiAgYWNjZXNzVG9rZW46IHN0cmluZztcclxuICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICBjb21wbGV0ZUNoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xyXG4gIGNsb3NlTGV2ZWxVcE1vZGFsOiAoKSA9PiB2b2lkO1xyXG4gIFNldERhcmtUaGVtZTogKGlzU2V0KSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgbGV2ZWw6IG51bWJlcjtcclxuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcclxuICBpc0Rhcms6IGJvb2xlYW47XHJcbiAgYWNjZXNzVG9rZW46IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHByb3BzOiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcykge1xyXG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUocHJvcHMubGV2ZWwgPz8gMSk7XHJcbiAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZShcclxuICAgIHByb3BzLmN1cnJlbnRFeHBlcmllbmNlID8/IDBcclxuICApO1xyXG4gIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKFxyXG4gICAgcHJvcHMuY2hhbGxlbmdlc0NvbXBsZXRlZCA/PyAwXHJcbiAgKTtcclxuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcclxuICBjb25zdCBbaXNMZXZlbFVwTW9kYWxPcGVuLCBzZXRJc0xldmVsVXBNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0RhcmssIHNldElzRGFya10gPSB1c2VTdGF0ZShwcm9wcy5pc0RhcmsgPz8gZmFsc2UpO1xyXG4gIGNvbnN0IFthY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW5dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKE5vdGlmaWNhdGlvbikgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgICBpZiAoaXNEYXJrKSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJib2R5LWR0XCIpO1xyXG4gICAgZWxzZSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5LWR0XCIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHByb3BzLmFjY2Vzc1Rva2VuLmxlbmd0aClcclxuICAgIGlmKHByb3BzLmFjY2Vzc1Rva2VuLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+PC8+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llcy5zZXQoJ2lzRGFyaycsaXNEYXJrLnRvU3RyaW5nKCkpXHJcbiAgfSwgW2lzRGFya10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWVzLnNldChcImxldmVsXCIsIGxldmVsLnRvU3RyaW5nKCkpO1xyXG4gICAgQ29va2llcy5zZXQoXCJjdXJyZW50RXhwZXJpZW5jZVwiLCBjdXJyZW50RXhwZXJpZW5jZS50b1N0cmluZygpKTtcclxuICAgIENvb2tpZXMuc2V0KFwiY2hhbGxlbmdlc0NvbXBsZXRlZFwiLCBjaGFsbGVuZ2VzQ29tcGxldGVkLnRvU3RyaW5nKCkpO1xyXG4gIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWRdKTtcclxuXHJcbiAgZnVuY3Rpb24gU2V0RGFya1RoZW1lKGlzU2V0KSB7XHJcbiAgICBpZiAoaXNTZXQpIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImJvZHktZHRcIik7XHJcbiAgICBlbHNlIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImJvZHktZHRcIik7XHJcblxyXG4gICAgQ29va2llcy5zZXQoJ2lzRGFyaycsaXNEYXJrLnRvU3RyaW5nKCkpXHJcbiAgICBzZXRJc0RhcmsoaXNTZXQpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBsZXZlbFVwKCkge1xyXG4gICAgc2V0TGV2ZWwobGV2ZWwgKyAxKTtcclxuICAgIHNldElzTGV2ZWxVcE1vZGFsT3Blbih0cnVlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY2xvc2VMZXZlbFVwTW9kYWwoKSB7XHJcbiAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH1cclxuICBmdW5jdGlvbiBzdGFydE5ld0NoYWxsZW5nZSgpIHtcclxuICAgIGNvbnN0IHJhbmRvbUNoYWxsZW5nSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XHJcbiAgICBjb25zdCBjaGFsbGVuZ2UgPSBjaGFsbGVuZ2VzW3JhbmRvbUNoYWxsZW5nSW5kZXhdO1xyXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKGNoYWxsZW5nZSk7XHJcblxyXG4gICAgaWYgKEF1ZGlvKSB7XHJcbiAgICAgIG5ldyBBdWRpbyhcIi9ub3RpZmljYXRpb24ubXAzXCIpLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoTm90aWZpY2F0aW9uKSB7XHJcbiAgICAgIGlmIChOb3RpZmljYXRpb24ucGVybWlzc2lvbiA9PT0gXCJncmFudGVkXCIpIHtcclxuICAgICAgICBuZXcgTm90aWZpY2F0aW9uKFwiTm92byBkZXNhZmlvXCIsIHtcclxuICAgICAgICAgIGJvZHk6IGBWYWxlbmRvOiAke2NoYWxsZW5nZS5hbW91bnR9eHAhYCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjb21wbGV0ZUNoYWxsZW5nZSgpIHtcclxuICAgIGlmICghYWN0aXZlQ2hhbGxlbmdlKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgeyBhbW91bnQgfSA9IGFjdGl2ZUNoYWxsZW5nZTtcclxuXHJcbiAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XHJcblxyXG4gICAgaWYgKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpIHtcclxuICAgICAgZmluYWxFeHBlcmllbmNlID0gZmluYWxFeHBlcmllbmNlIC0gZXhwZXJpZW5jZVRvTmV4dExldmVsO1xyXG4gICAgICBsZXZlbFVwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudEV4cGVyaWVuY2UoZmluYWxFeHBlcmllbmNlKTtcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShudWxsKTtcclxuICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWQoY2hhbGxlbmdlc0NvbXBsZXRlZCArIDEpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGlzRGFyayxcclxuICAgICAgICBsZXZlbCxcclxuICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXHJcbiAgICAgICAgY3VycmVudEV4cGVyaWVuY2UsXHJcbiAgICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZCxcclxuICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcclxuICAgICAgICBhY3RpdmVDaGFsbGVuZ2UsXHJcbiAgICAgICAgcmVzZXRDaGFsbGVuZ2UsXHJcbiAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXHJcbiAgICAgICAgbGV2ZWxVcCxcclxuICAgICAgICBjbG9zZUxldmVsVXBNb2RhbCxcclxuICAgICAgICBTZXREYXJrVGhlbWUsXHJcbiAgICAgICAgYWNjZXNzVG9rZW5cclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICB7aXNMZXZlbFVwTW9kYWxPcGVuICYmIDxMZXZlbFVwTW9kYWwgLz59XHJcbiAgICA8L0NoYWxsZW5nZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9