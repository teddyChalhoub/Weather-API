import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import MostlyCloudy from "./img/weather-icons/mostlycloudy.svg";
import Sunny from "./img/weather-icons/clear.svg";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Teddy",
    };
  }

  handleInputChange = (value) => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <div className="search">
          <Search handleInput={this.handleInputChange} />
        </div>
        <div className="app__main">
          <div className="weather__title">
            <img src={MostlyCloudy} />
            <p className="main__title">overcast clouds</p>
          </div>
          <div className="temp__text">
            <p className="p__blue">
              <span className="p__font__style">Temperature</span> 10° to 11°C
            </p>
            <p className="p__blue p__text__size">
              <span className="p__font__style">Humidity</span> 78%{" "}
              <span className="p__font__style">Pressure</span> 1008.48
            </p>
          </div>
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
        </div>
      </div>
    );
  }
}

export default App;
