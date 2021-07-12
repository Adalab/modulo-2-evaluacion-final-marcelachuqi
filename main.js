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
const logo = document.querySelector(".logo");

const favoriteStyle = document.querySelector(".favorites_js");
let favElement = document.createElement("div");
let favImgElement = document.createElement("img");
favoriteStyle.appendChild(favElement);
favoriteStyle.appendChild(favImgElement);

function landing() {
  if (userSearch === "") {
    DivElement.innerHTML = `<h3 class="msj_js"> MOVIES & TV SHOW  </h3>`;
  } else {
    console.log("buscando tus series...");
  }
}

landing();

//USER SEARCH
function getSerie(event) {
  event.preventDefault();
  DivElement.innerHTML = `<li></li>`;
  const userSearch = serieInput.value.toLowerCase();
  // if (localStorage.getItem("show") !== "null") {
  fetch(`http://api.tvmaze.com/search/shows?q=${userSearch}`)
    .then((response) => response.json())
    .then((data) => {
      globalData = data;
      localStorage.setItem("show", JSON.stringify(globalData));
      RenderShow(globalData);
    });
  // } else {
  //   console.log("LocalStorage Empty");
  // }
}
btn.addEventListener("click", getSerie);

function RenderShow(globalData) {
  for (const item of globalData) {
    DivElement.innerHTML +=
      `<img class="pointer" src=${item.show.image.medium} id="${item.show.id}"/>` +
      " " +
      `<p class="language"> <strong>Language:  </strong> ${item.show.language}</p>` +
      `<img class="star" src="pngaaa.com-50870.png"/>` +
      `<p class="add">Add / Remove</p>`;
  }
  //   addListenersToSerie(globalData);
}

function RenderFav(favoriteClicked) {
  favElement.innerHTML = "";
  for (const item of favoriteClicked) {
    favElement.innerHTML +=
      " " + `<img src=${item.show.image.medium} id="${item.show.id}"/>`;
  }
  //   addListenersToSerie(globalData);
}

function filterSerie() {
  const filteredSerie = globalData.filter((show) =>
    show.name.toLowerCase().includes(userSearch)
  );
  return filteredSerie;
}

function handleClickSerie(ev) {
  let favoriteClicked = ev.target;
  const ID = parseInt(favoriteClicked.id);
  // favorite = favorites.push(ID);
  console.log(favoriteClicked);
  favoriteClicked = JSON.parse(localStorage.getItem("favorites"));
  favoriteClicked = favorites;

  // Hacer un find sobre favorites para ver si ya esta
  const favoriteRepited = favorites.find((objSerie) => objSerie.show.id === ID);

  if (favoriteRepited === undefined) {
    const favoritefind = globalData.find((objSerie) => objSerie.show.id === ID);
    console.log("favoritefind", favoritefind);
    favorites.push(favoritefind);
  } else {
    const PositionClicked = favorites.findIndex(
      (objSerie) => objSerie.show.id === ID
    );
    favorites.splice(PositionClicked, 1);
  }

  const setfav = localStorage.setItem("favorites", JSON.stringify(favorites));
  RenderFav(favoriteClicked);
}
resultSerie.addEventListener("click", handleClickSerie);

// RenderFav(favorites);

function handleIndex() {
  landing();
}

logo.addEventListener("click", handleIndex);
