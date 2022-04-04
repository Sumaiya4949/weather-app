import WeatherReport from "../components/WeatherReport";
import LocationInputForm from "../components/LocationInputForm";
import { Result, Row, Col, Card } from "antd";
import FutureWeatherForecast from "../components/FutureWeatherForecast";
import { AntCloudOutlined } from "@ant-design/icons";
import useWeatherData from "../hooks/useWeatherData";

const AnyLocationWeatherPanel = () => {
  const { currentWeatherReport, weatherForecastList, updateLocation } =
    useWeatherData();

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

export default AnyLocationWeatherPanel;
