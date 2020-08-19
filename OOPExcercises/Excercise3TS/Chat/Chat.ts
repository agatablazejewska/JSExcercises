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
    UserConstructionData, AccessLevels,
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

    addAdmin(data: UserConstructionData, actionAuthor: IUser): void {
        if (!this._isAdmin(actionAuthor)) {
            throw new Error('Only an admin is allowed to add a new admin');
        }
        this.usersActions.addAdmin(data);
    }

    removeUser(id: string, actionAuthor: IUser): void {
        if (!this._isAdmin(actionAuthor)) {
            throw new Error('Only an admin is allowed to remove a user');
        }
        this.usersActions.removeUser(id);
    }

    userToAdmin(id: string, actionAuthor: IUser): void {
        if (!this._isAdmin(actionAuthor)) {
            throw new Error('Only an admin is allowed to change privileges');
        }
        this.usersActions.userToAdmin(id);
    }

    adminToUser(id: string, actionAuthor: IUser): void {
        if (!this._isAdmin(actionAuthor)) {
            throw new Error('Only another admin is allowed to change admin privileges');
        }
        this.usersActions.adminToUser(id);
    }

    updateUserPassword(id: string, newPassword: string, actionAuthor: IUser): void {
        if (!this._wasActionStartedBySameUserItOperatesOn(id, actionAuthor.id)
            && !this._isAdmin(actionAuthor)) {
            throw new Error('Only an admin is allowed to change another user\'s password');
        }
        this.usersActions.updateUserPassword(id, newPassword);
    }

    addNewRoom(room: IChatRoom, actionAuthor: IUser): void {
        if (!this._isAdmin(actionAuthor)) {
            throw new Error('Only an admin is allowed to add a new room');
        }
        this.chatRoomsActions.addNewRoom(room);
    }

    deleteRoom(id: string, actionAuthor: IUser): void {
        if (!this._isAdmin(actionAuthor)) {
            throw new Error('Only an admin is allowed to add a new admin');
        }
        this.chatRoomsActions.deleteRoom(id);
    }

    showAllChatRooms(): void {
        this.chatRoomsActions.showAllChatRooms();
    }

    joinUserToChatRoom(user: IUser, roomId: string, actionAuthor: IUser): void {
        const room = this._getRoom(roomId);
        if (!this._wasActionStartedBySameUserItOperatesOn(user.id, actionAuthor.id) && !this._isAdmin(actionAuthor)) {
            throw new Error('Only an admin is allowed to add other user than himself to a room');
        } else if (room.isBanned(user.id)) {
            throw new Error('User is banned in the room');
        }

        room.addUser(user);
    }

    writeMessageInChatRoom(roomId: string, messageObj: IMessage, actionAuthor: IUser) {
        const chatRoom = this._getRoom(roomId);
        const _isUserInRoom = chatRoom.containsUser(messageObj.author.id);

        if (!_isUserInRoom && !this._isAdmin(actionAuthor)) {
            throw new Error('This user is not a member of the room');
        }

        chatRoom.addMessage(messageObj);
    }

    removeUserFromRoom(roomId: string, userId: string, actionAuthor: IUser) {
        if (!this._wasActionStartedBySameUserItOperatesOn(userId, actionAuthor.id) && !this._isAdmin(actionAuthor)) {
            throw new Error('Only an admin is allowed to remove user other than himself from a room');
        }
        this._getRoom(roomId).removeUser(userId);
    }

    getUsersListInRoom(roomId: string): IUser[] {
        return this._getRoom(roomId).getUsersList();
    }

    getBannedUsersIDs(roomId: string): string[] {
        return this._getRoom(roomId).getBannedUsersIDs();
    }

    getAllMessagesInRoom(roomId: string): IMessage[] {
        return this._getRoom(roomId).getAllMessages();
    }

    removeMessageFromRoom(roomId: string, messageId: string, actionAuthor: IUser): void {
        if (!this._isAdmin(actionAuthor)) {
            throw new Error('Only admin can remove messages in room');
        }

        this._getRoom(roomId).removeMessage(messageId);
    }

    banUserInRoom(roomId: string, userId: string, actionAuthor: IUser): void {
        if (!this._isAdmin(actionAuthor)) {
            throw new Error('Only admin can ban users in room');
        }

        this._getRoom(roomId).banUser(userId);
    }

    private _isAdmin(user: IUser): boolean {
        return user.accessLevel === AccessLevels.Admin;
    }

    private _getRoom(id: string): IChatRoom {
        return this.chatRoomsActions.getRoom(id);
    }

    private _wasActionStartedBySameUserItOperatesOn(userId: string, actionAuthorId: string) {
        return userId === actionAuthorId;
    }
}