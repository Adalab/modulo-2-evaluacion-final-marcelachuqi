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
