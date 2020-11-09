import { Contact } from '../../../OOPExcercises/Excercise1TS/Contact/Contact';
import { ContactGroup } from '../../../OOPExcercises/Excercise1TS/ContactGroup/ContactGroup';
import { IContact } from '../../../OOPExcercises/Excercise1TS/Interfaces/Contact/IContact';
import { IContactGroup } from '../../../OOPExcercises/Excercise1TS/Interfaces/ContactGroup/IContactGroup';
import { PhoneBook } from '../../../OOPExcercises/Excercise1TS/PhoneBook/PhoneBook';

const consoleErrorSpy = jest.spyOn(console, 'error');

const emptyContactArray: IContact[] = [];

beforeEach(() => {
    consoleErrorSpy.mockClear();
});

describe(`Tests regarding single contacts.`, () => {
    const contactShowAllInfoSpy = jest.spyOn(Contact.prototype, 'showAllInfo');
    const contactUpdateSpy = jest.spyOn(Contact.prototype, 'update');

    beforeEach(() => {
        contactShowAllInfoSpy.mockClear();
        contactUpdateSpy.mockClear();
    });

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

    describe(`Tests for the removeContact method.`, () => {
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

    describe(`Tests for the updateContact and showContact methods.`, () => {
        const phoneBook = new PhoneBook();
        const newContact = new Contact('contact', 'c@gmail.com');
        phoneBook.addContact(newContact);

        describe('Check if method returns correct results', () => {
            test(`Should call the update method on contact instance.`, () => {
                const contactUpdateObj = { firstName: 'updatedContact ' };

                phoneBook.updateContact(newContact, contactUpdateObj);
                expect(contactUpdateSpy).toHaveBeenCalledTimes(1);
                expect(contactUpdateSpy).toHaveBeenCalledWith(contactUpdateObj);
            });

            test(`Should call the showAllInfo method on contact instance.`, () => {
                phoneBook.showContact(newContact);
                expect(contactShowAllInfoSpy).toHaveBeenCalledTimes(1);
            });
        });


        describe(`Check if method responds properly to encountered errors`, () => {
            const contactThatIsNotInPhoneBook = new Contact('not', 'there@gmail.com');

            test(`updateContact method: provided contact doesn't exist in the PhoneBook.
            Should inform user through console.error.`, () => {
                phoneBook.updateContact(contactThatIsNotInPhoneBook, { firstName: '123' });
                expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
                expect(consoleErrorSpy).toHaveBeenCalledWith(`There is no such contact in the list.`);
                expect(contactUpdateSpy).toHaveBeenCalledTimes(0);
            });

            test(`showContact method: provided contact doesn't exist in the PhoneBook.
            Should inform user through console.error.`, () => {
                phoneBook.showContact(contactThatIsNotInPhoneBook);
                expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
                expect(consoleErrorSpy).toHaveBeenCalledWith(`There is no such contact in the list.`);
                expect(contactShowAllInfoSpy).toHaveBeenCalledTimes(0);
            });
        });

    });
});

describe(`Tests regarding contact groups.`, () => {
    const contactGroupUpdateSpy = jest.spyOn(ContactGroup.prototype, 'update');
    const contactGroupShowAllInfoSpy = jest.spyOn(ContactGroup.prototype, 'showAllInfo');

    beforeEach(() => {
        contactGroupUpdateSpy.mockClear();
        contactGroupShowAllInfoSpy.mockClear();
    });

    const emptyContactGroupArray: IContactGroup[] = [];

    describe(`Tests for the addContactGroup method`, () => {
        describe('Check if method returns correct results', () => {
            test(`Should add a new contact group and show it in groups' list.`, () => {
                const phoneBook = new PhoneBook();
                const newContactGroup = new ContactGroup('Friends');
                const arrayWithNewContactGroup = [newContactGroup];

                expect(phoneBook.contactGroupsListCopy).toEqual(emptyContactGroupArray);

                phoneBook.addContactGroup(newContactGroup);
                expect(phoneBook.contactGroupsListCopy).toEqual(arrayWithNewContactGroup);
            });
        });


        describe(`Check if method responds properly to encountered errors`, () => {
            test(`Contact group with the same name already exists in the PhoneBook. 
            Should inform user through console.error.`, () => {
                const phoneBook = new PhoneBook();
                const newContactGroup = new ContactGroup('Friends');
                const arrayWithNewContactGroup = [newContactGroup];

                phoneBook.addContactGroup(newContactGroup);
                expect(phoneBook.contactGroupsListCopy).toEqual(arrayWithNewContactGroup);

                phoneBook.addContactGroup(newContactGroup);
                expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
                expect(consoleErrorSpy).toHaveBeenCalledWith('Contact group with this name already exists.');
            });
        });

    });

    describe(`Tests for the removeContactGroup method.`, () => {
        describe('Check if method returns correct results', () => {
            test(`Should remove contact group from the list.`, () => {
                const phoneBook = new PhoneBook();
                const groupToBeAddedThenRemoved = new ContactGroup('Add/Delete');
                const contactGroupsListWithGroupAdded = [groupToBeAddedThenRemoved];
                const emptyContactGroupsList: IContactGroup[] = [];

                phoneBook.addContactGroup(groupToBeAddedThenRemoved);
                expect(phoneBook.contactGroupsListCopy).toEqual(contactGroupsListWithGroupAdded);

                phoneBook.removeContactGroup(groupToBeAddedThenRemoved.id);
                expect(phoneBook.contactGroupsListCopy).toEqual(emptyContactGroupsList);
            });
        });


        describe(`Check if method responds properly to encountered errors`, () => {
            test(`There is no such contact group in the list. 
            Should inform user through console.error.`, () => {
                const phoneBook = new PhoneBook();
                const groupToBeRemoved = new ContactGroup('Remove');

                phoneBook.removeContactGroup(groupToBeRemoved.id);
                expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
                expect(consoleErrorSpy).toHaveBeenCalledWith(`There is no such contact group.`);
            });
        });
    });

    describe(`Tests for the updateContactGroup method.`, () => {
        describe('Check if method returns correct results', () => {
            test(`Should call the method update on the ContactGroup instance.`, () => {
                const phoneBook = new PhoneBook();
                const contactGroupToBeUpdated = new ContactGroup('Family');
                const contactGroupNewDataObj = { name: 'Friends' };

                phoneBook.addContactGroup(contactGroupToBeUpdated);
                phoneBook.updateContactGroup(contactGroupToBeUpdated, contactGroupNewDataObj);

                expect(contactGroupUpdateSpy).toHaveBeenCalledTimes(1);
                expect(contactGroupUpdateSpy).toHaveBeenCalledWith(contactGroupNewDataObj);
            });
        });


        describe(`Check if method responds properly to encountered errors`, () => {
            test(`There is no such contact group in the list. Should inform user through console.error.`, () => {
                const phoneBook = new PhoneBook();
                const contactGroupToBeUpdated = new ContactGroup('Family');
                const contactGroupNewDataObj = { name: 'Friends' };

                phoneBook.updateContactGroup(contactGroupToBeUpdated, contactGroupNewDataObj);

                expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
                expect(consoleErrorSpy).toHaveBeenCalledWith('There is no such contact group in the list.');
                expect(contactGroupUpdateSpy).toHaveBeenCalledTimes(0);
            });
        });
    });

    describe(`Tests for the showContactGroup method.`, () => {
        describe('Check if method returns correct results', () => {
            const phoneBook = new PhoneBook();
            const contactGroupToBeShown = new ContactGroup('Family');

            phoneBook.addContactGroup(contactGroupToBeShown);
            phoneBook.showContactGroup(contactGroupToBeShown);

            expect(contactGroupShowAllInfoSpy).toHaveBeenCalledTimes(1);
        });


        describe(`Check if method responds properly to encountered errors`, () => {
            test(`There is no such contact group in the list.`, () => {
                const phoneBook = new PhoneBook();
                const contactGroupToBeShown = new ContactGroup('Family');

                phoneBook.showContactGroup(contactGroupToBeShown);

                expect(contactGroupShowAllInfoSpy).toHaveBeenCalledTimes(0);
                expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
                expect(consoleErrorSpy).toHaveBeenCalledWith('There is no such contact group in the list.');
            });
        });
    });
});

describe(`Tests regarding interaction between Contacts and ContactGroups.`, () => {
    const contactGroupAddSpy = jest.spyOn(ContactGroup.prototype, 'add');
    const contactGroupRemoveSpy = jest.spyOn(ContactGroup.prototype, 'remove');

    let phoneBook: PhoneBook;
    let contactGroup: IContactGroup;
    let contact: IContact;

    beforeEach(() => {
        contactGroupAddSpy.mockClear();
        contactGroupRemoveSpy.mockClear();

        phoneBook = new PhoneBook();
        contactGroup = new ContactGroup('Group');
        contact = new Contact('contact', 'con@gmail.com');

        phoneBook.addContactGroup(contactGroup);
    });


    describe(`Test for the addContactToGroup method.`, () => {
        describe('Check if method returns correct results', () => {
            test(`Should call the add method from the group with provided contact as argument.`, () => {
                phoneBook.addContact(contact);
                phoneBook.addContactToGroup(contact, contactGroup);
                expect(contactGroupAddSpy).toHaveBeenCalledTimes(1);
                expect(contactGroupAddSpy).toHaveBeenCalledWith(contact);
            });
        });


        describe(`Check if method responds properly to encountered errors`, () => {
            test(`There is no such contact in the list. Should inform user through console.error.`, () => {

                phoneBook.addContactToGroup(contact, contactGroup);
                expect(contactGroupAddSpy).toHaveBeenCalledTimes(0);
                expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
                expect(consoleErrorSpy).toHaveBeenCalledWith(`There is no such contact or contact group in the list.`);
            });

            test(`There is no such contact group in the list. Should inform user through console.error.`, () => {
                phoneBook.removeContactGroup(contactGroup.id);

                phoneBook.addContactToGroup(contact, contactGroup);
                expect(contactGroupAddSpy).toHaveBeenCalledTimes(0);
                expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
                expect(consoleErrorSpy).toHaveBeenCalledWith(`There is no such contact or contact group in the list.`);
            });
        });
    });


    describe(`Test for the removeContactFromGroup method.`, () => {
        describe('Check if method returns correct results', () => {
            test(`Should call the remove method from the group with provided contact as argument.`, () => {
                phoneBook.addContact(contact);
                phoneBook.removeContactFromGroup(contact.id, contactGroup);
                expect(contactGroupRemoveSpy).toHaveBeenCalledTimes(1);
                expect(contactGroupRemoveSpy).toHaveBeenCalledWith(contact.id);
            });
        });


        describe(`Check if method responds properly to encountered errors`, () => {
            test(`There is no such contact group in the list. Should inform user through console.error.`, () => {
                phoneBook.removeContactGroup(contactGroup.id);

                phoneBook.removeContactFromGroup(contact.id, contactGroup);
                expect(contactGroupRemoveSpy).toHaveBeenCalledTimes(0);
                expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
                expect(consoleErrorSpy).toHaveBeenCalledWith(`There is no such contact group in the list.`);
            });
        });
    });
});