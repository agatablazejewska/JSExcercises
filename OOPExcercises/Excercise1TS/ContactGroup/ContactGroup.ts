import uuid4 from "uuid4";
import { IContactGroup } from "../Interfaces/ContactGroup/IContactGroup";
import { IContact } from "../Interfaces/Contact/IContact";
import { Helper } from "../../Common/Helper";
import { IContactGroupDataOptional } from "../Interfaces/ContactGroup/IContactGroupDataOptional";

export class ContactGroup implements IContactGroup {
    private _name : string;
    private _contactArray : Array<IContact>;
    private readonly _id: string;

    constructor(name : string) {
        this._id = uuid4();
        this._name = name;
        this._contactArray = new Array<IContact>();
    }

    get id() : string {
        return this._id;
    }

    get name() : string {
        return this._name;
    }

    get contacts() : Array<IContact> {
        return this._contactArray;
    }

    add(contact: IContact) : void {
        if (!this._containsContact(contact)) {
            this._contactArray.push(contact);
        }
    }

    remove(id : string) : void {
        Helper.removeFromArray(id, this._contactArray);
    }

    update(source: IContactGroupDataOptional) : void {
        if(!Helper.isNullOrUndefined(source.name)) {
            Helper.validateEmptyString(source.name!);        
        }
        
        Object.assign(this, source);
    }

    show() : void {
        console.log(`Group name: ${this.name}`);
        console.log(`Members: ${this._getMembersCount}`);
    }

    showAllInfo() : void {
        this.show();
        this._contactArray.forEach((contact) => contact.show());
    }

    _getMembersCount() : number {
        return this._contactArray.length;
    }
    
    _containsContact(contact : IContact) : boolean {
        return this._contactArray.some(c => c.firstName === contact.firstName 
            && c.surname === contact.surname 
            && c.email === contact.email);
    }
}