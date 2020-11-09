import { v4 as uuidv4 } from 'uuid';
import { Helper } from "../../Common/Helper";
import { IContact } from "../Interfaces/Contact/IContact";
import { IContactDataOptional } from '../Interfaces/Contact/IContactDataOptional';
import { CommonValidator } from '../../Common/CommonValidator';

export class Contact implements IContact {
    private readonly _id: string;
    private _modifyDate: Date;
    firstName: string;
    surname: string;
    email: string;

    
    constructor(firstName : string, email : string, surname : string = '') {
        CommonValidator.validateEmail(email);

        if (!firstName) {
          throw new Error("First name has to have a value");
        }

        this._id = uuidv4();
        this.firstName = firstName;
        this.surname = surname;
        this.email = email;
        this._modifyDate = new Date();
    }

    get id() : string {
        return this._id;
    }
    
    get fullName() : string {
        return `${this.firstName} ${this.surname}`;
    }

    get modifyDate() : Date {
        return this._modifyDate;
    }

    update(source : IContactDataOptional): void {
        try {
            CommonValidator.validateStringProperties(source);
            if(source.email) {
                CommonValidator.validateEmail(source.email);
            }
        
            Object.assign(this, source); 
            this._modifyDate = new Date();
        } catch(e) {
            console.error(e.message);
        }
    }

    show(): void {
        console.log(`Name: ${this.fullName}, email: ${this.email}`);
    }

    showAllInfo(): void {
        console.log(`First name: ${this.firstName}
        Surname: ${this.surname}
        E-mail: ${this.email}
        Last modified: ${Helper.formatDate(this.modifyDate)}`);
    }
}


