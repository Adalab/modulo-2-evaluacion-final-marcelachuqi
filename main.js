"use strict";

let globalData = [];

const form = document.querySelector("form_js");
const serieInput = document.querySelector(".search_js");
const resultSerie = document.querySelector(".result_js");
const SearchButton = document.querySelector(".button_js");
const userSearch = serieInput.value.toLowerCase();

let liElement = document.createElement("li");
let newSerieList = document.createTextNode(`${globalData}`);
liElement.appendChild(newSerieList);
resultSerie.appendChild(liElement);
console.log("hola");

function showlist() {
  fetch(`http://api.tvmaze.com/search/shows?q=${userSearch}`)
    .then((response) => response.json())
    .then((data) => {
      globalData = data.show.name;
    });
}

function renderSeries(data) {
  liElement = "";
  for (const show of data) {
    let showName = "";
    for (let i = 0; i < show.name.length; i++) {
      showName += `<li${show.name[i]};"></li>`;
    }
  }
}

console.log("hola");

function handleSubmit(event) {
  //   event.preventDefault();
  showlist();
  renderSeries();
}

function filterSeries() {
  const userSearch = serieInput.value.toLowerCase();
  const filteredSeries = globalData.filter((show) =>
    show.name.toLowerCase().includes(userSearch)
  );

  return filteredSeries;
}

function handleKeySearch() {
  const filteredSeries = filterSeries();
  renderSeries(filteredSeries);
}

form.addEventListener("submit", handleSubmit);
serieInput.addEventListener("keyup", handleKeySearch);
