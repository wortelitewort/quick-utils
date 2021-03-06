import axios from "axios";
import port_config from "../port-config";
import { apiKey } from "../config";

const PORT = port_config.PORT;

const apiRoute = "localhost:4000";

const name = "John";

export const fetchWeather = (dispatch: any) => {
  const geoSuccess = async (position: any) => {
    // Get user location
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    // URL for 5-day forecast
    let weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${apiKey}`;

    // Fetch weather data for user location
    await axios
      .get(weatherUrl)
      .then(res => {
        // const { main, weather, wind } = res.data;
        // const weatherData = { main, weather, wind };
        const weatherData = res.data;

        // Update weather if successful
        dispatch({ type: "updateWeather", weather: weatherData });
        console.log(weatherData);
      })
      .catch(err => {
        // Display error if weather fetching fails
        dispatch({
          type: "displayMsg",
          value: [true, "Failed to fetch weather data."]
        });
      });
  };

  const geoError = () => {
    console.log("Cannot get geolocation. Check https protocol");
  };

  navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
};

export const fetchEvents = (dispatch: any) => {
  axios
    .get(`http://${PORT}/users/${name}/events`)
    .then(res => {
      // Update event list after fetch
      dispatch({
        type: "updateEvents",
        events: res.data.events
      });
    })
    .catch(err => {
      // Display error if fetch fails
      dispatch({
        type: "displayMsg",
        value: [true, "Failed to fetch calendar data."]
      });
    });
};

export const fetchTasks = (dispatch: any) => {
  axios
    .get(`http://${apiRoute}/tasks/get-tasks`)
    .then(res => {
      // Update task list after fetch
      const tasks = res.data;
      dispatch({
        type: "updateTasks",
        tasks
      });
    })
    .catch(err => {
      // Display error if fetch fails
      dispatch({
        type: "displayMsg",
        value: [true, "Failed to fetch tasks."]
      });
    });
};
