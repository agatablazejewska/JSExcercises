import { ChatRoom } from '../../../../OOPExcercises/Excercise3TS/ChatRoom/ChatRoom';
import { ChatRoomStorageHandler } from '../../../../OOPExcercises/Excercise3TS/ChatRoomStorage/ChatRoomStorageHandler';
import { IChatRoom } from '../../../../OOPExcercises/Excercise3TS/Utilities';

const consoleLogSpy = jest.spyOn(console, 'log');
let chatRoom: IChatRoom;
let chatRoomsStorageHandler: ChatRoomStorageHandler;

beforeEach(() => {
    consoleLogSpy.mockClear();
    chatRoom = new ChatRoom('new chat room', 'just a new chat room');
    chatRoomsStorageHandler = new ChatRoomStorageHandler();
});

describe(`Tests for the addNewRoom method.`, () => {
    describe('Check if method returns correct results', () => {
        test(`Add new room and check if it is there.`, () => {
            chatRoomsStorageHandler.addNewRoom(chatRoom);

            const isChatRoomAdded = !!chatRoomsStorageHandler.getRoom(chatRoom.id);

            expect(isChatRoomAdded).toBe(true);
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`Adding the same room twice should result in an error.`, () => {
            chatRoomsStorageHandler.addNewRoom(chatRoom);

            const addSameRoomSecondTime = () => chatRoomsStorageHandler.addNewRoom(chatRoom);

            expect(() => addSameRoomSecondTime()).toThrowError(`The room is already added.`);
        });
    });
});

describe(`Tests for the delete method.`, () => {
    describe('Check if method returns correct results', () => {
        test(`Should remove the room from the list.`, () => {
            chatRoomsStorageHandler.addNewRoom(chatRoom);
            chatRoomsStorageHandler.deleteRoom(chatRoom.id);

            const getRoomFromTheList = () => {
                chatRoomsStorageHandler.getRoom(chatRoom.id);
            };

            expect(() => getRoomFromTheList()).toThrowError(`Chat room doesn't exist`);
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`The room was not in the list. Should throw an error.`, () => {
            const removeRoomFromTheList = () => {
                chatRoomsStorageHandler.deleteRoom(chatRoom.id);
            };

            expect(() => removeRoomFromTheList()).toThrowError(`There is no such element in the array.`);
        });
    });
});

describe(`Tests for the showAllChatRooms method.`, () => {
    test(`Should console.log info about all rooms.`, () => {
        const secondChatRoom = new ChatRoom('secondRoom', 'Second room');
        const allChatRoomsAdded = [chatRoom, secondChatRoom];
        const expectConsoleLogToHaveBeenCalledWithRoomData = (room: IChatRoom) => {
            expect(consoleLogSpy)
                .toHaveBeenCalledWith(`Room name is ${room.name} and here's it's description: ${room.description}`);
        };

        chatRoomsStorageHandler.addNewRoom(chatRoom);
        chatRoomsStorageHandler.addNewRoom(secondChatRoom);

        chatRoomsStorageHandler.showAllChatRooms();

        expect(consoleLogSpy).toHaveBeenCalledTimes(2);
        allChatRoomsAdded.forEach(room => expectConsoleLogToHaveBeenCalledWithRoomData(room));
    });

    test(`There are no rooms in the list. Shouldn't log any info.`, () => {
        chatRoomsStorageHandler.showAllChatRooms();

        expect(consoleLogSpy).toHaveBeenCalledTimes(0);
    });
});

describe(`Tests for the getRoom method`, () => {
    describe('Check if method returns correct results', () => {
        test(`Should return the room specified by id.`, () => {
            chatRoomsStorageHandler.addNewRoom(chatRoom);

            const returnedRoom = chatRoomsStorageHandler.getRoom(chatRoom.id);

            expect(returnedRoom).toEqual(chatRoom);
        });
    });


    describe(`Check if method responds properly to encountered errors`, () => {
        test(`There is no such room in the list. Should throw an error.`, () => {
            const getRoomThatIsntInTheList = () => {
                chatRoomsStorageHandler.getRoom(chatRoom.id);
            };

            expect(() => getRoomThatIsntInTheList()).toThrowError(`Chat room doesn't exist`);
        });
    });
});