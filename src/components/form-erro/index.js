const formErro = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
     
      .form-erro {
        margin-top: 40px;
        padding: 0 10px 10px;
        height: 302px;
      }

      .label-collabcode {
        text-align: center;
        padding-top: 22%;
      }

      .button-collabcode {
        margin-top: 45%
      }

      .form-erro > .label-collabcode {
        display: block;
        
      }

    `;

    $head.insertBefore($style, null);
  };

  module._children = () => {
    const $mensagemErro = labelCollabcode.render({
      content: "Vish, página não encontrada!!"
    });

    const $buttonCollabcode = buttonCollabcode.render({
      variacao: "-back",
      content: "Voltar"
    });

    return `
      ${$mensagemErro}
      ${$buttonCollabcode}
    `;
  };

  module.render = () => {
    module._style();

    return `
      <form class="form-erro" action="" method="GET">${module._children()}</form>
    `;
  };

  return {
    render: module.render
  };
})();
