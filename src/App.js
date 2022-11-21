// Import styles. css and dropdown
import "./styles.css";
import Dropdown from "./Dropdown";
// Import a react state.
import { useState } from "react";
// Creates a div for the app dropdown
export default function App() {
  const [selected, setSelected] = useState("Choose One");
  return (
    <div className="App">
      {/* custom dropdown menu */}
      <Dropdown selected={selected} setSelected={setSelected} />

      <br />
      <br />
      <br />
    </div>
  );
}
