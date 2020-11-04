import { v4 as uuid4 } from 'uuid';
import { CommonValidator } from '../Common/CommonValidator';
import { AccessLevels } from '../Excercise3TS/Utilities';
import { IUser } from './Interfaces';

export class User implements IUser {
    readonly id: string;
    readonly name: string;
    surname: string;
    accessLevel: AccessLevels;

    constructor(name: string, surname: string) {
        CommonValidator.validateEmptyString(name);
        CommonValidator.validateEmptyString(surname);

        this.id = uuid4();
        this.name = name;
        this.surname = surname;
        this.accessLevel = AccessLevels.User;
    }
}