import moment from 'moment';
import { IHasID } from '../../Common/IHasID';
import { IUser } from './IUser';

interface IBooking extends IHasID {
    readonly bookId: string;
    readonly bookTitle: string;
    readonly rentedTo: IUser;
    readonly rentedAt: moment.Moment;
    readonly penalty: number;
    returnedAt: moment.Moment | undefined;
    expectedReturnDate: moment.Moment;
    returnBook(): void;
}

export { IBooking };