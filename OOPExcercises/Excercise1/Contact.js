import { v4 as uuidv4 } from "../../npm/node_modules/uuid";
import * as commonFunctions from "../../commonFunctions";

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
    this._modifyDate = this._todaysDate();
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

    this._modifyDate = this._todaysDate();
  }

  show() {
    console.log(`Name: ${this.getFirstName()}
        Surname: ${this.getSurname()}
        E-mail: ${this.getEmail()}
        Last modified: ${this._formatDate(this.getModifyDate())}`);
  }

  _todaysDate() {
    return new Date();
  }

  _formatDate(date) {
    if (!date instanceof Date) {
      throw Error("Provided value is not a date");
    }

    const fullDate = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;

    const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    return `${fullDate} ${time}`;
  }

  _validateAllFields(firstName, surname, email) {
    commonFunctions.validateString(firstName);
    commonFunctions.validateString(surname);
    commonFunctions.validateEmail(email);
  }
}

export { Contact };
