import { expect } from 'chai';
import { Contact } from '../../../OOPExcercises/Excercise1TS/Contact/Contact';
jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

describe('Tests for creating a contact', () => {
    describe('Check if method returns correct results', () => {
        test('Creating new Contact object. Should have expected properties and correct values associated with them.', () => {
            const contact = new Contact('Jane', 'Doe', 'email@gmail.com');
            const contactCreationDate = contact.modifyDate.getDate();
            const todayDate = new Date().getDate();


            expect(contact).to.be.instanceOf(Contact);
            expect(contact.id).to.equal(`00000000-0000-0000-0000-000000000000`);
            expect(contact).to.have.property('firstName', 'Jane');
            expect(contact).to.have.property('surname', 'Doe');
            expect(contact).to.have.property('email', 'email@gmail.com');
            expect(contactCreationDate).to.equal(todayDate);
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`Provided email is not valid. Should throw error.`, () => {
           expect(() => { new Contact('Jane', 'Doe', 'email.com') })
               .to.throw(`Provided value is not a valid e-mail`);
        });

        test(`Provided first name is empty. Should throw error.`, () => {
            expect(() => { new Contact('', 'Doe', 'email@gmail.com') })
                .to.throw(`First name has to have a value`);
        });
    });
});

