"use strict";

const form = document.querySelector(".form_js");
const serieInput = document.querySelector(".search_js");
const btn = document.querySelector(".btn_js");
const resultSerie = document.querySelector(".result_js");
let liElement = document.createElement("li");
resultSerie.appendChild(liElement);

// function handleSubmit(event) {
//   event.preventDefault();
// }

// function printSerie() {
//   for (const serie of serieApi) {
//     liElement.innerHTML += `<li>${serie.show.name}</li>`;
//   }
// }

// printSerie();

// function filterSerie() {
//   const userSearch = serieInput.value.toLowerCase();
//   for (const serie of serieApi) {
//     const filteredSerie = serieApi.show.filter((show) =>
//       show.name.toLowerCase().includes(userSearch)
//     );
//   }
//   return filteredSerie;
// }

// function handleKeySearch() {
//   const filteredSerie = filterSerie();

//   renderSerie(filteredSerie);
// }

// form.addEventListener("click", handleSubmit);

// serieInput.addEventListener("keyup", handleKeySearch);

// // btn.addEventListener("click", handlerSerieSearch);

// // form.addEventListener("keyup", printSerie);

// // function handlerSerieSearch(ev) {
// //     ev.preventDefault();
// //   console.log("me han clicado");
// //   for (const serie of serieApi) {
// //     liElement.innerHTML += `<li>${serie.show.name}</li>`;
// //   }}

// // function filterSerie() {}

// //     liElement.innerHTML += `<li>${serieFiltered}</li>`;
// //     console.log(serieInput.value);
// //   return serieFiltered;

//FECTH

let favoriteShow = [];
let serieApi = [{ show: { name: "" } }];
let globalData = serieApi.show;

if (localStorage.getItem("show") === null) {
  // No tiene los datos guardados
  fetch(`http://api.tvmaze.com/search/shows?q=${userSearch}`)
    .then((seriesResponse) => seriesResponse.json())
    .then((seriesApi) => {
      //recorremos el array para guardarlo en globalData
      seriesApi.forEach((element) => {
        globalData.push(element.show);
      });
      if (globalData.length > 0) {
        printShowCards(globalData);
      }

      // setItem

      localStorage.setItem("show", JSON.stringify(globalData));

      renderSerie(globalData);
    });
} else {
  // Sí tiene los datos guardados

  globalData = JSON.parse(localStorage.getItem("serie"));

  //   render(globalData);
}

function renderPalettes(serieApi) {
  resultSerie.innerHTML = "";

  for (const show of serieApi) {
    let htmlshows = "";
    for (let i = 0; i < show.name.length; i++) {
      htmlshows += `<li${show.name[i]};"></li>`;
    }

    const ShowFav = favoriteShow.find((eachShow) => eachShow.id === show.id);

    const classFavorite = ShowFav === undefined ? "" : "favorite";

    // resultSerie.innerHTML += `
    //   <li id="${show.id}" class="palette__list--item js-card ${classFavorite}">
    //     <h3 class="item__name">${palette.name}</h3>
    //     <p>Origen:${palette.from}</p>
    //     <div class="item__colors-box">
    //       <span>Colores:</span>
    //       <ul class="item__colors-list">
    //         ${htmlColors}
    //       </ul>
    //     </div>
    //   </li>`;
  }
  addListenersToCards();
}

// SEARCH

function handleSubmit(event) {
  event.preventDefault();
}

function filterPalettes() {
  const userSearch = serieInput.value.toLowerCase();

  const filteredPalettes = globalData.filter((show) =>
    show.name.includes(serieInput.value)
  );

  return filteredPalettes;
}

function handleKeySearch() {
  const filteredPalettes = filterPalettes();

  // render
  renderPalettes(filteredPalettes);
}

form.addEventListener("submit", handleSubmit);
serieInput.addEventListener("keyup", handleKeySearch);
