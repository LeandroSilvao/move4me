module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/home.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./challenges.json":
/*!*************************!*\
  !*** ./challenges.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"type\":\"body\",\"description\":\"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.\",\"amount\":60},{\"type\":\"body\",\"description\":\"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.\",\"amount\":100},{\"type\":\"body\",\"description\":\"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.\",\"amount\":80},{\"type\":\"body\",\"description\":\"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.\",\"amount\":50},{\"type\":\"body\",\"description\":\"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.\",\"amount\":80},{\"type\":\"eye\",\"description\":\"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.\",\"amount\":90},{\"type\":\"eye\",\"description\":\"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.\",\"amount\":140},{\"type\":\"eye\",\"description\":\"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.\",\"amount\":70},{\"type\":\"body\",\"description\":\"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.\",\"amount\":90}]");

/***/ }),

/***/ "./src/components/ChallengeBox.tsx":
/*!*****************************************!*\
  !*** ./src/components/ChallengeBox.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChallengeBox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengeContexts */ "./src/contexts/ChallengeContexts.tsx");
/* harmony import */ var _contexts_CountdownContexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/CountdownContexts */ "./src/contexts/CountdownContexts.tsx");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/ChallengeBox.module.css */ "./src/styles/components/ChallengeBox.module.css");
/* harmony import */ var _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\components\\ChallengeBox.tsx";




function ChallengeBox() {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
    isDark
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    resetCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_CountdownContexts__WEBPACK_IMPORTED_MODULE_3__["CountdownContext"]);

  function handleChallengeSucceded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: isDark ? `${_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxContainer} ${_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.darkTheme}` : `${_styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeBoxContainer}`,
    children: activeChallenge ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: ["Ganhe ", activeChallenge.amount, "xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 15
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: `icons/${activeChallenge.type}.svg`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Novo desafio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: activeChallenge.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeFailedButton,
          onClick: handleChallengeFailed,
          children: "Falhei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeSuccededButton,
          onClick: handleChallengeSucceded,
          children: "Completei"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_ChallengeBox_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.challengeNotActive,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Finalize um ciclo para receber um desafio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "icons/level-up.svg",
          alt: "Level up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 13
        }, this), "Avance de level completando desafios"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/CompletedChallengs.tsx":
/*!***********************************************!*\
  !*** ./src/components/CompletedChallengs.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CompletedChallengs; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengeContexts */ "./src/contexts/ChallengeContexts.tsx");
/* harmony import */ var _styles_components_CompletedChallengs_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/CompletedChallengs.module.css */ "./src/styles/components/CompletedChallengs.module.css");
/* harmony import */ var _styles_components_CompletedChallengs_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CompletedChallengs_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\components\\CompletedChallengs.tsx";



function CompletedChallengs() {
  const {
    challengesCompleted,
    isDark
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: isDark ? `${_styles_components_CompletedChallengs_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.CompletedChallengsContainer} ${_styles_components_CompletedChallengs_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.darkTheme}` : `${_styles_components_CompletedChallengs_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.CompletedChallengsContainer}`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "Desafios Completos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: challengesCompleted
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./src/components/CountDown.tsx":
/*!**************************************!*\
  !*** ./src/components/CountDown.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountDown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/CountDown.module.css */ "./src/styles/components/CountDown.module.css");
/* harmony import */ var _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contexts_CountdownContexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contexts/CountdownContexts */ "./src/contexts/CountdownContexts.tsx");
/* harmony import */ var _contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/ChallengeContexts */ "./src/contexts/ChallengeContexts.tsx");

var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\components\\CountDown.tsx";





function CountDown() {
  const {
    hasFinished,
    isActive,
    minutes,
    seconds,
    resetCountdown,
    startCountdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_CountdownContexts__WEBPACK_IMPORTED_MODULE_4__["CountdownContext"]);
  const {
    isDark
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_5__["ChallengesContext"]);
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: isDark ? `${_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.CountDownContainer} ${_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.darkTheme}` : `${_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.CountDownContainer}`,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: minuteRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: ":"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondLeft
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: secondRight
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), hasFinished ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      disabled: true,
      className: _styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.CountdownButton,
      children: ["Ciclo Encerrado", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__["AiFillCheckCircle"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }, this) : isActive ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      className: isDark ? `${_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.CountdownButton} ${_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.CountdownButtonAcative} ${_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.CountdownButtonAcativeDarkTheme}` : `${_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.CountdownButton} ${_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.CountdownButtonAcative}`,
      onClick: resetCountdown,
      children: "Abandonar Ciclo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      type: "button",
      className: isDark ? `${_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.CountdownButton} ${_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.CountdownButtonDarkTheme}` : `${_styles_components_CountDown_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.CountdownButton}`,
      onClick: startCountdown,
      children: "In\xEDciar um ciclo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/ExperienceBar.tsx":
/*!******************************************!*\
  !*** ./src/components/ExperienceBar.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExperienceBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengeContexts */ "./src/contexts/ChallengeContexts.tsx");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/ExperienceBar.module.css */ "./src/styles/components/ExperienceBar.module.css");
/* harmony import */ var _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\components\\ExperienceBar.tsx";



function ExperienceBar() {
  const {
    currentExperience,
    experienceToNextLevel,
    isDark
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const percentToNextLevel = Math.round(currentExperience * 100 / experienceToNextLevel);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: isDark ? `${_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.experienceBar} ${_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.darkTheme}` : `${_styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.experienceBar}`,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: "0 xp"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          width: `${percentToNextLevel}%`
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _styles_components_ExperienceBar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.currentExperience,
        style: {
          left: `${percentToNextLevel}%`
        },
        children: [currentExperience, " xp"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [experienceToNextLevel, " xp"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/LevelUpModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/LevelUpModal.tsx ***!
  \*****************************************/
/*! exports provided: LevelUpModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelUpModal", function() { return LevelUpModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengeContexts */ "./src/contexts/ChallengeContexts.tsx");
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/LevelUpModal.module.css */ "./src/styles/components/LevelUpModal.module.css");
/* harmony import */ var _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\components\\LevelUpModal.tsx";



function LevelUpModal() {
  const {
    level,
    closeLevelUpModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.overlay,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_components_LevelUpModal_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
        children: level
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: "Parabens"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: "Voc\xEA alcancou um novo level."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "button",
        onClick: closeLevelUpModal,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: "/icons/close.svg",
          alt: "Fechar Modal"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/components/Profile.tsx":
/*!************************************!*\
  !*** ./src/components/Profile.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengeContexts */ "./src/contexts/ChallengeContexts.tsx");
/* harmony import */ var _contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/LoginContexts */ "./src/contexts/LoginContexts.tsx");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/Profile.module.css */ "./src/styles/components/Profile.module.css");
/* harmony import */ var _styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\components\\Profile.tsx";





function Profile() {
  const {
    level,
    isDark
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  const {
    username,
    urlProfilePicture,
    fullName,
    SignOut
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_3__["UserContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: isDark ? `${_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileContainer} ${_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.darkTheme}` : `${_styles_components_Profile_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.profileContainer}`,
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

/***/ }),

/***/ "./src/components/SetDarkTheme.tsx":
/*!*****************************************!*\
  !*** ./src/components/SetDarkTheme.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DarkTheme; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengeContexts */ "./src/contexts/ChallengeContexts.tsx");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-switch */ "react-switch");
/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_switch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_components_ChangeThemeColor_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/ChangeThemeColor.module.css */ "./src/styles/components/ChangeThemeColor.module.css");
/* harmony import */ var _styles_components_ChangeThemeColor_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_ChangeThemeColor_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\components\\SetDarkTheme.tsx";





function DarkTheme() {
  const {
    isDark,
    SetDarkTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_components_ChangeThemeColor_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.ChangeThemeColorContainer,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_switch__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onColor: "#4B4B4B",
      onHandleColor: "#3B9E22",
      offColor: "#bdbbbb",
      offHandleColor: "#5965E0",
      checked: isDark,
      onChange: isSet => SetDarkTheme(isSet),
      handleDiameter: 30,
      uncheckedIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsMoon"], {
        style: {
          height: '100%',
          margin: 0,
          padding: 0,
          position: 'absolute',
          right: 3,
          color: '#000',
          bottom: 1
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 24
      }, this),
      checkedIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__["BsBrightnessHigh"], {
        style: {
          height: '100%',
          margin: 0,
          padding: 0,
          position: 'absolute',
          left: 3,
          color: '#fff'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 22
      }, this),
      boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.6)",
      activeBoxShadow: "0px 0px 1px 10px rgba(0, 0, 0, 0.2)",
      height: 20,
      width: 50,
      className: "react-switch",
      id: "material-switch"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/contexts/ChallengeContexts.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengeContexts.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesContext", function() { return ChallengesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChallengesProvider", function() { return ChallengesProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ "./challenges.json");
var _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ "./challenges.json", 1);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/LevelUpModal */ "./src/components/LevelUpModal.tsx");

var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\contexts\\ChallengeContexts.tsx";




const ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
function ChallengesProvider(props) {
  var _props$level, _props$currentExperie, _props$challengesComp, _props$isDark;

  const {
    0: level,
    1: setLevel
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_props$level = props.level) !== null && _props$level !== void 0 ? _props$level : 1);
  const {
    0: currentExperience,
    1: setCurrentExperience
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_props$currentExperie = props.currentExperience) !== null && _props$currentExperie !== void 0 ? _props$currentExperie : 0);
  const {
    0: challengesCompleted,
    1: setChallengesCompleted
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_props$challengesComp = props.challengesCompleted) !== null && _props$challengesComp !== void 0 ? _props$challengesComp : 0);
  const {
    0: activeChallenge,
    1: setActiveChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);
  const {
    0: isLevelUpModalOpen,
    1: setIsLevelUpModalOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isDark,
    1: setIsDark
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((_props$isDark = props.isDark) !== null && _props$isDark !== void 0 ? _props$isDark : false);
  const {
    0: accessToken,
    1: setAccessToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (Notification) Notification.requestPermission();
    if (isDark) document.body.classList.add("body-dt");else document.body.classList.remove("body-dt");
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set("isDark", isDark.toString());
  }, [isDark]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
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
    const randomChallengIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);
    const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengIndex];
    setActiveChallenge(challenge);

    if (Audio) {
      new Audio("/notification.mp3").play();
    }

    if (Notification) {
      if (Notification.permission === "granted") {
        new Notification("Novo desafio", {
          body: `Valendo: ${challenge.amount}xp!`
        });
      }
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) return;
    const {
      amount
    } = activeChallenge;
    let finalExperience = currentExperience + amount;

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
        isDark,
        level,
        experienceToNextLevel,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        levelUp,
        closeLevelUpModal,
        SetDarkTheme,
        accessToken
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
        isDark,
        level,
        experienceToNextLevel,
        currentExperience,
        challengesCompleted,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        levelUp,
        closeLevelUpModal,
        SetDarkTheme,
        accessToken
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

/***/ }),

/***/ "./src/contexts/CountdownContexts.tsx":
/*!********************************************!*\
  !*** ./src/contexts/CountdownContexts.tsx ***!
  \********************************************/
/*! exports provided: CountdownContext, CountdownProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownContext", function() { return CountdownContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownProvider", function() { return CountdownProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChallengeContexts */ "./src/contexts/ChallengeContexts.tsx");

var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\contexts\\CountdownContexts.tsx";


const CountdownContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
let countdownTimeout;
function CountdownProvider({
  children
}) {
  const {
    0: time,
    1: setTime
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0.05 * 60);
  const {
    0: isActive,
    1: setIsActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: hasFinished,
    1: setHasFinished
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const {
    startNewChallenge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_ChallengeContexts__WEBPACK_IMPORTED_MODULE_2__["ChallengesContext"]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time]);

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.05 * 60);
    setHasFinished(false);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CountdownContext.Provider, {
    value: {
      minutes,
      seconds,
      startCountdown,
      resetCountdown,
      hasFinished,
      isActive
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/contexts/LoginContexts.tsx":
/*!****************************************!*\
  !*** ./src/contexts/LoginContexts.tsx ***!
  \****************************************/
/*! exports provided: UserContext, UserProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserContext", function() { return UserContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProvider", function() { return UserProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\contexts\\LoginContexts.tsx";




const UserContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
const UserProvider = props => {
  const {
    0: username,
    1: setUsername
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: fullName,
    1: setFullName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: urlProfilePicture,
    1: setUrlProfilePicture
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: authenticated,
    1: setAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: googleAuthenticated,
    1: setGoogleAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: accessToken,
    1: setAccessToken
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  function ClearUserInfo() {
    setUsername('');
    setPassword('');
    setFullName('');
    setAuthenticated(false);
    setGoogleAuthenticated(false);
    setAccessToken('');
    setUrlProfilePicture('');
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('accessToken', '');
  }

  function setUser(e) {
    const username = e.target.value;
    setUsername(username);
  }

  function setUserPassword(e) {
    const password = e.target.value;
    setPassword(password);
  }

  function SignIn() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(`/api/auth?grant_type=password&username=${username}&password=${password}`).then(res => {
      if (res.data.access_token) {
        setAccessToken(res.data.access_token);
        setAuthenticated(true);
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`https://gitlab.com/api/v4/users?username=${username}`).then(res => {
          setFullName(res.data[0].name);
          const urlProfilePicture = res.data[0].avatar_url.replace('10.10.1.35', '177.84.246.126:9955');
          setUrlProfilePicture(urlProfilePicture);
        });
        router.push('/home');
      }
    }).catch(err => console.log(err));
  }

  function SearchUserDetails(token) {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`).then(res => {
      const {
        picture,
        given_name
      } = res.data;
      setUrlProfilePicture(picture);
      setFullName(given_name);
      setUsername(res.data.email.split("@")[0]);
    });
  }

  function SignInGoogle({
    accessToken
  }) {
    js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.set('accessToken', accessToken);
    setAccessToken(accessToken);
    setGoogleAuthenticated(true);
    SearchUserDetails(accessToken);
    router.push('/home');
  }

  function SignOut() {
    router.push('/');
    ClearUserInfo();
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UserContext.Provider, {
    value: {
      username,
      setUser,
      password,
      setUserPassword,
      fullName,
      urlProfilePicture,
      SignIn,
      SignInGoogle,
      SearchUserDetails,
      SignOut,
      ClearUserInfo
    },
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/pages/home.tsx":
/*!****************************!*\
  !*** ./src/pages/home.tsx ***!
  \****************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "D:\\Desktop\\Solve\\TREINAMENTOS\\NLW\\#4\\moveit-next\\src\\pages\\home.tsx";














function Home(props) {
  const {
    urlProfilePicture,
    SearchUserDetails
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_LoginContexts__WEBPACK_IMPORTED_MODULE_12__["UserContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (props.accessToken) {
      if (!urlProfilePicture) SearchUserDetails(js_cookie__WEBPACK_IMPORTED_MODULE_14___default.a.get("accessToken"));
    } else router.push("/");
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_ChallengeContexts__WEBPACK_IMPORTED_MODULE_11__["ChallengesProvider"], {
    level: props.level,
    currentExperience: props.currentExperience,
    challengesCompleted: props.challengesCompleted,
    isDark: props.isDark,
    accessToken: props.accessToken,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_pages_Home_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SetDarkTheme__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
          children: "In\xEDcio | move.it"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ExperienceBar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_contexts_CountdownContexts__WEBPACK_IMPORTED_MODULE_10__["CountdownProvider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Profile__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CompletedChallengs__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CountDown__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ChallengeBox__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, this);
}
const getServerSideProps = async ctx => {
  const {
    level,
    currentExperience,
    challengesCompleted,
    isDark,
    accessToken
  } = ctx.req.cookies;
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      isDark: isDark === "false" ? false : true,
      accessToken: accessToken
    }
  };
};

/***/ }),

/***/ "./src/styles/components/ChallengeBox.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/ChallengeBox.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"challengeBoxContainer": "ChallengeBox_challengeBoxContainer__53AkF",
	"challengeNotActive": "ChallengeBox_challengeNotActive__35ixK",
	"challengeActive": "ChallengeBox_challengeActive__3mO_D",
	"challengeFailedButton": "ChallengeBox_challengeFailedButton__u8aFS",
	"challengeSuccededButton": "ChallengeBox_challengeSuccededButton__rGfKe",
	"darkTheme": "ChallengeBox_darkTheme__16dQl"
};


/***/ }),

/***/ "./src/styles/components/ChangeThemeColor.module.css":
/*!***********************************************************!*\
  !*** ./src/styles/components/ChangeThemeColor.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"ChangeThemeColorContainer": "ChangeThemeColor_ChangeThemeColorContainer__15gIq"
};


/***/ }),

/***/ "./src/styles/components/CompletedChallengs.module.css":
/*!*************************************************************!*\
  !*** ./src/styles/components/CompletedChallengs.module.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"CompletedChallengsContainer": "CompletedChallengs_CompletedChallengsContainer__10Kgk",
	"darkTheme": "CompletedChallengs_darkTheme__39idA"
};


/***/ }),

/***/ "./src/styles/components/CountDown.module.css":
/*!****************************************************!*\
  !*** ./src/styles/components/CountDown.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"CountDownContainer": "CountDown_CountDownContainer__3urKn",
	"CountdownButton": "CountDown_CountdownButton__GAuOd",
	"CountdownButtonAcative": "CountDown_CountdownButtonAcative__xiz1v",
	"darkTheme": "CountDown_darkTheme__wP3ik",
	"CountdownButtonDarkTheme": "CountDown_CountdownButtonDarkTheme__2Hau_",
	"CountdownButtonAcativeDarkTheme": "CountDown_CountdownButtonAcativeDarkTheme__3FHfe"
};


/***/ }),

/***/ "./src/styles/components/ExperienceBar.module.css":
/*!********************************************************!*\
  !*** ./src/styles/components/ExperienceBar.module.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"experienceBar": "ExperienceBar_experienceBar__2JbAX",
	"currentExperience": "ExperienceBar_currentExperience__2XATR",
	"darkTheme": "ExperienceBar_darkTheme__owKWJ"
};


/***/ }),

/***/ "./src/styles/components/LevelUpModal.module.css":
/*!*******************************************************!*\
  !*** ./src/styles/components/LevelUpModal.module.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"overlay": "LevelUpModal_overlay__1huQl",
	"container": "LevelUpModal_container__1dM18"
};


/***/ }),

/***/ "./src/styles/components/Profile.module.css":
/*!**************************************************!*\
  !*** ./src/styles/components/Profile.module.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"profileContainer": "Profile_profileContainer__3iYlY",
	"infoLogin": "Profile_infoLogin__1LP5k",
	"logout": "Profile_logout__xlS3-",
	"darkTheme": "Profile_darkTheme__1USv8"
};


/***/ }),

