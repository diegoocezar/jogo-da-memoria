const signupWrapper = (function() {
  const module = {};

  module.children = () => {
    const $coloredBox = coloredBox.render({
      color: "-red",
      variante: "-first"
    });
    const $secondColoredBox = coloredBox.render({
      color: "-black",
      variante: "-second"
    });

    const $headerCollabcode = headerCollabcode.render();
    const $titleCollabcode = titleCollabcode.render("Criar Conta");
    const $formSignup = formSignup.render();

    return `
      ${$headerCollabcode}
      ${$coloredBox}
      ${$secondColoredBox}
      ${$titleCollabcode}
      ${$formSignup}
    `;
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `

    .signup-wrapper {
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

    .signup-wrapper > .colored-box.-black {
      background-color: #3A4042;
      
    }

    .signup-wrapper > .colored-box.-red {
      background-color: #F25A70;
    }

    .signup-wrapper > .colored-box.-first {
      top: -130px;
      left: -125px;
      transform: rotate(-34deg);
    }

    .signup-wrapper > .colored-box.-second {
      z-index: -2;
      left: -71px;
      top: -114px;
      transform: rotate(-40deg);
    }
    `;

    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `<section class="signup-wrapper">${module.children()}</section>`;
  };

  return {
    render: module.render
  };
})();