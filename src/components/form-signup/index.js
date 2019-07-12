const formSignup = (function() {
  const module = {};

  module.children = () => {
    const $nomeSignup = inputCollabcode.render({
      placeholder: "Seu nome"
    });
    const $emailSignup = inputCollabcode.render({
      type: "email",
      placeholder: "Seu email"
    });

    const $senhaSignup = inputCollabcode.render({
      id: "password",
      type: "password",
      placeholder: "Informe uma senha"
    });

    const $confirmaSenha = inputCollabcode.render({
      id: "confirmPassword",
      type: "password",
      placeholder: "Repita sua senha"
    });

    const $eyePassword = eyeCollabcode.render({
      attrFor: "password"
    });

    const $eyeConfirmPassword = eyeCollabcode.render({
      attrFor: "confirmPassword"
    });

    const $botaoSignup = buttonCollabcode.render({ content: "Cadastrar" });
    const $botaoVoltar = buttonCollabcode.render({
      variacao: "-back",
      content: "Voltar"
    });

    return `
      ${$nomeSignup}
      ${$emailSignup}
      ${$senhaSignup}
      ${$eyePassword}
      ${$confirmaSenha}
      ${$eyeConfirmPassword}
      ${$botaoSignup}
      ${$botaoVoltar}
      
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

      .form-signup > .input-collabcode {
        margin-bottom: 9px;
      }

      .form-signup > .eye-collabcode {
      right: 25px;
      transform: translateY(-190%);
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
