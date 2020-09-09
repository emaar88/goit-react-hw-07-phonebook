// import { ADD_CONTACT, DELETE_CONTACT } from "../types";
// import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const fetchContactsRequest = createAction("contacts/fetchRequest");
const fetchContactsSuccess = createAction("contacts/fetchSuccess");
const fetchContactsError = createAction("contacts/fetchError");

const deleteContactRequest = createAction("contacts/removeRequest");
const deleteContactSuccess = createAction("contacts/removeSuccess");
const deleteContactError = createAction("contacts/removeError");

const onRename = createAction("contacts/onRename");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  onRename,
};
