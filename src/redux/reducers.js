import { createReducer, combineReducers } from "@reduxjs/toolkit";
import actions from "./actions";


const items = createReducer([],  {
    [actions.addContact]: (state, { payload }) => [...state, payload],
    [actions.deleteContact]: (state, { payload }) => 
    state.filter(({id}) => id !== payload),
});

const filter = createReducer('', {
    [actions.changeFilter]: (_, { payload }) => payload,
});

const rootReducer = combineReducers({
    items,
    filter,
});
