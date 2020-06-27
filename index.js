import { PhoneBook } from "./OOPExcercises/Excercise1/PhoneBook";

const phoneBook = new PhoneBook();

phoneBook.createContact("Aga", "Soesk", "aserha@gmail.com");
phoneBook.createContact("Marc", "Lokes", "marclos@gmail.com");
phoneBook.createContact("Sid", "Mejer", "sidmej@gmail.com");
phoneBook.createContact("Kasler", "Powkes", "kaslerpowkes@gmail.com");

phoneBook.showContacts();
