import { Admin } from '../../../OOPExcercises/Excercise3TS/Admin/Admin';
import { User } from '../../../OOPExcercises/Excercise3TS/User/User';
import { AccessLevels, Gender } from '../../../OOPExcercises/Excercise3TS/Utilities';


describe(`Tests for a construction of new Admin. `, () => {
    test(`Should have accessLevel of Admin and be instance of User.`, () => {
        const admin = new Admin({
            name: 'admin',
            surname: 'new',
            email: 'admin@gmail.com',
            gender: Gender.male,
            dateOfBirth: '11-09-2020',
            dateOfBirthCurrentFormat: 'MM-DD-YYYY',
            password: 'super>Secret1M',
        });
        const accessLevelAdmin = AccessLevels.Admin;

        expect(admin).toBeInstanceOf(User);
        expect(admin.accessLevel).toBe(accessLevelAdmin);
    })
})