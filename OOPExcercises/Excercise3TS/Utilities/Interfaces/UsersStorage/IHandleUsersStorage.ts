import { UserConstructionData } from "../..";

export default interface IHandleUsersStorage {
    addUser(data: UserConstructionData): void;
    addAdmin(data: UserConstructionData): void;
    removeUser(id: string): void;
    userToAdmin(id: string): void;
    adminToUser(id: string): void;
    updateUserPassword(id: string, newPassword: string): void;
}