import { v4 as uuid4 } from 'uuid';
import { UserPropertiesValidator } from './UserPropertiesValidator';
import { CommonValidator } from '../../Common/CommonValidator';
import {
    IUser,
    Gender,
    AccessLevels,
    IUserDataOptional,
    DateOfBirth,
    UserConstructionData,
} from '../Utilities';

export class User implements IUser {
    protected readonly _id: string;
    protected readonly _finalDateFormat: string = 'MM/DD/YYYY';
    protected _password: string;
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly dateOfBirth: DateOfBirth;
    readonly gender: Gender;
    accessLevel: AccessLevels;

    constructor(data: UserConstructionData) {
        this._validate(data.password, data.name, data.surname, data.email);
        this._id = uuid4();
        this.name = data.name;
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

    updatePassword(password: string): void {
        CommonValidator.validateEmptyString(password);
        CommonValidator.validatePassword(password);

        this._password = password;
    }

    update(source: IUserDataOptional): void {
        CommonValidator.validateStringProperties(source);

        if (source.email) {
            UserPropertiesValidator.validateEmail(source.email);
        }

        Object.assign(this, source);
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

    private _validate(password: string, name: string, surname: string, email: string) {
        UserPropertiesValidator.validatePassword(password);
        UserPropertiesValidator.validateNameSurname(name, surname);
        UserPropertiesValidator.validateEmail(email);
    }
}