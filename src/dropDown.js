const dropDown = (() => {
  const drawArea = document.createElement("div");
  drawArea.setAttribute("class", "whole-page");
  document.getElementById("content").appendChild(drawArea);

  const menuButton = document.createElement("div");
  menuButton.setAttribute("class", "menu");
  menuButton.innerText = "Menu";
  drawArea.appendChild(menuButton);

  const menuItems = document.createElement("div");
  menuItems.setAttribute("class", "menu-items");
  drawArea.appendChild(menuItems);

  menuButton.addEventListener("click", () => {
    menuItems.classList.toggle("visible");
  });

  for (let i = 0; i < 3; ++i) {
    let temp = document.createElement("div");
    temp.setAttribute("class", "menu-item");
    temp.innerHTML = `<a href="https://google.com">Item${i + 1}</a>`;
    menuItems.appendChild(temp);
  }

  window.onclick = function (event) {
    if (!event.target.matches(".menu")) {
      var dropdowns = document.getElementsByClassName("menu-items");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("visible")) {
          openDropdown.classList.remove("visible");
        }
      }
    }
  };
})();

export default dropDown;
