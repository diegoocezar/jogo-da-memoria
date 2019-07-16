const labelCollabcode = (function() {
  const module = {};

  module._id = 0;

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .label-collabcode.label-${module._id} {
        display: block;
        margin-bottom: 5px;
        margin-left: 5px;
      }
    `;

    $head.insertBefore($style, null);
  };
  module.render = ({ content }) => {
    module._id++;
    module._style();

    return `<label 
              class="label-collabcode label-${module._id}">
              ${content}
            </label>`;
  };

  return {
    render: module.render
  };
})();
