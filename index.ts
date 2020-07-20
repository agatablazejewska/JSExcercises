import { PhoneBook } from "./OOPExcercises/Excercise1TS/PhoneBook/PhoneBook";
import { Contact } from "./OOPExcercises/Excercise1TS/Contact/Contact";

const phoneBook = new PhoneBook();


let contact1 = new Contact("Aga", "Soesk", "aserha@gmail.com");

phoneBook.addContact(contact1);
phoneBook.addContact(new Contact("Marc", "Lokes", "marclos@gmail.com"));
phoneBook.addContact(new Contact("Sid", "Mejer", "sidmej@gmail.com"));
phoneBook.addContact(new Contact("Kasler", "Powkes", "kaslerpowkes@gmail.com"));

phoneBook.showContacts();

phoneBook.updateContact(contact1, {firstName: "Adersn", surname: "MArsoel", email: "aserha@gmail.com"});
console.log("update CONTACT");
phoneBook.showContacts();