const express = require("express");
const axios = require("axios");

const app = express();
const port = 5000;

const responseMap = {};

function f(coord) {
  return parseInt(coord * 1000, 10) / 1000;
}

function saveLocally(api, lat, lon, data) {
  responseMap[`${api}-${f(lat)}-${f(lon)}`] = data;
}

function hasLocally(api, lat, lon) {
  return !!responseMap[`${api}-${f(lat)}-${f(lon)}`];
}

function getLocally(api, lat, lon) {
  return responseMap[`${api}-${f(lat)}-${f(lon)}`];
}

app.get("/weather-details-by-location", async (req, res) => {
  const { lat, lon, rapiKey } = req.query;

  if (hasLocally("current-weather", lat, lon)) {
    console.log("current-weather returning from cache");
    res.send(getLocally("current-weather", lat, lon));
    res.end();
    return;
  }

  console.log("Requesting current weather from rapid api");

  const options = {
    method: "GET",
    url: "https://weatherbit-v1-mashape.p.rapidapi.com/current",
    params: { lon, lat },
    headers: {
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      "X-RapidAPI-Key": rapiKey,
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
    weather: {
      title: weather.description,
      temperature: `${temp}°c`,
      imgUrl: `icons/${weather.icon}.png`,
      relativeHumidity: rh,
      airPressure: `${pres}atm`,
    },
    locationDetails: {
      city: city_name,
      state: state_code,
      country: country_code,
    },
    datetime: new Date(`${ob_time} UTC`).toLocaleString(),
  };

  res.send(formattedReport);

  saveLocally("current-weather", lat, lon, formattedReport);
});

app.get("/weather-forecast-by-location", async (req, res) => {
  const { lat, lon, rapiKey } = req.query;

  if (hasLocally("forecast", lat, lon)) {
    console.log("forecast returning from cache");
    res.send(getLocally("forecast", lat, lon));
    res.end();
    return;
  }

  console.log("Requesting forecast from rapid api");

  const options = {
    method: "GET",
    url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly",
    params: { lat, lon },
    headers: {
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      "X-RapidAPI-Key": rapiKey,
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

  res.send(processedForecast);
  saveLocally("forecast", lat, lon, processedForecast);
});

app.listen(port, () => {
  console.log(`Weather app server listening on port ${port}`);
});
