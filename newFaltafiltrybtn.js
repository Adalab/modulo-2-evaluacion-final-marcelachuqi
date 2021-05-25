"use strict";
let globalData = [];
let favorites = [];

const form = document.querySelector(".form_js");
const serieInput = document.querySelector(".search_js");
const btn = document.querySelector(".btn_js");
const resultSerie = document.querySelector(".result_js");
const SpanElement = document.querySelector(".img_js");
let DivElement = document.createElement("div");
let ImgElement = document.createElement("img");
resultSerie.appendChild(ImgElement);
resultSerie.appendChild(DivElement);
const userSearch = serieInput.value.toLowerCase();

const favoriteStyle = document.querySelector(".favorites_js");
let favElement = document.createElement("div");
let favImgElement = document.createElement("img");
favoriteStyle.appendChild(favElement);
favoriteStyle.appendChild(favImgElement);

function landing() {
  if (userSearch === "") {
    DivElement.innerHTML = `<h3 class="msj_js"> Let's start... </h3>`;
    fetch(`http://api.tvmaze.com/search/shows?q=serie`)
      .then((response) => response.json())
      .then((data) => {
        let data1 = data;
        for (const name of data1)
          DivElement.innerHTML +=
            `<li>${name.show.name}</li>` +
            " " +
            `<img src="${name.show.image.medium}" />`;
      });
  } else {
    console.log("refreshing");
  }
}
landing();

//USER SEARCH
function getSerie(event) {
  event.preventDefault();
  DivElement.innerHTML = `<li></li>`;
  const userSearch = serieInput.value.toLowerCase();
  if (localStorage.getItem("show") !== "null") {
    fetch(`http://api.tvmaze.com/search/shows?q=${userSearch}`)
      .then((response) => response.json())
      .then((data) => {
        globalData = data;
        localStorage.setItem("show", JSON.stringify(globalData));

        for (const item of globalData)
          DivElement.innerHTML +=
            `<li>${item.show.name}</li>` +
            " " +
            `<img src="${item.show.image.medium}" />`;
      });
  } else {
    landing();
  }
  const serieIn = favorites.find((favoriteId) => favoriteId === item.id);
  let classFavorite = " ";
  if (serieIn === undefined) {
    classFavorite = "";
  } else {
    classFavorite = "favorite";
  }
  favElement.innerHTML += `<li id="${item.show.id}" class="fav_js ${classFavorite}">`;
}
addListenersToSerie();

btn.addEventListener("click", getSerie);

function filterSerie() {
  const filteredSerie = globalData.filter((show) =>
    show.name.toLowerCase().includes(userSearch)
  );
  return filteredSerie;
}

//FAVORITE
function addListenersToSerie() {
  const allSerie = document.querySelectorAll(".js-serie");
  for (const serie of allSerie) {
    serie.addEventListener("click", handleClickSerie);
  }
}

function handleClickSerie(event) {
  const serieClicked = event.target;
  const serieFavPlace = event.currentTarget;
  const selectedId = serieFavPlace.show.id;

  const serieIn = favorites.find((favoriteId) => favoriteId === selectedId);

  if (serieIn === undefined) {
    favorites.push(selectedId);
  } else {
    favorites = favorites.filter((favoriteId) => favoriteId !== selectedId);
  }
  renderFilteredSerie();
}
