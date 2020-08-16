import  IUser  from "../User/IUser";
import  AccessLevels  from "../../Enums/AccessLevel";

export default interface IAdmin extends IUser {
    accessLevel: AccessLevels;
    modifyUserPassword(userId: string, newPassword: string): void;
    setUserAccessLevelToAdmin(userId: string): void;
    createNewRoom(name: string, description:string): void;
    deleteRoom(roomId: string): void;
    deleteMessageInRoom(roomId: string, messageId: string): void;
    removeUserFromRoom(roomId: string, userId: string): void;
    banUserInRoom(roomId: string, userId: string): void;
}