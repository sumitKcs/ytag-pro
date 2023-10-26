const side_bar = document.getElementById("side_bar");
const menu_icon = document.getElementById("menu_icon");
const sidebar_close_button = document.getElementById("sidebar_close_button");
let bottom_menu_items = document.getElementById("bottom_menu_items");
// toggle mobile menu
menu_icon.addEventListener("click", () => {
  side_bar.style.display = "flex";
});

sidebar_close_button.addEventListener("click", () => {
  side_bar.style.display = "none";
});

bottom_menu_items = Array.from(bottom_menu_items.children);
bottom_menu_items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.firstElementChild.style.tran
  
  });

  item.addEventListener("mouseleave", () => {
    item.firstElementChild.style.width = "30px";
    item.firstElementChild.style.height = "30px";
  });
});
