import React from "react";
import CurrentWeather from "./CurrentWeather";
import HourlyWeather from "./HourlyWeather";

const apiKey = "ad31fe76ffa44e4d13b1f2ab08969dc8";


class FetchData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: this.props.country,
      data: [],
    };

  }

  componentDidMount() {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.country}&cnt=8&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((values) => {
        this.setState({ data: values });

    
      });

  }
  componentDidUpdate(prevProps) {
    if (this.props.country !== prevProps.country) {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${this.props.country}&cnt=8&units=metric&appid=${apiKey}`
      )
        .then((res) => res.json())
        .then((values) => {
          this.setState({ data: values });
   
        });
    }
  }

  render() {

    return (
      <div className="hourlyDisplay">
        {console.log(this.props.country)}
        {console.log(this.state.data)}
        {this.state.data && (
          <CurrentWeather data={this.state.data.list} />
        )}
        {this.state.data && (
          <HourlyWeather hourlyData={this.state.data.list} />
        )}
      </div>
    );
  }
}

export default FetchData;
