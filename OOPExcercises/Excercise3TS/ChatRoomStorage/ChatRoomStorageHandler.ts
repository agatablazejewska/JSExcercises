import { ChatRoomsStorage } from './ChatRoomsStorage';
import { IChatRoom, IChatRoomsStorageHandler } from '../Utilities';
import { Helper } from '../../Common/Helper';

export class ChatRoomStorageHandler implements IChatRoomsStorageHandler {
    private readonly _chatRoomsStorage: ChatRoomsStorage;

    constructor() {
        this._chatRoomsStorage = ChatRoomsStorage.getInstance();
    }

    addNewRoom(room: IChatRoom): void {
        this._chatRoomsStorage.rooms.push(room);
    }

    deleteRoom(id: string): void {
        Helper.removeFromArray(id, this._chatRoomsStorage.rooms);
    }

    showAllChatRooms(): void {
        this._chatRoomsStorage.rooms.forEach(r =>
            console.log(`Room name is ${r.name} and here's it's description: ${r.description}`));
    }

    getRoom(id: string): IChatRoom | undefined {
        return this._chatRoomsStorage.rooms.find(r => r.id === id);
    }
}