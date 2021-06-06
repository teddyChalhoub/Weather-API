import React from "react";
import WeatherData from "../data/FakeWeather.json";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";


const sampleJson = WeatherData.list;
const currentWeatherData = [];
const hourlyWeatherData = [];

const data = sampleJson.map((data) => {
  const time = parseInt(data.dt_txt.slice(10, 14));

  if (time == 0) {
    const weatherValue = data.weather.map((data) => {
      return [data.main,data.description];
    });
    currentWeatherData.push({
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      temp_min: data.main.temp_min - 273.15,
      temp_max: data.main.temp_max - 273.15,
      weather: weatherValue[0][0],
      weatherDesc: weatherValue[0][1],
    });

  } else {
    console.log(data.dt_txt.slice(10, 16));
    const weatherValue = data.weather.map((data) => {
      return [data.id,data.main,data.description];
    });
    hourlyWeatherData.push({
      id: weatherValue[0][0],
      time: data.dt_txt.slice(10, 16),
      temp: data.main.temp - 273.15,
      weather: weatherValue[0][1],
    });

  }
});

class FetchData extends React.Component {

  render() {
    return (
      <div className="hourlyDisplay">
        {console.log(currentWeatherData)}
        {console.log(hourlyWeatherData)}
        {" "}
          {currentWeatherData && <CurrentWeather data={currentWeatherData} />}
          {hourlyWeatherData && <HourlyWeather hourlyData={hourlyWeatherData} />
          }
      </div>
    );
  }
}

export default FetchData;
