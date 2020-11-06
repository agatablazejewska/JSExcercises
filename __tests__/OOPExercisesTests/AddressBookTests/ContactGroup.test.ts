import { Contact } from '../../../OOPExcercises/Excercise1TS/Contact/Contact';
import { ContactGroup } from '../../../OOPExcercises/Excercise1TS/ContactGroup/ContactGroup';

describe('Tests for the add method.', () => {
    const familyContactGroup = new ContactGroup('Family');
    const mom = new Contact('Mom', 'mom@gmail.com');
    const dad = new Contact('Dad', 'dad@gmail.com');
    const brother = new Contact('Brother', 'brother@gmail.com');

    describe('Check if method returns correct results', () => {
        test(`Adding contacts to group.`, () => {
            const familyContactsToAddArray = [mom, dad, brother];
            familyContactsToAddArray.forEach(contact => familyContactGroup.add(contact));
            const allContactsInTheGroupArray = familyContactGroup.contacts;

            expect(allContactsInTheGroupArray).toEqual(familyContactsToAddArray);
        })

    });



    describe(`Check if method responds properly to encountered errors`, () => {

    });
});