import { v4 as uuid4 } from 'uuid';
import { IChatRoom, IUser, IMessage } from "../Utilities";
import { CommonValidator } from "../../Common/CommonValidator";
import {Helper} from "../../Common/Helper";

export class ChatRoom implements IChatRoom {
    private readonly _users: IUser[];
    private readonly _bannedUsersIDs: string[];
    private readonly _messages: IMessage[];
    readonly id: string;
    name: string;
    description: string;

    constructor(name: string, description: string) {
        CommonValidator.validateEmptyString(name);

        this.id = uuid4();
        this.name = name;
        this.description = description;

        this._users = new Array<IUser>();
        this._bannedUsersIDs = new Array<string>();
        this._messages = new Array<IMessage>();
    }

    getUsersList(): IUser[] {
        return this._users;
    }

    getBannedUsersIDs(): string[] {
        return this._bannedUsersIDs;
    }

    getAllMessages(): IMessage[] {
        return this._messages;
    }

    addMessage(messageObj: IMessage): void {
        this._messages.push(messageObj);
    }

    removeMessage(id: string): void {
        Helper.removeFromArray(id, this._messages);
    }

    addUser(user: IUser): void {
        if(!this.containsUser(user.id)) {
            this._users.push(user);
        }
    }

    removeUser(id: string): void {
        Helper.removeFromArray(id, this._users);
    }

    banUser(id: string): void {
        const usersIndex = this._users.findIndex(u => u.id === id);

        if(usersIndex > -1) {
            this._bannedUsersIDs.push(id);
        }
    }

    containsUser(userId: string): boolean {
        return this._users.some(u => u.id === userId);
    }

    isBanned(userId: string): boolean {
        return this._bannedUsersIDs.some(id => id === userId);
    }
}