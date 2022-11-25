const DarkBody = document.body;
const darkThemeContainer = document.querySelector(".darktheme");
const cancelButton = document.querySelector(".cancel");
const saveButton = document.querySelector("button");
const asideTheme = document.querySelector("aside");



let DarkTheme = () => {
    DarkBody.classList.toggle("darkthemebody");
    cancelButton.classList.toggle("darkthemecancel");
    saveButton.classList.toggle("darkthemebutton");
    asideTheme.classList.toggle("darkthemeaside");
};

darkThemeContainer.addEventListener("click", DarkTheme);