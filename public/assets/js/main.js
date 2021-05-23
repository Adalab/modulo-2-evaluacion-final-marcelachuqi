"use strict";
// //FUNCTIONS

// function handleClickSearch() {
//   fetch(`http://api.tvmaze.com/search/shows?q=${serieValueUser}`)
//     .then((response) => response.json())
//     .then((serieValue) => {
//       if (serieValueUser !== serieValue) {
//         resultSerie.innerHTML += ": Intenta buscar con otro nombre";
//       } else {
//         liElement = `<li>${serieValue}</li>`;
//       }
//     });
// }

// SearchButton.addEventListener("click", handleClickSearch);
console.log("hola");

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

function handleSubmit(event) {
  event.preventDefault();
}

function filterSeries() {
  const userSearch = serieInput.value.toLowerCase();
  const filteredSeries = globalData.filter((show) =>
    show.name.toLowerCase().includes(userSearch)
  );

  return filteredSeries;
}

function handleKeySearch() {
  const filteredSeries = filterSeries();
  renderSeries(filteredSeries);
}

// form.addEventListener("submit", handleSubmit);
serieInput.addEventListener("keyup", handleKeySearch);
console.log("hola");

let favoriteSerie = [];

if (localStorage.getItem("show") === null) {
  fetch(`http://api.tvmaze.com/search/shows?q=${userSearch}`)
    .then((response) => response.json())
    .then((data) => {
      globalData = data.show.name;

      // setItem

      localStorage.setItem("show", JSON.stringify(globalData));

      renderSeries(globalData);
    });
  // } else {
  //   globalData = JSON.parse(localStorage.getItem("show"));
  //   renderSeries(globalData);
  // }
}
function renderSeries(data) {
  liElement = "";

  for (const show of data) {
    let showName = "";
    for (let i = 0; i < show.name.length; i++) {
      showName += `<li${show.name[i]};"></li>`;
    }

    // const paletteFav = favoritePalettes.find(
    //   (eachPalette) => eachPalette.id === palette.id
    // );

    // const classFavorite = paletteFav === undefined ? "" : "favorite";

    // paletteList.innerHTML += `
    //   <li id="${palette.id}" class="palette__list--item js-card ${classFavorite}">
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
  //   addListenersToCards();
}
console.log("hola");

//# sourceMappingURL=main.js.map
