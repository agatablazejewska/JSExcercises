import moment from 'moment';
import uuid4 from 'uuid4';
import { CommonValidator } from '../Common/CommonValidator';
import { IBooking, IUser } from './Interfaces';

export class Booking implements IBooking {
    private _penalty: number;
    private _penaltyForEachDay: number = 2;
    readonly id: string;
    readonly bookId: string;
    readonly bookTitle: string;
    readonly rentedTo: IUser;
    readonly rentedAt: moment.Moment;
    returnedAt: moment.Moment | undefined;
    expectedReturnDate: moment.Moment;


    constructor(bookId: string, bookTitle: string, rentedTo: IUser) {
        CommonValidator.validateEmptyString(bookId);
        CommonValidator.validateEmptyString(bookTitle);

        this.id = uuid4();
        this.bookId = bookId;
        this.bookTitle = bookTitle;
        this.rentedTo = rentedTo;
        this.rentedAt = moment().startOf('day');
        this.expectedReturnDate = this.rentedAt.add(7, 'days');
        this._penalty = 0;
    }

    returnBook(): void {
        this.returnedAt = moment().startOf('day');
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