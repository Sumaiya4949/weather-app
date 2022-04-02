import { useEffect, useState } from "react";
import WeatherReport from "./WeatherReport";
import LocationInputForm from "./LocationInputForm";
import { Result, Row, Col, Card } from "antd";
import { fetchCurrentWeather, fetchWeatherForecast } from "../utils/api";
import FutureWeatherForecast from "./FutureWeatherForecast";
import { AntCloudOutlined } from "@ant-design/icons";

const fakeReport = {
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

const fakeForecast = [
  { date: "12.12.2022", time: "13:20", iconUrl: "icons/a01d.png" },
  { date: "12.12.2022", time: "13:20", iconUrl: "icons/a01d.png" },
  { date: "12.12.2022", time: "13:20", iconUrl: "icons/a01d.png" },
];

const CurrentWeatherPanel = (props) => {
  const [currentWeatherReport, setCurrentWeatherReport] = useState(null);
  const [geoLocation, setGeoLocation] = useState(null);
  const [weatherForecastList, setWeatherForecastList] = useState([]);

  function updateLocation(lat, lon) {
    setGeoLocation({
      lat,
      lon,
    });
  }

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

  return (
    <Row>
      <Col span={16}>
        {currentWeatherReport === null ? (
          <Card style={{ margin: "20px" }}>
            <Result
              title="No weather report available for the specified location."
              icon={<AntCloudOutlined />}
            />
          </Card>
        ) : (
          <WeatherReport report={currentWeatherReport} />
        )}

        <LocationInputForm onSubmit={updateLocation} />
      </Col>

      <Col span={8}>
        <FutureWeatherForecast forecastList={weatherForecastList} />
      </Col>
    </Row>
  );
};

export default CurrentWeatherPanel;
