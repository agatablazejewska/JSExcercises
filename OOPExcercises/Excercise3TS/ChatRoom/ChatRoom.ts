import { cloneDeep } from 'lodash';
import { v4 as uuid4 } from 'uuid';
import { IChatRoom, IUser, IMessage } from '../Utilities';
import { CommonValidator } from '../../Common/CommonValidator';
import { Helper } from '../../Common/Helper';

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
        return cloneDeep(this._users);
    }

    getBannedUsersIDs(): string[] {
        return cloneDeep(this._bannedUsersIDs);
    }

    getAllMessages(): IMessage[] {
        return cloneDeep(this._messages);
    }

    addMessage(messageObj: IMessage): void {
        this._messages.push(messageObj);
    }

    removeMessage(id: string): void {
        Helper.removeFromArray(id, this._messages);
    }

    addUser(user: IUser): void {
        if (this.containsUser(user.id)) {
            throw new Error('This user is already present in the room.');
        }

        this._users.push(user);
    }

    removeUser(id: string): void {
        Helper.removeFromArray(id, this._users);
    }

    banUser(id: string): void {
        const usersIndex = this._users.findIndex(u => u.id === id);

        if (usersIndex === -1) {
            throw new Error("There is no such user in the chat room.");
        }

        this._bannedUsersIDs.push(id);
    }

    containsUser(userId: string): boolean {
        return this._users.some(u => u.id === userId);
    }

    isBanned(userId: string): boolean {
        return this._bannedUsersIDs.some(id => id === userId);
    }
}