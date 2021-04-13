import "./App.css";
import ContactsForm from "./components/ContactsForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";

import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm />
        <h2>Contacts</h2>

        <Filter />
        <ContactList />
      </>
    );
  }
}

export default App;
