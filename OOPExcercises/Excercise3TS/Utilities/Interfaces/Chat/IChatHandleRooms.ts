import { IChatRoom, IChatRoomsStorageHandler, IMessage, IUser } from '../../index';

export default interface IChatHandleRooms {
    readonly chatRoomsActions: IChatRoomsStorageHandler;
    showAllChatRooms(): void;
    joinUserToChatRoom(user: IUser, roomId: string): void;
    writeMessageInChatRoom(roomId: string, messageObj: IMessage): void;
    removeUserFromRoom(roomId: string, userId: string): void;
    getUsersListInRoom(roomId: string): IUser[]
    getAllMessagesInRoom(roomId: string): IMessage[];
    addMessageInRoom(roomId: string, messageObj: IMessage): void;
    addNewRoom(room: IChatRoom): void;
    deleteRoom(id: string): void;
    getRoom(id: string): IChatRoom;
    getBannedUsersIDs(roomId: string): string[];
    removeMessageFromRoom(roomId: string, messageId: string): void;
    banUserInRoom(roomId: string, userId: string): void;
}