require('dotenv').config()
const express = require("express");
const app = express();
const axios = require("axios");
const PORT = process.env.PORT || 8000

const cors = require("cors");


app.use(cors());

const weatherData = [];

app.get("/weather", async (req, res) => {
  try {
    const weatherApiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const lat = req.query.lat;
    const lon = req.query.lon;
    const result = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily/?key=${weatherApiKey}&lang=en&lat=${lat}&lon=${lon}&units=I&days=5`);
    res.send(result.data)
  } catch (error) {
    console.log(error);
  }
});



app.listen(`${PORT}`, () => {
  console.log(`listening on port ${PORT}`);
});


// http://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=`