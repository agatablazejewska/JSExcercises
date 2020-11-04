import { v4 as uuid4 } from 'uuid';
import moment from "moment";
import {IMessage, IUser} from "../Utilities";


export class Message implements IMessage {
    readonly id: string;
    readonly author: IUser;
    createdAt: moment.Moment;
    message: string;

     constructor(author: IUser, message: string) {
         this.id = uuid4();
         this.author = author;
         this.message = message;
         this.createdAt = moment();
     }
}