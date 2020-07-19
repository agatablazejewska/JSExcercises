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
            filteredContactList.forEach((contact) => contact.show());
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
//# sourceMappingURL=PhoneBook.js.map