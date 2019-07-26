const memoryCard = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    // width: 125px;
    // height: 115px;
    $style.textContent = `
      .memory-card{
        width: 80px;
        height: 85px;
        position: relative;
        
        border-radius: 20px;
    
        
      }
      .memory-card .card {
        width: 80px;
        height: 85px;
        background-color: #f25a70;
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        position: relative;
        cursor: pointer;
        position: absolute;
      }
      
      .memory-card .card.-turned {
        background-color: #fff;
      }
    
      .memory-card.-active .card {
        display: none;
      }
      
      .memory-card.-active .card.-turned {
        display: flex;
      }
    
      .card.-turned::before {
        content: "";
        width: 60px;
        height: 60px;
        position: absolute;
        background-color: #d4d4d4;
        border-radius: 50%;
      }
      
      .card > .icon {
        width: 57px;
        position: absolute;
      }
      .card.-turned > .icon {
        position: absolute;
        transform: translateY(-14px);
      }
    
      .memory-card.-right {
        box-shadow: 0 3px 6px #2ed573;
        animation: right 300ms 1;
    
      }
    
      @keyframes right {
        0%    {transform: translateY(0)}
        25%   {transform: translateY(10%)}
        50%   {transform: translateY(-10%)}
        75%   {transform: translateY(10%)}
        100%  {transform: translateY(0)}
      }
    
      .memory-card.-wrong {
        box-shadow: 0 3px 6px rgb(242, 90, 112);
        animation: wrong 300ms 1;
      }
    
      @keyframes wrong {
        0%    {transform: translateX(0)}
        25%   {transform: translateX(10%)}
        50%   {transform: translateX(-10%)}
        75%   {transform: translateX(10%)}
        100%  {transform: translateX(0)}
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = $component => {
    if (
      !$component.classList.contains("-active") &&
      store.cardsClicados.length < 2
    ) {
      module._activeMemoryCard($component);
      store.cardsClicados.push($component);
      store.imgCardsClicados.push(
        $component.querySelector(".-turned .icon").getAttribute("src")
      );

      module._isRight();
    }
  };

  module._activeMemoryCard = $component => {
    store.cardsClicados.length < 2 ? $component.classList.add("-active") : "";
  };

  module._isRight = () => {
    if (store.cardsClicados.length === 2) {
      let $activeMemoryCards = store.cardsClicados;
      let $imgCardsClicados = store.imgCardsClicados;

      if ($imgCardsClicados[0] === $imgCardsClicados[1]) {
        $activeMemoryCards[0].classList.add("-right");
        $activeMemoryCards[1].classList.add("-right");
        store.score += 10;
        scoreBar.score();
        store.cardsClicados = [];
        store.imgCardsClicados = [];
        console.log("pontuação: ", store.score);
      } else {
        $activeMemoryCards.forEach($memoryCard => {
          $memoryCard.classList.add("-wrong");
          setTimeout(() => {
            $memoryCard.classList.remove("-active", "-wrong");

            store.cardsClicados = [];
            store.imgCardsClicados = [];
          }, 700);
        });
      }
    }
  };

  module.render = ({ src, alt }) => {
    module._style();

    return `

    <div class="memory-card" onClick="memoryCard.handleClick(this)">
    <article class="card -turned">
      <img 
          src='${src}' 
          alt= '${alt}'
          class='icon' >
      </img> 
    </article>
    <article class="card">
    <img 
        src='img/icons/icon-collabcode.png' 
        alt= 'Mascote da CollabCode'
        class='icon' ">
    </img> 
  </article>
  </div>

    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
