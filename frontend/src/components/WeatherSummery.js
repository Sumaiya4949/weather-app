import { Card, Typography, Avatar } from "antd";

const { Meta } = Card;
const { Title } = Typography;

const WeatherSummery = (props) => {
  const { time, date, imgUrl, style } = props;

  return (
    <Card bordered={false} style={style}>
      <Meta
        avatar={<Avatar src={imgUrl} size={100} />}
        title={<Title>{time}</Title>}
        description={date}
      />
    </Card>
  );
};
export default WeatherSummery;
