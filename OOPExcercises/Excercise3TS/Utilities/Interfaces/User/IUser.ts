import { IUpdatableAndReadable } from "../../../../Common/IUpdatableAndReadable";
import { IHasID } from "../../../../Common/IHasID";
import { DateOfBirth, Gender, AccessLevels } from "../..";

export default interface IUser extends IUpdatableAndReadable, IHasID {
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly dateOfBirth: DateOfBirth;
    readonly gender: Gender; 
    accessLevel: AccessLevels;
    canLogin(email: string, password: string): boolean;
    updatePassword(password: string): void;
    joinRoom(id: string): void;
    leaveRoom(id: string): void;
    addMessageInRoom(roomId: string, message: string): void;
}