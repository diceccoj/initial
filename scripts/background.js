
//setting localStorage
const themeinput = document.getElementById("bg-theme-input");
if(!localStorage.getItem("background")) {
    localStorage.setItem("background", "nordic");
}


//set body background image to randomly selected image from UnsplashAPI with selected theme
function backgroundChange(bgFilter) {
    const height = window.screen.height;
    const width = window.screen.width;

    document.body.style.backgroundImage = 
        "url(https://source.unsplash.com/" + width + "x" + height + "/?" + bgFilter;
}

backgroundChange(localStorage.getItem("background"));



//Updating theme and localStorage
themeinput.addEventListener("change", () => {
    localStorage.setItem("background", themeinput.value);
    backgroundChange(themeinput.value);
})
