"use strict";
let globalData;

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

function landing() {
  let globalData = [];
  if (userSearch === "") {
    DivElement.innerHTML = `<h3 class="msj_js"> Let's start... </h3>`;
    fetch(`http://api.tvmaze.com/search/shows?q=serie`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) =>
          globalData.push(
            `<div class="title_js">${element.show.name}</div>` +
              " " +
              `<img src="${element.show.image.medium}" />`
          )
        );

        localStorage.setItem("show", JSON.stringify(globalData));
        for (const name of globalData)
          DivElement.innerHTML += `<li>${name}</li>`;
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
  let globalData = [];
  if (localStorage.getItem("name") === null) {
    fetch(`http://api.tvmaze.com/search/shows?q=${userSearch}`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) =>
          globalData.push(
            `<div class="fav_js">${element.show.name}</div>` +
              " " +
              `<img src="${element.show.image.medium}" />`
          )
        );
        localStorage.setItem("show", JSON.stringify(globalData));
        for (const name of globalData)
          DivElement.innerHTML += `<li>${name}</li>`;
      });
  } else {
    globalData = JSON.parse(localStorage.getItem("name"));
    getSerie(globalData);
  }
}
btn.addEventListener("click", getSerie);

//FAVORITE
function handlerfavorite(event) {
  let serieClicked = event.target;
  console.log("me han clicado");
  console.log(serieClicked);
}

resultSerie.addEventListener("click", handlerfavorite);

function addListenersToCards() {
  const allCards = document.querySelectorAll(".js-card");
  for (const card of allCards) {
    card.addEventListener("click", handleClickCard);
  }
}

function handleClickCard(event) {
  const whereTheUserClicked = event.target; // No hace falta

  Identificar la li pulsada
  const whereIAddedTheEvent = event.currentTarget;

  Obtener la información asociada a la paleta
  const paletteId = whereIAddedTheEvent.dataset.id;

  Buscar si la paleta clickada está en favoritos
  const isPresent = favorites.find((favoriteId) => favoriteId === paletteId);

  if (isPresent === undefined) {
    El ID de la paleta en la que ha hecho click no está en el array de favoritos
    favorites.push(paletteId);
  } else {
    favorites = favorites.filter((favoriteId) => favoriteId !== paletteId);
  }

  Re-pintamos las tarjetas de paletas teniéndo en cuenta el filtro.
  renderFilteredPalettes();
}

let globalData = [];
let favorites = [];

if (localStorage.getItem("palettes") === null) {
  No tiene los datos guardados
  fetch(
    "https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json"
  )
    .then((response) => response.json())
    .then((data) => {
      globalData = data.palettes;

      setItem

      localStorage.setItem("palettes", JSON.stringify(globalData));

      renderPalettes(globalData);
    });
} else {
  Sí tiene los datos guardados

  globalData = JSON.parse(localStorage.getItem("palettes"));
  renderPalettes(globalData);
}

function renderPalettes(data) {
  paletteList.innerHTML = "";

  for (const palette of data) {
    let htmlColors = "";
    for (let i = 0; i < palette.colors.length; i++) {
      htmlColors += `<li class="item__colors-each" style="background-color:#${palette.colors[i]};"></li>`;
    }

    Buscar si la paleta que se está pintando está en favoritos
    const isPresent = favorites.find((favoriteId) => favoriteId === palette.id);

    Si el id está en favoritos, se renderiza el li con la clase favorite
    let classFavorite = "";
    if (isPresent === undefined) {
      classFavorite = "";
    } else {
      classFavorite = "favorite";
    }
    Podría hacerse también con un ternario:
    const classFavorite = ( isPresent === undefined ) ? '' : 'favorite';

    paletteList.innerHTML += `
      <li data-id="${palette.id}" class="palette__list--item js-card ${classFavorite}">
        <h3 class="item__name">${palette.name}</h3>
        <p>Origen:${palette.from}</p>
        <div class="item__colors-box">
          <span>Colores:</span>
          <ul class="item__colors-list">
            ${htmlColors}
          </ul>
        </div>
      </li>`;
  }
  addListenersToCards();
}
