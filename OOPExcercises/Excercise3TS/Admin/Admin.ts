import { User } from "../User/User";
import { IAdmin } from "../Utilities/Interfaces/Admin/IAdmin";
import { Gender } from "../Utilities/Enums/Gender";
import { AccessLevels } from "../Utilities/Enums/AccessLevel";
import { UsersStorage } from "../UsersStorage/UsersStorage";

export class Admin extends User implements IAdmin {
    private _usersStorage: UsersStorage;
    accessLevel: AccessLevels;

    constructor(name: string, surname: string, email: string, dateOfBirth: string, dateOfBirthCurrentFormat: string, 
    gender: Gender, password: string) {
        super(name, surname, email, dateOfBirth, dateOfBirthCurrentFormat, gender, password);
        this.accessLevel = AccessLevels.Admin;
        this._usersStorage = new UsersStorage();
    }

    modifyUserPassword(userId: string, newPassword: string): void {
        const user = this._usersStorage.users.find(u => u.id === userId);
        user?.updatePassword(newPassword);
    }
    modifyUserAccessLevel(userId: string): void {
        throw new Error("Method not implemented.");
        //should also think of creating new object with the same data but new class -> so that when user gets admin accessLevel,
        //it should actually become Admin instance
    }
    
}