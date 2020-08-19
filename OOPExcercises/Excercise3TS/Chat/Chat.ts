import { ChatRoomStorageHandler } from '../ChatRoomStorage/ChatRoomStorageHandler';
import { UsersStorageHandler } from '../UsersStorage/UsersStorageHandler';
import {
    IChatHandleRooms,
    IChatHandleUsers,
    IChatRoom,
    IChatRoomsStorageHandler,
    IHandleUsersStorage,
    IMessage,
    IUser,
    UserConstructionData,
} from '../Utilities';
import AccessLevels from '../Utilities/Enums/AccessLevel';

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

    addAdmin(data: UserConstructionData, originator: IUser): void {
        if(!this._isAdmin(originator)) {
            throw new Error("Only an admin is allowed to add a new admin");
        }
        this.usersActions.addAdmin(data);
    }

    removeUser(id: string, originator: IUser): void {
        if(!this._isAdmin(originator)) {
            throw new Error("Only an admin is allowed to remove a user");
        }
        this.usersActions.removeUser(id);
    }

    userToAdmin(id: string, originator: IUser): void {
        if(!this._isAdmin(originator)) {
            throw new Error("Only an admin is allowed to change privileges");
        }
        this.usersActions.userToAdmin(id);
    }

    adminToUser(id: string, originator: IUser): void {
        if(!this._isAdmin(originator)) {
            throw new Error("Only another admin is allowed to change admin privileges");
        }
        this.usersActions.adminToUser(id);
    }

    updateUserPassword(id: string, newPassword: string, originator: IUser): void {
        if(originator.id !== id && !this._isAdmin(originator)) {
            throw new Error("Only an admin is allowed to change another user's password");
        }
        this.usersActions.updateUserPassword(id, newPassword);
    }

    addNewRoom(room: IChatRoom, originator: IUser): void {
        if(!this._isAdmin(originator)) {
            throw new Error("Only an admin is allowed to add a new room");
        }
        this.chatRoomsActions.addNewRoom(room);
    }

    deleteRoom(id: string, originator: IUser): void {
        if(!this._isAdmin(originator)) {
            throw new Error("Only an admin is allowed to add a new admin");
        }
        this.chatRoomsActions.deleteRoom(id);
    }

    showAllChatRooms(): void {
        this.chatRoomsActions.showAllChatRooms();
    }

    joinUserToChatRoom(user: IUser, roomId: string, originator: IUser): void {
        if(user != originator && this._isAdmin(originator)) {
            throw new Error("Only an admin is allowed to add other user than himself to a room");
        }
        this._getRoom(roomId).addUser(user);
    }

    writeMessageInChatRoom(roomId: string, messageObj: IMessage, originator: IUser) {
        const chatRoom = this._getRoom(roomId);
        const isUserMemberOfRoom = chatRoom.isUserAMember(messageObj.author.id);

        if(!isUserMemberOfRoom && !this._isAdmin(originator)) {
            throw new Error("This user is not a member of the room");
        }

        chatRoom.addMessage(messageObj);
    }

    removeUserFromRoom(roomId: string, userId: string, originator: IUser) {
        if(originator.id !== userId && !this._isAdmin(originator)) {
            throw new Error("Only an admin is allowed to remove user other than himself from a room");
        }
        this._getRoom(roomId).removeUser(userId);
    }

    getUsersListInRoom(roomId: string): IUser[] {
        return this._getRoom(roomId).getUsersList();
    }

    getBannedUsersIDs(roomId: string): string[]{
        return this._getRoom(roomId).getBannedUsersIDs();
    }

    getAllMessagesInRoom(roomId: string): IMessage[] {
        return this._getRoom(roomId).getAllMessages();
    }

    removeMessageFromRoom(roomId: string, messageId: string, originator: IUser): void {
        if(!this._isAdmin(originator)) {
            throw new Error("Only admin can remove messages in room");
        }

        this._getRoom(roomId).removeMessage(messageId);
    }

    banUserInRoom(roomId: string, userId: string, originator: IUser): void {
        if(!this._isAdmin(originator)) {
            throw new Error("Only admin can ban users in room");
        }

        this._getRoom(roomId).banUser(userId);
    }

    private _isAdmin(user: IUser): boolean {
        return user.accessLevel === AccessLevels.Admin;
    }

    private _getRoom(id: string): IChatRoom {
        return this.chatRoomsActions.getRoom(id);
    }
}