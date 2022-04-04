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

const { Title } = Typography;
const { Meta } = Card;

const WeatherReport = (props) => {
  const { report } = props;

  return (
    <div className="site-card-border-less-wrapper" style={{ margin: "20px" }}>
      <Card
        title={
          <Meta
            avatar={<Avatar src={report.imgUrl} size={100} />}
            title={<Title>{report.title}</Title>}
            description="Current weather report at specified location"
          />
        }
        hoverable={true}
        bordered={true}
      >
        <Row gutter={16}>
          <Col sm={24} md={8}>
            <Card>
              <Statistic
                title="Temperature"
                value={report.temperature}
                valueStyle={{ color: "#3f8600" }}
                prefix={<AlertOutlined />}
                suffix="°c"
              />
            </Card>
          </Col>
          <Col sm={24} md={8}>
            <Card>
              <Statistic
                title="Relative Humidity"
                value={report.humidity}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ExperimentOutlined />}
              />
            </Card>
          </Col>
          <Col sm={24} md={8}>
            <Card>
              <Statistic
                title="Air Pressure"
                value={report.airPressure}
                valueStyle={{ color: "#3f8600" }}
                prefix={<SwapOutlined />}
                suffix="atm"
              />
            </Card>
          </Col>
        </Row>

        <Divider />

        <Descriptions title="Location Info">
          <Descriptions.Item label="Country">
            {report.country}
          </Descriptions.Item>
          <Descriptions.Item label="State">{report.state}</Descriptions.Item>
          <Descriptions.Item label="City">{report.city}</Descriptions.Item>
          <Descriptions.Item label="When">{report.date}</Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

export default WeatherReport;
