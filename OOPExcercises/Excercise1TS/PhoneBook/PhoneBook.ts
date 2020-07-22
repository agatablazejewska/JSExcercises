import { IContactGroupDataOptional } from "../Interfaces/ContactGroup/IContactGroupDataOptional";
import { IContact } from "../Interfaces/Contact/IContact";
import { IContactGroup } from "../Interfaces/ContactGroup/IContactGroup";
import { IContactDataOptional } from "../Interfaces/Contact/IContactDataOptional";
import { Helper } from "../../Common/Helper";

export class PhoneBook {
    private _contactList : Array<IContact>;
    private _contactGroupList : Array<IContactGroup>;

    constructor() {
        this._contactList = new Array<IContact>();
        this._contactGroupList = new Array<IContactGroup>();
    }

    //Handle contacts
    addContact(contact : IContact) : void {
        this._contactList.push(contact);
    }

    removeContact(contactId : string) : void {
        Helper.removeFromArray(contactId, this._contactList);     
    }

    updateContact(contact : IContact, newContactData : IContactDataOptional) : void {
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

    removeContactFromGroup(contactId : string, group : IContactGroup) : void {
        group.remove(contactId);
    }

    showContactGroup(group : IContactGroup) : void {
        group.showAllInfo();
    }

    updateContactGroup(group : IContactGroup, newGroupData : IContactGroupDataOptional) : void {
        group.update(newGroupData);
    }

    removeContactGroup(groupId : string) : void {
        Helper.removeFromArray(groupId, this._contactGroupList);
    }

    //Show lists
    showContacts() : void {
        Helper.sortByProperty(this._contactList, "fullName");
        this._contactList.forEach((contact) => contact.show());
    }

    showGroups() : void {
        this._contactGroupList.forEach((group) => group.show());
    }

    //Filtered
    showFilteredByPhrase(phrase : string) : void {
        if (phrase) {
          const filteredContactList = Helper.filterByPhrase(phrase, this._contactList, "fullName");
    
          filteredContactList.forEach(contact => contact.show());
        }
      }
}