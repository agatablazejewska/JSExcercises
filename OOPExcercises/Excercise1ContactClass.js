import * as commonFunctions from '../commonFunctions.js';

class Contact {
    constructor(name, surname, email) {
        this.setName(name);
        this.setSurname(surname);
        this.setEmail(email);
    }

    setEmail(value) {
      commonFunctions.validateEmail(value);
    
      this._email = value;
      this._moodifiedDate = Date.now();
    }

    getEmail(){
        return this._email;
    }

    setName(value) {
        commonFunctions.validateString(value);
       
        this._name = value;
        this._moodifiedDate = Date.now();
    } 

    getName() {
        return this._name;
    }

    setSurname(value) {
        commonFunctions.validateString(value);
       
        this._surname = value;
        this._moodifiedDate = Date.now();
    }

    getSurname() {
        return this._surname;
    }

    getModifiedDate() {
        return this._moodifiedDate;
    }

    showContact() {
        console.log(`Name: ${this.getName()}
        Surname: ${this.getSurname()}
        E-mail: ${this.getEmail()}
        Last modified: ${this.getModifiedDate()}`);
    }
}

const contact1 = new Contact('Agata', 'Sokol', 'agatS@gmail.com');
contact1.showContact();