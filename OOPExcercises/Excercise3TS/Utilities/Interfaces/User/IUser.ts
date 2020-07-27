import { Gender } from "../../Enums/Gender";
import { AccessLevels } from "../../Enums/AccessLevel";
import { IUpdatableAndReadable } from "../../../../Common/IUpdatableAndReadable";

export interface IUser extends IUpdatableAndReadable {
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly dateOfBirth: string;
    readonly gender: Gender; 
    accessLevel: AccessLevels;
    canLogin(email: string, password: string): boolean;
}