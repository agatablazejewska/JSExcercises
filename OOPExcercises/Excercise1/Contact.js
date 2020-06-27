import { v4 as uuidv4 } from "../../npm/node_modules/uuid";
import * as commonFunctions from "../../commonFunctions";
import { DateHandler } from "./HelperClasses/DateHandler";

class Contact {
  constructor(firstName, surname, email) {
    this._validateAllFields(firstName, surname, email);
    if (!firstName) {
      throw new Error("First name has to have a value");
    }

    this._id = uuidv4();
    this._firstName = firstName;
    this._surname = surname;
    this._email = email;
    this._dateHandler = new DateHandler();
    this._modifyDate = this._dateHandler.todaysDate();
  }

  get email() {
    return this._email;
  }

  get firstName() {
    return this._firstName;
  }

  get surname() {
    return this._surname;
  }

  get modifyDate() {
    return this._modifyDate;
  }

  update(newFirstName = "", newSurname = "", newEmail = "") {
    this._validateAllFields(newFirstName, newSurname, newEmail);

    if (newFirstName) {
      this._firstName = newFirstName;
    }

    if (newSurname) {
      this._surname = newSurname;
    }

    if (newEmail) {
      this._email = newEmail;
    }

    this._modifyDate = this._dateHandler.todaysDate();
  }

  get fullName() {
    return `${this.firstName} ${this.surname}`;
  }

  show() {
    console.log(`Name: ${this.fullName}`);
  }

  showAllInfo() {
    console.log(`First name: ${this.firstName}
    Surname: ${this.surname}
    E-mail: ${this.email}
    Last modified: ${this._dateHandler.formatDate(this.modifyDate)}`);
  }

  _validateAllFields(firstName, surname, email) {
    commonFunctions.validateString(firstName);
    commonFunctions.validateString(surname);
    commonFunctions.validateEmail(email);
  }
}

export { Contact };
