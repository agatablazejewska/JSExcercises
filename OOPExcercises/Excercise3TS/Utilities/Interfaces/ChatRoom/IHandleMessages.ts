import { IMessage } from '../../index';

export default interface IHandleMessages {
    addMessage(messageObj: IMessage): void;
    removeMessage(id: string): void;
}