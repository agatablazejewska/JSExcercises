import { IUpdatableAndReadable } from '../../../../Common/IUpdatableAndReadable';
import { IHasID } from '../../../../Common/IHasID';
import { DateOfBirth, Gender, AccessLevels } from '../..';

interface IUser extends IUpdatableAndReadable, IHasID {
    readonly name: string;
    readonly surname: string;
    readonly email: string;
    readonly dateOfBirth: DateOfBirth;
    readonly gender: Gender;
    accessLevel: AccessLevels;
    updatePassword(password: string): void;
}

export { IUser };