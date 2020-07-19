import { IUpdatableAndReadable } from "../Common/IUpdatableAndReadable";
import { IContact } from "../Contact/IContact";
import { IContactGroupData } from "./IContactGroupData";

export interface IContactGroup extends IUpdatableAndReadable, IContactGroupData {
    add(contact : IContact) : void;
    remove(contact : IContact) : void;
}