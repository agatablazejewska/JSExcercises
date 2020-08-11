import { User } from "../User/User";
import { IAdmin } from "../Utilities/Interfaces/Admin/IAdmin";
import { AccessLevels } from "../Utilities/Enums/AccessLevel";
import { UserConstructionData } from "../Utilities/Types/UserConstructionData";
import { IHandleUsersStorage } from "../Utilities/Interfaces/UsersStorage/IHandleUsersStorage";


export class Admin extends User implements IAdmin {
    private readonly _usersStorageHandler: IHandleUsersStorage;
    accessLevel: AccessLevels;
    
    constructor(data: UserConstructionData, usersStorageHandler: IHandleUsersStorage) {
        super(data);

        this.accessLevel = AccessLevels.Admin;   
        this._usersStorageHandler = usersStorageHandler;
    }

    modifyUserPassword(userId: string, newPassword: string): void {
        this._usersStorageHandler.updateUserPassword(userId, newPassword);
    }

    setUserAccessLevelToAdmin(userId: string): void {
        this._usersStorageHandler.userToAdmin(userId);
    }    

    setAdminAccessLevelToUser(adminId: string): void {
        this._usersStorageHandler.adminToUser(adminId);
    }
}