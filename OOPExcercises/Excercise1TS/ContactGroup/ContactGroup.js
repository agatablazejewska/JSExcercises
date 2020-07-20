"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactGroup = void 0;
const uuid4_1 = __importDefault(require("uuid4"));
class ContactGroup {
    constructor(name) {
        this.id = uuid4_1.default();
        this._name = name;
        this._contactArray = new Array();
    }
    get name() {
        return this._name;
    }
    add(contact) {
        if (!this._containsContact(contact)) {
            this._contactArray.push(contact);
        }
    }
    remove(contact) {
        const index = this._contactArray.indexOf(contact);
        if (index > -1) {
            this._contactArray.splice(index, 1);
        }
    }
    update(source) {
        Object.assign(this, source);
    }
    show() {
        console.log(`Group name: ${this.name}`);
        console.log(`Members: ${this._getMembersCount}`);
    }
    showAllInfo() {
        this.show();
        this._contactArray.forEach((contact) => contact.show());
    }
    _getMembersCount() {
        return this._contactArray.length;
    }
    _containsContact(contact) {
        return this._contactArray.some(c => c.firstName === contact.firstName && c.surname === contact.surname);
    }
}
exports.ContactGroup = ContactGroup;
//# sourceMappingURL=ContactGroup.js.map