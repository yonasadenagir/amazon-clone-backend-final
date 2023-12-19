import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import reducer, { initialState } from "./pages/StateProvider/Reducer.jsx";
import { StateProvider } from "./pages/StateProvider/StateProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </BrowserRouter>
);
