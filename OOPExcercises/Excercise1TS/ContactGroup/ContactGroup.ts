import { IContactGroup } from "../Interfaces/ContactGroup/IContactGroup";
import { IContact } from "../Interfaces/Contact/IContact";

export class ContactGroup implements IContactGroup {
    private _name : string;
    private _contactArray : Array<IContact>;

    constructor(name : string) {
        this._name = name;
        this._contactArray = new Array<IContact>();
    }

    get name() : string {
        return this._name;
    }

    add(contact: IContact): void {
        if (!this._containsContact(contact)) {
            this._contactArray.push(contact);
        }
    }

    remove(contact: IContact): void {
        const index = this._contactArray.indexOf(contact);

        if (index > -1) {
        this._contactArray.splice(index, 1);
        }
    }

    update<IContactGroupData>(source: IContactGroupData): void {
        Object.assign(this, source);
    }

    show(): void {
        console.log(`Group name: ${this.name}`);
        console.log(`Members: ${this._getMembersCount}`);
    }

    showAllInfo(): void {
        this.show();
        this._contactArray.forEach((contact) => contact.show());
    }

    _getMembersCount() : number{
        return this._contactArray.length;
    }
    
    _containsContact(contact : IContact) : boolean {
        return this._contactArray.some(c => c.firstName === contact.firstName && c.surname === contact.surname);
    }
}