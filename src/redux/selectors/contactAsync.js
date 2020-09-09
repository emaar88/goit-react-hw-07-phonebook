import axios from "axios";
import contactsActions from "../actions/contactActions";

axios.defaults.baseURL = "http://localhost:2000";

const addContact = (name, number) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());
  axios
    .post("/contacts", { name, number })
    .then(({ data }) => {
      //   console.log(responce);
      dispatch(contactsActions.addContactSuccess(data));
    })
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(contactsActions.fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.deleteContactError(error)));
};

export default {
  addContact,
  fetchContacts,
  removeContact,
};
