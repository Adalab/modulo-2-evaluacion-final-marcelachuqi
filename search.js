"use strict";
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

form.addEventListener("submit", handleSubmit);
serieInput.addEventListener("keyup", handleKeySearch);
