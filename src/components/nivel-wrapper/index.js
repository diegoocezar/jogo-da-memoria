const nivelWrapper = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `

    .nivel-wrapper {
      width: 100vw;
      height: 100vh;
      max-width: 375px;
      box-sizing: border-box;
      overflow-x: hidden;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      background-color: #e5e5e5;
      border: 1px #3A4042 solid;
      z-index: 0;
    }

    .nivel-wrapper > .colored-box.-black {
      background-color: #3A4042;
      
    }

    .nivel-wrapper > .colored-box.-red {
      background-color: #F25A70;
    }

    .nivel-wrapper > .colored-box.-first {
      top: -130px;
      left: -125px;
      transform: rotate(-34deg);
    }

    .nivel-wrapper > .colored-box.-second {
      z-index: -2;
      left: -71px;
      top: -114px;
      transform: rotate(-40deg);
    }
    `;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $coloredBox = coloredBox.render({
      color: "-black",
      variante: "-first"
    });
    const $secondColoredBox = coloredBox.render({
      color: "-red",
      variante: "-second"
    });

    const $headerCollabcode = headerCollabcode.render();
    const $titleCollabcode = titleCollabcode.render("Dificuldade");
    const $formNivel = formNivel.render();

    return `
      ${$headerCollabcode}
      ${$coloredBox}
      ${$secondColoredBox}
      ${$titleCollabcode}
      ${$formNivel}
    `;
  };

  module.render = () => {
    module._style();

    return `<section class="nivel-wrapper">${module._children()}</section>`;
  };

  return {
    render: module.render
  };
})();