import React from "react";
import App from "../App";

import MostlyCloudy from "../img/weather-icons/mostlycloudy.svg";

import "../App.css";

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeatherData: [],
    };

  }

  render() {

    const humidity = [];
    const pressure = [];
    const temp_min = [];
    const temp_max = [];
    const weather = [];
    const weatherDesc = [];

    if (this.props.data !== undefined) {
      this.state.currentWeatherData.splice(0, this.state.currentWeatherData.length)
      console.log( this.state.currentWeatherData );
      const data = this.props.data.map((data) => {
        const time = parseInt(data.dt_txt.slice(10, 14));

        if (time == 0) {
          console.log("done");
          const weatherValue = data.weather.map((data) => {
            return [data.main, data.description];
          });
          this.state.currentWeatherData.push({
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            weather: weatherValue[0][0],
            weatherDesc: weatherValue[0][1],
          });
        }
      });

    }

    return (
      <div>
        {this.state.currentWeatherData &&
          this.state.currentWeatherData.map((data) => {
            humidity.push(data.humidity);
            pressure.push(data.pressure);
            temp_min.push(data.temp_min);
            temp_max.push(data.temp_max);
            weather.push(data.weather);
            weatherDesc.push(data.weatherDesc);
          })}
        <div className="weather__title">
          <img src={MostlyCloudy} />
          <p className="main__title">{weatherDesc[0]}</p>
        </div>
        <div className="temp__text__current">
          <p className="p__blue">
            <span className="p__font__style">Temperature</span>{" "}
            {Math.round(temp_min[0])}° to {Math.round(temp_max[0])}°C
          </p>
          <p className="p__blue p__text__size">
            <span className="p__font__style">Humidity</span> {humidity[0]}%{" "}
            <span className="p__font__style">Pressure</span> {pressure[0]}
          </p>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
