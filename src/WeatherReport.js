import { Card } from "antd";

const WeatherReport = (props) => {
  const { report } = props;

  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={report.title}
        style={{ width: 300 }}
        hoverable={true}
        bordered={true}
        cover={<img alt="example" src={report.imgUrl} />}
      >
        <p>Temperature: {report.temperature}°c</p>
        <p>Humidity: {report.humidity}</p>
        <p>Airpressure: {report.airPressure}</p>
        <p>Country: {report.country}</p>
        <p>State: {report.state}</p>
        <p>City: {report.city}</p>
        <p>Date: {report.date}</p>
      </Card>
    </div>
  );
};

export default WeatherReport;
