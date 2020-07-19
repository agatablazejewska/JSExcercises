import { DateHandler } from "../HelperClasses/DateHandler";
import { validateEmail } from "../HelperClasses/ValidateEmail";
import { IContact } from "../Interfaces/Contact/IContact";

export class Contact implements IContact {
    private _dateHandler: DateHandler;
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
        this._dateHandler = new DateHandler();
        this.modifyDate = this._dateHandler.todaysDate();
    }
    
    get fullName() : string {
        return `${this.firstName} ${this.surname}`;
    }

    update<IContactData>(source: IContactData): void {
        Object.assign(this, source); 
        this.modifyDate = this._dateHandler.todaysDate();    
    }

    show(): void {
        console.log(`Name: ${this.fullName}, email: ${this.email}`);
    }

    showAllInfo(): void {
        console.log(`First name: ${this.firstName}
        Surname: ${this.surname}
        E-mail: ${this.email}
        Last modified: ${this._dateHandler.formatDate(this.modifyDate)}`);
    }
}


