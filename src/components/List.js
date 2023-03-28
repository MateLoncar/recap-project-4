import React from "react";
import "./list.css";

function List({ activities, onDeleteActivity }) {
  function handleDelete(id) {
    onDeleteActivity(id);
  }

  return (
    <ul className="list">
      {activities.map((activity) => (
        <li className="background-new-input" key={activity.id}>
          <span className="name">{activity.name}</span>
          <span className="weather">
            {" "}
            - {activity.isForGoodWeather ? "good" : "bad"} weather
          </span>
          <button
            className="delete-button"
            onClick={() => handleDelete(activity.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
