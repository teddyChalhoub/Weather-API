import React from "react";
import App from "../App";
import MostlyCloudy from "../img/weather-icons/mostlycloudy.svg";

import "../App.css";

class CurrentWeather extends React.Component {
  render() {
    return (
      <div>
        <div className="weather__title">
          <img src={MostlyCloudy} />
          <p className="main__title">overcast clouds</p>
        </div>
        <div className="temp__text__current">
          <p className="p__blue">
            <span className="p__font__style">Temperature</span> 10° to 11°C
          </p>
          <p className="p__blue p__text__size">
            <span className="p__font__style">Humidity</span> 78%{" "}
            <span className="p__font__style">Pressure</span> 1008.48
          </p>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;