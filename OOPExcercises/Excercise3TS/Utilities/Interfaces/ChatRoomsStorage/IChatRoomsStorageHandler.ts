import { IChatRoom, IGetRoom } from '../../index';

interface IChatRoomsStorageHandler extends IGetRoom {
    showAllChatRooms(): void;
    addNewRoom(room: IChatRoom): void;
    deleteRoom(id: string): void;
}

export { IChatRoomsStorageHandler };