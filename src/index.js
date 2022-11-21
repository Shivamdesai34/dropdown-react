// Import React and React DOM.
import { StrictMode } from "react";
import ReactDOM from "react-dom";

// Import App from. yml
import App from "./App";

// Renders the root element.
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
