import { Contact } from '../../../OOPExcercises/Excercise1TS/Contact/Contact';
import { expect } from 'chai';

describe('Tests for creating a contact', () => {
    describe('Check if method returns correct results', () => {
        test('Creating new Contact object. Should have expected properties and correct values associated with them.', () => {
            const contact = new Contact('Jane', 'Doe', 'email@gmail.com');
            const contactCreationDate = contact.modifyDate.getDate();
            const todaysDate = new Date().getDate();

            expect(contact).to.be.instanceOf(Contact);
            expect(contact).to.have.property('firstName', 'Jane');
            expect(contact).to.have.property('surname', 'Doe');
            expect(contact).to.have.property('email', 'email@gmail.com');
            expect(contactCreationDate).to.equal(todaysDate);
        });
    });



    describe(`Check if method responds properly to encountered errors`, () => {

    });
});