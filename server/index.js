const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("<html><body><em>Hello World!</em></body></html>");
});

app.get("/weather-details-by-location", (req, res) => {
  const { lat, lon, rapiKey } = req.params;

  res.send({
    weather: {
      temperature: "50°c",
      relativeHumidity: "100",
      airPressure: "1000atm",
      imgUrl: "icons/s04d.png",
    },
    locationDetails: {
      city: "Chemnitz",
      state: "Saxony",
      country: "Germany",
    },
    datetime: "12-12-12",
  });
});

app.listen(port, () => {
  console.log(`Weather app server listening on port ${port}`);
});