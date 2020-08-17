import moment from "moment";
import {IUser} from "../../index";
import {IHasID} from "../../../../Common/IHasID";

export default interface IMessage extends IHasID {
    readonly author: IUser;
    message: string;
    createdAt: moment.Moment;
}