import { createSelector } from "reselect";

const getContacts = (state) => state.contacts.items;

const getLoading = (state) => state.contacts.loading;

const getFilter = (state) => state.contacts.filter;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase(filter))
    );
  }
);

const getContactById = (state, contactId) => {
  const contacts = getContacts(state);
  return contacts.find((contact) => contact.id === contactId);
};

export default {
  getContacts,
  getLoading,
  getFilter,
  getVisibleContacts,
  getContactById,
};
