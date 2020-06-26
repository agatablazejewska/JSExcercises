/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../FunctionalProgrammingExcercises/AggregateAlphabetLettersExcercise.js":
/*!*******************************************************************************!*\
  !*** ../FunctionalProgrammingExcercises/AggregateAlphabetLettersExcercise.js ***!
  \*******************************************************************************/
/*! exports provided: randomIntFromInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"randomIntFromInterval\", function() { return randomIntFromInterval; });\n/* harmony import */ var _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commonFunctions.js */ \"../commonFunctions.js\");\n\r\n\r\nconst polishAlphabetArray = Array.from(\"aąbcćdeęfghijklłmnńoóprsśtuwxyzźż\");\r\n// Excercise: korzystając z funkcji .reduce stwórz agregację liter alfabetu (...)\r\nconst randomIntFromInterval = function (min, max) {\r\n  _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"isNumberPositive\"](min);\r\n  _commonFunctions_js__WEBPACK_IMPORTED_MODULE_0__[\"isNumberPositive\"](max);\r\n\r\n  return Math.floor(Math.random() * (max - min + 1) + min);\r\n};\r\n\r\nconst createArrayOfArrays = function (array) {\r\n  const aggregatedArray = array.reduce((acc, element, index, array) => {\r\n    const howManyElements = randomIntFromInterval(4, 7);\r\n    const arrayPart = array.splice(0, howManyElements);\r\n\r\n    acc.push(arrayPart);\r\n\r\n    return acc;\r\n  }, []);\r\n\r\n  return aggregatedArray;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///../FunctionalProgrammingExcercises/AggregateAlphabetLettersExcercise.js?");

/***/ }),

/***/ "../FunctionalProgrammingExcercises/FPExcercise8.js":
/*!**********************************************************!*\
  !*** ../FunctionalProgrammingExcercises/FPExcercise8.js ***!
  \**********************************************************/
/*! exports provided: generateHuman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateHuman\", function() { return generateHuman; });\n/* harmony import */ var _npm_node_modules_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../npm/node_modules/uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _commonFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonFunctions */ \"../commonFunctions.js\");\n/* harmony import */ var _FPExcercise8Data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FPExcercise8Data.js */ \"../FunctionalProgrammingExcercises/FPExcercise8Data.js\");\n/* harmony import */ var _AggregateAlphabetLettersExcercise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AggregateAlphabetLettersExcercise */ \"../FunctionalProgrammingExcercises/AggregateAlphabetLettersExcercise.js\");\n\r\n\r\n\r\n\r\n\r\nconst takeRandomValue = function (array) {\r\n  _commonFunctions__WEBPACK_IMPORTED_MODULE_1__[\"validateArrayType\"](array);\r\n\r\n  const randomIndex = Object(_AggregateAlphabetLettersExcercise__WEBPACK_IMPORTED_MODULE_3__[\"randomIntFromInterval\"])(0, array.length - 1);\r\n  return array[randomIndex];\r\n};\r\n\r\nconst generateRandomAge = function () {\r\n  return Object(_AggregateAlphabetLettersExcercise__WEBPACK_IMPORTED_MODULE_3__[\"randomIntFromInterval\"])(18, 85);\r\n};\r\n\r\nconst generatePhoneNumber = function () {\r\n  return Array.from({ length: 9 }, () => Object(_AggregateAlphabetLettersExcercise__WEBPACK_IMPORTED_MODULE_3__[\"randomIntFromInterval\"])(0, 9)).join(\"\");\r\n};\r\n\r\nconst generateHuman = function () {\r\n  const human = {\r\n    _id: Object(_npm_node_modules_uuid__WEBPACK_IMPORTED_MODULE_0__[\"v4\"])(),\r\n    name: takeRandomValue(_FPExcercise8Data_js__WEBPACK_IMPORTED_MODULE_2__[\"firstNames\"]),\r\n    surname: takeRandomValue(_FPExcercise8Data_js__WEBPACK_IMPORTED_MODULE_2__[\"surnames\"]),\r\n    age: generateRandomAge(),\r\n    country: takeRandomValue(_FPExcercise8Data_js__WEBPACK_IMPORTED_MODULE_2__[\"countries\"]),\r\n    phoneNr: generatePhoneNumber(),\r\n  };\r\n  human.email = `${human.name.toLowerCase()}${human.surname.toLowerCase()}@gmail.com`;\r\n\r\n  return human;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///../FunctionalProgrammingExcercises/FPExcercise8.js?");

