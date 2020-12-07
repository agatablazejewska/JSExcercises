import { ChatRoom } from '../../../OOPExcercises/Excercise3TS/ChatRoom/ChatRoom';
import { Message } from '../../../OOPExcercises/Excercise3TS/Message/Message';
import { User } from '../../../OOPExcercises/Excercise3TS/User/User';
import { Gender } from '../../../OOPExcercises/Excercise3TS/Utilities';

jest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));

let chatRoom: ChatRoom;
const user = new User({
    name: 'user',
    surname: 'new',
    email: 'user@gmail.com',
    gender: Gender.male,
    dateOfBirth: '11-09-2020',
    dateOfBirthCurrentFormat: 'MM-DD-YYYY',
    password: 'super>Secret1M',
});


beforeEach(() => {
    chatRoom = new ChatRoom('new chat room', 'chat room');
});

describe(`Tests for the constructor.`, () => {
    describe('Check if method returns correct results', () => {
        test(`Should create new instance with correct properties.`, () => {
            expect(chatRoom).toEqual(
                expect.objectContaining({
                    id: '00000000-0000-0000-0000-000000000000',
                    name: 'new chat room',
                    description: 'chat room',
                }),
            );
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`Provided name is an empty string. Should throw an error.`, () => {
            const createChatRoomWithEmptyName = () => {
                new ChatRoom('', 'description');
            };

            expect(() => createChatRoomWithEmptyName())
                .toThrowError(`Provided text is empty or consists of white spaces`);
        });
    });
});

describe(`Tests for the methods regarding users.`, () => {

    const isUserPresentInChatRoom = () => {
        return chatRoom.containsUser(user.id);
    };

    describe(`Tests for the addUser method`, () => {
        describe('Check if method returns correct results', () => {
            test(`Should add new user to the list.`, () => {
                chatRoom.addUser(user);

                expect(isUserPresentInChatRoom()).toBe(true);
            });
        });


        describe(`Check if method responds properly to encountered errors`, () => {
            test('The user is already added. Should throw an error.', () => {
                chatRoom.addUser(user);

                const addUserForTheSecondTime = () => {
                    chatRoom.addUser(user);
                };

                expect(() => addUserForTheSecondTime())
                    .toThrowError('This user is already present in the room.');
            });
        });
    });

    describe(`Tests for the removeUser method.`, () => {
        describe('Check if method returns correct results', () => {
            test('Should remove the user.', () => {
                chatRoom.addUser(user);
                chatRoom.removeUser(user.id);

                expect(isUserPresentInChatRoom()).toBe(false);
            });
        });


        describe(`Check if method responds properly to encountered errors`, () => {
            test(`The user is not present in the chat room. Should throw an error.`, () => {
                const removeUserThatIsNotPresentInChatRoom = () => {
                    chatRoom.removeUser(user.id);
                };

                expect(() => removeUserThatIsNotPresentInChatRoom())
                    .toThrowError(`There is no such element in the array.`);
            });
        });
    });

    describe(`Tests for the banUser method.`, () => {
        describe('Check if method returns correct results', () => {
            test(`Should ban the user.`, () => {
                chatRoom.addUser(user);
                chatRoom.banUser(user.id);

                const isUserBanned = () => {
                    chatRoom.isBanned(user.id);
                };

                expect(isUserBanned()).toBe(true);
            });
        });


        describe(`Check if method responds properly to encountered errors`, () => {
            test(`There is no such user in the room. Should throw an error.`, () => {
                const banUserThatIsNotPresentInChatRoom = () => {
                    chatRoom.banUser(user.id);
                };

                expect(() => banUserThatIsNotPresentInChatRoom())
                    .toThrowError(`There is no such user in the chat room.`);
            });
        });
    });
});

describe(`Tests for the methods regarding messages.`, () => {

    const message = new Message(user, 'hola');

    const isMessageInList = () => {
        const allMessagesAdded = chatRoom.getAllMessages();
        return allMessagesAdded.some(msg => msg.id === message.id);
    };

    describe('Test for the addMessage method.', () => {
        test(`Should add new message.`, () => {
            chatRoom.addMessage(message);

            expect(isMessageInList()).toBe(true);
        });
    });

    describe(`Tests for the removeMessage method.`, () => {
        describe('Check if method returns correct results', () => {
            test(`Should remove the message from the list.`, () => {
                chatRoom.addMessage(message);
                chatRoom.removeMessage(message.id);

                expect(isMessageInList()).toBe(false);
            });
        });


        describe(`Check if method responds properly to encountered errors`, () => {
            test(`There is no such message in the list. Should throw an error.`, () => {
                const removeMessageThatIsNotInTheList = () => {
                    chatRoom.removeMessage(message.id);
                };

                expect(() => removeMessageThatIsNotInTheList())
                    .toThrowError(`There is no such element in the array.`);
            });
        });
    });
});


