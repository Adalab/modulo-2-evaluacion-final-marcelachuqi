// "use strict";

// let globalData = [];

// function showSerie(){
//   let liElement = document.createElement("li");
// let newSerieList = document.createTextNode(`${globalData}`);
// liElement.appendChild(newSerieList);
// resultSerie.appendChild(liElement);
// };

// function showlist() {
//   fetch(`http://api.tvmaze.com/search/shows?q=${userSearch}`)
//     .then((response) => response.json())
//     .then((data) => {
//       data.forEach(element) => { globalData.push(element.show);});

//      if(globalData.length > 0) {
//        showSerie(globalData);
//      };
//     }};

// function renderSeries(data) {
//   liElement = "";
//   for (const show of data) {
//     let showName = "";
//     for (let i = 0; i < show.name.length; i++) {
//       showName += `<li${show.name[i]};"></li>`;
//     }
//   }
// }

// console.log("hola");

//

// function filterSeries() {
//   const userSearch = serieInput.value.toLowerCase();
//   const filteredSeries = globalData.filter((show) =>
//     show.name.toLowerCase().includes(userSearch)
//   );

//   return filteredSeries;
// }

// console.log("hola");
