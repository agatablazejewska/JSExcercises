import { IUpdatableAndReadable } from "../../../Common/IUpdatableAndReadable";

export interface IContact extends IUpdatableAndReadable {
    readonly id : string;
    readonly firstName : string;
    readonly surname: string;
    readonly email : string;
    readonly fullName : string;
}