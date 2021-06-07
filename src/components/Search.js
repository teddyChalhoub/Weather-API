import React from "react";
 

import clear from "../img/weather-icons/clear.svg";
import FetchData from "./FetchData";
import "./Search.css";

class Search extends React.Component {
  state = {
    input: "",
  };

  onTrigger = (event) => {
    this.props.handleInput(this.state.input);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          id="input-name"
          placeholder="Type in a city name"
          onChange={(event) => {
            this.setState({ input: event.target.value });
          }}
        />
        <button onClick={this.onTrigger}>FIND WEATHER</button>
      </div>
    );
  }
}
export default Search;
