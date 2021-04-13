import "./App.css";
import ContactsForm from "./components/ContactsForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/Filter";

import React, { Component } from "react";

class App extends Component {
  // state = {
  //   contacts: [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],
  //   filter: "",
  // };

  // componentDidMount() {
  //   const persistedData = JSON.parse(localStorage.getItem("contacts"));
  //   if (persistedData) {
  //     this.setState(() => ({ contacts: [...persistedData] }));
  //     return;
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   const { contacts } = this.state;
  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  // formSubmitHandler = (data) => {
  //   const { contacts } = this.state;
  //   if (
  //     contacts.some((el) => el.name.toLowerCase() === data.name.toLowerCase())
  //   ) {
  //     return alert(`${data.name} is already in contacts`);
  //   }

  //   this.setState((prevState) => ({
  //     contacts: [...prevState.contacts, data],
  //   }));
  // };

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
