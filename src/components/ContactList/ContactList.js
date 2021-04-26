import React, { Component } from "react";

import PropTypes from "prop-types";

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
    console.log(contacts);
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

export default ContactList;
