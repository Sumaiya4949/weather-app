import axios from "axios";

function saveLocally(api, lat, lon, data) {
  sessionStorage.setItem(`${api}-${lat}-${lon}`, JSON.stringify(data));
}

function hasLocally(api, lat, lon) {
  return !!sessionStorage.getItem(`${api}-${lat}-${lon}`);
}

function getLocally(api, lat, lon) {
  return JSON.parse(sessionStorage.getItem(`${api}-${lat}-${lon}`));
}

export const fetchCurrentWeather = async (lat, lon) => {
  if (hasLocally("current-weather", lat, lon)) {
    return getLocally("current-weather", lat, lon);
  }

  const options = {
    method: "GET",
    url: "https://weatherbit-v1-mashape.p.rapidapi.com/current",
    params: { lon, lat },
    headers: {
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      "X-RapidAPI-Key": "bb29522670msh0402d45c1403232p17d564jsne48a9a2766ab",
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
  if (hasLocally("forecast", lat, lon)) {
    return getLocally("forecast", lat, lon);
  }

  const options = {
    method: "GET",
    url: "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly",
    params: { lat, lon },
    headers: {
      "X-RapidAPI-Host": "weatherbit-v1-mashape.p.rapidapi.com",
      "X-RapidAPI-Key": "bb29522670msh0402d45c1403232p17d564jsne48a9a2766ab",
    },
  };

  const response = await axios.request(options);
  const forecast = response.data.data;
  const processedForecast = forecast.map((item) => {
    const [date, time] = item.timestamp_local.split("T");

    return {
      iconUrl: `icons/${item.weather.icon}.png`,
      date,
      time,
    };
  });

  saveLocally("forecast", lat, lon, processedForecast);

  return processedForecast;
};
