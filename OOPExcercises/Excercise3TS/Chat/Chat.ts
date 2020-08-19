import { ChatRoomStorageHandler } from '../ChatRoomStorage/ChatRoomStorageHandler';
import { UsersStorageHandler } from '../UsersStorage/UsersStorageHandler';
import {
    IChatHandleRooms, IChatHandleUsers,
    IChatRoom,
    IChatRoomsStorageHandler,
    IHandleUsersStorage,
    IMessage,
    IUser,
    UserConstructionData,
} from '../Utilities';

export class Chat implements IChatHandleRooms, IChatHandleUsers {
    readonly chatRoomsActions: IChatRoomsStorageHandler;
    readonly usersActions: IHandleUsersStorage;

    constructor(chatRoomsHandler: IChatRoomsStorageHandler = new ChatRoomStorageHandler(),
                usersHandler: IHandleUsersStorage = new UsersStorageHandler()) {
        this.chatRoomsActions = chatRoomsHandler;
        this.usersActions = usersHandler;
    }

    addUser(data: UserConstructionData): void {
        this.usersActions.addUser(data);
    }

    addAdmin(data: UserConstructionData): void {
        this.usersActions.addAdmin(data);
    }

    removeUser(id: string): void {
        this.usersActions.removeUser(id);
    }

    userToAdmin(id: string): void {
        this.usersActions.userToAdmin(id);
    }

    adminToUser(id: string): void {
        this.usersActions.adminToUser(id);
    }

    updateUserPassword(id: string, newPassword: string): void {
        this.usersActions.updateUserPassword(id, newPassword);
    }

    addNewRoom(room: IChatRoom): void {
        this.chatRoomsActions.addNewRoom(room);
    }

    deleteRoom(id: string): void {
        this.chatRoomsActions.deleteRoom(id);
    }

    showAllChatRooms(): void {
        this.chatRoomsActions.showAllChatRooms();
    }

    getRoom(id: string): IChatRoom {
            return this.chatRoomsActions.getRoom(id);
    }

    joinUserToChatRoom(user: IUser, roomId: string): void {
        this.getRoom(roomId).addUser(user);
    }

    writeMessageInChatRoom(roomId: string, messageObj: IMessage) {
        const chatRoom = this.getRoom(roomId);
        const isUserMemberOfRoom = chatRoom.isUserAMember(messageObj.author.id);

        if(!isUserMemberOfRoom) {
            throw new Error("This user is not a member of the room");
        }

        chatRoom.addMessage(messageObj);
    }

    removeUserFromRoom(roomId: string, userId: string) {
        this.getRoom(roomId).removeUser(userId);
    }

    getUsersListInRoom(roomId: string): IUser[] {
        return this.getRoom(roomId).getUsersList();
    }

    getBannedUsersIDs(roomId: string): string[]{
        return this.getRoom(roomId).getBannedUsersIDs();
    }

    getAllMessagesInRoom(roomId: string): IMessage[] {
        return this.getRoom(roomId).getAllMessages();
    }

    addMessageInRoom(roomId: string, messageObj: IMessage): void {
        this.getRoom(roomId).addMessage(messageObj);
    }

    removeMessageFromRoom(roomId: string, messageId: string): void {
        this.getRoom(roomId).removeMessage(messageId);
    }

    banUserInRoom(roomId: string, userId: string): void {
        this.getRoom(roomId).banUser(userId);
    }
}