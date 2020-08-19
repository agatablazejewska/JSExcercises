import { Gender, DateOfBirth } from '..';


type UserConstructionData = {
    name: string,
    surname: string,
    email: string,
    dateOfBirth: DateOfBirth,
    dateOfBirthCurrentFormat: string,
    gender: Gender,
    password: string
};

export { UserConstructionData };