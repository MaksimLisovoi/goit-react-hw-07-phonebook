import { createAction } from "@reduxjs/toolkit";

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");

const deleteContactRequest = createAction("contacts/deleteContactRequest");
const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
const deleteContactError = createAction("contacts/deleteContactError");

const deleteContact = createAction("contact/delete");
const changeFilter = createAction("contact/changeFilter");

export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  deleteContact,
  changeFilter,
};
