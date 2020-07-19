"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhoneBook_1 = require("./OOPExcercises/Excercise1TS/PhoneBook/PhoneBook");
const Contact_1 = require("./OOPExcercises/Excercise1TS/Contact/Contact");
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
//# sourceMappingURL=index.js.map