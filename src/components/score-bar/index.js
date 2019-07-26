const scoreBar = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .score-bar {
        background-color: #3a4042;
        height: 45px;
        width: 100%;
        
        margin-right: auto;
        margin-left: auto;
    
        text-align: right;
        font-family: 'Comfortaa', sans-serif;
      }

      .score-bar > .score {
        line-height: 45px;
        color: #fff;
        font-weight: bold;
        margin-right:10px;
      }
    `;

    $head.insertBefore($style, null);
  };

  module.updateScore = () => {
    const $score = document.querySelector(".score");
    $score.textContent = `Placar: ${store.score} pontos`;
  };

  module.create = () => {
    module._style();
    return `
     <header class="score-bar">
      <span class="score">Placar: 0 pontos</span>
     </header>
    `;
  };

  return {
    create: module.create,
    score: module.updateScore
  };
})();
