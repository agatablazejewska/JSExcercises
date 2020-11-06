import { Helper } from '../../../OOPExcercises/Common/Helper';
import { Contact } from '../../../OOPExcercises/Excercise1TS/Contact/Contact';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));
const consoleLogSpy = jest.spyOn(console, 'log');

beforeEach(() => {
    jest.clearAllMocks();
});

describe('Tests for creating a contact', () => {
    describe('Check if method returns correct results', () => {
        test(`Creating new Contact object with all properties filled. 
        Should have expected properties and correct values associated with them.`, () => {
            const contact = new Contact('Jane', 'email@gmail.com', 'Doe');
            const contactCreationDate = contact.modifyDate.getDate();
            const todayDate = new Date().getDate();

            expect(contact).toBeInstanceOf(Contact);
            expect(contact).toEqual(
                expect.objectContaining({
                    id: '00000000-0000-0000-0000-000000000000',
                    firstName: 'Jane',
                    surname: 'Doe',
                    email: 'email@gmail.com'
                }));
            expect(contactCreationDate).toEqual(todayDate);
        });

        test(`Creating a new Contact with only necessary properties filled with actual values. 
        Should accept the data provided and create the contact.`, () => {
           const contact = new Contact('Jane', 'email@gmail.com');

            expect(contact).toBeInstanceOf(Contact);
            expect(contact).toEqual(
                expect.objectContaining({
                    id: '00000000-0000-0000-0000-000000000000',
                    firstName: 'Jane',
                    surname: '',
                    email: 'email@gmail.com'
                }));
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`Provided email is not valid. Should throw error.`, () => {
           expect(() => { new Contact('Jane',  'email.com', 'Doe') })
               .toThrowError(`Provided value is not a valid e-mail`);
        });

        test(`Provided first name is empty. Should throw error.`, () => {
            expect(() => { new Contact('', 'email@gmail.com', 'Doe') })
                .toThrowError(`First name has to have a value`);
        });
    });
});

describe(`Tests for fullName getter.`, () => {
   test(`Should return name and surname of created Contact.`, () => {
       const contact = new Contact('Janet', 'email@gmail.com', 'Doem');
       expect(contact.fullName).toEqual('Janet Doem');
   })
});

describe('Tests for showing contact methods', () => {
   test(`Should console.log the short info about the contact.`, () => {
       const contact = new Contact('Janet', 'email@gmail.com', 'Doe');

       contact.show();

       expect(consoleLogSpy).toHaveBeenCalledTimes(1);
       expect(consoleLogSpy).toHaveBeenCalledWith(`Name: ${contact.fullName}, email: ${contact.email}`);
   });

    test(`Should console.log the long/full info about the contact.`, () => {
        const contact = new Contact('Janet', 'email@gmail.com', 'Doe');

        contact.showAllInfo();

        expect(consoleLogSpy).toHaveBeenCalledTimes(1);
        expect(consoleLogSpy).toHaveBeenCalledWith(`First name: ${contact.firstName}
        Surname: ${contact.surname}
        E-mail: ${contact.email}
        Last modified: ${Helper.formatDate(contact.modifyDate)}`);
    });
});

describe(`Tests for the update method.`, () => {
    const name = 'Jane';
    const surname = 'Doe';
    const email = 'email@gmail.com';
    const contact = new Contact(name, email, surname);

    describe('Check if method returns correct results', () => {
        test(`Different properties of contact get updated. Should change the contact in a correct way.`, () => {
            const newName = 'Juliet';
            const newSurname = 'Locke';
            const newEmail = 'updated@gmail.com';

            expect(contact).toEqual(
                expect.objectContaining({
                    firstName: name,
                    surname: surname,
                    email: email
                }));

            contact.update({ firstName: newName });
            expect(contact).toEqual(
                expect.objectContaining({
                    firstName: newName,
                    surname: 'Doe',
                    email: 'email@gmail.com'
                }));

            contact.update({ surname: newSurname });
            expect(contact).toEqual(
                expect.objectContaining({
                    firstName: newName,
                    surname: newSurname,
                    email: 'email@gmail.com'
                }));

            contact.update({ email: newEmail });
            expect(contact).toEqual(
                expect.objectContaining({
                    firstName: newName,
                    surname: newSurname,
                    email: newEmail
                }));

            contact.update({ firstName: name, email: email, surname: surname });
            expect(contact).toEqual(
                expect.objectContaining({
                    firstName: name,
                    surname: surname,
                    email: email
                }));
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        const consoleErrorSpy = jest.spyOn(console, 'error');

        test('Some values of type string are empty. Should log an error', () => {
            const newEmptyName = '';
            const newEmptySurname = '';
            const newEmptyEmail = '';

            const arrayIContactData = [
                { firstName: newEmptyName },
                { surname: newEmptySurname },
                { email: newEmptyEmail },
                { firstName: 'Janice', email: newEmptyEmail, surname: 'update' }];

            arrayIContactData.forEach(elem => {
                    contact.update(elem);

                    expect(consoleErrorSpy).
                    toHaveBeenCalledWith(`Provided text is empty or consists of white spaces`);
            });
        });

        test(`New email is not a valid email address. Should log an error.`, () => {
            const invalidEmails = ['emal@.com', 'email.com', 'x'];
            const contactCreationDate = contact.modifyDate;

            invalidEmails.forEach(invalidEmail =>{
                contact.update({email: invalidEmail});
                const contactModifyDateAfterFailedUpdate = contact.modifyDate;

                expect(consoleErrorSpy).
                    toHaveBeenCalledWith(`Provided value is not a valid e-mail`);
                expect(contactModifyDateAfterFailedUpdate).toEqual(contactCreationDate);
            });
        });
    });
});

