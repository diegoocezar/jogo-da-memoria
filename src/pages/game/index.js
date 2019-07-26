const game = function() {
  const $root = document.querySelector("#root");

  const $cardsWrapper = cardsWrapper.render();

  $root.insertAdjacentHTML("beforeend", $cardsWrapper);
};
