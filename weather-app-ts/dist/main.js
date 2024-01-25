/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/styles.css?");

/***/ }),

/***/ "./src/api.ts":
/*!********************!*\
  !*** ./src/api.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayWeather: () => (/* binding */ displayWeather),\n/* harmony export */   getWeather: () => (/* binding */ getWeather),\n/* harmony export */   toggleMeasure: () => (/* binding */ toggleMeasure)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar toggleMeasureBtn = document.querySelector(\"#toggle-measure\");\nvar toggleMeasureBtnFeelsLike = document.querySelector(\"#toggle-measure-feelslike\");\nvar temperature = document.querySelector(\"#temperature\");\nvar feelsLikeTemperature = document.querySelector(\"#feels-like\");\nvar currentTemperatureInF;\nvar currentTemperatureInC;\nvar currentFeelsLikeTempInF;\nvar currentFeelsLikeTempInC;\nfunction getWeather(city) {\n    return __awaiter(this, void 0, void 0, function () {\n        var apiKey, response, data;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    apiKey = \"068d4d16efff463ca3111654241101\";\n                    return [4 /*yield*/, fetch(\"https://api.weatherapi.com/v1/current.json?key=\".concat(apiKey, \"&q=\").concat(city, \"&aqi=no\"), { mode: \"cors\" })];\n                case 1:\n                    response = _a.sent();\n                    return [4 /*yield*/, response.json()];\n                case 2:\n                    data = _a.sent();\n                    console.log(data);\n                    displayWeather(data);\n                    resetTemperatureButton();\n                    return [2 /*return*/, data];\n            }\n        });\n    });\n}\nfunction displayWeather(weatherData) {\n    return __awaiter(this, void 0, void 0, function () {\n        var h2, condition, localTime, humidity;\n        return __generator(this, function (_a) {\n            try {\n                h2 = document.querySelector(\"#country\");\n                h2.textContent = \"\".concat(weatherData.location.name, \", \").concat(weatherData.location.country);\n                condition = document.querySelector(\"#condition\");\n                localTime = document.querySelector(\"#local-time\");\n                humidity = document.querySelector(\"#humidity\");\n                temperature.textContent = weatherData.current.temp_c + \"ºC\";\n                feelsLikeTemperature.textContent = weatherData.current.feelslike_c + \"ºC\";\n                localTime.textContent = weatherData.location.localtime;\n                //add a feels like\n                condition.textContent = weatherData.current.condition.text;\n                humidity.textContent = weatherData.current.humidity + \"%\";\n                currentTemperatureInC = weatherData.current.temp_c + \"ºC\";\n                currentTemperatureInF = weatherData.current.temp_f + \"ºF\";\n                currentFeelsLikeTempInC = weatherData.current.feelslike_c;\n                currentFeelsLikeTempInF = weatherData.current.feelslike_f;\n            }\n            catch (error) {\n                throw new Error(error);\n            }\n            return [2 /*return*/];\n        });\n    });\n}\nfunction toggleMeasure(event) {\n    return __awaiter(this, void 0, void 0, function () {\n        var clickedButton;\n        return __generator(this, function (_a) {\n            clickedButton = event.target;\n            if (clickedButton === toggleMeasureBtn) {\n                if (currentTemperatureInC) {\n                    if (event.target.textContent === \"Celsius\") {\n                        temperature.textContent = currentTemperatureInF;\n                        event.target.textContent = \"Fahrenheit\";\n                        event.target.backgroundColor = \"#070\";\n                    }\n                    else if (event.target.textContent === \"Fahrenheit\") {\n                        temperature.textContent = currentTemperatureInC;\n                        event.target.textContent = \"Celsius\";\n                        event.target.backgroundColor = \"#007\";\n                    }\n                }\n            }\n            if (clickedButton === toggleMeasureBtnFeelsLike) {\n                if (currentTemperatureInC) {\n                    if (event.target.textContent === \"Celsius\") {\n                        feelsLikeTemperature.textContent = currentFeelsLikeTempInF + \"ºF\";\n                        event.target.textContent = \"Fahrenheit\";\n                    }\n                    else if (event.target.textContent === \"Fahrenheit\") {\n                        feelsLikeTemperature.textContent = currentFeelsLikeTempInC + \"ºC\";\n                        event.target.textContent = \"Celsius\";\n                    }\n                }\n            }\n            return [2 /*return*/];\n        });\n    });\n}\nfunction resetTemperatureButton() {\n    toggleMeasureBtn.textContent = \"Celsius\";\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/api.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.ts\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    var citySearch = document.querySelector(\"#city\");\n    var searchBtn = document.querySelector(\"#search-button\");\n    citySearch.addEventListener(\"keydown\", function (e) {\n        e.key === \"Enter\" && (0,_api__WEBPACK_IMPORTED_MODULE_0__.getWeather)(citySearch.value);\n    });\n    searchBtn.addEventListener(\"click\", function () { return (0,_api__WEBPACK_IMPORTED_MODULE_0__.getWeather)(citySearch.value); });\n    var toggleMeasureBtn = document.querySelector(\"#toggle-measure\");\n    var toggleMeasureBtnFeelsLike = document.querySelector(\"#toggle-measure-feelslike\");\n    toggleMeasureBtn.addEventListener(\"click\", function (e) { return (0,_api__WEBPACK_IMPORTED_MODULE_0__.toggleMeasure)(e); });\n    toggleMeasureBtnFeelsLike.addEventListener(\"click\", function (e) { return (0,_api__WEBPACK_IMPORTED_MODULE_0__.toggleMeasure)(e); });\n});\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;