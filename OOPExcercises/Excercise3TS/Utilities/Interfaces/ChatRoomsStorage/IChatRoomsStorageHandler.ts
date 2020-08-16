import { IChatRoom, IGetRoom } from '../../index';

export default interface IChatRoomsStorageHandler extends IGetRoom {
    showAllChatRooms(): void;
    addNewRoom(room: IChatRoom): void;
    deleteRoom(id: string): void;
}