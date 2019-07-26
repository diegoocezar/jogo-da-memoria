const cardsWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    .cards-wrapper {
      width: 100vw;
      height: 100vh;
      max-height: 620px;
      max-width: 375px;
      box-sizing: border-box;
      overflow-x: hidden;
      margin: 0 auto;
      

      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;

      position: relative;
      background-color: #e5e5e5;
      border: 1px #3A4042 solid;
      z-index: 0;
 
    }
      
    `;

    // .cards-wrapper > .memory-card .card {
    //   margin-bottom: 14px;
    // }

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $scoreBar = scoreBar.create();

    let $memoryCard = [];

    const $memoryCardC = memoryCard.render({
      src: "img/icons/icon-c.png",
      alt: "Ícone de um livro da linguagem c++",
      nameClass: "-turned"
    });

    const $memoryCardJS = memoryCard.render({
      src: "img/icons/icon-js.png",
      alt: "Ícone de um livro da linguagem JS",
      nameClass: "-turned"
    });

    const $memoryCardJava = memoryCard.render({
      src: "img/icons/icon-java.png",
      alt: "Ícone de um livro da linguagem Java",
      nameClass: "-turned"
    });

    const $memorycardSettings = memoryCard.render({
      src: "img/icons/icon-settings.png",
      alt: "Ícone de Settings",
      nameClass: "-turned"
    });

    for (var i = 0; i < 2; i++) {
      $memoryCard.push($memoryCardC);
      $memoryCard.push($memorycardSettings);
      $memoryCard.push($memoryCardJS);
      $memoryCard.push($memoryCardJava);
      $memoryCard.push($memoryCardJava);
      $memoryCard.push($memoryCardC);
      $memoryCard.push($memorycardSettings);
      $memoryCard.push($memoryCardJS);
      $memoryCard.push($memoryCardJava);
      $memoryCard.push($memoryCardJava);
    }

    return `
      ${$scoreBar}
      ${$memoryCard.join("")}
    `;
  };

  module.render = () => {
    module._style();

    return `
      <section class="cards-wrapper">${module._children()}</section>
    `;
  };

  return {
    render: module.render
  };
})();
