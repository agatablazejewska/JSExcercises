"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const DateHandler_1 = require("../HelperClasses/DateHandler");
const ValidateEmail_1 = require("../HelperClasses/ValidateEmail");
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
let contact = new Contact("Agata", "Sok", "aga@gmail.com");
contact.update({ firstName: "Maria", surname: "Misia", email: "aga@gmail.com" });
//# sourceMappingURL=Contact.js.map