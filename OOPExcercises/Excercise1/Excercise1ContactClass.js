import * as commonFunctions from '../../commonFunctions.js';

class Contact {
    constructor(name, surname, email) {
        this.setName(name);
        this.setSurname(surname);
        this.setEmail(email);
    }

    setEmail(value) {
      commonFunctions.validateEmail(value);
    
      this._email = value;
      this._modifyDate = this._todaysDate();
    }

    getEmail(){
        return this._email;
    }

    setName(value) {
        commonFunctions.validateString(value);
       
        this._name = value;
        this._modifyDate = this._todaysDate();
    } 

    getName() {
        return this._name;
    }

    setSurname(value) {
        commonFunctions.validateString(value);
       
        this._surname = value;
        this._modifyDate = this._todaysDate();
    }

    getSurname() {
        return this._surname;
    }

    getModifyDate() {
        return this._modifyDate;
    }

    showContact() {
        console.log(`Name: ${this.getName()}
        Surname: ${this.getSurname()}
        E-mail: ${this.getEmail()}
        Last modified: ${this._formatDate(this.getModifyDate())}`);
    }

    _todaysDate() {
        return new Date();
    }

    _formatDate(date) {
        if(!date instanceof Date) {
            throw Error("Provided value is not instance of Date");
        }

        const fullDate = `${date.getDate()}-${(date.getMonth()+1)}-${date.getFullYear()}`;
        const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        return `${fullDate} ${time}`;
    }
}