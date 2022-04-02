import { Card } from "antd";

const WeatherReport = (props) => {
  const {
    title,
    temperature,
    imgUrl,
    humidity,
    airPressure,
    country,
    state,
    city,
    date,
  } = props;

  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={title}
        style={{ width: 300 }}
        hoverable={true}
        bordered={true}
        cover={<img alt="example" src={imgUrl} />}
      >
        <p>Temperature: {temperature}°c</p>
        <p>Humidity: {humidity}</p>
        <p>Airpressure: {airPressure}</p>
        <p>Country: {country}</p>
        <p>State: {state}</p>
        <p>City: {city}</p>
        <p>Date: {date}</p>
      </Card>
    </div>
  );
};

export default WeatherReport;
