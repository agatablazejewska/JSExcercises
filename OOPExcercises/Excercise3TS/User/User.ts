import uuid4 from 'uuid4';
import { UserPropertiesValidator } from "./UserPropertiesValidator";
import { CommonValidator } from "../../Common/CommonValidator";
import { UsersStorage } from "../UsersStorage/UsersStorage";
import { IUser, Gender, AccessLevels, IUserDataOptional, DateOfBirth, UserConstructionData} from "../Utilities";

export class User implements IUser {
    protected readonly _id: string;
    protected readonly _finalDateFormat: string = "MM/DD/YYYY";
    protected _password: string;
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly dateOfBirth: DateOfBirth;
    readonly gender: Gender;
    readonly accessLevel: AccessLevels;
    
    constructor(data: UserConstructionData)
    {
            this._validate(data.password, name, data.surname, data.email);
            this._id = uuid4();
            this.name = name;
            this.surname = data.surname;
            this.email = data.email;
            this.gender = data.gender;
            this.accessLevel = AccessLevels.User;
            this._password = data.password;
            this.dateOfBirth = UserPropertiesValidator
            .validateAndFormatDateOfBirth(data.dateOfBirth, data.dateOfBirthCurrentFormat, this._finalDateFormat);
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