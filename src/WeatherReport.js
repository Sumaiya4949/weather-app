import { Card } from "antd";

const WeatherReport = (props) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title="Warm and Sunny"
        style={{ width: 300 }}
        hoverable={true}
        bordered={true}
        cover={
          <img
            alt="example"
            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
          />
        }
      >
        <p>Temperature: 60°c</p>
        <p>Humidity: 100</p>
        <p>Airpressure: 20</p>
        <p>Country: Germany</p>
        <p>State: Saxony</p>
        <p>City: Chemnitz</p>
        <p>Date: 10.10.2020</p>
      </Card>
    </div>
  );
};

export default WeatherReport;
