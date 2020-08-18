import { IChatRoom, IChatUser, UserConstructionData } from '../../index';

export default interface IChatAdmin extends IChatUser {
    addUser(data: UserConstructionData): void;
    addAdmin(data: UserConstructionData): void;
    removeUser(id: string): void;
    userToAdmin(id: string): void;
    adminToUser(id: string): void;
    updateUserPassword(id: string, newPassword: string): void;
    addNewRoom(room: IChatRoom): void;
    deleteRoom(id: string): void;
    getRoom(id: string): IChatRoom | undefined;
    getBannedUsersIDs(roomId: string): string[] | undefined;
    removeMessageFromRoom(roomId: string, messageId: string): void;
    banUserInRoom(roomId: string, userId: string): void;
}