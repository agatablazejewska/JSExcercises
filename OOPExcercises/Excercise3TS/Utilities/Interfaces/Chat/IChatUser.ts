import { IMessage, IUser } from '../../index';

export default interface IChatUser {
    showAllChatRooms(): void;
    joinUserToChatRoom(user: IUser, roomId: string): void;
    writeMessageInChatRoom(roomId: string, messageObj: IMessage): void;
    removeUserFromRoom(roomId: string, userId: string): void;
    getUsersListInRoom(roomId: string): IUser[] | undefined;
    getAllMessagesInRoom(roomId: string): IMessage[] | undefined;
    addMessageInRoom(roomId: string, messageObj: IMessage): void;
}