import { IHasID } from '../../Common/IHasID';

interface IBook extends IHasID {
    readonly title: string;
    readonly author: string;
    readonly description: string;
}

export { IBook };