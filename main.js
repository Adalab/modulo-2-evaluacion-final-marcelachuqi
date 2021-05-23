"use strict";

const form = document.querySelector("form_js");
const serieInput = document.querySelector(".search_js");
const resultSerie = document.querySelector(".result_js");
const userSearch = serieInput.value.toLowerCase();

function findSerie(){
    const userSearch = serieInput.value;
    globalData = [];
    console.log(globalData);
};


function showlist() {
  
     console.log("han llegado");
     const nameShow =data.show.name[0];
     console.log(nameShow);
    

// function handleSubmit(event) {
//   event.preventDefault();
//   showlist();
//   renderSeries();
// }

// function handleKeySearch() {
//   const filteredSeries = filterSeries();
//   renderSeries(filteredSeries);
// }



// // form.addEventListener("submit", handleSubmit);
// // serieInput.addEventListener("keyup", handleKeySearch);