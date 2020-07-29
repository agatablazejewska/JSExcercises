import { Gender } from "../../Enums/Gender";
import { AccessLevels } from "../../Enums/AccessLevel";
import { IUpdatableAndReadable } from "../../../../Common/IUpdatableAndReadable";
import { IHasID } from "../../../../Common/IHasID";

export type DateOfBirth = Date | string | number;

export interface IUser extends IUpdatableAndReadable, IHasID {
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly dateOfBirth: DateOfBirth;
    readonly gender: Gender; 
    accessLevel: AccessLevels;
    canLogin(email: string, password: string): boolean;
    updatePassword(password: string): void;
}