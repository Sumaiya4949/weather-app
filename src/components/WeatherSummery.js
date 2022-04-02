import { Card, Typography, Avatar } from "antd";

const { Meta } = Card;
const { Title } = Typography;

const WeatherSummery = (props) => {
  const { time, date, iconUrl } = props;
  return (
    <Card bordered={false}>
      <Meta
        avatar={<Avatar src={iconUrl} size={100} />}
        title={<Title>{time}</Title>}
        description={date}
      />
    </Card>
  );
};
export default WeatherSummery;
