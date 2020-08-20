import { IBook, IBooking } from './Interfaces';

class LibraryStorageSingleton {
    private _bookList: IBook[] = new Array<IBook>();
    private _bookingList: IBooking[] = new Array<IBooking>();
    private _availableBooksList: IBook[] = new Array<IBook>();

    get bookList() {
        return this._bookList;
    }
    get bookingList() {
        return this._bookingList;
    }
    get availableBooksList() {
        return this._availableBooksList;
    }
}

export const LibraryStorage = new LibraryStorageSingleton();