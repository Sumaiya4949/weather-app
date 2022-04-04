import WeatherSummery from "./WeatherSummery";
import { Card, List, Typography } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../App";

const { Title } = Typography;

const FutureWeatherForecast = (props) => {
  const { forecastList } = props;

  const themeProperties = useContext(ThemeContext);

  return (
    <Card
      style={{
        margin: "20px",
        overflow: "auto",
        maxHeight: "95vh",
        ...themeProperties,
      }}
    >
      <List
        header={<Title level={3}>Weather forecast for next 5 days</Title>}
        dataSource={forecastList}
        renderItem={(item) => (
          <List.Item>
            <WeatherSummery
              time={item.time}
              date={item.date}
              iconUrl={item.iconUrl}
              style={themeProperties}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default FutureWeatherForecast;
