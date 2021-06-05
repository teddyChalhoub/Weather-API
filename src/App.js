import React, { Component } from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather"
import HourlyWeather from "./components/HourlyWeather"

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";



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
        <div className="app__main temp__weather">
         <CurrentWeather />
         <HourlyWeather />
        
        </div>
      </div>
    );
  }
}

export default App;
