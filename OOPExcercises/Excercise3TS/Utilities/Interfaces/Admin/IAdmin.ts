import { IUser } from '../User/IUser';
import { AccessLevels } from '../../Enums/AccessLevel';

interface IAdmin extends IUser {
    accessLevel: AccessLevels;
}

export { IAdmin };