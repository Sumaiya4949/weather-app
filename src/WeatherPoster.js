import "./WeatherPoster.css";

const WeatherPoster = (props) => {
  const { imgUrl } = props;
  return <img className={"WeatherPoster"} src={imgUrl} />;
};

export default WeatherPoster;
