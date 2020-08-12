import  IUser  from "../User/IUser";
import  AccessLevels  from "../../Enums/AccessLevel";

export default interface IAdmin extends IUser {
    accessLevel: AccessLevels;
    modifyUserPassword(userId: string, newPassword: string): void;
    setUserAccessLevelToAdmin(userId: string): void;
}