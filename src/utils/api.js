import axios from "axios";

export const fetchCurrentWeather = async (lat, lon) => {
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

  return {
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
};
