import { IUpdatableAndReadable } from "../../../Common/IUpdatableAndReadable";
import { IContact } from "../Contact/IContact";

export interface IContactGroup extends IUpdatableAndReadable {
    readonly id : string;
    readonly name : string;
    add(contact : IContact) : void;
    remove(contact : IContact) : void;
}