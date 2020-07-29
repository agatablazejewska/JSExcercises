import { UserAndPassword } from "../Utilities/Types/UserAndPassword";

export class UsersStorage {
    private static _instance: UsersStorage;
    private _usersArray: Array<UserAndPassword> = new Array<UserAndPassword>();

    private constructor() {}

    static getInstance(): UsersStorage {
        if (!UsersStorage._instance) {
            UsersStorage._instance = new UsersStorage();
        }
    
        return UsersStorage._instance;
      }
    
    get users() {
        return this._usersArray;
    }
}