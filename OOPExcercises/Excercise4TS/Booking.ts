import moment from 'moment';
import uuid4 from 'uuid4';
import { Helper } from '../Common/Helper';
import { IBook, IBooking, IUser } from './Interfaces';

export class Booking implements IBooking {
    private _penalty: number;
    private _penaltyForEachDay: number = 2;
    readonly id: string;
    readonly bookIds: string[];
    readonly rentedTo: IUser;
    readonly rentedAt: moment.Moment;
    returnedAt: moment.Moment | undefined;
    expectedReturnDate: moment.Moment;


    constructor(books: IBook[], rentedTo: IUser) {
        this.id = uuid4();
        this.bookIds = books.map(book => book.id);
        this.rentedTo = rentedTo;
        this.rentedAt = moment().startOf('day');
        this.expectedReturnDate = this.rentedAt.add(7, 'days');
        this._penalty = 0;
    }

    returnBooks(books: IBook[]): void {
        books.forEach(book => Helper.removeStringFromStringsArray(book.id, this.bookIds));

        if(this.bookIds.length === 0) {
            this.returnedAt = moment().startOf('day');
        }
    }

    get penalty() {
        const today = moment().startOf('day');
        const wasReturnedOnTime = (this.returnedAt ?? today) <= this.expectedReturnDate;
        if(!wasReturnedOnTime) {
            this._penalty = this._calculatePenalty();
        }

        return this._penalty;
    }

    private _calculatePenalty(): number {
        const today = moment().startOf('day');
        const daysLateNegativeNumber = this.returnedAt ? this.returnedAt.diff(this.expectedReturnDate, 'day')
            : today.diff(this.expectedReturnDate, 'day');
        const daysLate = daysLateNegativeNumber * (-1);

        return daysLate * this._penaltyForEachDay;
    }
}