import { useEffect, useState } from "react";
import WeatherReport from "./WeatherReport";
import LocationInputForm from "./LocationInputForm";
import { Result } from "antd";
import { fetchCurrentWeather } from "../utils/api";

const CurrentWeatherPanel = (props) => {
  const [currentWeatherReport, setCurrentWeatherReport] = useState(null);
  const [geoLocation, setGeoLocation] = useState(null);

  function updateLocation(lat, lon) {
    setGeoLocation({
      lat,
      lon,
    });
  }

  async function getCurrentWeatherDataOfValidLocation() {
    const weatherReport = await fetchCurrentWeather(
      geoLocation.lat,
      geoLocation.lon
    );

    setCurrentWeatherReport(weatherReport);
  }

  useEffect(
    function () {
      if (geoLocation !== null) {
        getCurrentWeatherDataOfValidLocation();
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
