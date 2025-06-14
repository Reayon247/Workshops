import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(event) {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleInputChange} // connect the handler to the onChange event
      />
      <p>Current value is: {name}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
