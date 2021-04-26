import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

import s from "./ContactList.module.css";

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, onDeleteContact } = this.props;
    return (
      <>
        <ul>
          {contacts &&
            contacts.map(({ name, id, number }) => (
              <li key={id} className={s.contactItem}>
                <p>
                  <span>{name}:</span> {number}
                </p>
                <button type="button" onClick={() => onDeleteContact(id)}>
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   onDeleteContact: PropTypes.func.isRequired,
// };

// const getVisibleContacts = (allContacts, filter) => {
//   const normalFilter = filter.toLowerCase();

//   return allContacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalFilter)
//   );
// };

// const mapStateToProps = ({ contacts: { contacts, filter } }) => ({
//   contacts: getVisibleContacts(contacts, filter),
// });
