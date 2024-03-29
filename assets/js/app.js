const side_bar = document.getElementById("side_bar");
const menu_icon = document.getElementById("menu_icon");
const sidebar_close_button = document.getElementById("sidebar_close_button");
let bottom_menu_items = document.getElementById("bottom_menu_items");
const paste_button = document.getElementById("paste_button");
const clear_button = document.getElementById("clear_button");
const youtube_title = document.getElementById("youtube_title");
const copy_youtube_title_button = document.getElementById(
  "copy_youtube_title_button"
);
const youtube_description = document.getElementById("youtube_description");
const copy_youtube_description_button = document.getElementById(
  "copy_youtube_description_button"
);

const tag_checkboxes = document.querySelectorAll('input[type="checkbox"]');
const copy_all_tag_button = document.getElementById("copy_all_tag_button");
const copy_selected_tag_button = document.getElementById(
  "copy_selected_tag_button"
);
// toggle mobile menu
menu_icon.addEventListener("click", () => {
  side_bar.style.display = "flex";
});

sidebar_close_button.addEventListener("click", () => {
  side_bar.style.display = "none";
});

// paster from clipboard
document.addEventListener("DOMContentLoaded", () => {
  if (paste_button) {
    paste_button.addEventListener("click", () => {
      navigator.clipboard.readText().then(
        (cliptext) =>
          (document.getElementById("search_input").value = cliptext),
        (err) => console.log(err)
      );
    });
  }
  if (clear_button) {
    clear_button.addEventListener("click", () => {
      document.getElementById("search_input").value = "";
    });
  }
});

// copy from clipboard

document.addEventListener("DOMContentLoaded", function () {
  // yotube title
  if (copy_youtube_title_button) {
    copy_youtube_title_button?.addEventListener("click", function () {
      navigator.clipboard.writeText(youtube_title.innerText).then(
        (success) => {
          console.log("text copied");
          copy_youtube_title_button.innerText = "Copied!";
        },
        (err) => console.log("error copying text")
      );
    });
  }
  // youtube desciption
  if (copy_youtube_description_button) {
    copy_youtube_description_button?.addEventListener("click", function () {
      navigator.clipboard.writeText(youtube_description.innerText).then(
        (success) => {
          console.log("text copied");
          copy_youtube_description_button.innerText = "Copied!";
        },
        (err) => console.log("error copying text")
      );
    });
  }

  // youtube all tags
  if (tag_checkboxes) {
    if (copy_all_tag_button) {
      copy_all_tag_button?.addEventListener("click", function () {
        const checkboxesValues = Array.from(tag_checkboxes)
          .map((checkbox) => checkbox.value)
          .join("\n");
        navigator.clipboard.writeText(checkboxesValues).then(
          (success) => {
            console.log("text copied", checkboxesValues);
            copy_all_tag_button.innerText = "Copied!";
          },
          (err) => console.log("error copying text")
        );
      });
    }
  }

  // youtube selected tags
  if (tag_checkboxes) {
    if (copy_selected_tag_button) {
      copy_selected_tag_button?.addEventListener("click", function () {
        const tag_checkboxes_checked = document.querySelectorAll(
          'input[type="checkbox"]:checked'
        );
        const checkboxesValues = Array.from(tag_checkboxes_checked)
          .map((checkbox) => checkbox.value)
          .join("\n");
        navigator.clipboard.writeText(checkboxesValues).then(
          (success) => {
            console.log("text copied", checkboxesValues);
            copy_selected_tag_button.innerText = "Copied!";
          },
          (err) => console.log("error copying text")
        );
      });
    }
  }
});

//  youtube description
