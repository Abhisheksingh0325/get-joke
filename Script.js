let container = document.querySelector(".container");
const btn = document.querySelector("#btn");
const jokeText = document.querySelector("#joke-text");
let url = "https://v2.jokeapi.dev/joke/Any?type=single";

function fetchJoke() {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      jokeText.textContent = data.joke;
    });
}

btn.addEventListener("click", fetchJoke);
