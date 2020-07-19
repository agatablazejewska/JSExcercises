import { IContactGroupData } from "../Interfaces/ContactGroup/IContactGroupData";
import { IContact } from "../Interfaces/Contact/IContact";
import { IContactGroup } from "../Interfaces/ContactGroup/IContactGroup";
import { IContactData } from "../Interfaces/Contact/IContactData";

export class PhoneBook {
    private _contactList : Array<IContact>;
    private _contactGroupList : Array<IContactGroup>;

    constructor() {
        this._contactList = new Array<IContact>();
        this._contactGroupList = new Array<IContactGroup>();
    }

        //Handle conacts
    addContact(contact : IContact) : void {
        this._contactList.push(contact);
    }

    removeContact(contact : IContact) : void {
        this._removeFromArray(contact, this._contactList);
    }

    updateContact(contact : IContact, newContactData : IContactData) : void {
        contact.update(newContactData);
    }

    showContact(contact : IContact) : void {
        contact.showAllInfo();
    }

    //Handle contacts group
    addContactGroup(group : IContactGroup) : void {
        this._contactGroupList.push(group);
    }

    addContactToGroup(contact : IContact, group : IContactGroup) : void {
        group.add(contact);
    }

    removeContactFromGroup(contact : IContact, group : IContactGroup) : void {
        group.remove(contact);
    }

    showContactGroup(group : IContactGroup) : void {
        group.showAllInfo();
    }

    updateContactGroup(group : IContactGroup, newGroupData : IContactGroupData) : void {
        group.update(newGroupData);
    }

    removeContactGroup(group : IContactGroup) : void {
        this._removeFromArray(group, this._contactGroupList);
    }

    //Show lists
    showContacts() : void {
        this._sortContactsAlphabetically();
        this._contactList.forEach((contact) => contact.show());
    }

    showGroups() : void {
        this._contactGroupList.forEach((group) => group.show());
    }

    //Filter
    showFilteredByPhrase(phrase : string) : void {
        if (phrase) {
          const filteredContactList = this.filterByPhrase(phrase);
    
          filteredContactList.forEach(contact => contact.show());
        }
      }
    
      filterByPhrase(phrase : string) : Array<IContact> {    
        const phraseLowerCase = phrase.toLowerCase();

        return this._contactList.filter(contact =>
          contact.fullName.toLowerCase().includes(phraseLowerCase)
        );
      }

    //Sort
    _sortContactsAlphabetically() : void {
        this._contactList = this._contactList.sort(
        this._sortContactsAlphabeticallyLogic
        );
    }

    _sortContactsAlphabeticallyLogic(contactA : IContact, contactB : IContact) : number {
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

    _removeFromArray<T extends IContactGroup | IContactData>(element: T, array : Array<T>) : void {
        const index = array.indexOf(element);

        if (index > -1) {
        array.splice(index, 1);
        }
    }

}