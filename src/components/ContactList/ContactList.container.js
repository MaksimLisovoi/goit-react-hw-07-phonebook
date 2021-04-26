import { connect } from "react-redux";
import ContactList from "./ContactList";
// import contactsOperations from "../../redux/contacts/contacts-operations";
// import contactsSelectors from "../../redux/contacts/contacts-selectors";

import { contactsOperations, contactsSelectors } from "../../redux/contacts";

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
