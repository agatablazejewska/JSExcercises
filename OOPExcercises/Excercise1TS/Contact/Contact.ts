import { v4 as uuidv4 } from 'uuid';
import { Helper } from "../../Common/Helper";
import { IContact } from "../Interfaces/Contact/IContact";

export class Contact implements IContact {
    id: string;
    firstName: string;
    surname: string;
    email: string;
    modifyDate: Date;
    
    constructor(firstName : string, surname : string, email : string) {
        Helper.validateEmail(email);

        if (!firstName) {
          throw new Error("First name has to have a value");
        }

        this.id = uuidv4();
        this.firstName = firstName;
        this.surname = surname;
        this.email = email;
        this.modifyDate = new Date();
    }
    
    get fullName() : string {
        return `${this.firstName} ${this.surname}`;
    }

    update<IContactDataOptional>(source : IContactDataOptional): void {
        Object.assign(this, source); 
        this.modifyDate = new Date();  
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


