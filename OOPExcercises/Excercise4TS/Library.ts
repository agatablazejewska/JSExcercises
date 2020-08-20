import { Helper } from '../Common/Helper';
import { AccessLevels } from '../Excercise3TS/Utilities';
import { Booking } from './Booking';
import { IBook, IBooking, IUser } from './Interfaces';
import { ILibrary } from './Interfaces/ILibrary';
import { LibraryStorage } from './LibraryStorage';

export class Library implements ILibrary {
    private readonly _libraryStorage = LibraryStorage;
    bookList: IBook[];
    bookingList: IBooking[];
    availableBooksList: IBook[];

    constructor() {
        this.bookList = this._libraryStorage.bookList;
        this.bookingList = this._libraryStorage.bookingList;
        this.availableBooksList = this._libraryStorage.availableBooksList;
    }

    addBook(book: IBook, actionAuthor: IUser): void {
        this._checkIfUserIsAllowedToPerformAction(actionAuthor);
        this.bookList.push(book);
    }

    removeBook(book: IBook, actionAuthor: IUser): void {
        this._checkIfUserIsAllowedToPerformAction(actionAuthor);
        Helper.removeFromArray(book.id, this.bookList);
    }

    rentBook(book: IBook, user: IUser, actionAuthor: IUser): void {
        this._checkIfUserIsAllowedToPerformAction(actionAuthor);
        this._checkIfBookIsAvailable(book);

        const booking = new Booking(book.id, book.title, user);
        this.bookingList.push(booking);
        Helper.removeFromArray(book.id, this.availableBooksList);
    }

    returnBookCheckPenalty(booking: IBooking, actionAuthor: IUser): number {
        this._checkIfUserIsAllowedToPerformAction(actionAuthor);

        const bookingRecord = this._findBookingRecord(booking);
        bookingRecord.returnBook();
        this._addBookToAvailableList(bookingRecord);

        return booking.penalty;
    }

    getPenaltyForBooking(booking: IBooking): number {
        return booking.penalty;
    }

    private _isAdmin(user: IUser) {
        return user.accessLevel === AccessLevels.Admin;
    }

    private _checkIfUserIsAllowedToPerformAction(actionAuthor: IUser) {
        if (!this._isAdmin(actionAuthor)) {
            throw new Error('Only admin is allowed to perform this action');
        }
    }

    private _checkIfBookIsAvailable(book: IBook): void {
        const isBookInAvailableList = this.availableBooksList.some(b => b.id === book.id);
        const isBookAvailableInLibrary = this.bookList.some(b => b.id === book.id);
        if(!isBookInAvailableList) {
            throw new Error("The book has already been rented.");
        }

        if(!isBookAvailableInLibrary) {
            throw new Error("The book is not available in this library.");
        }
    }

    private _findBookingRecord(booking: IBooking): IBooking {
        const bookingRecord = this.bookingList.find(b => b.id === booking.id);
        if(!bookingRecord) {
            throw new Error("There is no such booking record.");
        }

        return bookingRecord;
    }

    private _addBookToAvailableList(bookingRecord: IBooking) {
        const book = this.bookList.find(b => b.id === bookingRecord.bookId);
        if (book) {
            this.availableBooksList.push(book);
        }
    }
}