/***/ "./src/styles/pages/Home.module.css":
/*!******************************************!*\
  !*** ./src/styles/pages/Home.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "Home_container__HbJEc"
};


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "react-switch":
/*!*******************************!*\
  !*** external "react-switch" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-switch");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ2hhbGxlbmdlQm94LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ3MudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0NvdW50RG93bi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRXhwZXJpZW5jZUJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZXREYXJrVGhlbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb250ZXh0cy9DaGFsbGVuZ2VDb250ZXh0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHRzLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvTG9naW5Db250ZXh0cy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2hvbWUudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9DaGFsbGVuZ2VCb3gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ2hhbmdlVGhlbWVDb2xvci5tb2R1bGUuY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ3MubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvQ291bnREb3duLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL0V4cGVyaWVuY2VCYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9jb21wb25lbnRzL1Byb2ZpbGUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9haVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvcmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zd2l0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJDaGFsbGVuZ2VCb3giLCJhY3RpdmVDaGFsbGVuZ2UiLCJyZXNldENoYWxsZW5nZSIsImNvbXBsZXRlQ2hhbGxlbmdlIiwiaXNEYXJrIiwidXNlQ29udGV4dCIsIkNoYWxsZW5nZXNDb250ZXh0IiwicmVzZXRDb3VudGRvd24iLCJDb3VudGRvd25Db250ZXh0IiwiaGFuZGxlQ2hhbGxlbmdlU3VjY2VkZWQiLCJoYW5kbGVDaGFsbGVuZ2VGYWlsZWQiLCJTdHlsZXMiLCJjaGFsbGVuZ2VCb3hDb250YWluZXIiLCJkYXJrVGhlbWUiLCJjaGFsbGVuZ2VBY3RpdmUiLCJhbW91bnQiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJjaGFsbGVuZ2VGYWlsZWRCdXR0b24iLCJjaGFsbGVuZ2VTdWNjZWRlZEJ1dHRvbiIsImNoYWxsZW5nZU5vdEFjdGl2ZSIsIkNvbXBsZXRlZENoYWxsZW5ncyIsImNoYWxsZW5nZXNDb21wbGV0ZWQiLCJDb21wbGV0ZWRDaGFsbGVuZ3NDb250YWluZXIiLCJDb3VudERvd24iLCJoYXNGaW5pc2hlZCIsImlzQWN0aXZlIiwibWludXRlcyIsInNlY29uZHMiLCJzdGFydENvdW50ZG93biIsIm1pbnV0ZUxlZnQiLCJtaW51dGVSaWdodCIsIlN0cmluZyIsInBhZFN0YXJ0Iiwic3BsaXQiLCJzZWNvbmRMZWZ0Iiwic2Vjb25kUmlnaHQiLCJDb3VudERvd25Db250YWluZXIiLCJDb3VudGRvd25CdXR0b24iLCJDb3VudGRvd25CdXR0b25BY2F0aXZlIiwiQ291bnRkb3duQnV0dG9uQWNhdGl2ZURhcmtUaGVtZSIsIkNvdW50ZG93bkJ1dHRvbkRhcmtUaGVtZSIsIkV4cGVyaWVuY2VCYXIiLCJjdXJyZW50RXhwZXJpZW5jZSIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsInBlcmNlbnRUb05leHRMZXZlbCIsIk1hdGgiLCJyb3VuZCIsInN0eWxlcyIsImV4cGVyaWVuY2VCYXIiLCJ3aWR0aCIsImxlZnQiLCJMZXZlbFVwTW9kYWwiLCJsZXZlbCIsImNsb3NlTGV2ZWxVcE1vZGFsIiwib3ZlcmxheSIsImNvbnRhaW5lciIsIlByb2ZpbGUiLCJ1c2VybmFtZSIsInVybFByb2ZpbGVQaWN0dXJlIiwiZnVsbE5hbWUiLCJTaWduT3V0IiwiVXNlckNvbnRleHQiLCJwcm9maWxlQ29udGFpbmVyIiwiaW5mb0xvZ2luIiwibG9nb3V0IiwiRGFya1RoZW1lIiwiU2V0RGFya1RoZW1lIiwiQ2hhbmdlVGhlbWVDb2xvckNvbnRhaW5lciIsImlzU2V0IiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsInBvc2l0aW9uIiwicmlnaHQiLCJjb2xvciIsImJvdHRvbSIsImNyZWF0ZUNvbnRleHQiLCJDaGFsbGVuZ2VzUHJvdmlkZXIiLCJwcm9wcyIsInNldExldmVsIiwidXNlU3RhdGUiLCJzZXRDdXJyZW50RXhwZXJpZW5jZSIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJwb3ciLCJpc0xldmVsVXBNb2RhbE9wZW4iLCJzZXRJc0xldmVsVXBNb2RhbE9wZW4iLCJzZXRJc0RhcmsiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJDb29raWVzIiwic2V0IiwidG9TdHJpbmciLCJsZXZlbFVwIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ0luZGV4IiwiZmxvb3IiLCJyYW5kb20iLCJjaGFsbGVuZ2VzIiwibGVuZ3RoIiwiY2hhbGxlbmdlIiwiQXVkaW8iLCJwbGF5IiwicGVybWlzc2lvbiIsImZpbmFsRXhwZXJpZW5jZSIsImNoaWxkcmVuIiwiY291bnRkb3duVGltZW91dCIsIkNvdW50ZG93blByb3ZpZGVyIiwidGltZSIsInNldFRpbWUiLCJzZXRJc0FjdGl2ZSIsInNldEhhc0ZpbmlzaGVkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIlVzZXJQcm92aWRlciIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInNldEZ1bGxOYW1lIiwic2V0VXJsUHJvZmlsZVBpY3R1cmUiLCJhdXRoZW50aWNhdGVkIiwic2V0QXV0aGVudGljYXRlZCIsImdvb2dsZUF1dGhlbnRpY2F0ZWQiLCJzZXRHb29nbGVBdXRoZW50aWNhdGVkIiwicm91dGVyIiwidXNlUm91dGVyIiwiQ2xlYXJVc2VySW5mbyIsInNldFVzZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRVc2VyUGFzc3dvcmQiLCJTaWduSW4iLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImFjY2Vzc190b2tlbiIsImdldCIsIm5hbWUiLCJhdmF0YXJfdXJsIiwicmVwbGFjZSIsInB1c2giLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJTZWFyY2hVc2VyRGV0YWlscyIsInRva2VuIiwicGljdHVyZSIsImdpdmVuX25hbWUiLCJlbWFpbCIsIlNpZ25Jbkdvb2dsZSIsIkhvbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjdHgiLCJyZXEiLCJjb29raWVzIiwiTnVtYmVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxZQUFULEdBQXdCO0FBQ25DLFFBQU07QUFBRUMsbUJBQUY7QUFBbUJDLGtCQUFuQjtBQUFtQ0MscUJBQW5DO0FBQXNEQztBQUF0RCxNQUFpRUMsd0RBQVUsQ0FBQ0MsNkVBQUQsQ0FBakY7QUFDQSxRQUFNO0FBQUNDO0FBQUQsTUFBbUJGLHdEQUFVLENBQUNHLDRFQUFELENBQW5DOztBQUVBLFdBQVNDLHVCQUFULEdBQWtDO0FBQ2hDTixxQkFBaUI7QUFDakJJLGtCQUFjO0FBQ2Y7O0FBQ0QsV0FBU0cscUJBQVQsR0FBZ0M7QUFDOUJSLGtCQUFjO0FBQ2RLLGtCQUFjO0FBQ2Y7O0FBRUgsc0JBQ0U7QUFBSyxhQUFTLEVBQUVILE1BQU0sR0FBSSxHQUFFTyxpRkFBTSxDQUFDQyxxQkFBc0IsSUFBR0QsaUZBQU0sQ0FBQ0UsU0FBVSxFQUF2RCxHQUEyRCxHQUFFRixpRkFBTSxDQUFDQyxxQkFBc0IsRUFBaEg7QUFBQSxjQUNHWCxlQUFlLGdCQUNaO0FBQUssZUFBUyxFQUFFVSxpRkFBTSxDQUFDRyxlQUF2QjtBQUFBLDhCQUNJO0FBQUEsNkJBQWViLGVBQWUsQ0FBQ2MsTUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFHRTtBQUFBLGdDQUNJO0FBQUssYUFBRyxFQUFHLFNBQVFkLGVBQWUsQ0FBQ2UsSUFBSztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFBLG9CQUFJZixlQUFlLENBQUNnQjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLGVBU0U7QUFBQSxnQ0FDSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUVOLGlGQUFNLENBQUNPLHFCQUF4QztBQUErRCxpQkFBTyxFQUFFUixxQkFBeEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLG1CQUFTLEVBQUVDLGlGQUFNLENBQUNRLHVCQUF4QztBQUFpRSxpQkFBTyxFQUFFVix1QkFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFksZ0JBZ0JaO0FBQUssZUFBUyxFQUFFRSxpRkFBTSxDQUFDUyxrQkFBdkI7QUFBQSw4QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUE7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBQyxvQkFBVDtBQUE4QixhQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqQk47QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBNEJELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNEO0FBQ0E7QUFDQTtBQUVlLFNBQVNDLGtCQUFULEdBQTZCO0FBQ3hDLFFBQU07QUFBRUMsdUJBQUY7QUFBdUJsQjtBQUF2QixNQUFpQ0Msd0RBQVUsQ0FBQ0MsNkVBQUQsQ0FBakQ7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUYsTUFBTSxHQUFJLEdBQUVPLHVGQUFNLENBQUNZLDJCQUE0QixJQUFHWix1RkFBTSxDQUFDRSxTQUFVLEVBQTdELEdBQWtFLEdBQUVGLHVGQUFNLENBQUNZLDJCQUE0QixFQUE3SDtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBLGdCQUFPRDtBQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1ILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNFLFNBQVQsR0FBcUI7QUFDbEMsUUFBTTtBQUNKQyxlQURJO0FBRUpDLFlBRkk7QUFHSkMsV0FISTtBQUlKQyxXQUpJO0FBS0pyQixrQkFMSTtBQU1Kc0I7QUFOSSxNQU9GeEIsd0RBQVUsQ0FBQ0csNEVBQUQsQ0FQZDtBQVFBLFFBQU07QUFBQ0o7QUFBRCxNQUFXQyx3REFBVSxDQUFDQyw2RUFBRCxDQUEzQjtBQUVBLFFBQU0sQ0FBQ3dCLFVBQUQsRUFBYUMsV0FBYixJQUE0QkMsTUFBTSxDQUFDTCxPQUFELENBQU4sQ0FBZ0JNLFFBQWhCLENBQXlCLENBQXpCLEVBQTRCLEdBQTVCLEVBQWlDQyxLQUFqQyxDQUF1QyxFQUF2QyxDQUFsQztBQUNBLFFBQU0sQ0FBQ0MsVUFBRCxFQUFhQyxXQUFiLElBQTRCSixNQUFNLENBQUNKLE9BQUQsQ0FBTixDQUFnQkssUUFBaEIsQ0FBeUIsQ0FBekIsRUFBNEIsR0FBNUIsRUFBaUNDLEtBQWpDLENBQXVDLEVBQXZDLENBQWxDO0FBRUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRTlCLE1BQU0sR0FBSSxHQUFFTyw4RUFBTSxDQUFDMEIsa0JBQW1CLElBQUcxQiw4RUFBTSxDQUFDRSxTQUFVLEVBQXBELEdBQXlELEdBQUVGLDhFQUFNLENBQUMwQixrQkFBbUIsRUFBM0c7QUFBQSw4QkFDRTtBQUFBLGdDQUNFO0FBQUEsb0JBQU9QO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUFNRTtBQUFBLGdDQUNFO0FBQUEsb0JBQU9JO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQUEsb0JBQU9DO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQWFHWCxXQUFXLGdCQUNWO0FBQVEsY0FBUSxNQUFoQjtBQUFpQixlQUFTLEVBQUVkLDhFQUFNLENBQUMyQixlQUFuQztBQUFBLGlEQUVFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEVSxHQUtSWixRQUFRLGdCQUNWO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxlQUFTLEVBQUV0QixNQUFNLEdBQUksR0FBRU8sOEVBQU0sQ0FBQzJCLGVBQWdCLElBQUczQiw4RUFBTSxDQUFDNEIsc0JBQXVCLElBQUc1Qiw4RUFBTSxDQUFDNkIsK0JBQWdDLEVBQXhHLEdBQTZHLEdBQUU3Qiw4RUFBTSxDQUFDMkIsZUFBZ0IsSUFBRzNCLDhFQUFNLENBQUM0QixzQkFBdUIsRUFGMUw7QUFHRSxhQUFPLEVBQUVoQyxjQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFUsZ0JBU1Y7QUFDRSxVQUFJLEVBQUMsUUFEUDtBQUVFLGVBQVMsRUFBRUgsTUFBTSxHQUFJLEdBQUVPLDhFQUFNLENBQUMyQixlQUFnQixJQUFHM0IsOEVBQU0sQ0FBQzhCLHdCQUF5QixFQUFoRSxHQUFxRSxHQUFFOUIsOEVBQU0sQ0FBQzJCLGVBQWdCLEVBRmpIO0FBR0UsYUFBTyxFQUFFVCxjQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0NELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekREO0FBQ0E7QUFDQTtBQUVlLFNBQVNhLGFBQVQsR0FBeUI7QUFDdEMsUUFBTTtBQUFFQyxxQkFBRjtBQUFxQkMseUJBQXJCO0FBQTRDeEM7QUFBNUMsTUFBdURDLHdEQUFVLENBQ3JFQyw2RUFEcUUsQ0FBdkU7QUFHQSxRQUFNdUMsa0JBQWtCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixpQkFBaUIsR0FBRyxHQUFwQixHQUEwQkMscUJBQXJDLENBQTNCO0FBQ0Esc0JBQ0U7QUFBUSxhQUFTLEVBQUV4QyxNQUFNLEdBQUksR0FBRTRDLGtGQUFNLENBQUNDLGFBQWMsSUFBR0Qsa0ZBQU0sQ0FBQ25DLFNBQVUsRUFBL0MsR0FBb0QsR0FBRW1DLGtGQUFNLENBQUNDLGFBQWMsRUFBcEc7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBQSw4QkFDRTtBQUFLLGFBQUssRUFBRTtBQUFFQyxlQUFLLEVBQUcsR0FBRUwsa0JBQW1CO0FBQS9CO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0U7QUFBTSxpQkFBUyxFQUFFRyxrRkFBTSxDQUFDTCxpQkFBeEI7QUFBMkMsYUFBSyxFQUFFO0FBQUVRLGNBQUksRUFBRyxHQUFFTixrQkFBbUI7QUFBOUIsU0FBbEQ7QUFBQSxtQkFDR0YsaUJBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFTRTtBQUFBLGlCQUFPQyxxQkFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQ0E7QUFDQTtBQUVPLFNBQVNRLFlBQVQsR0FBd0I7QUFDM0IsUUFBTTtBQUFDQyxTQUFEO0FBQVFDO0FBQVIsTUFBNkJqRCx3REFBVSxDQUFDQyw2RUFBRCxDQUE3QztBQUVGLHNCQUNFO0FBQUssYUFBUyxFQUFFSyxpRkFBTSxDQUFDNEMsT0FBdkI7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRTVDLGlGQUFNLENBQUM2QyxTQUF2QjtBQUFBLDhCQUNFO0FBQUEsa0JBQVNIO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEYsZUFJRTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRUMsaUJBQS9CO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUMsa0JBQVQ7QUFBNEIsYUFBRyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkQ7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNHLE9BQVQsR0FBbUI7QUFDaEMsUUFBTTtBQUFFSixTQUFGO0FBQVNqRDtBQUFULE1BQW9CQyx3REFBVSxDQUFDQyw2RUFBRCxDQUFwQztBQUNBLFFBQU07QUFBRW9ELFlBQUY7QUFBWUMscUJBQVo7QUFBK0JDLFlBQS9CO0FBQXlDQztBQUF6QyxNQUFxRHhELHdEQUFVLENBQUN5RCxtRUFBRCxDQUFyRTtBQUVBLHNCQUNFO0FBQ0UsYUFBUyxFQUNQMUQsTUFBTSxHQUNELEdBQUVPLDRFQUFNLENBQUNvRCxnQkFBaUIsSUFBR3BELDRFQUFNLENBQUNFLFNBQVUsRUFEN0MsR0FFRCxHQUFFRiw0RUFBTSxDQUFDb0QsZ0JBQWlCLEVBSm5DO0FBQUEsNEJBT0U7QUFBSyxTQUFHLEVBQUVKLGlCQUFWO0FBQTZCLFNBQUcsRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFTRTtBQUFLLGVBQVMsRUFBRWhELDRFQUFNLENBQUNxRCxTQUF2QjtBQUFBLDhCQUVFO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBU0o7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBQSxvQkFBSUY7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBT0U7QUFBQSxnQ0FDRTtBQUFLLGFBQUcsRUFBQyxpQkFBVDtBQUEyQixhQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixZQUVTTCxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBdUJFO0FBQUssZUFBUyxFQUFFMUMsNEVBQU0sQ0FBQ3NELE1BQXZCO0FBQUEsNkJBQ0UscUVBQUMsK0RBQUQ7QUFBa0IsZUFBTyxFQUFFSjtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVlLFNBQVNLLFNBQVQsR0FBcUI7QUFDbEMsUUFBTTtBQUFFOUQsVUFBRjtBQUFVK0Q7QUFBVixNQUEyQjlELHdEQUFVLENBQUNDLDZFQUFELENBQTNDO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVLLHFGQUFNLENBQUN5RCx5QkFBdkI7QUFBQSwyQkFDRSxxRUFBQyxtREFBRDtBQUNFLGFBQU8sRUFBQyxTQURWO0FBRUUsbUJBQWEsRUFBQyxTQUZoQjtBQUdFLGNBQVEsRUFBQyxTQUhYO0FBSUUsb0JBQWMsRUFBQyxTQUpqQjtBQUtFLGFBQU8sRUFBRWhFLE1BTFg7QUFNRSxjQUFRLEVBQUVpRSxLQUFLLElBQUlGLFlBQVksQ0FBQ0UsS0FBRCxDQU5qQztBQU9FLG9CQUFjLEVBQUUsRUFQbEI7QUFRRSxtQkFBYSxlQUFFLHFFQUFDLHFEQUFEO0FBQVEsYUFBSyxFQUFFO0FBQUNDLGdCQUFNLEVBQUUsTUFBVDtBQUFnQkMsZ0JBQU0sRUFBRSxDQUF4QjtBQUEyQkMsaUJBQU8sRUFBRSxDQUFwQztBQUF1Q0Msa0JBQVEsRUFBRSxVQUFqRDtBQUE2REMsZUFBSyxFQUFFLENBQXBFO0FBQXVFQyxlQUFLLEVBQUUsTUFBOUU7QUFBc0ZDLGdCQUFNLEVBQUU7QUFBOUY7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUmpCO0FBU0UsaUJBQVcsZUFBRSxxRUFBQywrREFBRDtBQUFrQixhQUFLLEVBQUU7QUFBQ04sZ0JBQU0sRUFBRSxNQUFUO0FBQWdCQyxnQkFBTSxFQUFFLENBQXhCO0FBQTJCQyxpQkFBTyxFQUFFLENBQXBDO0FBQXVDQyxrQkFBUSxFQUFFLFVBQWpEO0FBQTZEdEIsY0FBSSxFQUFFLENBQW5FO0FBQXNFd0IsZUFBSyxFQUFFO0FBQTdFO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FUZjtBQVVFLGVBQVMsRUFBQyxnQ0FWWjtBQVdFLHFCQUFlLEVBQUMscUNBWGxCO0FBWUUsWUFBTSxFQUFFLEVBWlY7QUFhRSxXQUFLLEVBQUUsRUFiVDtBQWNFLGVBQVMsRUFBQyxjQWRaO0FBZUUsUUFBRSxFQUFDO0FBZkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDRDtBQUNBO0FBQ0E7QUFDQTtBQWtDTyxNQUFNckUsaUJBQWlCLGdCQUFHdUUsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRUEsU0FBU0Msa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQTREO0FBQUE7O0FBQ2pFLFFBQU07QUFBQSxPQUFDMUIsS0FBRDtBQUFBLE9BQVEyQjtBQUFSLE1BQW9CQyxzREFBUSxpQkFBQ0YsS0FBSyxDQUFDMUIsS0FBUCx1REFBZ0IsQ0FBaEIsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ1YsaUJBQUQ7QUFBQSxPQUFvQnVDO0FBQXBCLE1BQTRDRCxzREFBUSwwQkFDeERGLEtBQUssQ0FBQ3BDLGlCQURrRCx5RUFDN0IsQ0FENkIsQ0FBMUQ7QUFHQSxRQUFNO0FBQUEsT0FBQ3JCLG1CQUFEO0FBQUEsT0FBc0I2RDtBQUF0QixNQUFnREYsc0RBQVEsMEJBQzVERixLQUFLLENBQUN6RCxtQkFEc0QseUVBQy9CLENBRCtCLENBQTlEO0FBR0EsUUFBTTtBQUFBLE9BQUNyQixlQUFEO0FBQUEsT0FBa0JtRjtBQUFsQixNQUF3Q0gsc0RBQVEsQ0FBQyxJQUFELENBQXREO0FBQ0EsUUFBTXJDLHFCQUFxQixHQUFHRSxJQUFJLENBQUN1QyxHQUFMLENBQVMsQ0FBQ2hDLEtBQUssR0FBRyxDQUFULElBQWMsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBOUI7QUFDQSxRQUFNO0FBQUEsT0FBQ2lDLGtCQUFEO0FBQUEsT0FBcUJDO0FBQXJCLE1BQThDTixzREFBUSxDQUFDLEtBQUQsQ0FBNUQ7QUFDQSxRQUFNO0FBQUEsT0FBQzdFLE1BQUQ7QUFBQSxPQUFTb0Y7QUFBVCxNQUFzQlAsc0RBQVEsa0JBQUNGLEtBQUssQ0FBQzNFLE1BQVAseURBQWlCLEtBQWpCLENBQXBDO0FBQ0EsUUFBTTtBQUFBLE9BQUNxRixXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ1Qsc0RBQVEsQ0FBQyxFQUFELENBQTlDO0FBRUFVLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlDLFlBQUosRUFBa0JBLFlBQVksQ0FBQ0MsaUJBQWI7QUFDbEIsUUFBSXpGLE1BQUosRUFBWTBGLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixTQUE1QixFQUFaLEtBQ0tILFFBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxTQUFkLENBQXdCRSxNQUF4QixDQUErQixTQUEvQjtBQUNOLEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQVAseURBQVMsQ0FBQyxNQUFNO0FBQ2RRLG9EQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCaEcsTUFBTSxDQUFDaUcsUUFBUCxFQUF0QjtBQUNELEdBRlEsRUFFTixDQUFDakcsTUFBRCxDQUZNLENBQVQ7QUFJQXVGLHlEQUFTLENBQUMsTUFBTTtBQUNkUSxvREFBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQi9DLEtBQUssQ0FBQ2dELFFBQU4sRUFBckI7QUFDQUYsb0RBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDekQsaUJBQWlCLENBQUMwRCxRQUFsQixFQUFqQztBQUNBRixvREFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUM5RSxtQkFBbUIsQ0FBQytFLFFBQXBCLEVBQW5DO0FBQ0QsR0FKUSxFQUlOLENBQUNoRCxLQUFELEVBQVFWLGlCQUFSLEVBQTJCckIsbUJBQTNCLENBSk0sQ0FBVDs7QUFNQSxXQUFTNkMsWUFBVCxDQUFzQkUsS0FBdEIsRUFBNkI7QUFDM0IsUUFBSUEsS0FBSixFQUFXeUIsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFNBQTVCLEVBQVgsS0FDS0gsUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JFLE1BQXhCLENBQStCLFNBQS9CO0FBRUxDLG9EQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCaEcsTUFBTSxDQUFDaUcsUUFBUCxFQUF0QjtBQUNBYixhQUFTLENBQUNuQixLQUFELENBQVQ7QUFDRDs7QUFDRCxXQUFTaUMsT0FBVCxHQUFtQjtBQUNqQnRCLFlBQVEsQ0FBQzNCLEtBQUssR0FBRyxDQUFULENBQVI7QUFDQWtDLHlCQUFxQixDQUFDLElBQUQsQ0FBckI7QUFDRDs7QUFDRCxXQUFTakMsaUJBQVQsR0FBNkI7QUFDM0JpQyx5QkFBcUIsQ0FBQyxLQUFELENBQXJCO0FBQ0Q7O0FBQ0QsV0FBU2dCLGlCQUFULEdBQTZCO0FBQzNCLFVBQU1DLG1CQUFtQixHQUFHMUQsSUFBSSxDQUFDMkQsS0FBTCxDQUFXM0QsSUFBSSxDQUFDNEQsTUFBTCxLQUFnQkMsNkNBQVUsQ0FBQ0MsTUFBdEMsQ0FBNUI7QUFDQSxVQUFNQyxTQUFTLEdBQUdGLDZDQUFVLENBQUNILG1CQUFELENBQTVCO0FBQ0FwQixzQkFBa0IsQ0FBQ3lCLFNBQUQsQ0FBbEI7O0FBRUEsUUFBSUMsS0FBSixFQUFXO0FBQ1QsVUFBSUEsS0FBSixDQUFVLG1CQUFWLEVBQStCQyxJQUEvQjtBQUNEOztBQUVELFFBQUluQixZQUFKLEVBQWtCO0FBQ2hCLFVBQUlBLFlBQVksQ0FBQ29CLFVBQWIsS0FBNEIsU0FBaEMsRUFBMkM7QUFDekMsWUFBSXBCLFlBQUosQ0FBaUIsY0FBakIsRUFBaUM7QUFDL0JHLGNBQUksRUFBRyxZQUFXYyxTQUFTLENBQUM5RixNQUFPO0FBREosU0FBakM7QUFHRDtBQUNGO0FBQ0Y7O0FBQ0QsV0FBU2IsY0FBVCxHQUEwQjtBQUN4QmtGLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDRDs7QUFDRCxXQUFTakYsaUJBQVQsR0FBNkI7QUFDM0IsUUFBSSxDQUFDRixlQUFMLEVBQXNCO0FBQ3RCLFVBQU07QUFBRWM7QUFBRixRQUFhZCxlQUFuQjtBQUNBLFFBQUlnSCxlQUFlLEdBQUd0RSxpQkFBaUIsR0FBRzVCLE1BQTFDOztBQUNBLFFBQUlrRyxlQUFlLElBQUlyRSxxQkFBdkIsRUFBOEM7QUFDNUNxRSxxQkFBZSxHQUFHQSxlQUFlLEdBQUdyRSxxQkFBcEM7QUFDQTBELGFBQU87QUFDUjs7QUFDRHBCLHdCQUFvQixDQUFDK0IsZUFBRCxDQUFwQjtBQUNBN0Isc0JBQWtCLENBQUMsSUFBRCxDQUFsQjtBQUNBRCwwQkFBc0IsQ0FBQzdELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBQ0Q7O0FBRUQsTUFBSXlELEtBQUssQ0FBQ1UsV0FBTixDQUFrQm1CLE1BQWxCLEtBQTZCLENBQWpDLEVBQW9DO0FBQ2xDLHdCQUNFLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQ0UsV0FBSyxFQUFFO0FBQ0x4RyxjQURLO0FBRUxpRCxhQUZLO0FBR0xULDZCQUhLO0FBSUxELHlCQUpLO0FBS0xyQiwyQkFMSztBQU1MaUYseUJBTks7QUFPTHRHLHVCQVBLO0FBUUxDLHNCQVJLO0FBU0xDLHlCQVRLO0FBVUxtRyxlQVZLO0FBV0xoRCx5QkFYSztBQVlMYSxvQkFaSztBQWFMc0I7QUFiSyxPQURUO0FBQUEsZ0JBaUJHSCxrQkFBa0IsaUJBQUkscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWpCekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBcUJELEdBdEJELE1Bc0JPO0FBQ0wsd0JBQ0UscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFDRSxXQUFLLEVBQUU7QUFDTGxGLGNBREs7QUFFTGlELGFBRks7QUFHTFQsNkJBSEs7QUFJTEQseUJBSks7QUFLTHJCLDJCQUxLO0FBTUxpRix5QkFOSztBQU9MdEcsdUJBUEs7QUFRTEMsc0JBUks7QUFTTEMseUJBVEs7QUFVTG1HLGVBVks7QUFXTGhELHlCQVhLO0FBWUxhLG9CQVpLO0FBYUxzQjtBQWJLLE9BRFQ7QUFBQSxpQkFpQkdWLEtBQUssQ0FBQ21DLFFBakJULEVBa0JHNUIsa0JBQWtCLGlCQUFJLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsQnpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBc0JEO0FBQ0YsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xLRDtBQU9BO0FBZU8sTUFBTTlFLGdCQUFnQixnQkFBR3FFLDJEQUFhLENBQUMsRUFBRCxDQUF0QztBQUVQLElBQUlzQyxnQkFBSjtBQUVPLFNBQVNDLGlCQUFULENBQTJCO0FBQUVGO0FBQUYsQ0FBM0IsRUFBaUU7QUFDdEUsUUFBTTtBQUFBLE9BQUNHLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCckMsc0RBQVEsQ0FBQyxPQUFPLEVBQVIsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ3ZELFFBQUQ7QUFBQSxPQUFXNkY7QUFBWCxNQUEwQnRDLHNEQUFRLENBQUMsS0FBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDeEQsV0FBRDtBQUFBLE9BQWMrRjtBQUFkLE1BQWdDdkMsc0RBQVEsQ0FBQyxLQUFELENBQTlDO0FBRUEsUUFBTXRELE9BQU8sR0FBR21CLElBQUksQ0FBQzJELEtBQUwsQ0FBV1ksSUFBSSxHQUFHLEVBQWxCLENBQWhCO0FBQ0EsUUFBTXpGLE9BQU8sR0FBR3lGLElBQUksR0FBRyxFQUF2QjtBQUVBLFFBQU07QUFBRWQ7QUFBRixNQUF3QmxHLHdEQUFVLENBQUNDLG9FQUFELENBQXhDO0FBRUFxRix5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJakUsUUFBUSxJQUFJMkYsSUFBSSxHQUFHLENBQXZCLEVBQTBCO0FBQ3hCRixzQkFBZ0IsR0FBR00sVUFBVSxDQUFDLE1BQU07QUFDbENILGVBQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBUDtBQUNELE9BRjRCLEVBRTFCLElBRjBCLENBQTdCO0FBR0QsS0FKRCxNQUlPLElBQUkzRixRQUFRLElBQUkyRixJQUFJLEtBQUssQ0FBekIsRUFBNEI7QUFDakNHLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FELGlCQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FoQix1QkFBaUI7QUFDbEI7QUFDRixHQVZRLEVBVU4sQ0FBQzdFLFFBQUQsRUFBVzJGLElBQVgsQ0FWTSxDQUFUOztBQVlBLFdBQVN4RixjQUFULEdBQTBCO0FBQ3hCMEYsZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNEOztBQUNELFdBQVNoSCxjQUFULEdBQTBCO0FBQ3hCbUgsZ0JBQVksQ0FBQ1AsZ0JBQUQsQ0FBWjtBQUNBSSxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0FELFdBQU8sQ0FBQyxPQUFPLEVBQVIsQ0FBUDtBQUNBRSxrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNEOztBQUVELHNCQUNFLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQ0UsU0FBSyxFQUFFO0FBQ0w3RixhQURLO0FBRUxDLGFBRks7QUFHTEMsb0JBSEs7QUFJTHRCLG9CQUpLO0FBS0xrQixpQkFMSztBQU1MQztBQU5LLEtBRFQ7QUFBQSxjQVNHd0Y7QUFUSDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RUQ7QUFDQTtBQUNBO0FBQ0E7QUFlTyxNQUFNcEQsV0FBVyxnQkFBR2UsMkRBQWEsQ0FBQyxFQUFELENBQWpDO0FBRUEsTUFBTThDLFlBQXNCLEdBQUk1QyxLQUFELElBQVc7QUFDL0MsUUFBTTtBQUFBLE9BQUNyQixRQUFEO0FBQUEsT0FBV2tFO0FBQVgsTUFBMEIzQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQzRDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCN0Msc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNyQixRQUFEO0FBQUEsT0FBV21FO0FBQVgsTUFBMEI5QyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ3RCLGlCQUFEO0FBQUEsT0FBb0JxRTtBQUFwQixNQUE0Qy9DLHNEQUFRLENBQUMsRUFBRCxDQUExRDtBQUNBLFFBQU07QUFBQSxPQUFDZ0QsYUFBRDtBQUFBLE9BQWdCQztBQUFoQixNQUFvQ2pELHNEQUFRLENBQUMsS0FBRCxDQUFsRDtBQUNBLFFBQU07QUFBQSxPQUFDa0QsbUJBQUQ7QUFBQSxPQUFzQkM7QUFBdEIsTUFBZ0RuRCxzREFBUSxDQUFDLEtBQUQsQ0FBOUQ7QUFDQSxRQUFNO0FBQUEsT0FBQ1EsV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NULHNEQUFRLENBQUMsRUFBRCxDQUE5QztBQUNBLFFBQU1vRCxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFdBQVNDLGFBQVQsR0FBd0I7QUFDdEJYLGVBQVcsQ0FBQyxFQUFELENBQVg7QUFDQUUsZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBQyxlQUFXLENBQUMsRUFBRCxDQUFYO0FBQ0FHLG9CQUFnQixDQUFDLEtBQUQsQ0FBaEI7QUFDQUUsMEJBQXNCLENBQUMsS0FBRCxDQUF0QjtBQUNBMUMsa0JBQWMsQ0FBQyxFQUFELENBQWQ7QUFDQXNDLHdCQUFvQixDQUFDLEVBQUQsQ0FBcEI7QUFDQTdCLG9EQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCLEVBQTNCO0FBQ0Q7O0FBQ0QsV0FBU29DLE9BQVQsQ0FBaUJDLENBQWpCLEVBQW9CO0FBQ2xCLFVBQU0vRSxRQUFRLEdBQUcrRSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBMUI7QUFDQWYsZUFBVyxDQUFDbEUsUUFBRCxDQUFYO0FBQ0Q7O0FBQ0QsV0FBU2tGLGVBQVQsQ0FBeUJILENBQXpCLEVBQTRCO0FBQzFCLFVBQU1aLFFBQVEsR0FBR1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQTFCO0FBQ0FiLGVBQVcsQ0FBQ0QsUUFBRCxDQUFYO0FBQ0Q7O0FBQ0QsV0FBU2dCLE1BQVQsR0FBa0I7QUFDaEJDLGdEQUFLLENBQ0ZDLElBREgsQ0FFSywwQ0FBeUNyRixRQUFTLGFBQVltRSxRQUFTLEVBRjVFLEVBSUdtQixJQUpILENBSVNDLEdBQUQsSUFBUztBQUNiLFVBQUlBLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxZQUFiLEVBQTJCO0FBQ3pCekQsc0JBQWMsQ0FBQ3VELEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxZQUFWLENBQWQ7QUFDQWpCLHdCQUFnQixDQUFDLElBQUQsQ0FBaEI7QUFFQVksb0RBQUssQ0FBQ00sR0FBTixDQUFXLDRDQUEyQzFGLFFBQVMsRUFBL0QsRUFDQ3NGLElBREQsQ0FDTUMsR0FBRyxJQUFJO0FBQ1hsQixxQkFBVyxDQUFDa0IsR0FBRyxDQUFDQyxJQUFKLENBQVMsQ0FBVCxFQUFZRyxJQUFiLENBQVg7QUFDQSxnQkFBTTFGLGlCQUFpQixHQUFHc0YsR0FBRyxDQUFDQyxJQUFKLENBQVMsQ0FBVCxFQUFZSSxVQUFaLENBQXVCQyxPQUF2QixDQUErQixZQUEvQixFQUE0QyxxQkFBNUMsQ0FBMUI7QUFDQXZCLDhCQUFvQixDQUFDckUsaUJBQUQsQ0FBcEI7QUFDRCxTQUxEO0FBTUEwRSxjQUFNLENBQUNtQixJQUFQLENBQVksT0FBWjtBQUNEO0FBQ0YsS0FqQkgsRUFrQkdDLEtBbEJILENBa0JVQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBbEJsQjtBQW1CRDs7QUFDRCxXQUFTRyxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBaUM7QUFDL0JoQixnREFBSyxDQUFDTSxHQUFOLENBQVcsdUVBQXNFVSxLQUFNLEVBQXZGLEVBQ0NkLElBREQsQ0FDTUMsR0FBRyxJQUFJO0FBQ1gsWUFBTTtBQUFDYyxlQUFEO0FBQVVDO0FBQVYsVUFBd0JmLEdBQUcsQ0FBQ0MsSUFBbEM7QUFDQWxCLDBCQUFvQixDQUFDK0IsT0FBRCxDQUFwQjtBQUNBaEMsaUJBQVcsQ0FBQ2lDLFVBQUQsQ0FBWDtBQUNBcEMsaUJBQVcsQ0FBQ3FCLEdBQUcsQ0FBQ0MsSUFBSixDQUFTZSxLQUFULENBQWUvSCxLQUFmLENBQXFCLEdBQXJCLEVBQTBCLENBQTFCLENBQUQsQ0FBWDtBQUNELEtBTkQ7QUFPRDs7QUFDRCxXQUFTZ0ksWUFBVCxDQUFzQjtBQUFDekU7QUFBRCxHQUF0QixFQUFvQztBQUNoQ1Usb0RBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJYLFdBQTNCO0FBQ0FDLGtCQUFjLENBQUNELFdBQUQsQ0FBZDtBQUNBMkMsMEJBQXNCLENBQUMsSUFBRCxDQUF0QjtBQUNBeUIscUJBQWlCLENBQUNwRSxXQUFELENBQWpCO0FBQ0E0QyxVQUFNLENBQUNtQixJQUFQLENBQVksT0FBWjtBQUNIOztBQUNELFdBQVMzRixPQUFULEdBQWtCO0FBQ2hCd0UsVUFBTSxDQUFDbUIsSUFBUCxDQUFZLEdBQVo7QUFDQWpCLGlCQUFhO0FBQ2Q7O0FBRUQsc0JBQ0UscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFDRSxTQUFLLEVBQUU7QUFDTDdFLGNBREs7QUFFTDhFLGFBRks7QUFHTFgsY0FISztBQUlMZSxxQkFKSztBQUtMaEYsY0FMSztBQU1MRCx1QkFOSztBQU9Ma0YsWUFQSztBQVFMcUIsa0JBUks7QUFTTEwsdUJBVEs7QUFVTGhHLGFBVks7QUFXTDBFO0FBWEssS0FEVDtBQUFBLGNBZUd4RCxLQUFLLENBQUNtQztBQWZUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW1CRCxDQXpGTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCUDtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRWUsU0FBU2lELElBQVQsQ0FBY3BGLEtBQWQsRUFBcUI7QUFDbEMsUUFBTTtBQUFFcEIscUJBQUY7QUFBcUJrRztBQUFyQixNQUEyQ3hKLHdEQUFVLENBQUN5RCxvRUFBRCxDQUEzRDtBQUNBLFFBQU11RSxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEzQyx5REFBUyxDQUFDLE1BQU07QUFDYixRQUFJWixLQUFLLENBQUNVLFdBQVYsRUFBdUI7QUFDdEIsVUFBSSxDQUFDOUIsaUJBQUwsRUFBd0JrRyxpQkFBaUIsQ0FBQzFELGlEQUFPLENBQUNpRCxHQUFSLENBQVksYUFBWixDQUFELENBQWpCO0FBQ3pCLEtBRkEsTUFFTWYsTUFBTSxDQUFDbUIsSUFBUCxDQUFZLEdBQVo7QUFDUixHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0UscUVBQUMsK0VBQUQ7QUFDRSxTQUFLLEVBQUV6RSxLQUFLLENBQUMxQixLQURmO0FBRUUscUJBQWlCLEVBQUUwQixLQUFLLENBQUNwQyxpQkFGM0I7QUFHRSx1QkFBbUIsRUFBRW9DLEtBQUssQ0FBQ3pELG1CQUg3QjtBQUlFLFVBQU0sRUFBRXlELEtBQUssQ0FBQzNFLE1BSmhCO0FBS0UsZUFBVyxFQUFFMkUsS0FBSyxDQUFDVSxXQUxyQjtBQUFBLDJCQU9FO0FBQUssZUFBUyxFQUFFOUUscUVBQU0sQ0FBQzZDLFNBQXZCO0FBQUEsOEJBQ0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBR0UscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQU9FLHFFQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixlQVNFLHFFQUFDLDhFQUFEO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRTtBQUFBLG9DQUNFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRSxxRUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGLGVBR0UscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFPRTtBQUFBLG1DQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0Q7QUFFTSxNQUFNNEcsa0JBQXNDLEdBQUcsTUFBT0MsR0FBUCxJQUFlO0FBQ25FLFFBQU07QUFDSmhILFNBREk7QUFFSlYscUJBRkk7QUFHSnJCLHVCQUhJO0FBSUpsQixVQUpJO0FBS0pxRjtBQUxJLE1BTUY0RSxHQUFHLENBQUNDLEdBQUosQ0FBUUMsT0FOWjtBQVFBLFNBQU87QUFDTHhGLFNBQUssRUFBRTtBQUNMMUIsV0FBSyxFQUFFbUgsTUFBTSxDQUFDbkgsS0FBRCxDQURSO0FBRUxWLHVCQUFpQixFQUFFNkgsTUFBTSxDQUFDN0gsaUJBQUQsQ0FGcEI7QUFHTHJCLHlCQUFtQixFQUFFa0osTUFBTSxDQUFDbEosbUJBQUQsQ0FIdEI7QUFJTGxCLFlBQU0sRUFBRUEsTUFBTSxLQUFLLE9BQVgsR0FBcUIsS0FBckIsR0FBNkIsSUFKaEM7QUFLTHFGLGlCQUFXLEVBQUVBO0FBTFI7QUFERixHQUFQO0FBU0QsQ0FsQk0sQzs7Ozs7Ozs7Ozs7QUNsRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEEsa0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2hvbWUudHN4XCIpO1xuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9DaGFsbGVuZ2VDb250ZXh0c1wiO1xyXG5pbXBvcnQgeyBDb3VudGRvd25Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHRzXCI7XHJcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL0NoYWxsZW5nZUJveC5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGFsbGVuZ2VCb3goKSB7XHJcbiAgICBjb25zdCB7IGFjdGl2ZUNoYWxsZW5nZSwgcmVzZXRDaGFsbGVuZ2UsIGNvbXBsZXRlQ2hhbGxlbmdlLCBpc0RhcmsgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpXHJcbiAgICBjb25zdCB7cmVzZXRDb3VudGRvd259ID0gdXNlQ29udGV4dChDb3VudGRvd25Db250ZXh0KVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFsbGVuZ2VTdWNjZWRlZCgpe1xyXG4gICAgICBjb21wbGV0ZUNoYWxsZW5nZSgpXHJcbiAgICAgIHJlc2V0Q291bnRkb3duKClcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYWxsZW5nZUZhaWxlZCgpe1xyXG4gICAgICByZXNldENoYWxsZW5nZSgpXHJcbiAgICAgIHJlc2V0Q291bnRkb3duKClcclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtpc0RhcmsgPyBgJHtTdHlsZXMuY2hhbGxlbmdlQm94Q29udGFpbmVyfSAke1N0eWxlcy5kYXJrVGhlbWV9YDogYCR7U3R5bGVzLmNoYWxsZW5nZUJveENvbnRhaW5lcn1gfT5cclxuICAgICAge2FjdGl2ZUNoYWxsZW5nZSA/IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY2hhbGxlbmdlQWN0aXZlfT5cclxuICAgICAgICAgICAgICA8aGVhZGVyPkdhbmhlIHthY3RpdmVDaGFsbGVuZ2UuYW1vdW50fXhwPC9oZWFkZXI+XHJcblxyXG4gICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaWNvbnMvJHthY3RpdmVDaGFsbGVuZ2UudHlwZX0uc3ZnYH0vPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz5Ob3ZvIGRlc2FmaW88L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgIDxwPnthY3RpdmVDaGFsbGVuZ2UuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcblxyXG4gICAgICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtTdHlsZXMuY2hhbGxlbmdlRmFpbGVkQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVDaGFsbGVuZ2VGYWlsZWR9PkZhbGhlaTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtTdHlsZXMuY2hhbGxlbmdlU3VjY2VkZWRCdXR0b259IG9uQ2xpY2s9e2hhbmRsZUNoYWxsZW5nZVN1Y2NlZGVkfT5Db21wbGV0ZWk8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuY2hhbGxlbmdlTm90QWN0aXZlfT5cclxuICAgICAgICAgIDxzdHJvbmc+RmluYWxpemUgdW0gY2ljbG8gcGFyYSByZWNlYmVyIHVtIGRlc2FmaW88L3N0cm9uZz5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cImljb25zL2xldmVsLXVwLnN2Z1wiIGFsdD1cIkxldmVsIHVwXCIgLz5cclxuICAgICAgICAgICAgQXZhbmNlIGRlIGxldmVsIGNvbXBsZXRhbmRvIGRlc2FmaW9zXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0cy9DaGFsbGVuZ2VDb250ZXh0cydcclxuaW1wb3J0IFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ3MubW9kdWxlLmNzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbXBsZXRlZENoYWxsZW5ncygpe1xyXG4gICAgY29uc3QgeyBjaGFsbGVuZ2VzQ29tcGxldGVkLCBpc0Rhcmt9ID0gdXNlQ29udGV4dChDaGFsbGVuZ2VzQ29udGV4dClcclxuICAgIFxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtpc0RhcmsgPyBgJHtTdHlsZXMuQ29tcGxldGVkQ2hhbGxlbmdzQ29udGFpbmVyfSAke1N0eWxlcy5kYXJrVGhlbWV9YCA6IGAke1N0eWxlcy5Db21wbGV0ZWRDaGFsbGVuZ3NDb250YWluZXJ9YH0+XHJcbiAgICAgICAgICAgIDxzcGFuPkRlc2FmaW9zIENvbXBsZXRvczwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+e2NoYWxsZW5nZXNDb21wbGV0ZWR9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvQ291bnREb3duLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgQWlGaWxsQ2hlY2tDaXJjbGUgfSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb3VudGRvd25Db250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NvdW50ZG93bkNvbnRleHRzXCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL0NoYWxsZW5nZUNvbnRleHRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb3VudERvd24oKSB7XHJcbiAgY29uc3Qge1xyXG4gICAgaGFzRmluaXNoZWQsXHJcbiAgICBpc0FjdGl2ZSxcclxuICAgIG1pbnV0ZXMsXHJcbiAgICBzZWNvbmRzLFxyXG4gICAgcmVzZXRDb3VudGRvd24sXHJcbiAgICBzdGFydENvdW50ZG93bixcclxuICB9ID0gdXNlQ29udGV4dChDb3VudGRvd25Db250ZXh0KTtcclxuICBjb25zdCB7aXNEYXJrfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpXHJcblxyXG4gIGNvbnN0IFttaW51dGVMZWZ0LCBtaW51dGVSaWdodF0gPSBTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgXCIwXCIpLnNwbGl0KFwiXCIpO1xyXG4gIGNvbnN0IFtzZWNvbmRMZWZ0LCBzZWNvbmRSaWdodF0gPSBTdHJpbmcoc2Vjb25kcykucGFkU3RhcnQoMiwgXCIwXCIpLnNwbGl0KFwiXCIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2lzRGFyayA/IGAke1N0eWxlcy5Db3VudERvd25Db250YWluZXJ9ICR7U3R5bGVzLmRhcmtUaGVtZX1gIDogYCR7U3R5bGVzLkNvdW50RG93bkNvbnRhaW5lcn1gfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+e21pbnV0ZUxlZnR9PC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+e21pbnV0ZVJpZ2h0fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3Bhbj46PC9zcGFuPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57c2Vjb25kTGVmdH08L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj57c2Vjb25kUmlnaHR9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtoYXNGaW5pc2hlZCA/IChcclxuICAgICAgICA8YnV0dG9uIGRpc2FibGVkIGNsYXNzTmFtZT17U3R5bGVzLkNvdW50ZG93bkJ1dHRvbn0+XHJcbiAgICAgICAgICBDaWNsbyBFbmNlcnJhZG9cclxuICAgICAgICAgIDxBaUZpbGxDaGVja0NpcmNsZSAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApIDogaXNBY3RpdmUgPyAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2lzRGFyayA/IGAke1N0eWxlcy5Db3VudGRvd25CdXR0b259ICR7U3R5bGVzLkNvdW50ZG93bkJ1dHRvbkFjYXRpdmV9ICR7U3R5bGVzLkNvdW50ZG93bkJ1dHRvbkFjYXRpdmVEYXJrVGhlbWV9YCA6IGAke1N0eWxlcy5Db3VudGRvd25CdXR0b259ICR7U3R5bGVzLkNvdW50ZG93bkJ1dHRvbkFjYXRpdmV9YH1cclxuICAgICAgICAgIG9uQ2xpY2s9e3Jlc2V0Q291bnRkb3dufVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFiYW5kb25hciBDaWNsb1xyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtpc0RhcmsgPyBgJHtTdHlsZXMuQ291bnRkb3duQnV0dG9ufSAke1N0eWxlcy5Db3VudGRvd25CdXR0b25EYXJrVGhlbWV9YCA6IGAke1N0eWxlcy5Db3VudGRvd25CdXR0b259YH1cclxuICAgICAgICAgIG9uQ2xpY2s9e3N0YXJ0Q291bnRkb3dufVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEluw61jaWFyIHVtIGNpY2xvXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9DaGFsbGVuZ2VDb250ZXh0c1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9FeHBlcmllbmNlQmFyLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4cGVyaWVuY2VCYXIoKSB7XHJcbiAgY29uc3QgeyBjdXJyZW50RXhwZXJpZW5jZSwgZXhwZXJpZW5jZVRvTmV4dExldmVsLCBpc0RhcmsgfSA9IHVzZUNvbnRleHQoXHJcbiAgICBDaGFsbGVuZ2VzQ29udGV4dFxyXG4gICk7XHJcbiAgY29uc3QgcGVyY2VudFRvTmV4dExldmVsID0gTWF0aC5yb3VuZChjdXJyZW50RXhwZXJpZW5jZSAqIDEwMCAvIGV4cGVyaWVuY2VUb05leHRMZXZlbCApIFxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17aXNEYXJrID8gYCR7c3R5bGVzLmV4cGVyaWVuY2VCYXJ9ICR7c3R5bGVzLmRhcmtUaGVtZX1gIDogYCR7c3R5bGVzLmV4cGVyaWVuY2VCYXJ9YH0+XHJcbiAgICAgIDxzcGFuPjAgeHA8L3NwYW4+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogYCR7cGVyY2VudFRvTmV4dExldmVsfSVgIH19IC8+XHJcbiAgICAgICAgey8qIDxkaXYgc3R5bGU9e3sgd2lkdGg6IGAke3BlcmNlbnRUb05leHRMZXZlbH0lYCB9fSAvPiAqL31cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jdXJyZW50RXhwZXJpZW5jZX0gc3R5bGU9e3sgbGVmdDogYCR7cGVyY2VudFRvTmV4dExldmVsfSVgIH19PlxyXG4gICAgICAgICAge2N1cnJlbnRFeHBlcmllbmNlfSB4cFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzcGFuPntleHBlcmllbmNlVG9OZXh0TGV2ZWx9IHhwPC9zcGFuPlxyXG4gICAgPC9oZWFkZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0LCBDaGFsbGVuZ2VzUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvQ2hhbGxlbmdlQ29udGV4dHNcIjtcclxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMZXZlbFVwTW9kYWwoKSB7XHJcbiAgICBjb25zdCB7bGV2ZWwsIGNsb3NlTGV2ZWxVcE1vZGFsfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLm92ZXJsYXl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGhlYWRlcj57bGV2ZWx9PC9oZWFkZXI+XHJcbiAgICAgICAgPHN0cm9uZz5QYXJhYmVuczwvc3Ryb25nPlxyXG4gICAgICAgIDxwPlZvY8OqIGFsY2FuY291IHVtIG5vdm8gbGV2ZWwuPC9wPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Nsb3NlTGV2ZWxVcE1vZGFsfT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiL2ljb25zL2Nsb3NlLnN2Z1wiIGFsdD1cIkZlY2hhciBNb2RhbFwiIC8+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQ2hhbGxlbmdlQ29udGV4dHNcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvTG9naW5Db250ZXh0c1wiO1xyXG5pbXBvcnQgU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9Qcm9maWxlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFJpTG9nb3V0Qm94UkxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGUoKSB7XHJcbiAgY29uc3QgeyBsZXZlbCwgaXNEYXJrIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuICBjb25zdCB7IHVzZXJuYW1lLCB1cmxQcm9maWxlUGljdHVyZSwgZnVsbE5hbWUsIFNpZ25PdXQgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICBpc0RhcmtcclxuICAgICAgICAgID8gYCR7U3R5bGVzLnByb2ZpbGVDb250YWluZXJ9ICR7U3R5bGVzLmRhcmtUaGVtZX1gXHJcbiAgICAgICAgICA6IGAke1N0eWxlcy5wcm9maWxlQ29udGFpbmVyfWBcclxuICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgIDxpbWcgc3JjPXt1cmxQcm9maWxlUGljdHVyZX0gYWx0PVwiXCIgLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMuaW5mb0xvZ2lufT5cclxuICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzdHJvbmc+e2Z1bGxOYW1lfTwvc3Ryb25nPlxyXG4gICAgICAgICAgPHA+e3VzZXJuYW1lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cImljb25zL2xldmVsLnN2Z1wiIGFsdD1cIkxldmVsXCIgLz5cclxuICAgICAgICAgIExldmVsIHtsZXZlbH1cclxuICAgICAgICA8L3A+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZXMubG9nb3V0fT5cclxuICAgICAgICA8UmlMb2dvdXRCb3hSTGluZSBvbkNsaWNrPXtTaWduT3V0fS8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ2hhbGxlbmdlc0NvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQ2hhbGxlbmdlQ29udGV4dHNcIjtcclxuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCI7XHJcbmltcG9ydCBTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL0NoYW5nZVRoZW1lQ29sb3IubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHsgQnNNb29uLCBCc0JyaWdodG5lc3NIaWdoIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XHJcbmltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFya1RoZW1lKCkge1xyXG4gIGNvbnN0IHsgaXNEYXJrLCBTZXREYXJrVGhlbWUgfSA9IHVzZUNvbnRleHQoQ2hhbGxlbmdlc0NvbnRleHQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlcy5DaGFuZ2VUaGVtZUNvbG9yQ29udGFpbmVyfT5cclxuICAgICAgPFN3aXRjaFxyXG4gICAgICAgIG9uQ29sb3I9XCIjNEI0QjRCXCJcclxuICAgICAgICBvbkhhbmRsZUNvbG9yPVwiIzNCOUUyMlwiXHJcbiAgICAgICAgb2ZmQ29sb3I9XCIjYmRiYmJiXCJcclxuICAgICAgICBvZmZIYW5kbGVDb2xvcj1cIiM1OTY1RTBcIlxyXG4gICAgICAgIGNoZWNrZWQ9e2lzRGFya31cclxuICAgICAgICBvbkNoYW5nZT17aXNTZXQgPT4gU2V0RGFya1RoZW1lKGlzU2V0KX1cclxuICAgICAgICBoYW5kbGVEaWFtZXRlcj17MzB9XHJcbiAgICAgICAgdW5jaGVja2VkSWNvbj17PEJzTW9vbiBzdHlsZT17e2hlaWdodDogJzEwMCUnLG1hcmdpbjogMCwgcGFkZGluZzogMCwgcG9zaXRpb246ICdhYnNvbHV0ZScsIHJpZ2h0OiAzLCBjb2xvcjogJyMwMDAnLCBib3R0b206IDF9fS8+fVxyXG4gICAgICAgIGNoZWNrZWRJY29uPXs8QnNCcmlnaHRuZXNzSGlnaCBzdHlsZT17e2hlaWdodDogJzEwMCUnLG1hcmdpbjogMCwgcGFkZGluZzogMCwgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IDMsIGNvbG9yOiAnI2ZmZid9fS8+fVxyXG4gICAgICAgIGJveFNoYWRvdz1cIjBweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC42KVwiXHJcbiAgICAgICAgYWN0aXZlQm94U2hhZG93PVwiMHB4IDBweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMilcIlxyXG4gICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInJlYWN0LXN3aXRjaFwiXHJcbiAgICAgICAgaWQ9XCJtYXRlcmlhbC1zd2l0Y2hcIlxyXG4gICAgICAvPlxyXG4gICAgICBcclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjaGFsbGVuZ2VzIGZyb20gXCIuLi8uLi9jaGFsbGVuZ2VzLmpzb25cIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBMZXZlbFVwTW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MZXZlbFVwTW9kYWxcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuXHJcbmludGVyZmFjZSBDaGFsbGVuZ2Uge1xyXG4gIHR5cGU6IFwiYm9keVwiIHwgXCJleWVcIjtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGFtb3VudDogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2hhbGxlbmdlQ29udGV4dERhdGEge1xyXG4gIGxldmVsOiBudW1iZXI7XHJcbiAgZXhwZXJpZW5jZVRvTmV4dExldmVsOiBudW1iZXI7XHJcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgYWN0aXZlQ2hhbGxlbmdlOiBDaGFsbGVuZ2U7XHJcbiAgaXNEYXJrOiBib29sZWFuO1xyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbiAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgcmVzZXRDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgY29tcGxldGVDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XHJcbiAgbGV2ZWxVcDogKCkgPT4gdm9pZDtcclxuICBjbG9zZUxldmVsVXBNb2RhbDogKCkgPT4gdm9pZDtcclxuICBTZXREYXJrVGhlbWU6IChpc1NldCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENoYWxsZW5nZXNQcm92aWRlclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gIGxldmVsOiBudW1iZXI7XHJcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcclxuICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XHJcbiAgaXNEYXJrOiBib29sZWFuO1xyXG4gIGFjY2Vzc1Rva2VuOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGFsbGVuZ2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQ2hhbGxlbmdlQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENoYWxsZW5nZXNQcm92aWRlcihwcm9wczogQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpIHtcclxuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKHByb3BzLmxldmVsID8/IDEpO1xyXG4gIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUoXHJcbiAgICBwcm9wcy5jdXJyZW50RXhwZXJpZW5jZSA/PyAwXHJcbiAgKTtcclxuICBjb25zdCBbY2hhbGxlbmdlc0NvbXBsZXRlZCwgc2V0Q2hhbGxlbmdlc0NvbXBsZXRlZF0gPSB1c2VTdGF0ZShcclxuICAgIHByb3BzLmNoYWxsZW5nZXNDb21wbGV0ZWQgPz8gMFxyXG4gICk7XHJcbiAgY29uc3QgW2FjdGl2ZUNoYWxsZW5nZSwgc2V0QWN0aXZlQ2hhbGxlbmdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwgMik7XHJcbiAgY29uc3QgW2lzTGV2ZWxVcE1vZGFsT3Blbiwgc2V0SXNMZXZlbFVwTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNEYXJrLCBzZXRJc0RhcmtdID0gdXNlU3RhdGUocHJvcHMuaXNEYXJrID8/IGZhbHNlKTtcclxuICBjb25zdCBbYWNjZXNzVG9rZW4sIHNldEFjY2Vzc1Rva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKE5vdGlmaWNhdGlvbikgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XHJcbiAgICBpZiAoaXNEYXJrKSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJib2R5LWR0XCIpO1xyXG4gICAgZWxzZSBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5LWR0XCIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIENvb2tpZXMuc2V0KFwiaXNEYXJrXCIsIGlzRGFyay50b1N0cmluZygpKTtcclxuICB9LCBbaXNEYXJrXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBDb29raWVzLnNldChcImxldmVsXCIsIGxldmVsLnRvU3RyaW5nKCkpO1xyXG4gICAgQ29va2llcy5zZXQoXCJjdXJyZW50RXhwZXJpZW5jZVwiLCBjdXJyZW50RXhwZXJpZW5jZS50b1N0cmluZygpKTtcclxuICAgIENvb2tpZXMuc2V0KFwiY2hhbGxlbmdlc0NvbXBsZXRlZFwiLCBjaGFsbGVuZ2VzQ29tcGxldGVkLnRvU3RyaW5nKCkpO1xyXG4gIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWRdKTtcclxuXHJcbiAgZnVuY3Rpb24gU2V0RGFya1RoZW1lKGlzU2V0KSB7XHJcbiAgICBpZiAoaXNTZXQpIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImJvZHktZHRcIik7XHJcbiAgICBlbHNlIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImJvZHktZHRcIik7XHJcblxyXG4gICAgQ29va2llcy5zZXQoXCJpc0RhcmtcIiwgaXNEYXJrLnRvU3RyaW5nKCkpO1xyXG4gICAgc2V0SXNEYXJrKGlzU2V0KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcclxuICAgIHNldExldmVsKGxldmVsICsgMSk7XHJcbiAgICBzZXRJc0xldmVsVXBNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNsb3NlTGV2ZWxVcE1vZGFsKCkge1xyXG4gICAgc2V0SXNMZXZlbFVwTW9kYWxPcGVuKGZhbHNlKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XHJcbiAgICBjb25zdCByYW5kb21DaGFsbGVuZ0luZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhbGxlbmdlcy5sZW5ndGgpO1xyXG4gICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ0luZGV4XTtcclxuICAgIHNldEFjdGl2ZUNoYWxsZW5nZShjaGFsbGVuZ2UpO1xyXG5cclxuICAgIGlmIChBdWRpbykge1xyXG4gICAgICBuZXcgQXVkaW8oXCIvbm90aWZpY2F0aW9uLm1wM1wiKS5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKE5vdGlmaWNhdGlvbikge1xyXG4gICAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09IFwiZ3JhbnRlZFwiKSB7XHJcbiAgICAgICAgbmV3IE5vdGlmaWNhdGlvbihcIk5vdm8gZGVzYWZpb1wiLCB7XHJcbiAgICAgICAgICBib2R5OiBgVmFsZW5kbzogJHtjaGFsbGVuZ2UuYW1vdW50fXhwIWAsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZnVuY3Rpb24gcmVzZXRDaGFsbGVuZ2UoKSB7XHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGNvbXBsZXRlQ2hhbGxlbmdlKCkge1xyXG4gICAgaWYgKCFhY3RpdmVDaGFsbGVuZ2UpIHJldHVybjtcclxuICAgIGNvbnN0IHsgYW1vdW50IH0gPSBhY3RpdmVDaGFsbGVuZ2U7XHJcbiAgICBsZXQgZmluYWxFeHBlcmllbmNlID0gY3VycmVudEV4cGVyaWVuY2UgKyBhbW91bnQ7XHJcbiAgICBpZiAoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCkge1xyXG4gICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XHJcbiAgICAgIGxldmVsVXAoKTtcclxuICAgIH1cclxuICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XHJcbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UobnVsbCk7XHJcbiAgICBzZXRDaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKTtcclxuICB9XHJcblxyXG4gIGlmIChwcm9wcy5hY2Nlc3NUb2tlbi5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICBpc0RhcmssXHJcbiAgICAgICAgICBsZXZlbCxcclxuICAgICAgICAgIGV4cGVyaWVuY2VUb05leHRMZXZlbCxcclxuICAgICAgICAgIGN1cnJlbnRFeHBlcmllbmNlLFxyXG4gICAgICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZCxcclxuICAgICAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxyXG4gICAgICAgICAgcmVzZXRDaGFsbGVuZ2UsXHJcbiAgICAgICAgICBjb21wbGV0ZUNoYWxsZW5nZSxcclxuICAgICAgICAgIGxldmVsVXAsXHJcbiAgICAgICAgICBjbG9zZUxldmVsVXBNb2RhbCxcclxuICAgICAgICAgIFNldERhcmtUaGVtZSxcclxuICAgICAgICAgIGFjY2Vzc1Rva2VuLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7aXNMZXZlbFVwTW9kYWxPcGVuICYmIDxMZXZlbFVwTW9kYWwgLz59XHJcbiAgICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgaXNEYXJrLFxyXG4gICAgICAgICAgbGV2ZWwsXHJcbiAgICAgICAgICBleHBlcmllbmNlVG9OZXh0TGV2ZWwsXHJcbiAgICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgICAgICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXHJcbiAgICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcclxuICAgICAgICAgIGFjdGl2ZUNoYWxsZW5nZSxcclxuICAgICAgICAgIHJlc2V0Q2hhbGxlbmdlLFxyXG4gICAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXHJcbiAgICAgICAgICBsZXZlbFVwLFxyXG4gICAgICAgICAgY2xvc2VMZXZlbFVwTW9kYWwsXHJcbiAgICAgICAgICBTZXREYXJrVGhlbWUsXHJcbiAgICAgICAgICBhY2Nlc3NUb2tlbixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIHtpc0xldmVsVXBNb2RhbE9wZW4gJiYgPExldmVsVXBNb2RhbCAvPn1cclxuICAgICAgPC9DaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgY3JlYXRlQ29udGV4dCxcclxuICBSZWFjdE5vZGUsXHJcbiAgdXNlQ29udGV4dCxcclxuICB1c2VFZmZlY3QsXHJcbiAgdXNlU3RhdGUsXHJcbn0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENoYWxsZW5nZXNDb250ZXh0IH0gZnJvbSBcIi4vQ2hhbGxlbmdlQ29udGV4dHNcIjtcclxuXHJcbmludGVyZmFjZSBDb3VudGRvd25Db250ZXh0RGF0YSB7XHJcbiAgbWludXRlczogbnVtYmVyO1xyXG4gIHNlY29uZHM6IG51bWJlcjtcclxuICBoYXNGaW5pc2hlZDogYm9vbGVhbjtcclxuICBpc0FjdGl2ZTogYm9vbGVhbjtcclxuICBzdGFydENvdW50ZG93bjogKCkgPT4gdm9pZDtcclxuICByZXNldENvdW50ZG93bjogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIENvdW50ZG93blByb3ZpZGVyUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb3VudGRvd25Db250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDb3VudGRvd25Db250ZXh0RGF0YSk7XHJcblxyXG5sZXQgY291bnRkb3duVGltZW91dDogTm9kZUpTLlRpbWVvdXQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQ291bnRkb3duUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBDb3VudGRvd25Qcm92aWRlclByb3BzKSB7XHJcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMC4wNSAqIDYwKTtcclxuICBjb25zdCBbaXNBY3RpdmUsIHNldElzQWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaGFzRmluaXNoZWQsIHNldEhhc0ZpbmlzaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZSAvIDYwKTtcclxuICBjb25zdCBzZWNvbmRzID0gdGltZSAlIDYwO1xyXG5cclxuICBjb25zdCB7IHN0YXJ0TmV3Q2hhbGxlbmdlIH0gPSB1c2VDb250ZXh0KENoYWxsZW5nZXNDb250ZXh0KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChpc0FjdGl2ZSAmJiB0aW1lID4gMCkge1xyXG4gICAgICBjb3VudGRvd25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGltZSh0aW1lIC0gMSk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfSBlbHNlIGlmIChpc0FjdGl2ZSAmJiB0aW1lID09PSAwKSB7XHJcbiAgICAgIHNldEhhc0ZpbmlzaGVkKHRydWUpO1xyXG4gICAgICBzZXRJc0FjdGl2ZShmYWxzZSk7XHJcbiAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlKCk7XHJcbiAgICB9XHJcbiAgfSwgW2lzQWN0aXZlLCB0aW1lXSk7XHJcblxyXG4gIGZ1bmN0aW9uIHN0YXJ0Q291bnRkb3duKCkge1xyXG4gICAgc2V0SXNBY3RpdmUodHJ1ZSk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHJlc2V0Q291bnRkb3duKCkge1xyXG4gICAgY2xlYXJUaW1lb3V0KGNvdW50ZG93blRpbWVvdXQpO1xyXG4gICAgc2V0SXNBY3RpdmUoZmFsc2UpO1xyXG4gICAgc2V0VGltZSgwLjA1ICogNjApO1xyXG4gICAgc2V0SGFzRmluaXNoZWQoZmFsc2UpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvdW50ZG93bkNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBtaW51dGVzLFxyXG4gICAgICAgIHNlY29uZHMsXHJcbiAgICAgICAgc3RhcnRDb3VudGRvd24sXHJcbiAgICAgICAgcmVzZXRDb3VudGRvd24sXHJcbiAgICAgICAgaGFzRmluaXNoZWQsXHJcbiAgICAgICAgaXNBY3RpdmUsXHJcbiAgICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NvdW50ZG93bkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuaW50ZXJmYWNlIFVzZXJDb250ZXh0RGF0YSB7XHJcbiAgdXNlcm5hbWU6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgdXJsUHJvZmlsZVBpY3R1cmU6IHN0cmluZztcclxuICBzZXRVc2VyOiAoZSkgPT4gdm9pZDtcclxuICBzZXRVc2VyUGFzc3dvcmQ6IChlKSA9PiB2b2lkO1xyXG4gIFNpZ25JbjogKCkgPT4gdm9pZDtcclxuICBTaWduSW5Hb29nbGU6IChyZXMpID0+IHZvaWQ7XHJcbiAgU2lnbk91dDogKCkgPT4gdm9pZDtcclxuICBTZWFyY2hVc2VyRGV0YWlsczogKHRva2VuKSA9PiB2b2lkO1xyXG4gIENsZWFyVXNlckluZm86ICgpID0+IHZvaWQ7XHJcbn1cclxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBVc2VyQ29udGV4dERhdGEpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJQcm92aWRlcjogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Z1bGxOYW1lLCBzZXRGdWxsTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXJsUHJvZmlsZVBpY3R1cmUsIHNldFVybFByb2ZpbGVQaWN0dXJlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFthdXRoZW50aWNhdGVkLCBzZXRBdXRoZW50aWNhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZ29vZ2xlQXV0aGVudGljYXRlZCwgc2V0R29vZ2xlQXV0aGVudGljYXRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgZnVuY3Rpb24gQ2xlYXJVc2VySW5mbygpe1xyXG4gICAgc2V0VXNlcm5hbWUoJycpXHJcbiAgICBzZXRQYXNzd29yZCgnJylcclxuICAgIHNldEZ1bGxOYW1lKCcnKVxyXG4gICAgc2V0QXV0aGVudGljYXRlZChmYWxzZSlcclxuICAgIHNldEdvb2dsZUF1dGhlbnRpY2F0ZWQoZmFsc2UpXHJcbiAgICBzZXRBY2Nlc3NUb2tlbignJylcclxuICAgIHNldFVybFByb2ZpbGVQaWN0dXJlKCcnKVxyXG4gICAgQ29va2llcy5zZXQoJ2FjY2Vzc1Rva2VuJywgJycpXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNldFVzZXIoZSkge1xyXG4gICAgY29uc3QgdXNlcm5hbWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIHNldFVzZXJuYW1lKHVzZXJuYW1lKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gc2V0VXNlclBhc3N3b3JkKGUpIHtcclxuICAgIGNvbnN0IHBhc3N3b3JkID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRQYXNzd29yZChwYXNzd29yZCk7XHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFNpZ25JbigpIHtcclxuICAgIGF4aW9zXHJcbiAgICAgIC5wb3N0KFxyXG4gICAgICAgIGAvYXBpL2F1dGg/Z3JhbnRfdHlwZT1wYXNzd29yZCZ1c2VybmFtZT0ke3VzZXJuYW1lfSZwYXNzd29yZD0ke3Bhc3N3b3JkfWBcclxuICAgICAgKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5kYXRhLmFjY2Vzc190b2tlbikge1xyXG4gICAgICAgICAgc2V0QWNjZXNzVG9rZW4ocmVzLmRhdGEuYWNjZXNzX3Rva2VuKVxyXG4gICAgICAgICAgc2V0QXV0aGVudGljYXRlZCh0cnVlKTtcclxuXHJcbiAgICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vZ2l0bGFiLmNvbS9hcGkvdjQvdXNlcnM/dXNlcm5hbWU9JHt1c2VybmFtZX1gKVxyXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgc2V0RnVsbE5hbWUocmVzLmRhdGFbMF0ubmFtZSlcclxuICAgICAgICAgICAgY29uc3QgdXJsUHJvZmlsZVBpY3R1cmUgPSByZXMuZGF0YVswXS5hdmF0YXJfdXJsLnJlcGxhY2UoJzEwLjEwLjEuMzUnLCcxNzcuODQuMjQ2LjEyNjo5OTU1JylcclxuICAgICAgICAgICAgc2V0VXJsUHJvZmlsZVBpY3R1cmUodXJsUHJvZmlsZVBpY3R1cmUpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgcm91dGVyLnB1c2goJy9ob21lJylcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gU2VhcmNoVXNlckRldGFpbHModG9rZW4pe1xyXG4gICAgYXhpb3MuZ2V0KGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvdXNlcmluZm8/YWx0PWpzb24mYWNjZXNzX3Rva2VuPSR7dG9rZW59YClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGNvbnN0IHtwaWN0dXJlLCBnaXZlbl9uYW1lfSA9IHJlcy5kYXRhXHJcbiAgICAgIHNldFVybFByb2ZpbGVQaWN0dXJlKHBpY3R1cmUpXHJcbiAgICAgIHNldEZ1bGxOYW1lKGdpdmVuX25hbWUpXHJcbiAgICAgIHNldFVzZXJuYW1lKHJlcy5kYXRhLmVtYWlsLnNwbGl0KFwiQFwiKVswXSlcclxuICAgIH0pXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIFNpZ25Jbkdvb2dsZSh7YWNjZXNzVG9rZW59KXtcclxuICAgICAgQ29va2llcy5zZXQoJ2FjY2Vzc1Rva2VuJywgYWNjZXNzVG9rZW4pXHJcbiAgICAgIHNldEFjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuKVxyXG4gICAgICBzZXRHb29nbGVBdXRoZW50aWNhdGVkKHRydWUpXHJcbiAgICAgIFNlYXJjaFVzZXJEZXRhaWxzKGFjY2Vzc1Rva2VuKVxyXG4gICAgICByb3V0ZXIucHVzaCgnL2hvbWUnKVxyXG4gIH1cclxuICBmdW5jdGlvbiBTaWduT3V0KCl7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICBDbGVhclVzZXJJbmZvKClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VXNlckNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICBzZXRVc2VyLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgIHNldFVzZXJQYXNzd29yZCxcclxuICAgICAgICBmdWxsTmFtZSxcclxuICAgICAgICB1cmxQcm9maWxlUGljdHVyZSxcclxuICAgICAgICBTaWduSW4sXHJcbiAgICAgICAgU2lnbkluR29vZ2xlLFxyXG4gICAgICAgIFNlYXJjaFVzZXJEZXRhaWxzLFxyXG4gICAgICAgIFNpZ25PdXQsXHJcbiAgICAgICAgQ2xlYXJVc2VySW5mb1xyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgRXhwZXJpZW5jZUJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9FeHBlcmllbmNlQmFyXCI7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2ZpbGVcIjtcclxuaW1wb3J0IENvbXBsZXRlZENoYWxsZW5ncyBmcm9tIFwiLi4vY29tcG9uZW50cy9Db21wbGV0ZWRDaGFsbGVuZ3NcIjtcclxuaW1wb3J0IENvdW50RG93biBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudERvd25cIjtcclxuaW1wb3J0IENoYWxsZW5nZUJveCBmcm9tIFwiLi4vY29tcG9uZW50cy9DaGFsbGVuZ2VCb3hcIjtcclxuaW1wb3J0IENoYW5nZVRoZW1lQ29sb3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2V0RGFya1RoZW1lXCI7XHJcblxyXG5pbXBvcnQgeyBDb3VudGRvd25Qcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0cy9Db3VudGRvd25Db250ZXh0c1wiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2VzUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvQ2hhbGxlbmdlQ29udGV4dHNcIjtcclxuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvTG9naW5Db250ZXh0c1wiO1xyXG5cclxuaW1wb3J0IFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3BhZ2VzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgY29uc3QgeyB1cmxQcm9maWxlUGljdHVyZSwgU2VhcmNoVXNlckRldGFpbHMgfSA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIGlmIChwcm9wcy5hY2Nlc3NUb2tlbikge1xyXG4gICAgICBpZiAoIXVybFByb2ZpbGVQaWN0dXJlKSBTZWFyY2hVc2VyRGV0YWlscyhDb29raWVzLmdldChcImFjY2Vzc1Rva2VuXCIpKTtcclxuICAgIH0gZWxzZSByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2hhbGxlbmdlc1Byb3ZpZGVyXHJcbiAgICAgIGxldmVsPXtwcm9wcy5sZXZlbH1cclxuICAgICAgY3VycmVudEV4cGVyaWVuY2U9e3Byb3BzLmN1cnJlbnRFeHBlcmllbmNlfVxyXG4gICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkPXtwcm9wcy5jaGFsbGVuZ2VzQ29tcGxldGVkfVxyXG4gICAgICBpc0Rhcms9e3Byb3BzLmlzRGFya31cclxuICAgICAgYWNjZXNzVG9rZW49e3Byb3BzLmFjY2Vzc1Rva2VufVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPENoYW5nZVRoZW1lQ29sb3IgLz5cclxuXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8dGl0bGU+SW7DrWNpbyB8IG1vdmUuaXQ8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgPEV4cGVyaWVuY2VCYXIgLz5cclxuXHJcbiAgICAgICAgPENvdW50ZG93blByb3ZpZGVyPlxyXG4gICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPFByb2ZpbGUgLz5cclxuICAgICAgICAgICAgICA8Q29tcGxldGVkQ2hhbGxlbmdzIC8+XHJcbiAgICAgICAgICAgICAgPENvdW50RG93biAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPENoYWxsZW5nZUJveCAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L0NvdW50ZG93blByb3ZpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L0NoYWxsZW5nZXNQcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzOiBHZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgbGV2ZWwsXHJcbiAgICBjdXJyZW50RXhwZXJpZW5jZSxcclxuICAgIGNoYWxsZW5nZXNDb21wbGV0ZWQsXHJcbiAgICBpc0RhcmssXHJcbiAgICBhY2Nlc3NUb2tlbixcclxuICB9ID0gY3R4LnJlcS5jb29raWVzO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbGV2ZWw6IE51bWJlcihsZXZlbCksXHJcbiAgICAgIGN1cnJlbnRFeHBlcmllbmNlOiBOdW1iZXIoY3VycmVudEV4cGVyaWVuY2UpLFxyXG4gICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBOdW1iZXIoY2hhbGxlbmdlc0NvbXBsZXRlZCksXHJcbiAgICAgIGlzRGFyazogaXNEYXJrID09PSBcImZhbHNlXCIgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgIGFjY2Vzc1Rva2VuOiBhY2Nlc3NUb2tlblxyXG4gICAgfSxcclxuICB9O1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjaGFsbGVuZ2VCb3hDb250YWluZXJcIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlQm94Q29udGFpbmVyX181M0FrRlwiLFxuXHRcImNoYWxsZW5nZU5vdEFjdGl2ZVwiOiBcIkNoYWxsZW5nZUJveF9jaGFsbGVuZ2VOb3RBY3RpdmVfXzM1aXhLXCIsXG5cdFwiY2hhbGxlbmdlQWN0aXZlXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZUFjdGl2ZV9fM21PX0RcIixcblx0XCJjaGFsbGVuZ2VGYWlsZWRCdXR0b25cIjogXCJDaGFsbGVuZ2VCb3hfY2hhbGxlbmdlRmFpbGVkQnV0dG9uX191OGFGU1wiLFxuXHRcImNoYWxsZW5nZVN1Y2NlZGVkQnV0dG9uXCI6IFwiQ2hhbGxlbmdlQm94X2NoYWxsZW5nZVN1Y2NlZGVkQnV0dG9uX19yR2ZLZVwiLFxuXHRcImRhcmtUaGVtZVwiOiBcIkNoYWxsZW5nZUJveF9kYXJrVGhlbWVfXzE2ZFFsXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDaGFuZ2VUaGVtZUNvbG9yQ29udGFpbmVyXCI6IFwiQ2hhbmdlVGhlbWVDb2xvcl9DaGFuZ2VUaGVtZUNvbG9yQ29udGFpbmVyX18xNWdJcVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ29tcGxldGVkQ2hhbGxlbmdzQ29udGFpbmVyXCI6IFwiQ29tcGxldGVkQ2hhbGxlbmdzX0NvbXBsZXRlZENoYWxsZW5nc0NvbnRhaW5lcl9fMTBLZ2tcIixcblx0XCJkYXJrVGhlbWVcIjogXCJDb21wbGV0ZWRDaGFsbGVuZ3NfZGFya1RoZW1lX18zOWlkQVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ291bnREb3duQ29udGFpbmVyXCI6IFwiQ291bnREb3duX0NvdW50RG93bkNvbnRhaW5lcl9fM3VyS25cIixcblx0XCJDb3VudGRvd25CdXR0b25cIjogXCJDb3VudERvd25fQ291bnRkb3duQnV0dG9uX19HQXVPZFwiLFxuXHRcIkNvdW50ZG93bkJ1dHRvbkFjYXRpdmVcIjogXCJDb3VudERvd25fQ291bnRkb3duQnV0dG9uQWNhdGl2ZV9feGl6MXZcIixcblx0XCJkYXJrVGhlbWVcIjogXCJDb3VudERvd25fZGFya1RoZW1lX193UDNpa1wiLFxuXHRcIkNvdW50ZG93bkJ1dHRvbkRhcmtUaGVtZVwiOiBcIkNvdW50RG93bl9Db3VudGRvd25CdXR0b25EYXJrVGhlbWVfXzJIYXVfXCIsXG5cdFwiQ291bnRkb3duQnV0dG9uQWNhdGl2ZURhcmtUaGVtZVwiOiBcIkNvdW50RG93bl9Db3VudGRvd25CdXR0b25BY2F0aXZlRGFya1RoZW1lX18zRkhmZVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZXhwZXJpZW5jZUJhclwiOiBcIkV4cGVyaWVuY2VCYXJfZXhwZXJpZW5jZUJhcl9fMkpiQVhcIixcblx0XCJjdXJyZW50RXhwZXJpZW5jZVwiOiBcIkV4cGVyaWVuY2VCYXJfY3VycmVudEV4cGVyaWVuY2VfXzJYQVRSXCIsXG5cdFwiZGFya1RoZW1lXCI6IFwiRXhwZXJpZW5jZUJhcl9kYXJrVGhlbWVfX293S1dKXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJvdmVybGF5XCI6IFwiTGV2ZWxVcE1vZGFsX292ZXJsYXlfXzFodVFsXCIsXG5cdFwiY29udGFpbmVyXCI6IFwiTGV2ZWxVcE1vZGFsX2NvbnRhaW5lcl9fMWRNMThcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInByb2ZpbGVDb250YWluZXJcIjogXCJQcm9maWxlX3Byb2ZpbGVDb250YWluZXJfXzNpWWxZXCIsXG5cdFwiaW5mb0xvZ2luXCI6IFwiUHJvZmlsZV9pbmZvTG9naW5fXzFMUDVrXCIsXG5cdFwibG9nb3V0XCI6IFwiUHJvZmlsZV9sb2dvdXRfX3hsUzMtXCIsXG5cdFwiZGFya1RoZW1lXCI6IFwiUHJvZmlsZV9kYXJrVGhlbWVfXzFVU3Y4XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fSGJKRWNcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvcmlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3dpdGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9