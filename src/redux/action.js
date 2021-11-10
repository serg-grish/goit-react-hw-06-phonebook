import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deliteContac');
export const filterContact = createAction('contacts/filterContact');
