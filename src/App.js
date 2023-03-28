import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import { uid } from "uid";
import List from "./components/List";

function App() {
  const [activities, setActivities] = useState([]);
  const [weather, setWeather] = useState({});

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const data = await response.json();
      console.log(data);
      setWeather(data);
    }
    fetchWeather();
    const id = setInterval(fetchWeather, 4000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  const filteredActivities = activities.filter(
    (activity) => activity.isForGoodWeather === weather.isGoodWeather
  );

  function handleAddActivity(newActivity) {
    const id = uid();
    const activityWithId = { ...newActivity, id };
    setActivities([...activities, activityWithId]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }
  return (
    <div>
      <h1>{`${weather.condition} ${weather.temperature}°C`}</h1>
      <div>
        <List
          activities={filteredActivities}
          onDeleteActivity={handleDeleteActivity}
        />
        <Form onAddActivity={handleAddActivity} />
      </div>
    </div>
  );
}
export default App;
