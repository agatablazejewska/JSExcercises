import  AccessLevels  from "../../Enums/AccessLevel";

export default interface IUserDataOptional {
    surname?: string;
    email?: string;
    accessLevel?: AccessLevels;
}