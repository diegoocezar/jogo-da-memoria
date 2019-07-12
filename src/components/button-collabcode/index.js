const buttonCollabcode = (function() {
  const module = {};

  module._id = 0;

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
    
      .button-collabcode.button-${module._id} {
        width: 100%;
        height: 40px;
        background-color: #F25A70;
        border-radius: 20px;
        color: #f2f2f2;
        font-weight: bold;
        font-size: .8rem;
        margin-top: 13px;
      }

      .button-collabcode:hover {
        cursor: pointer;
      }
    `;

    $head.insertBefore($style, null);
  };
  module.render = content => {
    module._id++;
    module._style();

    return `
      <input class="button-collabcode button-${
        module._id
      }" type="submit" value="${content}">
    `;
  };

  return {
    render: module.render
  };
})();
