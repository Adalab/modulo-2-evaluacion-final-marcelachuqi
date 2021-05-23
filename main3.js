// "use strict";
// let globalData = [];
// let favoriteShow = [];

// if (localStorage.getItem("show") === null) {
//   // No tiene los datos guardados
//   fetch(`http://api.tvmaze.com/search/shows?q=${userSearch}`)
//     .then((response) => response.json())
//     .then((serieApi) => {
//       globalData = serieApi.show;

//       // setItem

//       localStorage.setItem("show", JSON.stringify(globalData));

//       renderSerie(globalData);
//     });
// } else {
//   // Sí tiene los datos guardados

//   globalData = JSON.parse(localStorage.getItem("serie"));
//   render(globalData);
// }

// function renderPalettes(serieApi) {
//   resultSerie.innerHTML = "";

//   for (const show of serieApi) {
//     let htmlshows = "";
//     for (let i = 0; i < show.name.length; i++) {
//       htmlshows += `<li${show.name[i]};"></li>`;
//     }

//     const ShowFav = favoriteShow.find((eachShow) => eachShow.id === show.id);

//     const classFavorite = ShowFav === undefined ? "" : "favorite";

//     // resultSerie.innerHTML += `
//     //   <li id="${show.id}" class="palette__list--item js-card ${classFavorite}">
//     //     <h3 class="item__name">${palette.name}</h3>
//     //     <p>Origen:${palette.from}</p>
//     //     <div class="item__colors-box">
//     //       <span>Colores:</span>
//     //       <ul class="item__colors-list">
//     //         ${htmlColors}
//     //       </ul>
//     //     </div>
//     //   </li>`;
//   }
//   addListenersToCards();
// }
