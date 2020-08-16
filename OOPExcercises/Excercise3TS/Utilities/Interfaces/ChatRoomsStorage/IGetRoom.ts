import { IChatRoom } from '../../index';

export default interface IGetRoom {
    getRoom(id: string): IChatRoom | undefined;
}