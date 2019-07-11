const formLogin = (function() {
  const module = {};

  module.children = () => {
    const $inputCollabcode = inputCollabcode.render({
      type: "email",
      placeholder: "diego.cezar@exemplo.com"
    });

    return `
      ${$inputCollabcode}
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
