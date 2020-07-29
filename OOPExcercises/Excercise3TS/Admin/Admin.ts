import { User } from "../User/User";
import { IAdmin } from "../Utilities/Interfaces/Admin/IAdmin";
import { Gender } from "../Utilities/Enums/Gender";
import { AccessLevels } from "../Utilities/Enums/AccessLevel";
import { DateOfBirth } from "../Utilities/Types/DateOfBirth";


export class Admin extends User implements IAdmin {
    accessLevel: AccessLevels;
    
    constructor(name: string, surname: string, email: string, dateOfBirth: DateOfBirth, dateOfBirthCurrentFormat: string, 
    gender: Gender, password: string) {
        super(name, surname, email, dateOfBirth, dateOfBirthCurrentFormat, gender, password);
        this.accessLevel = AccessLevels.Admin;
    }

    modifyUserPassword(userId: string, newPassword: string): void {
        const user = this._findUserById(userId);
        user?.updatePassword(newPassword);
    }

    modifyUserAccessLevel(userId: string): void {
        //const user = this._findUserById(userId);

        //should also think of creating new object with the same data but new class -> so that when user gets admin accessLevel,
        //it should actually become Admin instance
    }

    private _findUserById(userId: string) {
        return this._usersStorage.users.find(u => u.user.id === userId)?.user;
    }
    
}