import { AccessLevels } from '../../Enums/AccessLevel';

interface IUserDataOptional {
    surname?: string;
    email?: string;
    accessLevel?: AccessLevels;
}

export { IUserDataOptional };