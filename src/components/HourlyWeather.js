import React from "react";

import MostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import Sunny from "../img/weather-icons/clear.svg";

import "../App.css";
const url = MostlyCloudy;
class HourlyWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.hourlyData,
    };
  }
  render() {
    return (
      <div className="temp__per__hour">
        {this.state.data.slice(4, 11).map((data, index) => {
          return (
            <div className="p__text__size" key={index}>
              <p>{data.time}</p>
              <img
                className="img__little__size"
                src={data.id == 501 ? Sunny : MostlyCloudy}
              />
              <p>{Math.round(data.temp)}°C</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HourlyWeather;
