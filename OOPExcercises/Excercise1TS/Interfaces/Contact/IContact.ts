import { IUpdatableAndReadable } from "../../../Common/IUpdatableAndReadable";
import { IHasID } from "../../../Common/IHasID";

export interface IContact extends IUpdatableAndReadable, IHasID {
    readonly firstName : string;
    readonly surname: string;
    readonly email : string;
    readonly fullName : string;
}