import { IUser } from "../Utilities/Interfaces/User/IUser";
import { Gender } from "../Utilities/Enums/Gender";
import { AccessLevels } from "../Utilities/Enums/AccessLevel";
import { UserPropertiesValidator } from "./UserPropertiesValidator";
import { CommonValidator } from "../../Common/CommonValidator";
import uuid4 from 'uuid4';
import { IUserDataOptional } from "../Utilities/Interfaces/User/IUserDataOptional";
import { DateOfBirth } from "../Utilities/Types/DateOfBirth";

export class User implements IUser {
    protected readonly _id: string;
    protected _password: string;
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly dateOfBirth: DateOfBirth;
    readonly gender: Gender;
    readonly accessLevel: AccessLevels;
    
    constructor(name: string, surname: string, email: string, dateOfBirth: DateOfBirth, dateOfBirthCurrentFormat: string, 
        gender: Gender, password: string) {
            this._validate(password, name, surname, email);
            this._id = uuid4();
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.dateOfBirth = UserPropertiesValidator.validateAndFormatDateOfBirth(dateOfBirth, dateOfBirthCurrentFormat);
            this.gender = gender;
            this.accessLevel = AccessLevels.User;
            this._password = password;
    }

    get id() {
        return this._id;
    }

    canLogin(email: string, password: string): boolean {
        return this._isEmailCorrect(email) && this._isPasswordCorrect(password);
    }

    updatePassword(password: string): void {
        try {
            CommonValidator.validateEmptyString(password);
            CommonValidator.validatePassword(password);

            this._password = password;
        } catch(e) {
            console.error(`Provided password is not valid or is empty. Update failed.
            ${e}`);
        }                
    }

    update(source: IUserDataOptional): void {
        try {
            CommonValidator.validateStringProperties(source);

            if(source.email) {
                UserPropertiesValidator.validateEmail(source.email)
            }

            Object.assign(this, source);
        } catch(e) {
            console.error(`Provided data is not valid or is empty. Update failed.
            ${e}`);
        }                
    }

    show(): void {
        console.log(`User info:
        ${this.name}
        ${this.surname}
        ${this.email}
        ${this.accessLevel}`);
    }

    showAllInfo(): void {
        console.log(`User details:
        ${this.name}
        ${this.surname}
        ${this.email}
        ${this.dateOfBirth}
        ${this.gender}
        ${this.accessLevel}`);
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
}