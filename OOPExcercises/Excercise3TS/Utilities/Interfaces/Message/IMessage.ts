import moment from "moment";
import {IUser} from "../../index";
import {IHasID} from "../../../../Common/IHasID";

export default interface IMessage extends IHasID {
    author: IUser;
    message: string;
    dateAndTime: moment.Moment;
}