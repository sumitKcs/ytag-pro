const side_bar = document.getElementById("side_bar");
const menu_icon = document.getElementById("menu_icon");
const sidebar_close_button = document.getElementById("sidebar_close_button");

// toggle mobile menu
menu_icon.addEventListener("click", () => {
  side_bar.style.display = "flex";
});

sidebar_close_button.addEventListener("click", () => {
  side_bar.style.display = "none";
});
