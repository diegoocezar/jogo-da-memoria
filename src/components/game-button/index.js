const gameButton = (function() {
  const module = {};

  module._id = 0;

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `

      .game-button-${module._id} {
        width: 84px;
        height: 84px;
        position: absolute;
        border-radius: 20px;
        color: #fffcee;
        border: 3px solid #fffcee;
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
        box-shadow: 0px 4px 8px #3a4042;
        transition: opacity 600ms linear, transform 500ms linear;
        z-index: 1;
      }

      .game-button-${module._id}:hover {
        animation: move 800ms infinite;
      }

      .game-button-${module._id}.-start {
        bottom: 55%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #27ae60;
      }
      
      .game-button-${module._id}.-start:hover {
        background-color: #2E8B57;
      }

      
      
      .game-button-${module._id}.-exit {
        bottom: 35%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #f25a70;
      }

      .game-button-${module._id}.-exit:hover {
        background-color: #992c3c;
        
      }

      .game-button-${module._id}.-back {
        bottom: 75%;
        left: 50%;
        transform: translateX(-50%);
        background-color: #e67e22;
      }

      .game-button-${module._id}.-return:hover {
        background-color: #ff7f50;
        
      }

      .game-button-${module._id}.-pause {
        width: 23%;
        height: 6%;
        top: 4px;
        left: 12%;
        font-size: 1rem;
        transform: translateX(-50%);
        background-color: #e67e22;
      }

      .game-button-${module._id}.-pause:hover {
        background-color: #8f592a;
        animation: none;
      }
  
      @keyframes move {
        o%   { transform: translateX(-50%);}
        50%  { transform: translateX(-50%) translateY(-10%);}
        100% { transform: translateX(-50%);}
      }

      .game-button-${module._id}.-blur {
        opacity: 0;
        animation: none;
        
      }
    `;

    $head.insertBefore($style, null);
  };

  module.handleClick = ($component, path, event) => {
    const $gameLayer = document.querySelector(".game-layer");

    const $pauseButton = document.querySelector(".-pause");
    const $backButton = document.querySelector(".-back");

    switch (path) {
      case "start":
        event.preventDefault();
        $component.classList.remove("-button");
        const $button = document.querySelector(".-button");
        $component.classList.add("-blur");
        $button.classList.add("-blur");
        $gameLayer.classList.add("-blur");
        setTimeout(() => {
          $component.remove();
          $button.remove();
          $gameLayer.remove();
          scoreBar.timer(59);
        }, 800);
        break;
      case "exit":
        window.location.hash = `#/nivel`;
        window.location.reload();
        break;
      case "pause":
        event.preventDefault();
        $pauseButton.classList.add("-paused");
        pauseGame();
        break;
      case "back":
        event.preventDefault();
        // const $pauseButton = document.querySelector(".-pause");
        $component.classList.remove("-button");

        $component.classList.add("-blur");
        $backButton.classList.add("-blur");
        $gameLayer.classList.add("-blur");
        $pauseButton.classList.remove("-paused");

        scoreBar.timer(store.tempoPausado);
        setTimeout(() => {
          $component.remove();
          $backButton.remove();
          $gameLayer.remove();
        }, 800);
        break;
      default:
        window.location.hash = `#/${path}`;
        window.location.reload();
        break;
    }
    // if (path == "start") {
    //   event.preventDefault();
    //   const $gameLayer = document.querySelector(".game-layer");
    //   $component.classList.remove("-button");
    //   const $button = document.querySelector(".-button");

    //   $component.classList.add("-blur");
    //   $button.classList.add("-blur");
    //   $gameLayer.classList.add("-blur");
    //   setTimeout(() => {
    //     $component.remove();
    //     $button.remove();
    //     $gameLayer.remove();
    //     scoreBar.timer();
    //   }, 800);
    // } else if (path == "exit") {
    //   window.location.hash = `#/nivel`;
    //   window.location.reload();
    // } else {
    //   window.location.hash = `#/${path}`;
    //   window.location.reload();
    // }

    // if (path != "undefined") {
    //   window.location.hash = `#/${path}`;
    //   window.location.reload();
    // } else {
    //   event.preventDefault();
    //   const $gameLayer = document.querySelector(".game-layer");
    //   $component.classList.remove("-button");
    //   const $button = document.querySelector(".-button");

    //   $component.classList.add("-blur");
    //   $button.classList.add("-blur");
    //   $gameLayer.classList.add("-blur");
    //   setTimeout(() => {
    //     $component.remove();
    //     $button.remove();
    //     $gameLayer.remove();
    //     scoreBar.timer();
    //   }, 800);
    // }
  };

  module.render = ({ buttonClass, content, path }) => {
    module._id++;
    module._style();
    return `
      <input class="game-button-${
        module._id
      } ${buttonClass} -button" type="submit" value="${content}" onClick="gameButton.handleClick(this, '${path}', event)">
    `;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
