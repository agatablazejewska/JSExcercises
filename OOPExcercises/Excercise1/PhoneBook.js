import * as commonFunctions from "../../commonFunctions.js";
import { ContactGroup } from "./ContactGroup";
import { Contact } from "./Contact";

class PhoneBook {
  constructor() {
    this._contactList = new Array();
    this._contactGroupList = new Array();
  }

  //Handle conacts
  createContact(firstName, surname, email) {
    const contact = new Contact(firstName, surname, email);

    this._contactList.push(contact);
  }

  removeContact(contact) {
    this._validateContact(contact);

    this._removeFromArray(contact, this._contactList);
  }

  updateContact(contact, firstName, surname, email) {
    this._validateContact(contact);

    contact.update(firstName, surname, email);
  }

  showContact(contact) {
    this._validateContact(contact);

    contact.showAllInfo();
  }

  //Handle contacts group
  createContactGroup(name) {
    const group = new ContactGroup(name);

    this._contactGroupList.push(group);
  }

  addContactToGroup(contact, group) {
    this._validateContactGroup(group);

    group.add(contact);
  }

  removeContactFromGroup(contact, group) {
    this._validateContactGroup(group);

    group.remove(contact);
  }

  showContactGroup(group) {
    this._validateContactGroup(group);

    group.showAllInfo();
  }

  updateContactGroupName(group, name) {
    this._validateContactGroup(group);

    group.update(name);
  }

  removeContactGroup(group) {
    this._validateContactGroup(group);

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

  showFilteredByPhrase(phrase) {
    if (phrase) {
      const filteredContactList = this.filterByPhrase(phrase);

      filteredContactList.forEach((contact) => contact.show());
    }
  }

  filterByPhrase(phrase) {
    commonFunctions.validateString(phrase);

    const phraseLowerCase = phrase.toLowerCase();
    return this._contactList.filter((contact) =>
      contact.fullName.toLowerCase().includes(phraseLowerCase)
    );
  }

  //Sort
  _sortContactsAlphabetically() {
    this._contactList = this._contactList.sort(
      this._sortContactsAlphabeticallyLogic
    );
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

  _validateContact(contact) {
    if (!contact instanceof Contact) {
      throw new Error("Provided object is not a contact");
    }
  }

  _validateContactGroup(group) {
    if (!group instanceof ContactGroup) {
      throw new Error("Provided object is not a group of contacts");
    }
  }

  _removeFromArray(element, array) {
    const index = array.indexOf(element);

    if (index > -1) {
      array.splice(index, 1);
    }
  }
}

export { PhoneBook };
