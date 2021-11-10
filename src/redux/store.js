import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { persistStore, persistReducer,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import contactsReducer from "./reducer";

const phonebookPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ["filter"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore ({ reducer: persistedReducer, devTools: true });

const persistor = persistStore(store);

const obj = { store, persistor}

export default obj;