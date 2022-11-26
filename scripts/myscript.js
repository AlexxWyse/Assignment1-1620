const DarkBody = document.body;
const darkThemeContainer = document.querySelector(".darktheme");
const cancelButton = document.querySelector(".cancel");
const Button = document.querySelectorAll("button");
const asideTheme = document.querySelector("aside");
const infoButtons = document.querySelectorAll(".aboutdoc");
const NoteCreate = document.querySelector("#newnote");
const textArea = document.querySelector("textarea");
const AsideList = document.querySelector("ul");
const log = console.log;

let NoteArray = [{
    title: "Note 1",
    body: "this is my first note"
},
{
    title: "Note 2",
    body: "this is my second note"
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
    if (darkThemeContainer.classList.contains("darkthemecancel")) {
        darkThemeContainer.innerText = "Light Theme";
    } else {
        darkThemeContainer.innerText = "Dark Theme";
    }
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
    textArea.value = "";
}

NoteCreate.addEventListener("click", display);

function SaveNote() {
    let usertitle = prompt('What would you like to call this note: ');
    NoteArray.push({title: usertitle, body: textArea.value});
    let ListItem = document.createElement("li");
    let StoreContent = document.createTextNode(usertitle);
    ListItem.appendChild(StoreContent);
    AsideList.appendChild(ListItem);
    log(NoteArray);
}

Button[4].addEventListener("click", SaveNote);

function DisplayNote(e) {
    let licontent = e.target.innerText;
    
    for (let note = 0; note <= NoteArray.length - 1; note++) {
        // if title is = li then display
        if (NoteArray[note].title === licontent) {
            textArea.value = NoteArray[note].body
            // let correctcontent = (note.title[body]);
        }
    }
}

AsideList.addEventListener("click", DisplayNote);


