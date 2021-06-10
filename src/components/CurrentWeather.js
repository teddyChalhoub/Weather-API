import React from "react";

import Storm from "../img/weather-icons/storm.svg";
import Drizzle from "../img/weather-icons/drizzle.svg";
import Rain from "../img/weather-icons/rain.svg";
import Snow from "../img/weather-icons/snow.svg";
import Fog from "../img/weather-icons/fog.svg";
import Clear from "../img/weather-icons/clear.svg";
import PartlyCloudy from "../img/weather-icons/partlycloudy.svg";
import MostlyCloudy from "../img/weather-icons/mostlycloudy.svg";

import "../App.css";

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWeatherData: [],
      color_lila: [],
    };
  }

  render() {



    const humidity = [];
    const pressure = [];
    const temp_min = [];
    const temp_max = [];
    const weather = [];
    const weatherDesc = [];
    const images = [];

    let color_search = "#9ccef4";

    if (this.props.data !== undefined) {
      this.state.currentWeatherData.splice(
        0,
        this.state.currentWeatherData.length
      );

      const data = this.props.data.map((data) => {
        const time = parseInt(data.dt_txt.slice(10, 14));

        if (time == 0) {
          const weatherValue = data.weather.map((data) => {
            return [data.id, data.main, data.description];
          });
          this.state.currentWeatherData.push({
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            weather: weatherValue[0][1],
            weatherDesc: weatherValue[0][2],
          });

          if (weatherValue[0][0] < 300) {
            images.push(Storm);
          } else if (weatherValue[0][0] >= 300 && weatherValue[0][0] < 499) {
            images.push(Drizzle);
          } else if (weatherValue[0][0] >= 500 && weatherValue[0][0] < 599) {
            images.push(Rain);
          } else if (weatherValue[0][0] >= 600 && weatherValue[0][0] < 699) {
            images.push(Snow);
          } else if (weatherValue[0][0] >= 700 && weatherValue[0][0] < 799) {
            images.push(Fog);
          } else if (weatherValue[0][0] == 800) {
            images.push(Clear);
          } else if (weatherValue[0][0] == 801) {
            images.push(PartlyCloudy);
          } else if (weatherValue[0][0] > 801 && weatherValue[0][0] < 805) {
            images.push(MostlyCloudy);
          }
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
          <img src={images[0]} />
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
