import { IHandleUsersStorage, IUser, UserConstructionData } from '../../index';

export default interface IChatHandleUsers {
    readonly usersActions: IHandleUsersStorage;
    addUser(data: UserConstructionData): void;
    addAdmin(data: UserConstructionData, originator: IUser): void;
    removeUser(id: string, originator: IUser): void;
    userToAdmin(id: string, originator: IUser): void;
    adminToUser(id: string, originator: IUser): void;
    updateUserPassword(id: string, newPassword: string, originator: IUser): void;
}