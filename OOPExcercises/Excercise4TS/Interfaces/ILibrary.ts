import { IBook, IBooking, IUser } from './';

interface ILibrary {
    bookList: IBook[];
    bookingList: IBooking[];
    availableBooksList: IBook[];
    addBook(book: IBook, actionAuthor: IUser): void;
    removeBook(book: IBook, actionAuthor: IUser): void;
    rentBook(book: IBook, user: IUser, actionAuthor: IUser): void;
    returnBookCheckPenalty(booking: IBooking, actionAuthor: IUser): number;
    getPenaltyForBooking(booking: IBooking): number;
}

export { ILibrary };