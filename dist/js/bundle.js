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
/******/ 	return __webpack_require__(__webpack_require__.s = "./JSExcercises/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./JSExcercises/OOPExcercises/Excercise1TS/Contact/Contact.ts":
/*!********************************************************************!*\
  !*** ./JSExcercises/OOPExcercises/Excercise1TS/Contact/Contact.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const DateHandler_1 = __webpack_require__(/*! ../HelperClasses/DateHandler */ "./JSExcercises/OOPExcercises/Excercise1TS/HelperClasses/DateHandler.ts");
const ValidateEmail_1 = __webpack_require__(/*! ../HelperClasses/ValidateEmail */ "./JSExcercises/OOPExcercises/Excercise1TS/HelperClasses/ValidateEmail.ts");
class Contact {
    constructor(firstName, surname, email) {
        ValidateEmail_1.validateEmail(email);
        if (!firstName) {
            throw new Error("First name has to have a value");
        }
        this.firstName = firstName;
        this.surname = surname;
        this.email = email;
        this._dateHandler = new DateHandler_1.DateHandler();
        this.modifyDate = this._dateHandler.todaysDate();
    }
    get fullName() {
        return `${this.firstName} ${this.surname}`;
    }
    update(source) {
        Object.assign(this, source);
        this.modifyDate = this._dateHandler.todaysDate();
    }
    show() {
        console.log(`Name: ${this.fullName}, email: ${this.email}`);
    }
    showAllInfo() {
        console.log(`First name: ${this.firstName}
        Surname: ${this.surname}
        E-mail: ${this.email}
        Last modified: ${this._dateHandler.formatDate(this.modifyDate)}`);
    }
}
exports.Contact = Contact;


/***/ }),

/***/ "./JSExcercises/OOPExcercises/Excercise1TS/HelperClasses/DateHandler.ts":
/*!******************************************************************************!*\
  !*** ./JSExcercises/OOPExcercises/Excercise1TS/HelperClasses/DateHandler.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DateHandler = void 0;
class DateHandler {
    todaysDate() {
        return new Date();
    }
    formatDate(date) {
        const fullDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return `${fullDate} ${time}`;
    }
}
exports.DateHandler = DateHandler;


/***/ }),

/***/ "./JSExcercises/OOPExcercises/Excercise1TS/HelperClasses/ValidateEmail.ts":
/*!********************************************************************************!*\
  !*** ./JSExcercises/OOPExcercises/Excercise1TS/HelperClasses/ValidateEmail.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmail = void 0;
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/i;
    if (!emailRegex.test(email)) {
        throw new Error("Provided value is not a valid e-mail");
    }
    ;
}
exports.validateEmail = validateEmail;


/***/ }),

/***/ "./JSExcercises/OOPExcercises/Excercise1TS/PhoneBook/PhoneBook.ts":
/*!************************************************************************!*\
  !*** ./JSExcercises/OOPExcercises/Excercise1TS/PhoneBook/PhoneBook.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneBook = void 0;
class PhoneBook {
    constructor() {
        this._contactList = new Array();
        this._contactGroupList = new Array();
    }
    //Handle conacts
    addContact(contact) {
        this._contactList.push(contact);
    }
    removeContact(contact) {
        this._removeFromArray(contact, this._contactList);
    }
    updateContact(contact, newContactData) {
        contact.update(newContactData);
    }
    showContact(contact) {
        contact.showAllInfo();
    }
    //Handle contacts group
    addContactGroup(group) {
        this._contactGroupList.push(group);
    }
    addContactToGroup(contact, group) {
        group.add(contact);
    }
    removeContactFromGroup(contact, group) {
        group.remove(contact);
    }
    showContactGroup(group) {
        group.showAllInfo();
    }
    updateContactGroup(group, newGroupData) {
        group.update(newGroupData);
    }
    removeContactGroup(group) {
        this._removeFromArray(group, this._contactGroupList);
    }
    //Show lists
    showContacts() {
        this._sortContactsAlphabetically();
        this._contactList.forEach((contact) => contact.show());
    }
    showGroups() {
        this._contactGroupList.forEach((group) => group.show());
    }
    //Filter
    showFilteredByPhrase(phrase) {
        if (phrase) {
            const filteredContactList = this.filterByPhrase(phrase);
            filteredContactList.forEach(contact => contact.show());
        }
    }
    filterByPhrase(phrase) {
        const phraseLowerCase = phrase.toLowerCase();
        return this._contactList.filter(contact => contact.fullName.toLowerCase().includes(phraseLowerCase));
    }
    //Sort
    _sortContactsAlphabetically() {
        this._contactList = this._contactList.sort(this._sortContactsAlphabeticallyLogic);
    }
    _sortContactsAlphabeticallyLogic(contactA, contactB) {
        const contactAName = contactA.fullName.toUpperCase();
        const contactBName = contactB.fullName.toUpperCase();
        if (contactAName < contactBName) {
            return -1;
        }
        if (contactAName > contactBName) {
            return 1;
        }
        return 0;
    }
    _removeFromArray(element, array) {
        const index = array.indexOf(element);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
}
exports.PhoneBook = PhoneBook;


/***/ }),

