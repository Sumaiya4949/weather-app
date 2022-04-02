import "antd/dist/antd.css";
import CurrentWeatherPanel from "./CurrentWeatherPanel";
import LocationInputForm from "./LocationInputForm";

function App() {
  return (
    <div>
      <CurrentWeatherPanel />
      <LocationInputForm onSubmit={(lat, long) => console.log(lat, long)} />
    </div>
  );
}

export default App;
