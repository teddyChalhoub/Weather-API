import React, { Component } from "react";
import Search from "./components/Search";
import FetchData from "./components/FetchData";

import SayHi, { SayHello } from "./components/WeatherItem";

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
        {console.log(this.props.data)}
        {console.log(this.props.hourlyData)}
       
        <div className="search">
          <Search handleInput={this.handleInputChange} />
        </div>
        <div className="app__main temp__weather">

           <FetchData />
        </div>
      </div>
    );
  }
}

export default App;