/***/ }),

/***/ "../FunctionalProgrammingExcercises/FPExcercise8Data.js":
/*!**************************************************************!*\
  !*** ../FunctionalProgrammingExcercises/FPExcercise8Data.js ***!
  \**************************************************************/
/*! exports provided: firstNames, surnames, countries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"firstNames\", function() { return firstNames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"surnames\", function() { return surnames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"countries\", function() { return countries; });\nconst firstNames = [\r\n    \"Rhonda\",\r\n    \"Glover\",\r\n    \"Lillian\",\r\n    \"Shaw\",\r\n    \"Harper\",\r\n    \"Rhoda\",\r\n    \"Pearson\",\r\n    \"Holden\",\r\n    \"Lilly\",\r\n    \"Wilson\",\r\n    \"Pitts\",\r\n    \"Sharpe\",\r\n    \"Hensley\",\r\n    \"Kay\",\r\n    \"Greene\",\r\n    \"Cochran\",\r\n    \"Tammy\",\r\n    \"Navarro\",\r\n    \"Koch\",\r\n    \"Mcintyre\",\r\n    \"Doyle\",\r\n    \"Walker\",\r\n    \"Cleo\",\r\n    \"Margery\",\r\n    \"Wade\",\r\n    \"Davis\",\r\n    \"Meghan\",\r\n    \"Barker\",\r\n    \"Jackson\",\r\n    \"Kristin\",\r\n    \"Moreno\",\r\n    \"Lena\",\r\n    \"Chan\",\r\n    \"Lidia\",\r\n    \"Stewart\",\r\n    \"Tamera\",\r\n    \"Krista\",\r\n    \"Osborn\",\r\n    \"Hahn\",\r\n    \"Aline\"\r\n];\r\n\r\nconst surnames = [\r\n    \"Owens\",\r\n    \"Moss\",\r\n    \"Knowles\",\r\n    \"Erickson\",\r\n    \"Preston\",\r\n    \"Donovan\",\r\n    \"Smith\",\r\n    \"Franco\",\r\n    \"Howard\",\r\n    \"Mcclure\",\r\n    \"Dennis\",\r\n    \"Rush\",\r\n    \"Howell\",\r\n    \"Santiago\",\r\n    \"Witt\",\r\n    \"Cruz\",\r\n    \"Mcneil\",\r\n    \"Blevins\",\r\n    \"Medina\",\r\n    \"Reid\",\r\n    \"Bartlett\",\r\n    \"Harper\",\r\n    \"Garrison\",\r\n    \"Camacho\",\r\n    \"Bell\",\r\n    \"Sandoval\",\r\n    \"Heath\",\r\n    \"Hudson\",\r\n    \"Gibson\",\r\n    \"Schwartz\"\r\n];\r\n\r\nconst countries = [\r\n    \"PL\",\r\n    \"UK\",\r\n    \"USA\"\r\n];\n\n//# sourceURL=webpack:///../FunctionalProgrammingExcercises/FPExcercise8Data.js?");

/***/ }),

