import { useEffect, useState } from "react";
import WeatherReport from "./WeatherReport";
import LocationInputForm from "./LocationInputForm";
import { Result, Row, Col } from "antd";
import { fetchCurrentWeather } from "../utils/api";
import WeatherSummery from "./WeatherSummery";
import FutureWeatherForecast from "./FutureWeatherForecast";

const fakeData = {
  title: "Cloudy",
  temperature: 60,
  imgUrl: "icons/s04d.png",
  humidity: 100,
  airPressure: 76,
  country: "Germany",
  state: "Saxony",
  city: "Chemnitz",
  date: "10.12.2022",
};

const CurrentWeatherPanel = (props) => {
  const [currentWeatherReport, setCurrentWeatherReport] = useState(fakeData);
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
    <Row>
      <Col span={16}>
        {currentWeatherReport === null ? (
          <Result
            status="warning"
            title="No weather report available for the location."
          />
        ) : (
          <WeatherReport report={currentWeatherReport} />
        )}

        <LocationInputForm onSubmit={updateLocation} />
      </Col>

      <Col span={8}>
        <FutureWeatherForecast
          forecastList={[
            { date: "12.12.2022", time: "13:20", iconUrl: "icons/a01d.png" },
            { date: "12.12.2022", time: "13:20", iconUrl: "icons/a01d.png" },
            { date: "12.12.2022", time: "13:20", iconUrl: "icons/a01d.png" },
          ]}
        />
      </Col>
    </Row>
  );
};

export default CurrentWeatherPanel;
