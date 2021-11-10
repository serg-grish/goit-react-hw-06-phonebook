import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContact } from "./action";


const items = createReducer([],  {
    [addContact]: (state, action) => [...state, action.payload],
    [deleteContact]: (state, action) => state.filter((contact) => contact.id !== action.payload),
});

const filter = createReducer('', {});

const rootReducer = combineReducers({
    items,
    filter,
});

export default rootReducer;