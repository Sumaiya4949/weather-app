import { useState } from "react";
import WeatherReport from "./WeatherReport";

const fakeData = {
  title: "Cloudy",
  temperature: 60,
  imgUrl:
    "https://nordicapis.com/wp-content/uploads/5-Best-Free-and-Paid-Weather-APIs-2019-e1587582023501.png",
  humidity: 100,
  airPressure: 76,
  country: "Germany",
  state: "Saxony",
  city: "Chemnitz",
  date: "10.12.2022",
};

const CurrentWeatherPanel = (props) => {
  const [currentWeatherReport, setCurrentWeatherReport] = useState(fakeData);

  return <WeatherReport report={currentWeatherReport} />;
};

export default CurrentWeatherPanel;
