import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import contactsOperations from "../../redux/contacts/contacts-operations";
import shortid from "shortid";

import s from "./ContactsForm.module.css";

class ContactsForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  nameInputId = shortid.generate();

  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;
    const { contacts, onSubmit } = this.props;

    if (!name) {
      return;
    }

    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    onSubmit(name, number);

    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.contactsForm}>
        <label htmlFor={shortid.generate()} className={s.formLabel}>
          Name
        </label>
        <input
          className={s.formLabel}
          id={shortid.generate()}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor={shortid.generate()} className={s.formLabel}>
          Number
        </label>
        <input
          className={s.formLabel}
          id={shortid.generate()}
          type="tel"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
        />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsForm);
