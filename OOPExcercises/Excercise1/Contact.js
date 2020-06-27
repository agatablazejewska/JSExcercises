import { v4 as uuidv4 } from "../../npm/node_modules/uuid";
import * as commonFunctions from "../../commonFunctions";

class Contact {
  constructor(firstName, surname, email) {
    this._id = uuidv4();
    this.setFirstName(firstName);
    this.setSurname(surname);
    this.setEmail(email);
  }

  get id() {
    return this._id;
  }

  set email(value) {
    commonFunctions.validateEmail(value);

    this._email = value;
    this._modifyDate = this._todaysDate();
  }

  get email() {
    return this._email;
  }

  set firstName(value) {
    commonFunctions.validateString(value);
    if (!value) {
      throw new Error("Firt name has to have a value");
    }

    this._firstName = value;
    this._modifyDate = this._todaysDate();
  }

  get firstName() {
    return this._firstName;
  }

  set surname(value) {
    commonFunctions.validateString(value);

    this._surname = value;
    this._modifyDate = this._todaysDate();
  }

  get surname() {
    return this._surname;
  }

  get modifyDate() {
    return this._modifyDate;
  }

  showContact() {
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
}

export { Contact };
