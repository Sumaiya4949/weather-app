import { useCallback, useEffect, useState } from "react";
import { fetchCurrentWeather, fetchWeatherForecast } from "../utils/api";

const useWeatherData = () => {
  const [currentWeatherReport, setCurrentWeatherReport] = useState(null);
  const [geoLocation, setGeoLocation] = useState(null);
  const [weatherForecastList, setWeatherForecastList] = useState([]);

  const updateLocation = useCallback((lat, lon) => {
    setGeoLocation({
      lat,
      lon,
    });
  }, []);

  useEffect(
    function () {
      if (geoLocation !== null) {
        async function getCurrentWeatherDataOfValidLocation() {
          const weatherReport = await fetchCurrentWeather(
            geoLocation.lat,
            geoLocation.lon
          );

          setCurrentWeatherReport(weatherReport);
        }

        getCurrentWeatherDataOfValidLocation();
      }
    },
    [geoLocation]
  );

  useEffect(
    function () {
      if (geoLocation !== null) {
        async function getWeatherForecastOfValidLocation() {
          const weatherForecast = await fetchWeatherForecast(
            geoLocation.lat,
            geoLocation.lon
          );

          setWeatherForecastList(weatherForecast);
        }

        getWeatherForecastOfValidLocation();
      }
    },
    [geoLocation]
  );

  return {
    currentWeatherReport,
    weatherForecastList,
    updateLocation,
  };
};

export default useWeatherData;
