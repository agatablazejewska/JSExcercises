import { IChatRoom, IChatRoomsStorageHandler, IMessage, IUser } from '../../index';

interface IChatHandleRooms {
    readonly chatRoomsActions: IChatRoomsStorageHandler;
    showAllChatRooms(): void;
    joinUserToChatRoom(user: IUser, roomId: string, actionAuthor: IUser): void;
    writeMessageInChatRoom(roomId: string, messageObj: IMessage, actionAuthor: IUser): void;
    removeUserFromRoom(roomId: string, userId: string, actionAuthor: IUser): void;
    getUsersListInRoom(roomId: string): IUser[]
    getAllMessagesInRoom(roomId: string): IMessage[];
    addNewRoom(room: IChatRoom, actionAuthor: IUser): void;
    deleteRoom(id: string, actionAuthor: IUser): void;
    getBannedUsersIDs(roomId: string): string[];
    removeMessageFromRoom(roomId: string, messageId: string, actionAuthor: IUser): void;
    banUserInRoom(roomId: string, userId: string, actionAuthor: IUser): void;
}

export { IChatHandleRooms };