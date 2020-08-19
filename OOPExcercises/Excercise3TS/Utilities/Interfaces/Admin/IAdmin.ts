import  IUser  from "../User/IUser";
import  AccessLevels  from "../../Enums/AccessLevel";

export default interface IAdmin extends IUser {
    accessLevel: AccessLevels;
}