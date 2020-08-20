import uuid4 from 'uuid4';
import { CommonValidator } from '../Common/CommonValidator';
import { IBook } from './Interfaces';

export class Book implements IBook {
    readonly id: string;
    readonly title: string;
    readonly author: string;
    readonly description: string;

    constructor(title: string, author: string, description: string) {
        CommonValidator.validateEmptyString(title);
        CommonValidator.validateEmptyString(author);
        CommonValidator.validateEmptyString(description);

        this.id = uuid4();
        this.title = title;
        this.author = author;
        this.description = description;
    }
}