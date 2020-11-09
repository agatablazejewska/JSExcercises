import { IUpdatableAndReadable } from "../../../Common/IUpdatableAndReadable";
import { IContact } from "../Contact/IContact";
import { IHasID } from "../../../Common/IHasID";

export interface IContactGroup extends IUpdatableAndReadable, IHasID {
    readonly name : string;
    readonly contactsListCopy : Array<IContact>;
    add(contact : IContact) : void;
    remove(id : string) : void;
}