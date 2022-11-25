const DarkBody = document.body;
const darkThemeContainer = document.querySelector(".darktheme");
const cancelButton = document.querySelector(".cancel");
const Button = document.querySelectorAll("button");
const asideTheme = document.querySelector("aside");
const infoButtons = document.querySelectorAll(".aboutdoc");
const NoteCreate = document.querySelector("#newnote");
const textArea = document.querySelector("textarea");
const AsideList = document.querySelector("ul");
 

let NoteArray = [{
    title: "note one",
    body: "this is my first note"
}];


function DarkTheme() {
    Button[2].classList.toggle("darkthemecancel");
    Button[3].classList.toggle("darkthemecancel");
    Button[4].classList.toggle("darkthemecancel");
    DarkBody.classList.toggle("darkthemebody");
    cancelButton.classList.toggle("darkthemecancel");
    asideTheme.classList.toggle("darkthemeaside");
    infoButtons[0].classList.toggle("darkthemebody");
    infoButtons[1].classList.toggle("darkthemebody");
    textArea.classList.toggle("textareadarktheme");
};

darkThemeContainer.addEventListener("click", DarkTheme);

function hidden() {
    textArea.classList.add("hidden");
    cancelButton.classList.add("hidden");
    Button[4].classList.add("hidden");
}

cancelButton.addEventListener("click", hidden);

function display() {
    textArea.classList.remove("hidden");
    cancelButton.classList.remove("hidden");
    Button[4].classList.remove("hidden");
    textArea.value = "This is a Placeholder. . ."
}

NoteCreate.addEventListener("click", display);

function SaveNote() {
    let usertitle = prompt('What would you like to call this note: ');
    NoteArray.push({title: usertitle, body: textArea.value});
    let ListItem = document.createElement("li");
    let StoreContent = document.createTextNode(usertitle);
    ListItem.appendChild(StoreContent);
    AsideList.appendChild(ListItem);
    console.log(NoteArray);
}

Button[4].addEventListener("click", SaveNote);

function DisplayNote(note) {

}


