import React from "react";

import MostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import Sunny from "../img/weather-icons/clear.svg";

import "../App.css";

class HourlyWeather extends React.Component {
  render() {
    return (
    //   <div class="app__main">
        <div className="temp__per__hour">
          <div className="p__text__size">
            <p>03:00</p>
            <img className="img__little__size" src={MostlyCloudy} />
            <p>8°C</p>
          </div>

          <div className="p__text__size">
            <p>06:00</p>
            <img className="img__little__size" src={MostlyCloudy} alt="" />
            <p>9°C</p>
          </div>
          <div className="p__text__size">
            <p>09:00</p>
            <img className="img__little__size" src={Sunny} />
            <p>14°C</p>
          </div>
          <div className="p__text__size">
            <p>12:00</p>
            <img className="img__little__size" src={Sunny} alt="" />
            <p>17°C</p>
          </div>
          <div className="p__text__size">
            <p>15:00</p>
            <img className="img__little__size" src={Sunny} alt="" />
            <p>18°C</p>
          </div>
          <div className="img__little__size" className="p__text__size">
            <p>18:00</p>
            <img className="img__little__size" src={Sunny} alt="" />
            <p>16°C</p>
          </div>
          <div className="p__text__size">
            <p>21:00</p>
            <img className="img__little__size" src={MostlyCloudy} alt="" />
            <p>13°C</p>
          </div>
        </div>
    
    );
  }
}

export default HourlyWeather;
