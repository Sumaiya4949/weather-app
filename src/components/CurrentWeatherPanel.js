import { useEffect, useState } from "react";
import WeatherReport from "./WeatherReport";
import LocationInputForm from "./LocationInputForm";
import { Result } from "antd";

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
  const [currentWeatherReport, setCurrentWeatherReport] = useState(null);
  const [geoLocation, setGeoLocation] = useState(null);

  function updateLocation(lat, long) {
    setGeoLocation({
      lat,
      long,
    });
  }

  useEffect(
    function fetchCurrentWeather() {
      if (geoLocation !== null) {
        console.log("fetching weather data");
      }
    },
    [geoLocation]
  );

  return (
    <div>
      {currentWeatherReport === null ? (
        <Result
          status="warning"
          title="No weather report available for the location."
        />
      ) : (
        <WeatherReport report={currentWeatherReport} />
      )}
      <LocationInputForm onSubmit={updateLocation} />
    </div>
  );
};

export default CurrentWeatherPanel;
