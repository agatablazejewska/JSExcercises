import * as commonFunctions from "../../commonFunctions.js";
import { Contact } from "./Contact";

class ContactGroup {
  constructor() {
    this._contactArray = new Array();
  }

  add(contact) {
    this._validateContact(contact);

    if (!this._containsContact(contact)) {
      this._contactArray.push(contact);
    }
  }

  remove(contact) {
    this._validateContact(contact);

    const index = this._contactArray.indexOf(contact);

    if (index > -1) {
      this._contactArray.splice(index, 1);
    }
  }

  read() {
    this._contactArray.forEach((contact) => contact.showInfo());
  }

  update(contact, newName = "", newSurname = "", newEmail = "") {
    this._validateContact(contact);

    if (newName) {
      contact.firstName = newName;
    }

    if (newSurname) {
      contact.surname = newSurname;
    }

    if (newEmail) {
      contact.email = newEmail;
    }
  }

  _containsContact(contact) {
    return this._contactArray.includes(contact);
  }

  _validateContact(contact) {
    if (!contact instanceof Contact) {
      throw new Error("Provided object is not a contact");
    }
  }
}
