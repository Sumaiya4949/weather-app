import axios from "axios";

export const fetchCurrentWeather = async (lat, lon) => {
  const options = {
    method: "GET",
    url: "http://localhost:3000/weather-details-by-location",
    params: { lat, lon, rapiKey: process.env.REACT_APP_RAPID_API_KEY },
  };

  const { data } = await axios.request(options);
  return data;
};

export const fetchWeatherForecast = async (lat, lon) => {
  const options = {
    method: "GET",
    url: "http://localhost:3000/weather-forecast-by-location",
    params: { lat, lon, rapiKey: process.env.REACT_APP_RAPID_API_KEY },
  };

  const { data } = await axios.request(options);
  return data;
};
