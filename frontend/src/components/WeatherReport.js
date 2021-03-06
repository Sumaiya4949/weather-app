import {
  Card,
  Statistic,
  Avatar,
  Row,
  Col,
  Descriptions,
  Typography,
  Divider,
} from "antd";
import {
  ExperimentOutlined,
  AlertOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import { ThemeContext } from "../App";

const { Title } = Typography;
const { Meta } = Card;

const WeatherReport = (props) => {
  const { report } = props;

  const themeProperties = useContext(ThemeContext);

  return (
    <div className="site-card-border-less-wrapper" style={{ margin: "20px" }}>
      <Card
        style={themeProperties}
        title={
          <Meta
            avatar={<Avatar src={report.weather.imgUrl} size={100} />}
            title={
              <Title style={themeProperties}>{report.weather.title}</Title>
            }
            description={
              <Title level={4} style={themeProperties}>
                Current weather report at specified location
              </Title>
            }
          />
        }
        hoverable={true}
        bordered={true}
      >
        <Row gutter={16}>
          <Col sm={24} md={8}>
            <Card style={themeProperties}>
              <Statistic
                title="Temperature"
                value={report.weather.temperature}
                valueStyle={{ color: "#3f8600" }}
                prefix={<AlertOutlined />}
              />
            </Card>
          </Col>
          <Col sm={24} md={8}>
            <Card style={themeProperties}>
              <Statistic
                title="Relative Humidity"
                value={report.weather.relativeHumidity}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ExperimentOutlined />}
              />
            </Card>
          </Col>
          <Col sm={24} md={8}>
            <Card style={themeProperties}>
              <Statistic
                title="Air Pressure"
                value={report.weather.airPressure}
                valueStyle={{ color: "#3f8600" }}
                prefix={<SwapOutlined />}
              />
            </Card>
          </Col>
        </Row>

        <Divider />

        <Descriptions title="Location Info">
          <Descriptions.Item label="Country">
            {report.locationDetails.country}
          </Descriptions.Item>
          <Descriptions.Item label="State">
            {report.locationDetails.state}
          </Descriptions.Item>
          <Descriptions.Item label="City">
            {report.locationDetails.city}
          </Descriptions.Item>
          <Descriptions.Item label="When">{report.datetime}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default WeatherReport;
