import { IUser, IMessage } from '../..';
import {IHasID} from "../../../../Common/IHasID";

export default interface IChatRoom extends IHasID {
    name: string;
    description: string;
    getUsersList(): IUser[];
    getBannedUsersIDs(): string[];
    getAllMessages(): IMessage[];
    addUser(user: IUser): void;
    removeUser(id: string): void;
    banUser(id: string): void;
    addMessage(messageObj: IMessage): void;
    removeMessage(id: string): void;
}