import React from "react";
import FormContact from "../FormContact/FormContact";
import Filter from "../Filter/Filter";
import ContactsList from "../ContactsList/ContactList";
import "./App";

export default function App() {
    return (
        <>
        <h1>Phonebook</h1>

        <FormContact />

        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
        </>
    );
}