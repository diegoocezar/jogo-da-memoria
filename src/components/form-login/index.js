const formLogin = (function() {
  const module = {};

  module.children = () => {
    const $emailLogin = inputCollabcode.render({
      type: "email",
      placeholder: "diego.cezar@exemplo.com"
    });

    const $senhaLogin = inputCollabcode.render({
      id: "password",
      type: "password",
      placeholder: "Digite sua senha"
    });

    const $eyePassword = eyeCollabcode.render({
      attrFor: "password"
    });

    const $esqueceuSenha = textCollabcode.render({
      content: "Esqueceu a senha?"
    });

    const $botaoLogin = buttonCollabcode.render({ content: "Entrar" });

    const $criarConta = textCollabcode.render({
      content: "Criar conta grátis"
    });

    return `
      ${$emailLogin}
      ${$senhaLogin}
      ${$eyePassword}
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
        margin-right: auto;
        margin-left: auto;
        width: 40%;
      }

      .form-login > .eye-collabcode {
        right: 25px;
        transform: translateY(-150%);
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
