import { DateOfBirth } from "./DateOfBirth";
import { Gender } from "../Enums/Gender";

export type UserConstructionData = {
    name: string, 
    surname: string, 
    email: string, 
    dateOfBirth: DateOfBirth, 
    dateOfBirthCurrentFormat: string, 
    gender: Gender, 
    password: string };