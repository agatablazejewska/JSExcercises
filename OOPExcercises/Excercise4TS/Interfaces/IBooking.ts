import moment from 'moment';
import { IHasID } from '../../Common/IHasID';
import { IBook } from './IBook';
import { IUser } from './IUser';

interface IBooking extends IHasID {
    readonly bookIds: string[];
    readonly rentedTo: IUser;
    readonly rentedAt: moment.Moment;
    readonly penalty: number;
    returnedAt: moment.Moment | undefined;
    expectedReturnDate: moment.Moment;
    returnBooks(books: IBook[]): void;
}

export { IBooking };