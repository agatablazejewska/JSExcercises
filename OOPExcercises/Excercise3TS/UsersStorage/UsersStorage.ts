import { IUser } from "../Utilities/Interfaces/User/IUser";

export class UsersStorage {
    private _usersArray: Array<IUser>;

    constructor() {
        this._usersArray = new Array<IUser>();
    }

    get users() {
        return this._usersArray;
    }
}