import * as commonFunctions from "../../commonFunctions.js";
import { Contact } from "./Contact";

class ContactGroup {
  constructor(name) {
    this._name = name;
    this._contactArray = new Array();
  }

  get name() {
    return this._name;
  }

  _setName(value) {
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

  showAllInfo() {
    this.show();
    this._contactArray.forEach((contact) => contact.show());
  }

  show() {
    console.log(`Group name: ${this.name}`);
    console.log(`Members: ${this._getMembersCount}`);
  }

  update(name) {
    this._setName(name);
  }

  _getMembersCount() {
    return this._contactArray.length;
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

export { ContactGroup };
