import * as commonFunctions from "../../commonFunctions.js";
import { Contact } from "./Contact";

class ContactGroup {
  constructor(name) {
    this.name = name;
    this._contactArray = new Array();
  }

  get name() {
    return this._name;
  }

  set name(value) {
    commonFunctions.validateString(value);

    this._name = value;
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

  update(name) {
    this.name = name;
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
