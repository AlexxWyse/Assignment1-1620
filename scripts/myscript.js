const DarkBody = document.body;
const darkThemeContainer = document.querySelector(".darktheme");
const cancelButton = document.querySelector(".cancel");
const Button = document.querySelectorAll("button");
const asideTheme = document.querySelector("aside");
const infoButtons = document.querySelectorAll(".aboutdoc");
const NoteCreate = document.querySelector("#newnote");
const textArea = document.querySelector("textarea");

let NoteSet = [];


function DarkTheme() {
    Button[2].classList.toggle("darkthemecancel");
    Button[3].classList.toggle("darkthemecancel");
    Button[4].classList.toggle("darkthemecancel");
    DarkBody.classList.toggle("darkthemebody");
    cancelButton.classList.toggle("darkthemecancel");
    asideTheme.classList.toggle("darkthemeaside");
    infoButtons[0].classList.toggle("darkthemebody");
    infoButtons[1].classList.toggle("darkthemebody");
    textArea.classList.toggle("darkthemebutton");
};

darkThemeContainer.addEventListener("click", DarkTheme);

function display() {
    textArea.classList.add("hidden");
    cancelButton.classList.add("hidden");
    Button[4].classList.add("hidden");
}

cancelButton.addEventListener("click", display);