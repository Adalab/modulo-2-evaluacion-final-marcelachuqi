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
    console.log("buscando tus series...");
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
      `<img src=${item.show.image.medium} id="${item.show.id}"/>`;
  }
  //   addListenersToSerie(globalData);
}

function RenderFav(favserie) {
  for (const item of favserie) {
    favElement.innerHTML +=
      `<li>${item.show.name}</li>` +
      " " +
      `<img src=${item.show.image.medium} id="${item.show.id}"/>`;
  }
  //   addListenersToSerie(globalData);
}
// function RenderFav2(favserie) {
//   for (const item of favserie) {
//     favElement.innerHTML = `<li> "sfasfafaw"  </li>`;
//   }
// }

function filterSerie() {
  const filteredSerie = globalData.filter((show) =>
    show.name.toLowerCase().includes(userSearch)
  );
  return filteredSerie;
}

function handleClickSerie(ev) {
  let favoriteClicked = ev.target;
  const ID = parseInt(favoriteClicked.id);
  const favoriteGlobal = globalData.find((objSerie) => objSerie.show.id === ID);
  const newfav = favorites.push(favoriteGlobal);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  RenderFav(favorites);
  const favoriteIn = favorites.find((objSeriex) => objSeriex.show.id === ID);

  console.log(favoriteIn);
  if (favoriteIn === undefined) {
    favorites.push(favoriteGlobal);
  } else {
    favorites = favorites.filter((objSeriex) => objSeriex.show.id !== ID);
  }
}

resultSerie.addEventListener("click", handleClickSerie);

// function handleClickSerieRemove(ev) {
//   let favoriteClicked = ev.target;
//   const ID = parseInt(favoriteClicked.id);
//   const favoriteGlobal = favorites.find((objSerie) => objSerie.show.id === ID);
//   const newfav = favorites.pop(favoriteGlobal);

//   localStorage.removeItem("favorites", JSON.stringify(favorites));
//   RenderFav2(favorites);
//   const favoriteIn = favorites.find((objSeriex) => objSeriex.show.id === ID);

//   if (favoriteIn !== undefined) {
//     favoriteGlobal.pop(favorites);
//   } else {
//     favorites = favorites.filter((objSeriex) => objSeriex.show.id === ID);
//   }
// }

// favoriteStyle.addEventListener("click", handleClickSerieRemove);

// // favorites = JSON.parse(localStorage.getItem("favorites"));
