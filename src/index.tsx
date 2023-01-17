import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorProvider from "./components/error/ErrorProvider";
import "@assets/styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorProvider>
      <App />
    </ErrorProvider>
  </React.StrictMode>
);
