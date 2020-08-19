import { UserAndPassword } from "../Utilities";

class UsersStorageSingleton {
    private _usersArray: UserAndPassword[] = new Array<UserAndPassword>();

    get users() {
        return this._usersArray;
    }
}

export const UsersStorage = new UsersStorageSingleton();