/***/ "../OOPExcercises/Excercise1/Contact.js":
/*!**********************************************!*\
  !*** ../OOPExcercises/Excercise1/Contact.js ***!
  \**********************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Contact\", function() { return Contact; });\n/* harmony import */ var _npm_node_modules_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../npm/node_modules/uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _commonFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commonFunctions */ \"../commonFunctions.js\");\n\r\n\r\n\r\nclass Contact {\r\n  constructor(firstName, surname, email) {\r\n    this._id = Object(_npm_node_modules_uuid__WEBPACK_IMPORTED_MODULE_0__[\"v4\"])();\r\n    this.setFirstName(firstName);\r\n    this.setSurname(surname);\r\n    this.setEmail(email);\r\n  }\r\n\r\n  setEmail(value) {\r\n    _commonFunctions__WEBPACK_IMPORTED_MODULE_1__[\"validateEmail\"](value);\r\n\r\n    this._email = value;\r\n    this._modifyDate = this._todaysDate();\r\n  }\r\n\r\n  getEmail() {\r\n    return this._email;\r\n  }\r\n\r\n  setFirstName(value) {\r\n    _commonFunctions__WEBPACK_IMPORTED_MODULE_1__[\"validateString\"](value);\r\n\r\n    this._firstName = value;\r\n    this._modifyDate = this._todaysDate();\r\n  }\r\n\r\n  getFirstName() {\r\n    return this._firstName;\r\n  }\r\n\r\n  setSurname(value) {\r\n    _commonFunctions__WEBPACK_IMPORTED_MODULE_1__[\"validateString\"](value);\r\n\r\n    this._surname = value;\r\n    this._modifyDate = this._todaysDate();\r\n  }\r\n\r\n  getSurname() {\r\n    return this._surname;\r\n  }\r\n\r\n  getModifyDate() {\r\n    return this._modifyDate;\r\n  }\r\n\r\n  showContact() {\r\n    console.log(`Name: ${this.getFirstName()}\r\n        Surname: ${this.getSurname()}\r\n        E-mail: ${this.getEmail()}\r\n        Last modified: ${this._formatDate(this.getModifyDate())}`);\r\n  }\r\n\r\n  _todaysDate() {\r\n    return new Date();\r\n  }\r\n\r\n  _formatDate(date) {\r\n    if (!date instanceof Date) {\r\n      throw Error(\"Provided value is not instance of Date\");\r\n    }\r\n\r\n    const fullDate = `${date.getDate()}-${\r\n      date.getMonth() + 1\r\n    }-${date.getFullYear()}`;\r\n    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;\r\n    return `${fullDate} ${time}`;\r\n  }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///../OOPExcercises/Excercise1/Contact.js?");

/***/ }),

/***/ "../commonFunctions.js":
/*!*****************************!*\
  !*** ../commonFunctions.js ***!
  \*****************************/
/*! exports provided: validateArrayType, validateCallbackType, validate, validateNumber, validateString, validateBoolean, isNumberPositive, validateEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateArrayType\", function() { return validateArrayType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateCallbackType\", function() { return validateCallbackType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validate\", function() { return validate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateNumber\", function() { return validateNumber; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateString\", function() { return validateString; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateBoolean\", function() { return validateBoolean; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isNumberPositive\", function() { return isNumberPositive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"validateEmail\", function() { return validateEmail; });\nfunction validateArrayType(array) {\r\n    if(!Array.isArray(array)) {\r\n        throw TypeError(\"Provided array variable isn't of type array\");\r\n    };\r\n}\r\n\r\nfunction validateCallbackType(callback) {\r\n    if(typeof callback !== \"function\") {\r\n        throw TypeError(\"Provided callback is not a function\"); \r\n    } \r\n};\r\n\r\nfunction validate(array, callback) { \r\n    validateCallbackType(callback);\r\n    validateArrayType(array);\r\n};\r\n\r\nfunction validateNumber(number) {\r\n    if(typeof number !== 'number') {\r\n        throw TypeError(\"Provided variable is not of type number\");\r\n    }\r\n};\r\n\r\nfunction validateString(string) {\r\n    if(typeof string !== 'string') {\r\n        throw TypeError(\"Provided variable is not of type string\");\r\n    }\r\n};\r\n\r\nfunction validateBoolean(boolean) {\r\n    if(typeof boolean !== 'boolean') {\r\n        throw TypeError(\"Provided variable is not of type boolean\");\r\n    }\r\n};\r\n\r\nfunction isNumberPositive(number) {\r\n    if(number < 0) {\r\n        throw Error(`Value should be positive and was: ${number}`);\r\n    }\r\n}\r\n\r\nfunction validateEmail(email) {\r\n    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;\r\n     if(!emailRegex.test(email)) {\r\n         throw new Error(\"Provided value is not a valid e-mail\");\r\n     };\r\n}\n\n//# sourceURL=webpack:///../commonFunctions.js?");

/***/ }),

