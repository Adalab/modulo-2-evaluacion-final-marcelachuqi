"use strict";

const form = document.querySelector(".form_js");
const serieInput = document.querySelector(".search_js");
const btn = document.querySelector(".btn_js");
const resultSerie = document.querySelector(".result_js");

let liElement = document.createElement("li");
resultSerie.appendChild(liElement);

function getSerie() {
  const userSearch = serieInput.value;
  let globalData = [];

  fetch(`http://api.tvmaze.com/search/shows?q=${userSearch}`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => globalData.push(element.show.name));
      console.log(globalData);
      for (const name of globalData) liElement.innerHTML += `<li>${name}</li>`;
    });
}

btn.addEventListener("click", getSerie);

// function renderPalettes(globalData) {
//   {
//   }
// }

// const paletteFav = favoritePalettes.find(
//   (eachPalette) => eachPalette.id === palette.id
// );

// const classFavorite = paletteFav === undefined ? "" : "favorite";

// paletteList.innerHTML += `
//     <li id="${palette.id}" class="palette__list--item js-card ${classFavorite}">
//       <h3 class="item__name">${palette.name}</h3>
//       <p>Origen:${palette.from}</p>
//       <div class="item__colors-box">
//         <span>Colores:</span>
//         <ul class="item__colors-list">
//           ${htmlColors}
//         </ul>
//       </div>
//     </li>`;
