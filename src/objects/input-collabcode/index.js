const inputCollabcode = (function() {
  const module = {};

  module._id = 0;

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-collabcode-${module._id}{
        width: 100%;
        height: 40px;
        font-size: .8rem;
        border-radius: 20px;
        border: 1px #000 solid;
        color: #000;
        text-align: center;
      }

      .input-collabcode-${module._id}+a{
        margin-top: 43px;
      }
    `;

    $head.insertBefore($style, null);
  };
  module.render = ({ type = "text", placeholder = "" }) => {
    module._id++;
    module._style();
    return `
      <input class="input-collabcode-${
        module._id
      }" type="${type}" placeholder="${placeholder}">
    `;
  };

  return {
    render: module.render
  };
})();
