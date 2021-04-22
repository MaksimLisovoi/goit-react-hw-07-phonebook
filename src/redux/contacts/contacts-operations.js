import axios from "axios";
import actions from "./contacts-action";

axios.defaults.baseURL = "http://localhost:3004";

const addContact = (name, number) => (dispatch) => {
  const contact = { name, number };
  const { addContactRequest, addContactSuccess, addContactError } = actions;

  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

const deleteContact = (contactId) => (dispatch) => {
  const {
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
  } = actions;

  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export default {
  addContact,
  deleteContact,
};
