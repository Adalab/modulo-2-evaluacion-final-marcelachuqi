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
    globalData = JSON.parse(localStorage.getItem("palettes"));
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
        RenderShow(globalData);
      });
  } else {
    console.log("LocalStorage Empty");
  }
}
btn.addEventListener("click", getSerie);

function RenderShow(globalData) {
  for (const item of globalData) {
    DivElement.innerHTML +=
      `<li>${item.show.name}</li>` +
      " " +
      `<img src="${item.show.image.medium}" />` +
      " " +
      `<button class="favbutton_js" id=${item.show.id}> Agregar a favoritos </button>`;
  }
  addListenersToSerie(globalData);
}

function filterSerie() {
  const filteredSerie = globalData.filter((show) =>
    show.name.toLowerCase().includes(userSearch)
  );
  return filteredSerie;
}

//FAVORITE
function addListenersToSerie(globalData) {
  //   const serieIn = favorites.find(
  //     (favoriteId) => favoriteId === globalData.show.id
  //   );
  //   let classFavorite = " ";
  //   if (serieIn === undefined) {
  //     classFavorite = "";
  //   } else {
  //     classFavorite = "favorite";
  //   }
  //   DivElement.innerHTML += `<li id="${globalData.show.id}" class="js-serie ${classFavorite}">`;
  //   const allSerie = document.querySelectorAll(".js-serie");
  //   for (const serie of allSerie) {
  //     serie.addEventListener("click", handleClickSerie);
  //   }
}

function handleClickSerie(ev, globalData) {
  console.log(ev.target.id);
}

resultSerie.addEventListener("click", handleClickSerie);

// const serieIn = favorites.find((favoriteId) => favoriteId === selectedId);
// let classFavorite = "";
// if (serieIn === undefined) {
//   favorites.push(selectedId);
// } else {
//   favorites = favorites.filter((favoriteId) => favoriteId !== selectedId);
// }

// RenderShow();
