import React from "react";
import App from "../App";

import MostlyCloudy from "../img/weather-icons/mostlycloudy.svg";

import "../App.css";

const humidity = [];
const pressure = [];
const temp_min = [];
const temp_max = [];
const weather = [];

class CurrentWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
  }

  render() {
    return (
      <div>
        {this.state.data.map((data) => {
          humidity.push(data.humidity);
          pressure.push(data.pressure);
          temp_min.push(data.temp_min);
          temp_max.push(data.temp_max);
          weather.push(data.weather);
        })}

        <div className="weather__title">
          <img src={MostlyCloudy} />
          <p className="main__title">overcast clouds</p>
        </div>
        <div className="temp__text__current">
          <p className="p__blue">
            <span className="p__font__style">Temperature</span>{" "}
            {Math.round(temp_min[1])}° to{" "}
            {Math.round(temp_max[1])}°C
          </p>
          <p className="p__blue p__text__size">
            <span className="p__font__style">Humidity</span> {humidity[1]}%{" "}
            <span className="p__font__style">Pressure</span> {pressure[1]}
          </p>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
