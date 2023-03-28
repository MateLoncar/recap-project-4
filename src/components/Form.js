import React, { useState } from "react";

function Form({ onAddActivity }) {
  const [name, setName] = useState("");
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const data = { name, isForGoodWeather };
    onAddActivity(data);
    setName("");
    setIsForGoodWeather(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Activity</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>

      <label>
        Good weather activity?
        <input
          type="checkbox"
          checked={isForGoodWeather}
          onChange={(event) => setIsForGoodWeather(event.target.checked)}
        />
      </label>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
