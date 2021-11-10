import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import data from "./redux/store.js";
import { Provider }  from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={data.store}>
      <PersistGate loadin={null} persistor={data.persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
