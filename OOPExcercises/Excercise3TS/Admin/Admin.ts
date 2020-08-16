import { ChatRoom } from '../ChatRoom/ChatRoom';
import { ChatRoomStorageHandler } from '../ChatRoomStorage/ChatRoomStorageHandler';
import { User } from "../User/User";
import { UsersStorageHandler } from '../UsersStorage/UsersStorageHandler';
import {
    IAdmin,
    AccessLevels,
    UserConstructionData,
    IHandleUsersStorage,
    IChatRoomsStorageHandler,
} from '../Utilities';

export class Admin extends User implements IAdmin {
    private readonly _usersStorageHandler: IHandleUsersStorage;
    private readonly _chatRoomsStorageHandler: IChatRoomsStorageHandler;
    accessLevel: AccessLevels;
    
    constructor(data: UserConstructionData, usersStorageHandler: IHandleUsersStorage = new UsersStorageHandler(),
                chatRoomsHandler: IChatRoomsStorageHandler = new ChatRoomStorageHandler()) {
        super(data);

        this.accessLevel = AccessLevels.Admin;   
        this._usersStorageHandler = usersStorageHandler;
        this._chatRoomsStorageHandler = chatRoomsHandler;
    }

    modifyUserPassword(userId: string, newPassword: string): void {
        this._usersStorageHandler.updateUserPassword(userId, newPassword);
    }

    setUserAccessLevelToAdmin(userId: string): void {
        this._usersStorageHandler.userToAdmin(userId);
    }    

    setAdminAccessLevelToUser(adminId: string): void {
        this._usersStorageHandler.adminToUser(adminId);
    }

    banUserInRoom(roomId: string, userId: string): void {
        this._chatRoomsStorageHandler.getRoom(roomId)?.banUser(userId);
    }

    createNewRoom(name: string, description: string): void {
        this._chatRoomsStorageHandler.addNewRoom(new ChatRoom(name, description));
    }

    deleteRoom(roomId: string): void {
        this._chatRoomsStorageHandler.deleteRoom(roomId);
    }

    deleteMessageInRoom(roomId: string, messageId: string): void {
        this._chatRoomsStorageHandler.getRoom(roomId)?.removeMessage(messageId);
    }

    removeUserFromRoom(roomId: string, userId: string): void {
        this._chatRoomsStorageHandler.getRoom(roomId)?.removeUser(userId);
    }
}