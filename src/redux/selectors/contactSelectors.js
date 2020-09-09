import { createSelector } from "reselect";

export const selectorName = (state) => state.selector;

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

// const getVisibleContacts = (state) => {
//   const contacts = getContacts(state);
//   const filter = getFilter(state).toLowerCase();

//   return contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase(filter))
//   );
// };

const getContactById = (state, contactId) => {
  const contacts = getContacts(state);
  return contacts.find((contact) => contact.id === contactId);
};

export default {
  getLoading,
  getFilter,
  getVisibleContacts,
  getContactById,
};
