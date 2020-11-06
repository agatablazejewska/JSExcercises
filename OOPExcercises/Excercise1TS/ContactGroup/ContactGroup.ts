import uuid4 from "uuid4";
import { IContactGroup } from "../Interfaces/ContactGroup/IContactGroup";
import { IContact } from "../Interfaces/Contact/IContact";
import { Helper } from "../../Common/Helper";
import { IContactGroupDataOptional } from "../Interfaces/ContactGroup/IContactGroupDataOptional";
import { CommonValidator } from "../../Common/CommonValidator";

export class ContactGroup implements IContactGroup {
    private readonly _contactArray : Array<IContact>;
    private readonly _id: string;
    readonly name : string;

    constructor(name : string) {
        this._id = uuid4();
        this.name = name;
        this._contactArray = new Array<IContact>();
    }

    get id() : string {
        return this._id;
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
        try {
            CommonValidator.validateStringProperties(source);
        
            Object.assign(this, source);
        } catch {
            console.error("Provided name consists of white spaces. Update failed.");
        }       
    }

    show() : void {
        console.log(`Group name: ${this.name}`);
        console.log(`Members: ${this._getMembersCount}`);
    }

    showAllInfo() : void {
        this.show();
        this._contactArray.forEach((contact) => contact.show());
    }

    private _getMembersCount() : number {
        return this._contactArray.length;
    }
    
    private _containsContact(contact : IContact) : boolean {
        return this._contactArray.some(c => c.firstName === contact.firstName 
            && c.surname === contact.surname 
            && c.email === contact.email);
    }
}