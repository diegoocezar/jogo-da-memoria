const coloredBox = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .colored-box {
        width: 470px;
        height: 305px;
        position: absolute;
        top: 0;
        z-index: -1;
      }
    `;

    $head.insertBefore($style, null);
  };
  module.render = ({ color = "", variante = "" }) => {
    module._style();
    return `
      <div class="colored-box ${color} ${variante}"></div>
    `;
  };
  return {
    render: module.render
  };
})();
