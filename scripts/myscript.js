const DarkBody = document.body;
const darkThemeContainer = document.querySelector(".darktheme");
const cancelButton = document.querySelector(".cancel");
const Button = document.querySelectorAll("button");
const asideTheme = document.querySelector("aside");
const infoButtons = document.querySelectorAll(".aboutdoc");
const NoteCreate = document.querySelector("#newnote");




let NoteSet = []


function DarkTheme() {
    Button[2].classList.toggle("darkthemebutton")
    Button[3].classList.toggle("darkthemebutton")
    Button[4].classList.toggle("darkthemebutton")
    DarkBody.classList.toggle("darkthemebody");
    cancelButton.classList.toggle("darkthemecancel");
    asideTheme.classList.toggle("darkthemeaside");
    infoButtons[0].classList.toggle("darkthemebody");
    infoButtons[1].classList.toggle("darkthemebody");
};

darkThemeContainer.addEventListener("click", DarkTheme);

function createNote() {

}
