import moment from 'moment';
import { Message } from '../../../OOPExcercises/Excercise3TS/Message/Message';
import { User } from '../../../OOPExcercises/Excercise3TS/User/User';
import { Gender } from '../../../OOPExcercises/Excercise3TS/Utilities';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

const user = new User({
    name: 'user',
    surname: 'new',
    email: 'user@gmail.com',
    gender: Gender.male,
    dateOfBirth: '11-09-2020',
    dateOfBirthCurrentFormat: 'MM-DD-YYYY',
    password: 'super>Secret1M',
});

describe(`Tests for the constructor.`, () => {
    describe('Check if method returns correct results', () => {
        test(`Should create a message with all properties.`, () => {
            const text = 'new text';
            const message = new Message(user, text);
            const messageCreationDate = message.createdAt.date();
            const todayDate = moment().date();

            expect(message).toEqual(
                expect.objectContaining({
                        id: '00000000-0000-0000-0000-000000000000',
                        author: user,
                        message: text,
                    },
                ),
            );
            expect(messageCreationDate).toEqual(todayDate);
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`Text of the message is an empty string. Should throw an error.`, () => {
            const emptyText = '';

            const createMessageWithEmptyText = () => {
                new Message(user, emptyText);
            }

            expect(() => createMessageWithEmptyText())
                .toThrowError(`Provided text is empty or consists of white spaces`);
        });
    });
});