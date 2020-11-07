import React, { Component, useEffect, useState } from "react";

class JokeClass extends Component {
  // sætter vores state af Joke fra start.
  state = {
    loading: true,
    joke: null,
  };

  stateDadJoke = {
    dadJoke: null,
  };

  // laver en aync kald på API
  async componentDidMount() {
    const url = "https://api.chucknorris.io/jokes/random";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ joke: data.value, loading: false });
  }

  // Shvis loading så retuner p med loading ellers (:) joke.
  render() {
    return (
      <div>
        {this.state.loading || !this.state.joke ? (
          <p>Loading...</p>
        ) : (
          <p>{this.state.joke}</p>
        )}
      </div>
    );
  }
}

export default JokeClass;
