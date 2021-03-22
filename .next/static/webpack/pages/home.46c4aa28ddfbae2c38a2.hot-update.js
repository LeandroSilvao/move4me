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
      lineNumber: 141,
      columnNumber: 30
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 123,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHRzLnRzeCJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJwcm9wcyIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Q3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Q2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldEFjdGl2ZUNoYWxsZW5nZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJpc0xldmVsVXBNb2RhbE9wZW4iLCJzZXRJc0xldmVsVXBNb2RhbE9wZW4iLCJpc0RhcmsiLCJzZXRJc0RhcmsiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJDb29raWVzIiwic2V0IiwidG9TdHJpbmciLCJTZXREYXJrVGhlbWUiLCJpc1NldCIsImxldmVsVXAiLCJjbG9zZUxldmVsVXBNb2RhbCIsInN0YXJ0TmV3Q2hhbGxlbmdlIiwicmFuZG9tQ2hhbGxlbmdJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJhbW91bnQiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiZmluYWxFeHBlcmllbmNlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBaUNPLElBQU1BLGlCQUFpQixnQkFBR0Ms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QUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFDRSxTQUFLLEVBQUU7QUFDTFMsWUFBTSxFQUFOQSxNQURLO0FBRUxiLFdBQUssRUFBTEEsS0FGSztBQUdMUSwyQkFBcUIsRUFBckJBLHFCQUhLO0FBSUxOLHVCQUFpQixFQUFqQkEsaUJBSks7QUFLTEUseUJBQW1CLEVBQW5CQSxtQkFMSztBQU1MNEIsdUJBQWlCLEVBQWpCQSxpQkFOSztBQU9MMUIscUJBQWUsRUFBZkEsZUFQSztBQVFMcUMsb0JBQWMsRUFBZEEsY0FSSztBQVNMQyx1QkFBaUIsRUFBakJBLGlCQVRLO0FBVUxkLGFBQU8sRUFBUEEsT0FWSztBQVdMQyx1QkFBaUIsRUFBakJBLGlCQVhLO0FBWUxILGtCQUFZLEVBQVpBLFlBWks7QUFhTGIsaUJBQVcsRUFBWEE7QUFiSyxLQURUO0FBQUEsZUFpQkdqQixLQUFLLENBQUNnRCxRQWpCVCxFQWtCR25DLGtCQUFrQixpQkFBSSxxRUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJ6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRDs7R0F6R2VkLGtCOztLQUFBQSxrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLjQ2YzRhYTI4ZGRmYmFlMmMzOGEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSBcIi4uLy4uL2NoYWxsZW5nZXMuanNvblwiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IExldmVsVXBNb2RhbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xldmVsVXBNb2RhbFwiO1xyXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZSB7XHJcbiAgdHlwZTogXCJib2R5XCIgfCBcImV5ZVwiO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgYW1vdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2VDb250ZXh0RGF0YSB7XHJcbiAgbGV2ZWw6IG51bWJlcjtcclxuICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcclxuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcclxuICBhY3RpdmVDaGFsbGVuZ2U6IENoYWxsZW5nZTtcclxuICBpc0Rhcms6IGJvb2xlYW47XHJcbiAgYWNjZXNzVG9rZW46IHN0cmluZztcclxuICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICByZXNldENoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICBjb21wbGV0ZUNoYWxsZW5nZTogKCkgPT4gdm9pZDtcclxuICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xyXG4gIGNsb3NlTGV2ZWxVcE1vZGFsOiAoKSA9PiB2b2lkO1xyXG4gIFNldERhcmtUaGVtZTogKGlzU2V0KSA9PiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbiAgbGV2ZWw6IG51bWJlcjtcclxuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xyXG4gIGNoYWxsZW5nZXNDb21wbGV0ZWQ6IG51bWJlcjtcclxuICBpc0Rhcms6IGJvb2xlYW5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VDb250ZXh0RGF0YSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHByb3BzOiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcykge1xyXG4gIGNvbnN0IFtsZXZlbCwgc2V0TGV2ZWxdID0gdXNlU3RhdGUocHJvcHMubGV2ZWwgPz8gMSk7XHJcbiAgY29uc3QgW2N1cnJlbnRFeHBlcmllbmNlLCBzZXRDdXJyZW50RXhwZXJpZW5jZV0gPSB1c2VTdGF0ZShcclxuICAgIHByb3BzLmN1cnJlbnRFeHBlcmllbmNlID8/IDBcclxuICApO1xyXG4gIGNvbnN0IFtjaGFsbGVuZ2VzQ29tcGxldGVkLCBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkXSA9IHVzZVN0YXRlKFxyXG4gICAgcHJvcHMuY2hhbGxlbmdlc0NvbXBsZXRlZCA/PyAwXHJcbiAgKTtcclxuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0LCAyKTtcclxuICBjb25zdCBbaXNMZXZlbFVwTW9kYWxPcGVuLCBzZXRJc0xldmVsVXBNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0RhcmssIHNldElzRGFya10gPSB1c2VTdGF0ZShwcm9wcy5pc0RhcmsgPz8gZmFsc2UpO1xyXG4gIGNvbnN0IFthY2Nlc3NUb2tlbiwgc2V0QWNjZXNzVG9rZW5dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKE5vdGlmaWNhdGlvbikgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgICBpZiAoaXNEYXJrKSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJib2R5LWR0XCIpO1xyXG4gICAgZWxzZSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5LWR0XCIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIENvb2tpZXMuc2V0KCdpc0RhcmsnLGlzRGFyay50b1N0cmluZygpKVxyXG4gIH0sIFtpc0RhcmtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgQ29va2llcy5zZXQoXCJsZXZlbFwiLCBsZXZlbC50b1N0cmluZygpKTtcclxuICAgIENvb2tpZXMuc2V0KFwiY3VycmVudEV4cGVyaWVuY2VcIiwgY3VycmVudEV4cGVyaWVuY2UudG9TdHJpbmcoKSk7XHJcbiAgICBDb29raWVzLnNldChcImNoYWxsZW5nZXNDb21wbGV0ZWRcIiwgY2hhbGxlbmdlc0NvbXBsZXRlZC50b1N0cmluZygpKTtcclxuICB9LCBbbGV2ZWwsIGN1cnJlbnRFeHBlcmllbmNlLCBjaGFsbGVuZ2VzQ29tcGxldGVkXSk7XHJcblxyXG4gIGZ1bmN0aW9uIFNldERhcmtUaGVtZShpc1NldCkge1xyXG4gICAgaWYgKGlzU2V0KSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJib2R5LWR0XCIpO1xyXG4gICAgZWxzZSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5LWR0XCIpO1xyXG5cclxuICAgIENvb2tpZXMuc2V0KCdpc0RhcmsnLGlzRGFyay50b1N0cmluZygpKVxyXG4gICAgc2V0SXNEYXJrKGlzU2V0KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcclxuICAgIHNldExldmVsKGxldmVsICsgMSk7XHJcbiAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNsb3NlTGV2ZWxVcE1vZGFsKCkge1xyXG4gICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKGZhbHNlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XHJcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ0luZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpO1xyXG4gICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ0luZGV4XTtcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpO1xyXG5cclxuICAgIGlmIChBdWRpbykge1xyXG4gICAgICBuZXcgQXVkaW8oXCIvbm90aWZpY2F0aW9uLm1wM1wiKS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE5vdGlmaWNhdGlvbikge1xyXG4gICAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09IFwiZ3JhbnRlZFwiKSB7XHJcbiAgICAgICAgbmV3IE5vdGlmaWNhdGlvbihcIk5vdm8gZGVzYWZpb1wiLCB7XHJcbiAgICAgICAgICBib2R5OiBgVmFsZW5kbzogJHtjaGFsbGVuZ2UuYW1vdW50fXhwIWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlKCkge1xyXG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKSB7XHJcbiAgICBpZiAoIWFjdGl2ZUNoYWxsZW5nZSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcblxyXG4gICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xyXG5cclxuICAgIGlmIChmaW5hbEV4cGVyaWVuY2UgPj0gZXhwZXJpZW5jZVRvTmV4dExldmVsKSB7XHJcbiAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcclxuICAgICAgbGV2ZWxVcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBpc0RhcmssXHJcbiAgICAgICAgbGV2ZWwsXHJcbiAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxyXG4gICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxyXG4gICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXHJcbiAgICAgICAgc3RhcnROZXdDaGFsbGVuZ2UsXHJcbiAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxyXG4gICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxyXG4gICAgICAgIGNvbXBsZXRlQ2hhbGxlbmdlLFxyXG4gICAgICAgIGxldmVsVXAsXHJcbiAgICAgICAgY2xvc2VMZXZlbFVwTW9kYWwsXHJcbiAgICAgICAgU2V0RGFya1RoZW1lLFxyXG4gICAgICAgIGFjY2Vzc1Rva2VuXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAge2lzTGV2ZWxVcE1vZGFsT3BlbiAmJiA8TGV2ZWxVcE1vZGFsIC8+fVxyXG4gICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==