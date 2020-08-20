import { AccessLevels } from '../../Excercise3TS/Utilities';

interface IUser {
    readonly name: string;
    surname: string;
    accessLevel: AccessLevels;
}

export { IUser };