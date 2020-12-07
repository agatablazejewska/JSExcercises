import { ChatRoomsStorage } from './ChatRoomsStorage';
import { IChatRoom, IChatRoomsStorageHandler } from '../Utilities';
import { Helper } from '../../Common/Helper';

export class ChatRoomStorageHandler implements IChatRoomsStorageHandler {
    private readonly _chatRoomsStorage = ChatRoomsStorage;

    constructor() {
    }

    addNewRoom(room: IChatRoom): void {
        const isRoomAlreadyAdded = !!this._findRoom(room.id);
        if(isRoomAlreadyAdded) {
            throw new Error(`The room is already added.`);
        }

        this._chatRoomsStorage.rooms.push(room);
    }

    deleteRoom(id: string): void {
        Helper.removeFromArray(id, this._chatRoomsStorage.rooms);
    }

    showAllChatRooms(): void {
        this._chatRoomsStorage.rooms.forEach(r =>
            console.log(`Room name is ${r.name} and here's it's description: ${r.description}`));
    }

    getRoom(id: string): IChatRoom {
        const chatRoom = this._findRoom(id);
        if(!chatRoom) {
            throw new Error("Chat room doesn't exist");
        }

        return chatRoom;
    }

    private _findRoom(id: string) {
       return this._chatRoomsStorage.rooms.find(r => r.id === id);
    }
}