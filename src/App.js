import React, { Component, useCallback } from "react";
import Search from "./components/Search";

import "./App.css";
import CurrentWeather from "./components/CurrentWeather";
import HourlyWeather from "./components/HourlyWeather";

const apiKey = "ad31fe76ffa44e4d13b1f2ab08969dc8";

class App extends Component {
  state = {
    name: "",
    color: [],
    color_search:[],
    color_button:[],
    data: [],
  };

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.name}&cnt=8&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((values) => {
        this.setState({ data: values });
      });
  }

  componentDidUpdate(prevState) {
    if (this.state.name !== prevState.name) {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.name}&cnt=8&units=metric&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((values) => {
          this.setState({ data: values });
        });
    }
  }

  handleInputChange = (value) => {
    this.setState({ name: value });
  };

  render() {
    if (this.state.data.list !== undefined) {
      this.state.color.splice(0, this.state.color.length);
      this.state.color_search.splice(0, this.state.color_search.length);
      const data = this.state.data.list.map((data) => {
        const time = parseInt(data.dt_txt.slice(10, 14));
        if (time == 0) {
          const weatherValue = data.weather.map((data) => {
            return [data.id, data.main, data.description];
          });

          if (weatherValue[0][0] >= 500 && weatherValue[0][0] < 599) {
            this.state.color.push("#A1BAC1");
            this.state.color_search.push("#6F81B1");
            this.state.color_button.push("#5A6CAA");
          } else if (weatherValue[0][0] == 800) {
            this.state.color.push("#2590F1");
            this.state.color_search.push("#256CB9");
            this.state.color_button.push("#2358D1");
          }
        }
      });
    }

    return (
      <div>
        <div className="app" style={{ backgroundColor: this.state.color[0] }}>
          <div className="search" style={{ backgroundColor: this.state.color_search[0] }}>
            <Search handleInput={this.handleInputChange} colorSearch={this.state.color_search[0]} colorButton={this.state.color_button}/>
          </div>
          <div className="app__main temp__weather">
            <div className="hourlyDisplay">
              {this.state.data.list && (
                <CurrentWeather data={this.state.data.list} />
              )}

              {this.state.data.list && (
                <HourlyWeather hourlyData={this.state.data.list} />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
