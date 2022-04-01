import { Image } from "antd";

const WeatherPoster = (props) => {
  const { imgUrl } = props;
  return <Image width={200} height={200} src={imgUrl} />;
};

export default WeatherPoster;
