import { User } from "../User/User";
import { IAdmin } from "../Utilities/Interfaces/Admin/IAdmin";
import { Gender } from "../Utilities/Enums/Gender";
import { AccessLevels } from "../Utilities/Enums/AccessLevel";
import { DateOfBirth } from "../Utilities/Types/DateOfBirth";
import { UserAndPassword } from "../Utilities/Types/UserAndPassword";
import { IUser } from "../Utilities/Interfaces/User/IUser";


export class Admin extends User implements IAdmin {
    accessLevel: AccessLevels;
    
    constructor(name: string, surname: string, email: string, dateOfBirth: DateOfBirth, dateOfBirthCurrentFormat: string, 
    gender: Gender, password: string) {
        super(name, surname, email, dateOfBirth, dateOfBirthCurrentFormat, gender, password);

        this.accessLevel = AccessLevels.Admin;
    }

    modifyUserPassword(userId: string, newPassword: string): void {
        const userData = this._findUserDataById(userId);
        userData?.user.updatePassword(newPassword);
    }

    modifyUserAccessLevel(userId: string): void {
        const userData = this._findUserDataById(userId);
        const user = userData?.user;
        if (user) {
            this._createNewAdminAndAddToUserStorage(user, userData!);
            this._removeExistingUserFromUsersArray(userId);
        }
    }

    private _removeExistingUserFromUsersArray(userId: string) {
        const index = this._usersStorage.users.findIndex(element => element.user.id === userId);

        if (index > -1) {
            this._usersStorage.users.splice(index, 1);
        }
    }

    private _createNewAdminAndAddToUserStorage(user: IUser, userData: UserAndPassword): void {
        let admin = new Admin(user.name, user.surname, user.email, user.dateOfBirth, this._finalDateFormat, user.gender, userData.password);
        this._usersStorage.users.push({user: admin, password: userData.password});
    }

    private _findUserDataById(userId: string) : UserAndPassword | undefined {
        return this._usersStorage.users.find(u => u.user.id === userId);
    }   
}