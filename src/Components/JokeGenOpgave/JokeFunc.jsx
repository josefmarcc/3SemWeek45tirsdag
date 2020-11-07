import React, { useState, useEffect } from "react";

const JokeFunc = () => {
  // State variable
  const [joke, setJoke] = useState({
    pun: "Click to get a joke",
  });

  const [jokeDad, setJokeDad] = useState({
    punDad: "",
  });

  // kalder fetchJokeDad hvert 10 sek.
  useEffect(() => {
    const interval = setInterval(() => fetchJokeDad(), 10000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Henter en joke fra API og opdater pun state med setJoke
  function fetchJoke() {
    const url = "https://api.chucknorris.io/jokes/random";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setJoke({ pun: data.value });
      });
  }

  // Henter en joke fra API og opdater punDad state med setJokeDad
  function fetchJokeDad() {
    const url = "https://icanhazdadjoke.com/";
    fetch(url, { headers: { Accept: "application/json" } })
      .then((res) => res.json())
      .then((data) => {
        setJokeDad({ punDad: data.joke });
      });
  }

  return (
    <div>
      <p>{joke.pun}</p>
      <button onClick={fetchJoke}>Click me!</button>
      <p>{jokeDad.punDad}</p>
    </div>
  );
};

export default JokeFunc;
