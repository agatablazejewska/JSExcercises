import { Chat } from '../Chat/Chat';
import { ChatRoom } from '../ChatRoom/ChatRoom';
import { User } from "../User/User";
import {
    IAdmin,
    AccessLevels,
    UserConstructionData, IChatAdmin,
} from '../Utilities';

export class Admin extends User implements IAdmin {
    private readonly _chatForAdmin: IChatAdmin;
    accessLevel: AccessLevels;
    
    constructor(data: UserConstructionData, chat: IChatAdmin = new Chat()) {
        super(data);

        this._chatForAdmin = chat;
        this.accessLevel = AccessLevels.Admin;
    }

    modifyUserPassword(userId: string, newPassword: string): void {
        this._chatForAdmin.updateUserPassword(userId, newPassword);
    }

    setUserAccessLevelToAdmin(userId: string): void {
        this._chatForAdmin.userToAdmin(userId);
    }    

    setAdminAccessLevelToUser(adminId: string): void {
        this._chatForAdmin.adminToUser(adminId);
    }

    banUserInRoom(roomId: string, userId: string): void {
        this._chatForAdmin.banUserInRoom(roomId, userId);
    }

    createNewRoom(name: string, description: string): void {
        this._chatForAdmin.addNewRoom(new ChatRoom(name, description));
    }

    deleteRoom(roomId: string): void {
        this._chatForAdmin.deleteRoom(roomId);
    }

    deleteMessageInRoom(roomId: string, messageId: string): void {
        this._chatForAdmin.removeMessageFromRoom(roomId, messageId);
    }

    removeUserFromRoom(roomId: string, userId: string): void {
        this._chatForAdmin.removeUserFromRoom(roomId, userId);
    }
}