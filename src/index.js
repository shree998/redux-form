import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "./store";
import showResults from "./showResults";
import SyncValidationForm from "./SyncValidationForm";

const rootEl = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <div style={{ padding: 15 }}>
      <h2>Synchronous Validation</h2>
      <SyncValidationForm onSubmit={showResults} />
      <Values form="syncValidation" />
    </div>
  </Provider>,
  rootEl
);
