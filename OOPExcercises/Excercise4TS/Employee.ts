import { AccessLevels } from '../Excercise3TS/Utilities';
import { User } from './User';

export class Employee extends User {
    constructor(name: string, surname: string) {
        super(name, surname);

        this.accessLevel = AccessLevels.Admin;
    }
}