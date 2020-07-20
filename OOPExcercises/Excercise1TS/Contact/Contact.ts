import { DateFormatter } from "../HelperClasses/DateFormatter";
import { validateEmail } from "../HelperClasses/ValidateEmail";
import { IContact } from "../Interfaces/Contact/IContact";

export class Contact implements IContact {
    private _dateFormatter: DateFormatter;
    firstName: string;
    surname: string;
    email: string;
    modifyDate: Date;
    
    constructor(firstName : string, surname : string, email : string) {
        validateEmail(email);

        if (!firstName) {
          throw new Error("First name has to have a value");
        }

        this.firstName = firstName;
        this.surname = surname;
        this.email = email;
        this._dateFormatter = new DateHandler();
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
        Last modified: ${this._dateFormatter.formatDate(this.modifyDate)}`);
    }
}


