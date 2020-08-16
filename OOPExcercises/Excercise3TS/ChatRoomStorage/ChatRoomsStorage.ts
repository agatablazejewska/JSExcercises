import { IChatRoom } from "../Utilities";

export class ChatRoomsStorage {
    private static _instance: ChatRoomsStorage;
    private _chatRoomsArray: Array<IChatRoom> = new Array<IChatRoom>();

    private constructor() {}

    static getInstance(): ChatRoomsStorage {
        if (!ChatRoomsStorage._instance) {
            ChatRoomsStorage._instance = new ChatRoomsStorage();
        }
    
        return ChatRoomsStorage._instance;
      }
    
    get rooms() {
        return this._chatRoomsArray;
    }
}