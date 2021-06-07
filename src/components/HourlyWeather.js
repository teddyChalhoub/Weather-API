import React from "react";

import MostlyCloudy from "../img/weather-icons/mostlycloudy.svg";
import Sunny from "../img/weather-icons/clear.svg";

import "../App.css";
const url = MostlyCloudy;
class HourlyWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hourlyWeatherData: [],
    };
  }
  render() {
 
    if (this.props.hourlyData !== undefined) {
      this.state.hourlyWeatherData.splice(0, this.state.hourlyWeatherData.length)
      const data = this.props.hourlyData.map((data) => {
        const time = parseInt(data.dt_txt.slice(10, 14));

        if (time != 0) {
          const weatherValue = data.weather.map((data) => {
            return [data.id, data.main, data.description];
          });
          this.state.hourlyWeatherData.push({
            id: weatherValue[0][0],
            time: data.dt_txt.slice(10, 16),
            temp: data.main.temp,
            weather: weatherValue[0][1],
          });

          this.state.hourlyWeatherData.sort(function (a, b) {
            var timeA = a.time;
            var timeB = b.time;
            if (timeA < timeB) {
              return -1;
            }
            if (timeA > timeB) {
              return 1;
            }
            return 0;
          });
        }
      });
    }

    return (
      <div className="temp__per__hour">
        {this.state.hourlyWeatherData && this.state.hourlyWeatherData.map((data, index) => {
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
