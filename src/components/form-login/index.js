const formLogin = (function() {
  const module = {};

  module.children = () => {
    const $emailLogin = inputCollabcode.render({
      type: "email",
      placeholder: "diego.cezar@exemplo.com"
    });

    const $senhaLogin = inputCollabcode.render({
      type: "password",
      placeholder: "Digite sua senha"
    });

    const $esqueceuSenha = textCollabcode.render({
      content: "Esqueceu a senha?"
    });

    const $botaoLogin = buttonCollabcode.render("Entrar");

    const $criarConta = textCollabcode.render({
      content: "Criar conta grátis"
    });

    return `
      ${$emailLogin}
      ${$senhaLogin}
      ${$esqueceuSenha}
      ${$botaoLogin}
      ${$criarConta}
    `;
  };

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login {
        margin-top: 40px;
        padding: 0 10px 10px;
      }

      .form-login > .input-collabcode:first-child {
        margin-bottom: 43px;
      }

      .form-login > .text-collabcode {
        text-align: center;
        margin-top: 11px;
        margin-bottom: 11px;
      }

    `;

    $head.insertBefore($style, null);
  };
  module.render = () => {
    module._style();

    return `
      <form class="form-login" action="" method="GET">${module.children()}</form>
    `;
  };

  return {
    render: module.render
  };
})();
