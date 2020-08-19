import { IHandleUsersStorage, IUser, UserConstructionData } from '../../index';

interface IChatHandleUsers {
    readonly usersActions: IHandleUsersStorage;
    addUser(data: UserConstructionData): void;
    addAdmin(data: UserConstructionData, actionAuthor: IUser): void;
    removeUser(id: string, actionAuthor: IUser): void;
    userToAdmin(id: string, actionAuthor: IUser): void;
    adminToUser(id: string, actionAuthor: IUser): void;
    updateUserPassword(id: string, newPassword: string, actionAuthor: IUser): void;
}

export { IChatHandleUsers };