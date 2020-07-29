import { AccessLevels } from "../../Enums/AccessLevel";

export interface IUserDataOptional {
    surname?: string;
    email?: string;
    accessLevel?: AccessLevels;
}