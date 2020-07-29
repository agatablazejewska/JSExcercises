import { IUser } from "../User/IUser";
import { AccessLevels } from "../../Enums/AccessLevel";

export interface IAdmin extends IUser {
    accessLevel: AccessLevels;
    modifyUserPassword(userId: string, newPassword: string): void;
    modifyUserAccessLevel(userId: string, accessLevel: AccessLevels) : void;
}