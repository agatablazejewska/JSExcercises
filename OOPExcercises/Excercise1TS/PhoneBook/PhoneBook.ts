import { cloneDeep } from 'lodash';
import { IContactGroupDataOptional } from "../Interfaces/ContactGroup/IContactGroupDataOptional";
import { IContact } from "../Interfaces/Contact/IContact";
import { IContactGroup } from "../Interfaces/ContactGroup/IContactGroup";
import { IContactDataOptional } from "../Interfaces/Contact/IContactDataOptional";
import { Helper } from "../../Common/Helper";
import { CommonValidator } from "../../Common/CommonValidator";

export class PhoneBook {
    private readonly _contactList : Array<IContact>;
    private readonly _contactGroupList : Array<IContactGroup>;

    constructor() {
        this._contactList = new Array<IContact>();
        this._contactGroupList = new Array<IContactGroup>();
    }

    get contactsListCopy() {
        return cloneDeep(this._contactList);
    }

    get contactGroupsListCopy() {
        return cloneDeep(this._contactGroupList);
    }

    //Handle contacts
    addContact(contact : IContact) : void {
        if (!this._containsContact(contact, true)) {
            this._contactList.push(contact);
            return;
        }

        console.error(`Contact already exists.`);
    }

    removeContact(contactId : string) : void {
        try {
            Helper.removeFromArray(contactId, this._contactList);
        } catch(e) {
            console.error(e.message);
        }
    }

    updateContact(contact : IContact, newContactData : IContactDataOptional) : void {
        if(this._containsContact(contact)) {
            contact.update(newContactData);
            return;
        }

        console.error(`There is no such contact in the list.`);
    }

    showContact(contact : IContact) : void {
        if(this._containsContact(contact)) {
            contact.showAllInfo();
            return;
        }

        console.error(`There is no such contact in the list.`);
    }

    //Handle contacts group
    addContactGroup(group : IContactGroup) : void {
        if(!this._containsContactGroup(group, true)) {
            this._contactGroupList.push(group);
            return;
        }

       console.error('Contact group with this name already exists.');
    }

    addContactToGroup(contact : IContact, group : IContactGroup) : void {
        group.add(contact);
    }

    removeContactFromGroup(contactId : string, group : IContactGroup) : void {
        group.remove(contactId);
    }

    showContactGroup(group : IContactGroup) : void {
        if(this._containsContactGroup(group)) {
            group.showAllInfo();
            return;
        }

        console.error('There is no such contact group in the list.');
    }

    updateContactGroup(group : IContactGroup, newGroupData : IContactGroupDataOptional) : void {
        if(this._containsContactGroup(group)) {
            group.update(newGroupData);
            return;
        }

        console.error('There is no such contact group in the list.');
    }

    removeContactGroup(groupId : string) : void {
        try {
            Helper.removeFromArray(groupId, this._contactGroupList);
        } catch {
            console.error('There is no such contact group.');
        }
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
        try {
            CommonValidator.validateEmptyString(phrase);
            
            const filteredContactList = Helper.filterByPhrase(phrase, this._contactList, "fullName");

            filteredContactList.forEach(contact => contact.show());
        }
        catch(e) {
            console.error(e);
        }  
      }

    private _containsContact(contact: IContact, deepCheck: boolean = false): boolean {
        if(deepCheck) {
            return this._contactList.some(c => c.firstName === contact.firstName
                && c.surname === contact.surname
                && c.email === contact.email);

        }

        return this._contactList.some(c => c.id === contact.id);
    }

    private _containsContactGroup(contactGroup: IContactGroup, deepCheck: boolean = false): boolean {
        if(deepCheck) {
            return this._contactGroupList.some(cg => cg.name === contactGroup.name);
        }

        return this._contactGroupList.some(cg => cg.id === contactGroup.id);
    }
}