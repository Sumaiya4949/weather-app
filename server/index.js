const express = require("express");
const axios = require("axios");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("<html><body><em>Hello World!</em></body></html>");
});

app.get("/weather-details-by-location", async (req, res) => {
  const { lat, lon, rapiKey } = req.query;

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

  res.send({
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
  });
});

app.get("/weather-forecast-by-location", (req, res) => {
  const { lat, lon, rapidKey } = req.query;

  res.send([
    {
      imgUrl: "icons/s04d.png",
      date: "20-20-2022",
      time: "13:15",
    },
    {
      imgUrl: "icons/s04d.png",
      date: "20-20-2022",
      time: "13:15",
    },
    {
      imgUrl: "icons/s04d.png",
      date: "20-20-2022",
      time: "13:15",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Weather app server listening on port ${port}`);
});
