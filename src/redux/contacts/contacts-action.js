import { createAction } from "@reduxjs/toolkit";

const fetchContactsRequest = createAction("contacts/addContactRequest");
const fetchContactsSuccess = createAction("contacts/addContactSuccess");
const fetchContactsError = createAction("contacts/addContactError");

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");

const deleteContactRequest = createAction("contacts/deleteContactRequest");
const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
const deleteContactError = createAction("contacts/deleteContactError");

const changeFilter = createAction("contact/changeFilter");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,

  changeFilter,
};
