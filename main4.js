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
