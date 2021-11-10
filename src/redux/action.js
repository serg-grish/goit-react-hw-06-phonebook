import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addContact = createAction("contacts/add", (name, number) => ({
    payload: {
        id: uuidv4(),
        name,
        number,
    },
}));

export const deleteContact = createAction('contacts/deliteContac');
export const filterContact = createAction('contacts/filterContact');

const contactsAction = { addContact, changeFilter, deleteContact };
export