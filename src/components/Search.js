import React from "react";

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
          style={{ backgroundColor: this.props.colorSearch }}
          type="text"
          id="input-name"
          placeholder="Type in a city name"
          onChange={(event) => {
            this.setState({ input: event.target.value });
          }}
        />
        <button
          style={{ backgroundColor: this.props.colorButton }}
          onClick={this.onTrigger}
        >
          FIND WEATHER
        </button>
      </div>
    );
  }
}
export default Search;