/***/ "./JSExcercises/index.ts":
/*!*******************************!*\
  !*** ./JSExcercises/index.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const PhoneBook_1 = __webpack_require__(/*! ./OOPExcercises/Excercise1TS/PhoneBook/PhoneBook */ "./JSExcercises/OOPExcercises/Excercise1TS/PhoneBook/PhoneBook.ts");
const Contact_1 = __webpack_require__(/*! ./OOPExcercises/Excercise1TS/Contact/Contact */ "./JSExcercises/OOPExcercises/Excercise1TS/Contact/Contact.ts");
const phoneBook = new PhoneBook_1.PhoneBook();
let contact1 = new Contact_1.Contact("Aga", "Soesk", "aserha@gmail.com");
phoneBook.addContact(contact1);
phoneBook.addContact(new Contact_1.Contact("Marc", "Lokes", "marclos@gmail.com"));
phoneBook.addContact(new Contact_1.Contact("Sid", "Mejer", "sidmej@gmail.com"));
phoneBook.addContact(new Contact_1.Contact("Kasler", "Powkes", "kaslerpowkes@gmail.com"));
phoneBook.showContacts();
phoneBook.updateContact(contact1, { firstName: "Adersn", surname: "MArsoel", email: "aserha@gmail.com" });
console.log("update CONTACT");
phoneBook.showContacts();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vSlNFeGNlcmNpc2VzL09PUEV4Y2VyY2lzZXMvRXhjZXJjaXNlMVRTL0NvbnRhY3QvQ29udGFjdC50cyIsIndlYnBhY2s6Ly8vLi9KU0V4Y2VyY2lzZXMvT09QRXhjZXJjaXNlcy9FeGNlcmNpc2UxVFMvSGVscGVyQ2xhc3Nlcy9EYXRlSGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9KU0V4Y2VyY2lzZXMvT09QRXhjZXJjaXNlcy9FeGNlcmNpc2UxVFMvSGVscGVyQ2xhc3Nlcy9WYWxpZGF0ZUVtYWlsLnRzIiwid2VicGFjazovLy8uL0pTRXhjZXJjaXNlcy9PT1BFeGNlcmNpc2VzL0V4Y2VyY2lzZTFUUy9QaG9uZUJvb2svUGhvbmVCb29rLnRzIiwid2VicGFjazovLy8uL0pTRXhjZXJjaXNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtR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Q0FBQztBQUM5QixTQUFTLENBQUMsWUFBWSxFQUFFLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9KU0V4Y2VyY2lzZXMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBEYXRlSGFuZGxlciB9IGZyb20gXCIuLi9IZWxwZXJDbGFzc2VzL0RhdGVIYW5kbGVyXCI7XHJcbmltcG9ydCB7IHZhbGlkYXRlRW1haWwgfSBmcm9tIFwiLi4vSGVscGVyQ2xhc3Nlcy9WYWxpZGF0ZUVtYWlsXCI7XHJcbmltcG9ydCB7IElDb250YWN0IH0gZnJvbSBcIi4uL0ludGVyZmFjZXMvQ29udGFjdC9JQ29udGFjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRhY3QgaW1wbGVtZW50cyBJQ29udGFjdCB7XHJcbiAgICBwcml2YXRlIF9kYXRlSGFuZGxlcjogRGF0ZUhhbmRsZXI7XHJcbiAgICBmaXJzdE5hbWU6IHN0cmluZztcclxuICAgIHN1cm5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBtb2RpZnlEYXRlOiBEYXRlO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihmaXJzdE5hbWUgOiBzdHJpbmcsIHN1cm5hbWUgOiBzdHJpbmcsIGVtYWlsIDogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFsaWRhdGVFbWFpbChlbWFpbCk7XHJcblxyXG4gICAgICAgIGlmICghZmlyc3ROYW1lKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGaXJzdCBuYW1lIGhhcyB0byBoYXZlIGEgdmFsdWVcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZpcnN0TmFtZSA9IGZpcnN0TmFtZTtcclxuICAgICAgICB0aGlzLnN1cm5hbWUgPSBzdXJuYW1lO1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcclxuICAgICAgICB0aGlzLl9kYXRlSGFuZGxlciA9IG5ldyBEYXRlSGFuZGxlcigpO1xyXG4gICAgICAgIHRoaXMubW9kaWZ5RGF0ZSA9IHRoaXMuX2RhdGVIYW5kbGVyLnRvZGF5c0RhdGUoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGZ1bGxOYW1lKCkgOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLnN1cm5hbWV9YDtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGU8SUNvbnRhY3REYXRhPihzb3VyY2U6IElDb250YWN0RGF0YSk6IHZvaWQge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgc291cmNlKTsgXHJcbiAgICAgICAgdGhpcy5tb2RpZnlEYXRlID0gdGhpcy5fZGF0ZUhhbmRsZXIudG9kYXlzRGF0ZSgpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICBzaG93KCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBOYW1lOiAke3RoaXMuZnVsbE5hbWV9LCBlbWFpbDogJHt0aGlzLmVtYWlsfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dBbGxJbmZvKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBGaXJzdCBuYW1lOiAke3RoaXMuZmlyc3ROYW1lfVxyXG4gICAgICAgIFN1cm5hbWU6ICR7dGhpcy5zdXJuYW1lfVxyXG4gICAgICAgIEUtbWFpbDogJHt0aGlzLmVtYWlsfVxyXG4gICAgICAgIExhc3QgbW9kaWZpZWQ6ICR7dGhpcy5fZGF0ZUhhbmRsZXIuZm9ybWF0RGF0ZSh0aGlzLm1vZGlmeURhdGUpfWApO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiY2xhc3MgRGF0ZUhhbmRsZXIge1xyXG4gICAgdG9kYXlzRGF0ZSgpIDogRGF0ZSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZm9ybWF0RGF0ZShkYXRlIDogRGF0ZSkgOiBzdHJpbmcge1xyXG4gIFxyXG4gICAgY29uc3QgZnVsbERhdGUgOiBzdHJpbmcgPSBgJHtkYXRlLmdldERhdGUoKX0tJHtcclxuICAgICAgICBkYXRlLmdldE1vbnRoKCkgKyAxXHJcbiAgICAgIH0tJHtkYXRlLmdldEZ1bGxZZWFyKCl9YDtcclxuICBcclxuICAgICAgY29uc3QgdGltZSA6IHN0cmluZyA9IGAke2RhdGUuZ2V0SG91cnMoKX06JHtkYXRlLmdldE1pbnV0ZXMoKX06JHtkYXRlLmdldFNlY29uZHMoKX1gO1xyXG4gIFxyXG4gICAgICByZXR1cm4gYCR7ZnVsbERhdGV9ICR7dGltZX1gO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgeyBEYXRlSGFuZGxlciB9OyIsImV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsIDogc3RyaW5nKSA6IHZvaWQge1xyXG4gICAgY29uc3QgZW1haWxSZWdleCA9IC9eW2EtekEtWjAtOS4hIyQlJicqKy89P15fYHt8fX4tXStAW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSokL2k7XHJcbiAgICAgaWYoIWVtYWlsUmVnZXgudGVzdChlbWFpbCkpIHtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvdmlkZWQgdmFsdWUgaXMgbm90IGEgdmFsaWQgZS1tYWlsXCIpO1xyXG4gICAgIH07XHJcbn0iLCJpbXBvcnQgeyBJQ29udGFjdEdyb3VwRGF0YSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0NvbnRhY3RHcm91cC9JQ29udGFjdEdyb3VwRGF0YVwiO1xyXG5pbXBvcnQgeyBJQ29udGFjdCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0NvbnRhY3QvSUNvbnRhY3RcIjtcclxuaW1wb3J0IHsgSUNvbnRhY3RHcm91cCB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0NvbnRhY3RHcm91cC9JQ29udGFjdEdyb3VwXCI7XHJcbmltcG9ydCB7IElDb250YWN0RGF0YSB9IGZyb20gXCIuLi9JbnRlcmZhY2VzL0NvbnRhY3QvSUNvbnRhY3REYXRhXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGhvbmVCb29rIHtcclxuICAgIHByaXZhdGUgX2NvbnRhY3RMaXN0IDogQXJyYXk8SUNvbnRhY3Q+O1xyXG4gICAgcHJpdmF0ZSBfY29udGFjdEdyb3VwTGlzdCA6IEFycmF5PElDb250YWN0R3JvdXA+O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhY3RMaXN0ID0gbmV3IEFycmF5PElDb250YWN0PigpO1xyXG4gICAgICAgIHRoaXMuX2NvbnRhY3RHcm91cExpc3QgPSBuZXcgQXJyYXk8SUNvbnRhY3RHcm91cD4oKTtcclxuICAgIH1cclxuXHJcbiAgICAgICAgLy9IYW5kbGUgY29uYWN0c1xyXG4gICAgYWRkQ29udGFjdChjb250YWN0IDogSUNvbnRhY3QpIDogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY29udGFjdExpc3QucHVzaChjb250YWN0KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDb250YWN0KGNvbnRhY3QgOiBJQ29udGFjdCkgOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9yZW1vdmVGcm9tQXJyYXkoY29udGFjdCwgdGhpcy5fY29udGFjdExpc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNvbnRhY3QoY29udGFjdCA6IElDb250YWN0LCBuZXdDb250YWN0RGF0YSA6IElDb250YWN0RGF0YSkgOiB2b2lkIHtcclxuICAgICAgICBjb250YWN0LnVwZGF0ZShuZXdDb250YWN0RGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0NvbnRhY3QoY29udGFjdCA6IElDb250YWN0KSA6IHZvaWQge1xyXG4gICAgICAgIGNvbnRhY3Quc2hvd0FsbEluZm8oKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0hhbmRsZSBjb250YWN0cyBncm91cFxyXG4gICAgYWRkQ29udGFjdEdyb3VwKGdyb3VwIDogSUNvbnRhY3RHcm91cCkgOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9jb250YWN0R3JvdXBMaXN0LnB1c2goZ3JvdXApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZENvbnRhY3RUb0dyb3VwKGNvbnRhY3QgOiBJQ29udGFjdCwgZ3JvdXAgOiBJQ29udGFjdEdyb3VwKSA6IHZvaWQge1xyXG4gICAgICAgIGdyb3VwLmFkZChjb250YWN0KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDb250YWN0RnJvbUdyb3VwKGNvbnRhY3QgOiBJQ29udGFjdCwgZ3JvdXAgOiBJQ29udGFjdEdyb3VwKSA6IHZvaWQge1xyXG4gICAgICAgIGdyb3VwLnJlbW92ZShjb250YWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q29udGFjdEdyb3VwKGdyb3VwIDogSUNvbnRhY3RHcm91cCkgOiB2b2lkIHtcclxuICAgICAgICBncm91cC5zaG93QWxsSW5mbygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNvbnRhY3RHcm91cChncm91cCA6IElDb250YWN0R3JvdXAsIG5ld0dyb3VwRGF0YSA6IElDb250YWN0R3JvdXBEYXRhKSA6IHZvaWQge1xyXG4gICAgICAgIGdyb3VwLnVwZGF0ZShuZXdHcm91cERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNvbnRhY3RHcm91cChncm91cCA6IElDb250YWN0R3JvdXApIDogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcmVtb3ZlRnJvbUFycmF5KGdyb3VwLCB0aGlzLl9jb250YWN0R3JvdXBMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvL1Nob3cgbGlzdHNcclxuICAgIHNob3dDb250YWN0cygpIDogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fc29ydENvbnRhY3RzQWxwaGFiZXRpY2FsbHkoKTtcclxuICAgICAgICB0aGlzLl9jb250YWN0TGlzdC5mb3JFYWNoKChjb250YWN0KSA9PiBjb250YWN0LnNob3coKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0dyb3VwcygpIDogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fY29udGFjdEdyb3VwTGlzdC5mb3JFYWNoKChncm91cCkgPT4gZ3JvdXAuc2hvdygpKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0ZpbHRlclxyXG4gICAgc2hvd0ZpbHRlcmVkQnlQaHJhc2UocGhyYXNlIDogc3RyaW5nKSA6IHZvaWQge1xyXG4gICAgICAgIGlmIChwaHJhc2UpIHtcclxuICAgICAgICAgIGNvbnN0IGZpbHRlcmVkQ29udGFjdExpc3QgPSB0aGlzLmZpbHRlckJ5UGhyYXNlKHBocmFzZSk7XHJcbiAgICBcclxuICAgICAgICAgIGZpbHRlcmVkQ29udGFjdExpc3QuZm9yRWFjaChjb250YWN0ID0+IGNvbnRhY3Quc2hvdygpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBmaWx0ZXJCeVBocmFzZShwaHJhc2UgOiBzdHJpbmcpIDogQXJyYXk8SUNvbnRhY3Q+IHsgICAgXHJcbiAgICAgICAgY29uc3QgcGhyYXNlTG93ZXJDYXNlID0gcGhyYXNlLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250YWN0TGlzdC5maWx0ZXIoY29udGFjdCA9PlxyXG4gICAgICAgICAgY29udGFjdC5mdWxsTmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHBocmFzZUxvd2VyQ2FzZSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgLy9Tb3J0XHJcbiAgICBfc29ydENvbnRhY3RzQWxwaGFiZXRpY2FsbHkoKSA6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2NvbnRhY3RMaXN0ID0gdGhpcy5fY29udGFjdExpc3Quc29ydChcclxuICAgICAgICB0aGlzLl9zb3J0Q29udGFjdHNBbHBoYWJldGljYWxseUxvZ2ljXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfc29ydENvbnRhY3RzQWxwaGFiZXRpY2FsbHlMb2dpYyhjb250YWN0QSA6IElDb250YWN0LCBjb250YWN0QiA6IElDb250YWN0KSA6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgY29udGFjdEFOYW1lID0gY29udGFjdEEuZnVsbE5hbWUudG9VcHBlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBjb250YWN0Qk5hbWUgPSBjb250YWN0Qi5mdWxsTmFtZS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAoY29udGFjdEFOYW1lIDwgY29udGFjdEJOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnRhY3RBTmFtZSA+IGNvbnRhY3RCTmFtZSkge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcblxyXG4gICAgX3JlbW92ZUZyb21BcnJheTxUIGV4dGVuZHMgSUNvbnRhY3RHcm91cCB8IElDb250YWN0RGF0YT4oZWxlbWVudDogVCwgYXJyYXkgOiBBcnJheTxUPikgOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGFycmF5LmluZGV4T2YoZWxlbWVudCk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgUGhvbmVCb29rIH0gZnJvbSBcIi4vT09QRXhjZXJjaXNlcy9FeGNlcmNpc2UxVFMvUGhvbmVCb29rL1Bob25lQm9va1wiXHJcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tIFwiLi9PT1BFeGNlcmNpc2VzL0V4Y2VyY2lzZTFUUy9Db250YWN0L0NvbnRhY3RcIjtcclxuXHJcbmNvbnN0IHBob25lQm9vayA9IG5ldyBQaG9uZUJvb2soKTtcclxuXHJcblxyXG5sZXQgY29udGFjdDEgPSBuZXcgQ29udGFjdChcIkFnYVwiLCBcIlNvZXNrXCIsIFwiYXNlcmhhQGdtYWlsLmNvbVwiKTtcclxuXHJcbnBob25lQm9vay5hZGRDb250YWN0KGNvbnRhY3QxKTtcclxucGhvbmVCb29rLmFkZENvbnRhY3QobmV3IENvbnRhY3QoXCJNYXJjXCIsIFwiTG9rZXNcIiwgXCJtYXJjbG9zQGdtYWlsLmNvbVwiKSk7XHJcbnBob25lQm9vay5hZGRDb250YWN0KG5ldyBDb250YWN0KFwiU2lkXCIsIFwiTWVqZXJcIiwgXCJzaWRtZWpAZ21haWwuY29tXCIpKTtcclxucGhvbmVCb29rLmFkZENvbnRhY3QobmV3IENvbnRhY3QoXCJLYXNsZXJcIiwgXCJQb3drZXNcIiwgXCJrYXNsZXJwb3drZXNAZ21haWwuY29tXCIpKTtcclxuXHJcbnBob25lQm9vay5zaG93Q29udGFjdHMoKTtcclxuXHJcbnBob25lQm9vay51cGRhdGVDb250YWN0KGNvbnRhY3QxLCB7Zmlyc3ROYW1lOiBcIkFkZXJzblwiLCBzdXJuYW1lOiBcIk1BcnNvZWxcIiwgZW1haWw6IFwiYXNlcmhhQGdtYWlsLmNvbVwifSk7XHJcbmNvbnNvbGUubG9nKFwidXBkYXRlIENPTlRBQ1RcIik7XHJcbnBob25lQm9vay5zaG93Q29udGFjdHMoKTsiXSwic291cmNlUm9vdCI6IiJ9