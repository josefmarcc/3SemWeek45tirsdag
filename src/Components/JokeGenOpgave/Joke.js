import Count from "./Count";
import React, { Component } from "react";
import JokeClass from "./JokeClass";
import JokeFunc from "./JokeFunc";
import ListDemo from "./ListDemo";

const Joke = () => {
  return (
    <div className="App">
      <h1>Ex1</h1>
      <Count init={50} increment={5} />
      <h1>Ex2</h1>
      <JokeClass />
      <JokeFunc />
      <h1>Ex3</h1>
      <ListDemo />
    </div>
  );
};

export default Joke;
