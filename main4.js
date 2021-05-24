"use strict";

const form = document.querySelector(".form_js");
const serieInput = document.querySelector(".search_js");
const btn = document.querySelector(".btn_js");
const resultSerie = document.querySelector(".result_js");
const SpanElement = document.querySelector(".img_js");
let DivElement = document.createElement("div");
let ImgElement = document.createElement("img");
resultSerie.appendChild(ImgElement);
resultSerie.appendChild(DivElement);

function getSerie(event) {
  event.preventDefault();
  const userSearch = serieInput.value.toLowerCase();
  let globalData = [];

  if (localStorage.getItem("name") === null) {
    fetch(`http://api.tvmaze.com/search/shows?q=${userSearch}`)
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) =>
          globalData.push(
            `${element.show.name}` +
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

function getImage() {}

btn.addEventListener("click", getSerie);
