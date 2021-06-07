import React, { Component, useCallback } from "react";
import Search from "./components/Search";
import FetchData from "./components/FetchData";

import SayHi, { SayHello } from "./components/WeatherItem";

import "./App.css";

class App extends Component {

    state = {
      name : "",
    };

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
          {this.state.name && <FetchData country={this.state.name} />}
        </div>
      </div>
    );
  }
}

export default App;
