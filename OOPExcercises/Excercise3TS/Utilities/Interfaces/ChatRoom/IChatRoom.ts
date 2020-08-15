import { IUser, IMessage } from "../..";
import {IHasID} from "../../../../Common/IHasID";

export default interface IChatRoom extends IHasID {
    name: string;
    description: string;
    getUsersList(): Array<IUser>;
    getBannedUsersIDs(): Array<string>;
    getAllMessages(): Array<IMessage>;
    addMessage(messageObj: IMessage): void;
    removeMessage(id: string): void;
    addUser(user: IUser): void;
    removeUser(id: string): void;
    banUser(id: string): void;
}