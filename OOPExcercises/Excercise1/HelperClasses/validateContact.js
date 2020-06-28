import { Contact } from '../Contact';

export function validateContact(contact) {
  if (!contact instanceof Contact) {
    throw new Error("Provided object is not a contact");
  }
}
