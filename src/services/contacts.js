import Contact from '../models/contactModel.js';

export const getAllContacts = async () => {
  const contacts = await Contact.find();
  return contacts;
};

export const findContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};