import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    if (event.target.value.length <= 4) {
      setValue(event.target.value);
    }
  };
  return (
    <div>
      <input value={value} onChange={handleChange} />
      <span>{value}</span>
    </div>
  );
}

export default App;
