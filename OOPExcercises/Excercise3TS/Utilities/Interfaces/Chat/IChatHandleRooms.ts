import { IChatRoom, IChatRoomsStorageHandler, IMessage, IUser } from '../../index';

export default interface IChatHandleRooms {
    readonly chatRoomsActions: IChatRoomsStorageHandler;
    showAllChatRooms(): void;
    joinUserToChatRoom(user: IUser, roomId: string, originator: IUser): void;
    writeMessageInChatRoom(roomId: string, messageObj: IMessage, originator: IUser): void;
    removeUserFromRoom(roomId: string, userId: string, originator: IUser): void;
    getUsersListInRoom(roomId: string): IUser[]
    getAllMessagesInRoom(roomId: string): IMessage[];
    addNewRoom(room: IChatRoom, originator: IUser): void;
    deleteRoom(id: string, originator: IUser): void;
    getBannedUsersIDs(roomId: string): string[];
    removeMessageFromRoom(roomId: string, messageId: string, originator: IUser): void;
    banUserInRoom(roomId: string, userId: string, originator: IUser): void;
}