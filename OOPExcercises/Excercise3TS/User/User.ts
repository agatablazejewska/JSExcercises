import { IUser } from "../Utilities/Interfaces/User/IUser";
import { Gender } from "../Utilities/Enums/Gender";
import { AccessLevels } from "../Utilities/Enums/AccessLevel";
import { UserPropertiesValidator } from "./UserPropertiesValidator";
import { CommonValidator } from "../../Common/CommonValidator";
import { IUserDataOptional } from "../Utilities/Interfaces/User/IUserDataOptional";

export class User implements IUser {
    private _password: string;
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly dateOfBirth: string;
    readonly gender: Gender;
    readonly accessLevel: AccessLevels;
    constructor(name: string, surname: string, email: string, dateOfBirth: string, dateOfBirthCurrentFormat: string, 
        gender: Gender, accessLevel: AccessLevels, password: string) {
            this._validate(password, name, surname, email);
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.dateOfBirth = UserPropertiesValidator.validateAndFormatDateOfBirth(dateOfBirth, dateOfBirthCurrentFormat);
            this.gender = gender;
            this.accessLevel = accessLevel;
            this._password = password;
    }
    canLogin(email: string, password: string): boolean {
        return this._isEmailCorrect(email) && this._isPasswordCorrect(password);
    }

    private _isEmailCorrect(email: string) : boolean {
        return email === this.email;
    }

    private _isPasswordCorrect(password: string): boolean {
        return password === this._password;
    }

    private _validate(password: string, name: string, surname: string, email: string) {
        UserPropertiesValidator.validatePassword(password);
        UserPropertiesValidator.validateNameSurname(name, surname);
        UserPropertiesValidator.validateEmail(email);
    }

    update(source: IUserDataOptional): void {
        try {
            CommonValidator.validateStringProperties(source);

            if(source.email) {
                UserPropertiesValidator.validateEmail(source.email)
            }
            if(source._password) {
                UserPropertiesValidator.validatePassword(source._password);
            }

            Object.assign(this, source);
        } catch(e) {
            console.error(`Provided data is not valid or is empty. Update failed.
            ${e}`);
        }        
         
    }
    show(): void {
        throw new Error("Method not implemented.");
    }
    showAllInfo(): void {
        throw new Error("Method not implemented.");
    }

}