import { ChatRoomStorageHandler } from '../ChatRoomStorage/ChatRoomStorageHandler';
import { UsersStorageHandler } from '../UsersStorage/UsersStorageHandler';
import {
    IChatAdmin,
    IChatRoom,
    IChatRoomsStorageHandler,
    IHandleUsersStorage,
    IMessage,
    IUser,
    UserConstructionData,
} from '../Utilities';

export class Chat implements IChatAdmin {
    readonly chatRooms: IChatRoomsStorageHandler;
    readonly users: IHandleUsersStorage;

    constructor(chatRoomsHandler: IChatRoomsStorageHandler = new ChatRoomStorageHandler(),
                usersHandler: IHandleUsersStorage = new UsersStorageHandler()) {
        this.chatRooms = chatRoomsHandler;
        this.users = usersHandler;
    }

    addUser(data: UserConstructionData): void {
        this.users.addUser(data);
    }

    addAdmin(data: UserConstructionData): void {
        this.users.addAdmin(data);
    }

    removeUser(id: string): void {
        this.users.removeUser(id);
    }

    userToAdmin(id: string): void {
        this.users.userToAdmin(id);
    }

    adminToUser(id: string): void {
        this.users.adminToUser(id);
    }

    updateUserPassword(id: string, newPassword: string): void {
        this.users.updateUserPassword(id, newPassword);
    }

    addNewRoom(room: IChatRoom): void {
        this.chatRooms.addNewRoom(room);
    }

    deleteRoom(id: string): void {
        this.chatRooms.deleteRoom(id);
    }

    showAllChatRooms(): void {
        this.chatRooms.showAllChatRooms();
    }

    getRoom(id: string): IChatRoom | undefined {
        return this.getRoom(id);
    }

    joinUserToChatRoom(user: IUser, roomId: string): void {
        this.getRoom(roomId)?.addUser(user);
    }

    writeMessageInChatRoom(roomId: string, messageObj: IMessage) {
        this.getRoom(roomId)?.addMessage(messageObj);
    }

    removeUserFromRoom(roomId: string, userId: string) {
        this.getRoom(roomId)?.removeUser(userId);
    }

    getUsersListInRoom(roomId: string): IUser[] | undefined {
        return this.getRoom(roomId)?.getUsersList();
    }

    getBannedUsersIDs(roomId: string): string[] | undefined {
        return this.getRoom(roomId)?.getBannedUsersIDs();
    }

    getAllMessagesInRoom(roomId: string): IMessage[] | undefined {
        return this.getRoom(roomId)?.getAllMessages();
    }

    addMessageInRoom(roomId: string, messageObj: IMessage): void {
        this.getRoom(roomId)?.addMessage(messageObj);
    }

    removeMessageFromRoom(roomId: string, messageId: string): void {
        this.getRoom(roomId)?.removeMessage(messageId);
    }

    banUserInRoom(roomId: string, userId: string): void {
        this.getRoom(roomId)?.banUser(userId);
    }
}