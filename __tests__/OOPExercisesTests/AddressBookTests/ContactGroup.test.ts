import { Contact } from '../../../OOPExcercises/Excercise1TS/Contact/Contact';
import { ContactGroup } from '../../../OOPExcercises/Excercise1TS/ContactGroup/ContactGroup';

const consoleErrorSpy = jest.spyOn(console, 'error');
const consoleLogSpy = jest.spyOn(console, 'log');

beforeEach(() => {
    consoleErrorSpy.mockClear();
    consoleLogSpy.mockClear();
});

const fullFamilyContactGroup = new ContactGroup('Family');
const mom = new Contact('Mom', 'mom@gmail.com');
const dad = new Contact('Dad', 'dad@gmail.com');
const brother = new Contact('Brother', 'brother@gmail.com')
const allFamilyContacts = [mom, dad, brother];

describe(`Tests for object creation.`, () => {
    describe('Check if method returns correct results', () => {
        test('Should create an instance of the ContactGroup class.', () => {
            const groupName = 'New';
            const newContactGroup = new ContactGroup(groupName);
            const isGroupIDLengthAbove0 = newContactGroup.id.length > 0;

            expect(newContactGroup).toBeInstanceOf(ContactGroup);
            expect(newContactGroup).toEqual(
                expect.objectContaining({
                    name: groupName,
                    _contactArray: []
                }));
            expect(isGroupIDLengthAbove0).toBe(true);
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test('Name is an empty string. Should throw error.', () => {
            const groupName = '';
            const creatingContactGroupWithEmptyNameString = () => new ContactGroup(groupName);

            expect(creatingContactGroupWithEmptyNameString)
                .toThrowError(`Provided text is empty or consists of white spaces`);
        })
    });
});

describe('Tests for the add method.', () => {
    const familyContactGroup = new ContactGroup('Family');

    describe('Check if method returns correct results', () => {
        test(`Adding contacts to group.`, () => {
            const familyContactsToAdd = [mom, dad, brother];
            familyContactsToAdd.forEach(contact => familyContactGroup.add(contact));

            const allContactsInTheGroup = familyContactGroup.contactsListCopy;

            expect(allContactsInTheGroup).toEqual(familyContactsToAdd);
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`Contact already exists in the contact group.`, () => {
           const sister = new Contact('sister', 'sister@gmail.com');

           familyContactGroup.add(sister);
           familyContactGroup.add(sister);

           expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
           expect(consoleErrorSpy).toHaveBeenCalledWith(`Contact already exists in the group.`);
        });
    });
});

describe('Tests for the remove method.', () => {
    allFamilyContacts.forEach(contact => fullFamilyContactGroup.add(contact));

    describe('Check if method removes the element from the array.', () => {
        test(`Should remove contact from the contact list.`, () => {
            fullFamilyContactGroup.remove(brother.id);
            const familyContactsAfterBrotherRemoval = fullFamilyContactGroup.contactsListCopy;
            const familyContactsThatShouldRemainAfterBrotherRemoval = [mom, dad];

           expect(familyContactsAfterBrotherRemoval).not.toEqual(allFamilyContacts);
           expect(familyContactsAfterBrotherRemoval.length).toEqual(2);
           expect(familyContactsAfterBrotherRemoval).toEqual(familyContactsThatShouldRemainAfterBrotherRemoval);
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`There is no object with provided ID in the contact list. 
        Should inform a user through console error.`, () => {
            fullFamilyContactGroup.remove('99');

            expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
            expect(consoleErrorSpy).toHaveBeenCalledWith(`There is no such element in the array.`);
        });
    });
});

describe(`Tests for the update method.`, () => {
    const initialName = 'Family';

    describe('Check if method returns correct results', () => {
        test(`Should change name in an object to the one provided in arguments.`, () => {
            const contactGroup = new ContactGroup(initialName);
            const newName = 'Friends';

            expect(contactGroup.name).toBe(initialName);
            contactGroup.update({ name: newName });
            expect(contactGroup.name).toBe(newName);
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`New name provided is an empty string. Should inform a user and omit object update.`, () => {
            const contactGroup = new ContactGroup(initialName);
            const newNameEmptyString = '';
            const newNameWhiteSpaces = '     ';

            expect(contactGroup.name).toBe(initialName);

            contactGroup.update({ name: newNameEmptyString });
            expect(consoleErrorSpy)
                .toHaveBeenCalledWith(`Provided name consists of white spaces. Update failed.`);

            contactGroup.update({ name: newNameWhiteSpaces });
            expect(consoleErrorSpy)
                .toHaveBeenCalledWith(`Provided name consists of white spaces. Update failed.`);

            expect(consoleErrorSpy).toHaveBeenCalledTimes(2);
        })
    });
});

describe(`Tests for the show method.`, () => {
   test(`Should console.log the short info about the contact group.`, () => {
       const name = 'Family';
       const contactGroup = new ContactGroup(name);
       const oneContactToAdd = new Contact('sis', 'sis@gmail.com');
       let currentMembersCount = 0;

       contactGroup.show();
       expect(consoleLogSpy).toHaveBeenCalledWith(`Group name: ${name}
        Members: ${currentMembersCount}`);

       contactGroup.add(oneContactToAdd);
       currentMembersCount = 1;
       contactGroup.show();
       expect(consoleLogSpy).toHaveBeenCalledWith(`Group name: ${name}
        Members: ${currentMembersCount}`);

       expect(consoleLogSpy).toHaveBeenCalledTimes(2);
   });
});

describe(`Tests for the show all info method. 
    Should call the show method and the show method from every contact present in the group.`, () => {
    const contactGroupShowSpy = jest.spyOn(ContactGroup.prototype, 'show');
    const contactShowSpy = jest.spyOn(Contact.prototype, 'show');

    beforeEach(() => {
        contactGroupShowSpy.mockClear();
        contactShowSpy.mockClear();
    })

    test(`There are 0 members of the group. Should only call the show method from ContactGroup class.`,
        () => {
        const newGroup = new ContactGroup('New');

        newGroup.showAllInfo();
        expect(contactGroupShowSpy).toHaveBeenCalledTimes(1);
        expect(contactShowSpy).toHaveBeenCalledTimes(0);
    });

    test(`There are 3 members of the group. Should call the show method from ContactGroup class once
    and the show method from the Contact class 3 times.`,
        () => {
            const newGroup = new ContactGroup('New');
            allFamilyContacts.forEach(contact => newGroup.add(contact));

            newGroup.showAllInfo();
            expect(contactGroupShowSpy).toHaveBeenCalledTimes(1);
            expect(contactShowSpy).toHaveBeenCalledTimes(3);
        });
});