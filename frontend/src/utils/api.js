import axios from "axios";

function f(coord) {
  return parseInt(coord * 1000, 10) / 1000;
}

function saveLocally(api, lat, lon, data) {
  sessionStorage.setItem(`${api}-${f(lat)}-${f(lon)}`, JSON.stringify(data));
}

function hasLocally(api, lat, lon) {
  return !!sessionStorage.getItem(`${api}-${f(lat)}-${f(lon)}`);
}

function getLocally(api, lat, lon) {
  return JSON.parse(sessionStorage.getItem(`${api}-${f(lat)}-${f(lon)}`));
}

export const fetchCurrentWeather = async (lat, lon) => {
  const options = {
    method: "GET",
    url: "http://localhost:3000/weather-details-by-location",
    params: { lat, lon, rapiKey: process.env.REACT_APP_RAPID_API_KEY },
  };

  const { data } = await axios.request(options);
  return data;
};

export const fetchCurrentWeather_old = async (lat, lon) => {
  if (hasLocally("current-weather", lat, lon)) {
    return getLocally("current-weather", lat, lon);
  }

  const options = {
    method: "GET",
    url: "https://weatherbit-v1-mashape.p.rapidapi.com/current",
    params: { lon, lat },
    headers: {
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    },
  };

  const response = await axios.request(options);
  const weatherReport = response.data.data[0];
  const {
    weather,
    temp,
    rh,
    pres,
    country_code,
    state_code,
    city_name,
    ob_time,
  } = weatherReport;

  const formattedReport = {
    title: weather.description,
    temperature: temp,
    imgUrl: `icons/${weather.icon}.png`,
    humidity: rh,
    airPressure: pres,
    country: country_code,
    state: state_code,
    city: city_name,
    date: new Date(`${ob_time} UTC`).toLocaleString(),
  };

  saveLocally("current-weather", lat, lon, formattedReport);

  return formattedReport;
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

export const fetchWeatherForecast_old = async (lat, lon) => {
  if (hasLocally("forecast", lat, lon)) {
    return getLocally("forecast", lat, lon);
  }

  const options = {
    method: "GET",
    url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly",
    params: { lat, lon },
    headers: {
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    },
  };

  const response = await axios.request(options);
  const forecast = response.data.data;
  const processedForecast = forecast.map((item) => {
    const [date, time] = item.timestamp_local.split("T");

    return {
      imgUrl: `icons/${item.weather.icon}.png`,
      date,
      time,
    };
  });

  saveLocally("forecast", lat, lon, processedForecast);

  return processedForecast;
};
