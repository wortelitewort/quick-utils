import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "reactstrap";
import { useStateValue } from "../GlobalState";

export default () => {
  const [{ weatherLoaded }, dispatch] = useStateValue();
  const [weatherUrl, setWeatherUrl] = useState("");

  let apiKey = "d15c1e96091187473b96203daebc8c2f";

  const getWeather = async () => {
    try {
      const res = await axios.get(weatherUrl);
      console.log(res.data);
      dispatch({ type: "weatherLoaded" });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    let lat, lng, weatherUrl;
    const geoSuccess = position => {
      lat = position.coords.latitude;
      lng = position.coords.longitude;

      setWeatherUrl(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`
      );
    };
    const geoError = () => {
      console.log("Cannot get geolocation");
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
  }, []);

  useEffect(() => {
    if (weatherUrl && !weatherLoaded) {
      getWeather();
    }
  }, [weatherUrl]);
  // axios
  //   .get(url)
  //   .then(res => {
  //     console.log(res.data);
  //   })
  //   .then(dispatch({ type: "weatherLoaded" }))
  //   .catch(err => {
  //     console.log(err);
  //   });

  return <Button onClick={getWeather}>Get Weather</Button>;
};
