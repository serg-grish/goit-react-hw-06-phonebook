import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import FormContact from "./components/FormContact/FormContact";
import Filter from "./components/Filter/Filter";
import ContactsList from "./components/ContactsList/ContactList";
import "./app.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem("contacts")) ?? [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    const newContact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts((prevContacts) => [newContact, ...prevContacts]);
  };
  const changeFilter = ({ target }) => {
    setFilter(target.value);
  };

  const getVisibleContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <>
      <h1>Phonebook</h1>

      <FormContact onSubmit={addContact} />

      <h2>Contants</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      ></ContactsList>
    </>
  );
}
