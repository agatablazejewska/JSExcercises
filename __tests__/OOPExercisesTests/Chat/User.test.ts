import { User } from '../../../OOPExcercises/Excercise3TS/User/User';
import {
    AccessLevels, Gender,
} from '../../../OOPExcercises/Excercise3TS/Utilities';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));
const consoleLogSpy = jest.spyOn(console, 'log');

let user: User;

beforeEach(() => {
    consoleLogSpy.mockClear();

    user = new User({
        name: 'user',
        surname: 'new',
        email: 'user@gmail.com',
        gender: Gender.male,
        dateOfBirth: '11-09-2020',
        dateOfBirthCurrentFormat: 'MM-DD-YYYY',
        password: 'super>Secret1M',
    });
});

describe(`Tests for the constructor.`, () => {
    describe('Check if method returns correct results', () => {
        test(`Created object should have all of the provided data and be instance of User.`, () => {
            expect(user).toBeInstanceOf(User);
            expect(user).toEqual(
                expect.objectContaining({
                    id: '00000000-0000-0000-0000-000000000000',
                    name: 'user',
                    surname: 'new',
                    email: 'user@gmail.com',
                    gender: Gender.male,
                    dateOfBirth: '11/09/2020',
                    _password: 'super>Secret1M',
                    accessLevel: AccessLevels.User,
                }));
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`Provided name is empty. Should throw an error.`, () => {
            const createUserWithEmptyName = () => {
                new User({
                    name: '',
                    surname: 'new',
                    email: 'user@gmail.com',
                    gender: Gender.male,
                    dateOfBirth: '11-09-2020',
                    dateOfBirthCurrentFormat: 'MM-DD-YYYY',
                    password: 'super>Secret1M',
                });

                expect(createUserWithEmptyName()).toThrowError(`Name and surname must have a value and can not consist of white spaces`);
            };
        });

        test(`Provided name is empty. Should throw an error.`, () => {
            const createUserWithEmptySurname = () => {
                new User({
                    name: 'user',
                    surname: '',
                    email: 'user@gmail.com',
                    gender: Gender.male,
                    dateOfBirth: '11-09-2020',
                    dateOfBirthCurrentFormat: 'MM-DD-YYYY',
                    password: 'super>Secret1M',
                });

                expect(createUserWithEmptySurname()).toThrowError(`Name and surname must have a value and can not consist of white spaces`);
            };
        });

        test(`Provided password doesn't meet the requirements. Should throw an error.`, () => {
            const passwordTooShort = 'aksjd';
            const passwordOnlyLowercase = 'smdnjhnmnhsd';
            const passwordLowerAndUppercaseAndNumberButNoSpecialChars = 'sJHFFhbe238N27sb4';
            const passwordLowerAndUpperCaseAndSpecialCharsButNoNumbers = 'sl_sdb>PXkh#S';
            const sampleWrongPasswords = [
                passwordTooShort,
                passwordOnlyLowercase,
                passwordLowerAndUppercaseAndNumberButNoSpecialChars,
                passwordLowerAndUpperCaseAndSpecialCharsButNoNumbers];

            const createUserWithInvalidPassword = (password: string) => {
                new User({
                    name: 'user',
                    surname: 'new',
                    email: 'user@gmail.com',
                    gender: Gender.male,
                    dateOfBirth: '11-09-2020',
                    dateOfBirthCurrentFormat: 'MM-DD-YYYY',
                    password: password,
                });

                sampleWrongPasswords.forEach(password => {
                    expect(createUserWithInvalidPassword(password))
                        .toThrowError(`Provided value is not a valid password. In order to be valid it has to contain:
            at least 8 characters,
            1 uppercase letter,
            1 number,
            1 special character.`);
                });
            };
        });

        test(`Provided email doesn't meet the requirements. Should throw an error.`, () => {
            const emailEmpty = '';
            const emailNoAt = 'aksjd';
            const emailNothingBeforeAt = '@gmail.com';
            const emailNoDotAtTheEnd = 'user@gmailcom';
            const sampleWrongEmails = [
                emailNoAt,
                emailNothingBeforeAt,
                emailNoDotAtTheEnd];

            const createUserWithInvalidEmail = (email: string) => {
                new User({
                    name: 'user',
                    surname: 'new',
                    email: email,
                    gender: Gender.male,
                    dateOfBirth: '11-09-2020',
                    dateOfBirthCurrentFormat: 'MM-DD-YYYY',
                    password: 'sKSFHi>234h',
                });

                expect(createUserWithInvalidEmail(emailEmpty)).toThrowError(`Provided text is empty or consists of white spaces`);

                sampleWrongEmails.forEach(email => {
                    expect(createUserWithInvalidEmail(email)).toThrowError(`Provided value is not a valid e-mail`);
                });
            };
        });

        test(`Provided date of birth is empty. Should throw an error.`, () => {
            const createUserWithEmptyDateOfBirth = () => {
                new User({
                    name: 'user',
                    surname: '',
                    email: 'user@gmail.com',
                    gender: Gender.male,
                    dateOfBirth: '',
                    dateOfBirthCurrentFormat: 'MM-DD-YYYY',
                    password: 'super>Secret1M',
                });

                expect(createUserWithEmptyDateOfBirth()).toThrowError(`Provided text is empty or consists of white spaces`);
            };
        });

        test(`Provided date of birth is empty. Should throw an error.`, () => {
            const createUserWithEmptyDateOfBirthCurrentFormat = () => {
                new User({
                    name: 'user',
                    surname: 'new',
                    email: 'user@gmail.com',
                    gender: Gender.male,
                    dateOfBirth: '11-09-2020',
                    dateOfBirthCurrentFormat: '',
                    password: 'super>Secret1M',
                });

                expect(createUserWithEmptyDateOfBirthCurrentFormat()).toThrowError(`Provided text is empty or consists of white spaces`);
            };
        });

        test(`Provided date of birth is invalid. Should throw an error.`, () => {
            const invalidDatesOfBirth = ['11-07', 'nodate', '11-09-1899', '11-09-2050', '1111135556'];
            const createUserWithInvalidDateOfBirth = (date: string) => {
                new User({
                    name: 'user',
                    surname: 'new',
                    email: 'user@gmail.com',
                    gender: Gender.male,
                    dateOfBirth: date,
                    dateOfBirthCurrentFormat: 'DD-MM-YYYY',
                    password: 'super>Secret1M',
                });

                invalidDatesOfBirth.forEach(date => {
                    expect(createUserWithInvalidDateOfBirth(date)).toThrowError(`Provided date is not valid`);
                });
            };
        });
    });
});

describe(`Tests for the updatePassword method.`, () => {
    describe('Check if method returns correct results', () => {
        test(`Password is valid and not empty. Should change user's password.`, () => {
            const newPassword = 'new#Password4';

            user.updatePassword(newPassword);

            expect(user).toEqual(
                expect.objectContaining({
                    _password: newPassword,
                }));
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`Password is an empty string. Should throw an error.`, () => {
            const emptyPassword = '';

            expect(() => user.updatePassword(emptyPassword))
                .toThrowError(`Provided text is empty or consists of white spaces`);
        });

        test(`New password is invalid. Should throw an error.`, () => {
            const passwordTooShort = 'aksjd';
            const passwordOnlyLowercase = 'smdnjhnmnhsd';
            const passwordLowerAndUppercaseAndNumberButNoSpecialChars = 'sJHFFhbe238N27sb4';
            const passwordLowerAndUpperCaseAndSpecialCharsButNoNumbers = 'sl_sdb>PXkh#S';
            const sampleWrongPasswords = [
                passwordTooShort,
                passwordOnlyLowercase,
                passwordLowerAndUppercaseAndNumberButNoSpecialChars,
                passwordLowerAndUpperCaseAndSpecialCharsButNoNumbers];

            sampleWrongPasswords.forEach(password => {
                expect(() => user.updatePassword(password))
                    .toThrowError(`Provided value is not a valid password. In order to be valid it has to contain:
            at least 8 characters,
            1 uppercase letter,
            1 number,
            1 special character.`);
            });
        });
    });
});


describe(`Tests for the update method.`, () => {
    describe('Check if method returns correct results', () => {
        test(`Should update user's data.`, () => {
            const newSurname = { surname: 'newSurname' };
            const newEmail = { email: 'newemail@gmail.com' };
            const adminAccessLevel = { accessLevel: AccessLevels.Admin };
            const primaryData = {
                surname: user.surname,
                email: user.email,
                accessLevel: user.accessLevel,
            };
            const dataForUpdate = [
                newSurname,
                newEmail,
                adminAccessLevel,
                primaryData,
            ];

            dataForUpdate.forEach(updateData => {
                user.update(updateData);
                expect(user).toEqual(
                    expect.objectContaining(updateData));

            });
        });
    });

    describe(`Check if method responds properly to encountered errors`, () => {
        test('Provided string properties are empty. Should throw an error.', () => {
            const emptySurname = { surname: '' };
            const emptyEmail = { email: '' };
            const dataForUpdate = [emptySurname, emptyEmail];

            dataForUpdate.forEach(prop => expect(() => {
                user.update(prop);
            }).toThrowError(`Provided text is empty or consists of white spaces`));
        });

        test('Provided email is invalid. Should throw an error.', () => {
            const emailNoAt = { email: 'aksjd' };
            const emailNothingBeforeAt = { email: '@gmail.com' };
            const sampleWrongEmails = [
                emailNoAt,
                emailNothingBeforeAt];

            sampleWrongEmails.forEach(email => {
                expect(() => user.update(email)).toThrowError(`Provided value is not a valid e-mail`);
            });
        });
    });
});

describe(`Tests for showing methods.`, () => {
    test(`show method: should console.log short info about user.`, () => {
        user.show();

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith(`User info:
        ${user.name}
        ${user.surname}
        ${user.email}
        ${user.accessLevel}`);
    });

    test(`showAllInfo method: should console.log all the info about user`, () => {
        user.showAllInfo();

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith(`User details:
        ${user.name}
        ${user.surname}
        ${user.email}
        ${user.dateOfBirth}
        ${user.gender}
        ${user.accessLevel}`);
    });
});
