import axios from "axios";
import actions from "./contacts-action";

axios.defaults.baseURL = "http://localhost:4040";

const fetchContacts = () => async (dispatch) => {
  const {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
  } = actions;

  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

const addContact = (name, number) => async (dispatch) => {
  const { addContactRequest, addContactSuccess, addContactError } = actions;
  const contact = {
    name,
    number,
  };
  dispatch(addContactRequest());

  try {
    const { data } = await axios.get("/contacts", contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

const deleteContact = (contactId) => async (dispatch) => {
  const {
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
  } = actions;

  dispatch(deleteContactRequest());

  try {
    await axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactSuccess(contactId));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

export default {
  addContact,
  deleteContact,
  fetchContacts,
};
