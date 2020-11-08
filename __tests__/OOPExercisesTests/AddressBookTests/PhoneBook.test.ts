import { Contact } from '../../../OOPExcercises/Excercise1TS/Contact/Contact';
import { IContact } from '../../../OOPExcercises/Excercise1TS/Interfaces/Contact/IContact';
import { PhoneBook } from '../../../OOPExcercises/Excercise1TS/PhoneBook/PhoneBook';

const consoleErrorSpy = jest.spyOn(console, 'error');

const emptyContactArray: IContact[] = [];

beforeEach(() => {
    consoleErrorSpy.mockClear();
});

describe(`Tests regarding single contacts.`, () => {
    describe(`Test for the addContact method.`, () => {
        describe('Check if method returns correct results', () => {
            test(`Should add the new contact to the contacts' array.`, () => {
                const phoneBook = new PhoneBook();
                const newContact = new Contact('contact', 'contact@gmail.com');

                const arrayWithNewContact = [newContact];

                expect(phoneBook.contactsListCopy).toEqual(emptyContactArray);

                phoneBook.addContact(newContact);
                expect(phoneBook.contactsListCopy).toEqual(arrayWithNewContact);
            });
        });


        describe(`Check if method responds properly to encountered errors`, () => {
            test(`Contact with same data already exists in the phone book. 
            Should console error to inform user.`, () => {
                const phoneBook = new PhoneBook();
                const contactToBeAddedTwice = new Contact('contact', 'c@gmail.com');

                phoneBook.addContact(contactToBeAddedTwice);
                phoneBook.addContact(contactToBeAddedTwice);

                expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
                expect(consoleErrorSpy).toHaveBeenCalledWith(`Contact already exists.`);
            });
        });
    });

    describe(`Tests for the remove contact method.`, () => {
        describe('Check if method returns correct results', () => {
            test(`Should remove contact from the contact list.`, () => {
                const phoneBook = new PhoneBook();
                const contactToBeAddedAndThenRemoved = new Contact('contact', 'c@gmail.com');
                const arrayWithAddedContact = [contactToBeAddedAndThenRemoved];

                phoneBook.addContact(contactToBeAddedAndThenRemoved);
                expect(phoneBook.contactsListCopy).toEqual(arrayWithAddedContact);

                phoneBook.removeContact(contactToBeAddedAndThenRemoved.id);
                expect(phoneBook.contactsListCopy).toEqual(emptyContactArray);
            });
        });


        describe(`Check if method responds properly to encountered errors`, () => {
            test(`Contact doesn't exist in the phone book. 
            Should inform user through console error.`, () => {
                const phoneBook = new PhoneBook();
                const contactToBeRemoved = new Contact('contact', 'c@gmail.com');

                phoneBook.removeContact(contactToBeRemoved.id);
                expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
                expect(consoleErrorSpy).toHaveBeenCalledWith(`There is no such element in the array.`);
            });
        });
    });
});