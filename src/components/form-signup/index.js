const formSignup = (function() {
  const module = {};

  module.children = () => {
    const $emailSignup = inputCollabcode.render({
      type: "email",
      placeholder: "diego.cezar@exemplo.com"
    });

    const $senhaSignup = inputCollabcode.render({
      type: "password",
      placeholder: "Digite sua senha"
    });

    const $esqueceuSenha = textCollabcode.render({
      content: "Esqueceu a senha?"
    });

    const $botaoSignup = buttonCollabcode.render({ content: "Cadastrar" });
    const $botaoVoltar = buttonCollabcode.render({
      variacao: "-back",
      content: "Voltar"
    });

    const $criarConta = textCollabcode.render({
      content: "Criar conta grátis"
    });

    return `
      ${$emailSignup}
      ${$senhaSignup}
      ${$esqueceuSenha}
      ${$botaoSignup}
      ${$botaoVoltar}
      ${$criarConta}
    `;
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup {
        margin-top: 40px;
        padding: 0 10px 10px;
      }

      .form-signup > .input-collabcode:first-child {
        margin-bottom: 43px;
      }

      .form-signup > .text-collabcode {
        text-align: center;
        margin-top: 11px;
        margin-bottom: 11px;
        margin-right: auto;
        margin-left: auto;
        width: 40%;
      }

    `;

    $head.insertBefore($style, null);
  };
  module.render = () => {
    module._style();

    return `
      <form class="form-signup" action="" method="POST">${module.children()}</form>
    `;
  };

  return {
    render: module.render
  };
})();