/***/ "../index.js":
/*!*******************!*\
  !*** ../index.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _OOPExcercises_Excercise1_Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OOPExcercises/Excercise1/Contact */ \"../OOPExcercises/Excercise1/Contact.js\");\n/* harmony import */ var _FunctionalProgrammingExcercises_FPExcercise8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FunctionalProgrammingExcercises/FPExcercise8 */ \"../FunctionalProgrammingExcercises/FPExcercise8.js\");\n\r\n\r\n\r\nconsole.log(new _OOPExcercises_Excercise1_Contact__WEBPACK_IMPORTED_MODULE_0__[\"Contact\"](\"Aga\", \"Sokolowska\", \"agaS@gmail.com\"));\r\n\r\nconsole.log(Object(_FunctionalProgrammingExcercises_FPExcercise8__WEBPACK_IMPORTED_MODULE_1__[\"generateHuman\"])());\r\n\n\n//# sourceURL=webpack:///../index.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/bytesToUuid.js":
/*!***********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/bytesToUuid.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction bytesToUuid(buf, offset_) {\n  var offset = offset_ || 0; // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n\n  return (byteToHex[buf[offset + 0]] + byteToHex[buf[offset + 1]] + byteToHex[buf[offset + 2]] + byteToHex[buf[offset + 3]] + '-' + byteToHex[buf[offset + 4]] + byteToHex[buf[offset + 5]] + '-' + byteToHex[buf[offset + 6]] + byteToHex[buf[offset + 7]] + '-' + byteToHex[buf[offset + 8]] + byteToHex[buf[offset + 9]] + '-' + byteToHex[buf[offset + 10]] + byteToHex[buf[offset + 11]] + byteToHex[buf[offset + 12]] + byteToHex[buf[offset + 13]] + byteToHex[buf[offset + 14]] + byteToHex[buf[offset + 15]]).toLowerCase();\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (bytesToUuid);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/bytesToUuid.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ \"./node_modules/uuid/dist/esm-browser/v1.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v1\", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ \"./node_modules/uuid/dist/esm-browser/v3.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v3\", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v4\", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ \"./node_modules/uuid/dist/esm-browser/v5.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v5\", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/index.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n * Browser-compatible JavaScript MD5\n *\n * Modification of JavaScript MD5\n * https://github.com/blueimp/JavaScript-MD5\n *\n * Copyright 2011, Sebastian Tschan\n * https://blueimp.net\n *\n * Licensed under the MIT license:\n * https://opensource.org/licenses/MIT\n *\n * Based on\n * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message\n * Digest Algorithm, as defined in RFC 1321.\n * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009\n * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet\n * Distributed under the BSD License\n * See http://pajhome.org.uk/crypt/md5 for more info.\n */\nfunction md5(bytes) {\n  if (typeof bytes === 'string') {\n    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape\n\n    bytes = new Uint8Array(msg.length);\n\n    for (var i = 0; i < msg.length; ++i) {\n      bytes[i] = msg.charCodeAt(i);\n    }\n  }\n\n  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));\n}\n/*\n * Convert an array of little-endian words to an array of bytes\n */\n\n\nfunction md5ToHexEncodedArray(input) {\n  var output = [];\n  var length32 = input.length * 32;\n  var hexTab = '0123456789abcdef';\n\n  for (var i = 0; i < length32; i += 8) {\n    var x = input[i >> 5] >>> i % 32 & 0xff;\n    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);\n    output.push(hex);\n  }\n\n  return output;\n}\n/**\n * Calculate output length with padding and bit length\n */\n\n\nfunction getOutputLength(inputLength8) {\n  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;\n}\n/*\n * Calculate the MD5 of an array of little-endian words, and a bit length.\n */\n\n\nfunction wordsToMd5(x, len) {\n  /* append padding */\n  x[len >> 5] |= 0x80 << len % 32;\n  x[getOutputLength(len) - 1] = len;\n  var a = 1732584193;\n  var b = -271733879;\n  var c = -1732584194;\n  var d = 271733878;\n\n  for (var i = 0; i < x.length; i += 16) {\n    var olda = a;\n    var oldb = b;\n    var oldc = c;\n    var oldd = d;\n    a = md5ff(a, b, c, d, x[i], 7, -680876936);\n    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);\n    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);\n    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);\n    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);\n    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);\n    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);\n    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);\n    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);\n    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);\n    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);\n    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);\n    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);\n    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);\n    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);\n    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);\n    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);\n    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);\n    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);\n    b = md5gg(b, c, d, a, x[i], 20, -373897302);\n    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);\n    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);\n    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);\n    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);\n    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);\n    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);\n    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);\n    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);\n    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);\n    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);\n    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);\n    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);\n    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);\n    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);\n    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);\n    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);\n    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);\n    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);\n    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);\n    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);\n    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);\n    d = md5hh(d, a, b, c, x[i], 11, -358537222);\n    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);\n    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);\n    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);\n    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);\n    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);\n    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);\n    a = md5ii(a, b, c, d, x[i], 6, -198630844);\n    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);\n    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);\n    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);\n    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);\n    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);\n    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);\n    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);\n    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);\n    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);\n    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);\n    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);\n    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);\n    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);\n    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);\n    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);\n    a = safeAdd(a, olda);\n    b = safeAdd(b, oldb);\n    c = safeAdd(c, oldc);\n    d = safeAdd(d, oldd);\n  }\n\n  return [a, b, c, d];\n}\n/*\n * Convert an array bytes to an array of little-endian words\n * Characters >255 have their high-byte silently ignored.\n */\n\n\nfunction bytesToWords(input) {\n  if (input.length === 0) {\n    return [];\n  }\n\n  var length8 = input.length * 8;\n  var output = new Uint32Array(getOutputLength(length8));\n\n  for (var i = 0; i < length8; i += 8) {\n    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;\n  }\n\n  return output;\n}\n/*\n * Add integers, wrapping at 2^32. This uses 16-bit operations internally\n * to work around bugs in some JS interpreters.\n */\n\n\nfunction safeAdd(x, y) {\n  var lsw = (x & 0xffff) + (y & 0xffff);\n  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n  return msw << 16 | lsw & 0xffff;\n}\n/*\n * Bitwise rotate a 32-bit number to the left.\n */\n\n\nfunction bitRotateLeft(num, cnt) {\n  return num << cnt | num >>> 32 - cnt;\n}\n/*\n * These functions implement the four basic operations the algorithm uses.\n */\n\n\nfunction md5cmn(q, a, b, x, s, t) {\n  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);\n}\n\nfunction md5ff(a, b, c, d, x, s, t) {\n  return md5cmn(b & c | ~b & d, a, b, x, s, t);\n}\n\nfunction md5gg(a, b, c, d, x, s, t) {\n  return md5cmn(b & d | c & ~d, a, b, x, s, t);\n}\n\nfunction md5hh(a, b, c, d, x, s, t) {\n  return md5cmn(b ^ c ^ d, a, b, x, s, t);\n}\n\nfunction md5ii(a, b, c, d, x, s, t) {\n  return md5cmn(c ^ (b | ~d), a, b, x, s, t);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (md5);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/md5.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rng; });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\n// getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n// find the complete implementation of crypto (msCrypto) on IE11.\nvar getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  if (!getRandomValues) {\n    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Adapted from Chris Veness' SHA1 code at\n// http://www.movable-type.co.uk/scripts/sha1.html\nfunction f(s, x, y, z) {\n  switch (s) {\n    case 0:\n      return x & y ^ ~x & z;\n\n    case 1:\n      return x ^ y ^ z;\n\n    case 2:\n      return x & y ^ x & z ^ y & z;\n\n    case 3:\n      return x ^ y ^ z;\n  }\n}\n\nfunction ROTL(x, n) {\n  return x << n | x >>> 32 - n;\n}\n\nfunction sha1(bytes) {\n  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];\n  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];\n\n  if (typeof bytes === 'string') {\n    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape\n\n    bytes = [];\n\n    for (var i = 0; i < msg.length; ++i) {\n      bytes.push(msg.charCodeAt(i));\n    }\n  }\n\n  bytes.push(0x80);\n  var l = bytes.length / 4 + 2;\n  var N = Math.ceil(l / 16);\n  var M = new Array(N);\n\n  for (var _i = 0; _i < N; ++_i) {\n    var arr = new Uint32Array(16);\n\n    for (var j = 0; j < 16; ++j) {\n      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];\n    }\n\n    M[_i] = arr;\n  }\n\n  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);\n  M[N - 1][14] = Math.floor(M[N - 1][14]);\n  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;\n\n  for (var _i2 = 0; _i2 < N; ++_i2) {\n    var W = new Uint32Array(80);\n\n    for (var t = 0; t < 16; ++t) {\n      W[t] = M[_i2][t];\n    }\n\n    for (var _t = 16; _t < 80; ++_t) {\n      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);\n    }\n\n    var a = H[0];\n    var b = H[1];\n    var c = H[2];\n    var d = H[3];\n    var e = H[4];\n\n    for (var _t2 = 0; _t2 < 80; ++_t2) {\n      var s = Math.floor(_t2 / 20);\n      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;\n      e = d;\n      d = c;\n      c = ROTL(b, 30) >>> 0;\n      b = a;\n      a = T;\n    }\n\n    H[0] = H[0] + a >>> 0;\n    H[1] = H[1] + b >>> 0;\n    H[2] = H[2] + c >>> 0;\n    H[3] = H[3] + d >>> 0;\n    H[4] = H[4] + e >>> 0;\n  }\n\n  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sha1);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/sha1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ \"./node_modules/uuid/dist/esm-browser/bytesToUuid.js\");\n\n // **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\n\nvar _clockseq; // Previous uuid creation time\n\n\nvar _lastMSecs = 0;\nvar _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details\n\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || new Array(16);\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n\n  if (node == null || clockseq == null) {\n    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];\n    }\n\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n\n\n  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)\n\n  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression\n\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n\n\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  } // Per 4.2.1.2 Throw error if too many uuids are requested\n\n\n  if (nsecs >= 10000) {\n    throw new Error(\"uuid.v1(): Can't create more than 10M uuids/sec\");\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n\n  msecs += 12219292800000; // `time_low`\n\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff; // `time_mid`\n\n  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff; // `time_high_and_version`\n\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n\n  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n\n  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`\n\n  b[i++] = clockseq & 0xff; // `node`\n\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf || Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(b);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (v1);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/v1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/esm-browser/v35.js\");\n/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ \"./node_modules/uuid/dist/esm-browser/md5.js\");\n\n\nvar v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (v3);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/v3.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DNS\", function() { return DNS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"URL\", function() { return URL; });\n/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bytesToUuid.js */ \"./node_modules/uuid/dist/esm-browser/bytesToUuid.js\");\n\n\nfunction uuidToBytes(uuid) {\n  // Note: We assume we're being passed a valid uuid string\n  var bytes = [];\n  uuid.replace(/[a-fA-F0-9]{2}/g, function (hex) {\n    bytes.push(parseInt(hex, 16));\n  });\n  return bytes;\n}\n\nfunction stringToBytes(str) {\n  str = unescape(encodeURIComponent(str)); // UTF8 escape\n\n  var bytes = [];\n\n  for (var i = 0; i < str.length; ++i) {\n    bytes.push(str.charCodeAt(i));\n  }\n\n  return bytes;\n}\n\nvar DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';\nvar URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (name, version, hashfunc) {\n  function generateUUID(value, namespace, buf, offset) {\n    if (typeof value === 'string') {\n      value = stringToBytes(value);\n    }\n\n    if (typeof namespace === 'string') {\n      namespace = uuidToBytes(namespace);\n    }\n\n    if (!Array.isArray(value)) {\n      throw TypeError('value must be an array of bytes');\n    }\n\n    if (!Array.isArray(namespace) || namespace.length !== 16) {\n      throw TypeError('namespace must be uuid string or an Array of 16 byte values');\n    } // Per 4.3\n\n\n    var bytes = hashfunc(namespace.concat(value));\n    bytes[6] = bytes[6] & 0x0f | version;\n    bytes[8] = bytes[8] & 0x3f | 0x80;\n\n    if (buf) {\n      offset = offset || 0;\n\n      for (var i = 0; i < 16; ++i) {\n        buf[offset + i] = bytes[i];\n      }\n\n      return buf;\n    }\n\n    return Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bytes);\n  } // Function#name is not settable on some platforms (#270)\n\n\n  try {\n    generateUUID.name = name; // eslint-disable-next-line no-empty\n  } catch (err) {} // For CommonJS default export support\n\n\n  generateUUID.DNS = DNS;\n  generateUUID.URL = URL;\n  return generateUUID;\n});\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/v35.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bytesToUuid.js */ \"./node_modules/uuid/dist/esm-browser/bytesToUuid.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return Object(_bytesToUuid_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (v4);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/esm-browser/v35.js\");\n/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ \"./node_modules/uuid/dist/esm-browser/sha1.js\");\n\n\nvar v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (v5);\n\n//# sourceURL=webpack:///./node_modules/uuid/dist/esm-browser/v5.js?");

/***/ })

/******/ });