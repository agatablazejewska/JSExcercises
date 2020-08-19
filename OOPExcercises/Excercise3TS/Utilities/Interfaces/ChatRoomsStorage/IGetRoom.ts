import { IChatRoom } from '../../index';

interface IGetRoom {
    getRoom(id: string): IChatRoom;
}

export { IGetRoom };