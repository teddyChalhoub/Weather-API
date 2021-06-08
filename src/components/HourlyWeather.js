import React from "react";

import "../App.css";

class HourlyWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hourlyWeatherData: [],
    };
  }

  render() {
    const images = [];

    if (this.props.hourlyData !== undefined) {
      this.state.hourlyWeatherData.splice(
        0,
        this.state.hourlyWeatherData.length
      );
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

          if (weatherValue[0][0] < 300) {
            images.push(require("../img/weather-icons/storm.svg"));
          } else if (weatherValue[0][0] >= 300 && weatherValue[0][0] < 499) {
            images.push(require("../img/weather-icons/drizzle.svg"));
          } else if (weatherValue[0][0] >= 500 && weatherValue[0][0] < 599) {
            images.push(require("../img/weather-icons/rain.svg"));
          } else if (weatherValue[0][0] >= 600 && weatherValue[0][0] < 699) {
            images.push(require("../img/weather-icons/snow.svg"));
          } else if (weatherValue[0][0] >= 700 && weatherValue[0][0] < 799) {
            images.push(require("../img/weather-icons/fog.svg"));
          } else if (weatherValue[0][0] == 800) {
            images.push(require("../img/weather-icons/clear.svg"));
          } else if (weatherValue[0][0] == 801) {
            images.push(require("../img/weather-icons/partlycloudy.svg"));
          } else if (weatherValue[0][0] > 801 && weatherValue[0][0] < 805) {
            images.push(require("../img/weather-icons/mostlycloudy.svg"));
          }
        }
      });
    }

    if (this.state.hourlyWeatherData.length !== 0) {
      return (
        <div className="temp__per__hour">
          <div className="p__text__size">
            <p>{this.state.hourlyWeatherData[0].time}</p>

            <img src={images[0]} className="img__little__size" />

            <p>{Math.round(this.state.hourlyWeatherData[0].temp)}°C</p>
          </div>
          <div className="p__text__size">
            <p>{this.state.hourlyWeatherData[1].time}</p>

            <img src={images[1]} className="img__little__size" />

            <p>{Math.round(this.state.hourlyWeatherData[1].temp)}°C</p>
          </div>
          <div className="p__text__size">
            <p>{this.state.hourlyWeatherData[2].time}</p>

            <img src={images[2]} className="img__little__size" />

            <p>{Math.round(this.state.hourlyWeatherData[2].temp)}°C</p>
          </div>
          <div className="p__text__size">
            <p>{this.state.hourlyWeatherData[3].time}</p>

            <img src={images[3]} className="img__little__size" />

            <p>{Math.round(this.state.hourlyWeatherData[3].temp)}°C</p>
          </div>

          <div className="p__text__size">
            <p>{this.state.hourlyWeatherData[4].time}</p>

            <img src={images[4]} className="img__little__size" />

            <p>{Math.round(this.state.hourlyWeatherData[4].temp)}°C</p>
          </div>
          <div className="p__text__size">
            <p>{this.state.hourlyWeatherData[5].time}</p>

            <img src={images[5]} className="img__little__size" />

            <p>{Math.round(this.state.hourlyWeatherData[5].temp)}°C</p>
          </div>
          <div className="p__text__size">
            <p>{this.state.hourlyWeatherData[6].time}</p>

            <img src={images[6]} className="img__little__size" />

            <p>{Math.round(this.state.hourlyWeatherData[6].temp)}°C</p>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default HourlyWeather;
