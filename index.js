import { PhoneBook } from "./OOPExcercises/Excercise1/PhoneBook";
import { Contact } from "./OOPExcercises/Excercise1/Contact";

const phoneBook = new PhoneBook();

phoneBook.addContact(new Contact("Aga", "Soesk", "aserha@gmail.com"));
phoneBook.addContact(new Contact("Marc", "Lokes", "marclos@gmail.com"));
phoneBook.addContact(new Contact("Sid", "Mejer", "sidmej@gmail.com"));
phoneBook.addContact(new Contact("Kasler", "Powkes", "kaslerpowkes@gmail.com"));

phoneBook.showContacts();
