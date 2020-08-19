import { IChatRoom } from "../Utilities";

class ChatRoomsStorageSingletone {
    private _chatRoomsArray: Array<IChatRoom> = new Array<IChatRoom>();

    get rooms() {
        return this._chatRoomsArray;
    }
}

export const ChatRoomsStorage = new ChatRoomsStorageSingletone();