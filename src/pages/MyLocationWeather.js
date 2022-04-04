import { useCallback, useEffect } from "react";
import WeatherReport from "../components/WeatherReport";
import { Result, Row, Col, Card } from "antd";
import FutureWeatherForecast from "../components/FutureWeatherForecast";
import { AntCloudOutlined } from "@ant-design/icons";
import useWeatherData from "../hooks/useWeatherData";

const MyLocationWeather = () => {
  const { currentWeatherReport, weatherForecastList, updateLocation } =
    useWeatherData();

  const handleGeoLocation = useCallback(
    (location) => {
      const { latitude, longitude } = location.coords;
      updateLocation(latitude, longitude);
    },
    [updateLocation]
  );

  useEffect(function () {
    navigator.geolocation.getCurrentPosition(handleGeoLocation);
  }, []);

  return (
    <Row>
      <Col md={24} lg={16}>
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
      </Col>

      <Col md={24} lg={8}>
        <FutureWeatherForecast forecastList={weatherForecastList} />
      </Col>
    </Row>
  );
};

export default MyLocationWeather;
