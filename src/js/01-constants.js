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
