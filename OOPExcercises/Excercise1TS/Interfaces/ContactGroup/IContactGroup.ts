import { IUpdatableAndReadable } from "../../../Common/IUpdatableAndReadable";
import { IContact } from "../Contact/IContact";

export interface IContactGroup extends IUpdatableAndReadable {
    readonly id : string;
    readonly name : string;
    readonly contacts : Array<IContact>;
    add(contact : IContact) : void;
    remove(id : string) : void;
}