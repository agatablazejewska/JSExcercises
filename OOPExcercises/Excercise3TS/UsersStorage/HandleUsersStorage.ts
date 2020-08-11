import { IHandleUsersStorage } from "../Utilities/Interfaces/UsersStorage/IHandleUsersStorage";
import { UsersStorage } from "./UsersStorage";
import { User } from "../User/User";
import { Admin } from "../Admin/Admin";
import { UserAndPassword } from "../Utilities/Types/UserAndPassword";
import { UserConstructionData } from "../Utilities/Types/UserConstructionData";
import { IUser } from "../Utilities/Interfaces/User/IUser";

export class UsersStorageHandler implements IHandleUsersStorage {
    private readonly _usersStorage: UsersStorage;

    constructor() {
        this._usersStorage = UsersStorage.getInstance();
    }

    addUser(data: UserConstructionData): void {
        const user = new User(data);

        this._usersStorage.users.push({user: user, password: data.password});
    }

    addAdmin(data: UserConstructionData): void {
        const admin = new Admin(data, this);

        this._usersStorage.users.push({user: admin, password: data.password});
    }

    removeUser(id: string): void {
        const index = this._usersStorage.users.findIndex(element => element.user.id === id);

        if (index > -1) {
            this._usersStorage.users.splice(index, 1);
        }
    }

    userToAdmin(id: string): void {
        const userData = this._findUserDataById(id);
        const user = userData?.user;
        if (user && userData) {
            const newAdminConstructionData = this._createUserConstructionData(user, userData);

            this.addAdmin(newAdminConstructionData);
            this.removeUser(id);
        }
    }

    adminToUser(id: string): void {
        const userData = this._findUserDataById(id);
        const user = userData?.user;
        if (user && userData) {
            const newUserConstructionData = this._createUserConstructionData(user, userData);
            this.addUser(newUserConstructionData);
            this.removeUser(id);
        }
    }

    updateUserPassword(id: string, newPassword: string): void {
        const userData = this._findUserDataById(id);
        userData?.user.updatePassword(newPassword);
    }

    private _findUserDataById(userId: string) : UserAndPassword | undefined {
        return this._usersStorage.users.find(u => u.user.id === userId);
    }  
    
    private _createUserConstructionData(user: IUser, userData: UserAndPassword) {
        return {
            name: user.name,
            surname: user.surname,
            email: user.email,
            dateOfBirth: user.dateOfBirth,
            dateOfBirthCurrentFormat: "MM/DD/YYYY",
            gender: user.gender,
            password: userData.password
        };
    }
}