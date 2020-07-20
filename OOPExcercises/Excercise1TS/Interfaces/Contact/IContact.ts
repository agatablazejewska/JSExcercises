import { IUpdatableAndReadable } from "../../../Common/IUpdatableAndReadable";
import { IContactData } from "./IContactData";

export interface IContact extends IUpdatableAndReadable, IContactData {
    readonly fullName : string;
}