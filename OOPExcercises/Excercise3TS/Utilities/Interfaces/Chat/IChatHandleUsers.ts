import { IHandleUsersStorage, UserConstructionData } from '../../index';

export default interface IChatHandleUsers {
    readonly usersActions: IHandleUsersStorage;
    addUser(data: UserConstructionData): void;
    addAdmin(data: UserConstructionData): void;
    removeUser(id: string): void;
    userToAdmin(id: string): void;
    adminToUser(id: string): void;
    updateUserPassword(id: string, newPassword: string): void;
}