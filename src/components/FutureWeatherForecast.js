import WeatherSummery from "./WeatherSummery";
import { Card, List, Typography } from "antd";

const { Title } = Typography;

const FutureWeatherForecast = (props) => {
  const { forecastList } = props;

  return (
    <Card style={{ margin: "20px" }}>
      <List
        header={<Title level={3}>Weather forecast for next 5 days</Title>}
        dataSource={forecastList}
        renderItem={(item) => (
          <List.Item>
            <WeatherSummery
              time={item.time}
              date={item.date}
              iconUrl={item.iconUrl}
            />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default FutureWeatherForecast;
