
//toggle settings button on/off
const button = document.getElementById("settings-button");
const tray = document.querySelector(".settings-tray-section");

button.addEventListener("click", () => {
    button.classList.toggle("active");
    tray.classList.toggle("active");
})


//changes appearance based on settings
const theme = document.getElementById("global-theme");
const layout = document.getElementById("global-layout");
const widgetbody = document.getElementById("widget-body");
const widgets = document.querySelectorAll(".widget");
const weatherapp = document.querySelector(".weather-app");
const mainsection = document.getElementById("main-section");


//setting localStorage
if(!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
    localStorage.setItem("layout", "center");
}

//change startup settings based on localStorage (dark/center are default)
if(localStorage.getItem("theme") == "light") {
    for(i=0; i<5; i++) {
        widgets[i].classList.add("widget-light");
    }
    theme.value = "light";
}

if(localStorage.getItem("layout") == "left") {
    widgetbody.classList.remove("even-columns");
    widgetbody.classList.add("main-section-left-layout");
    weatherapp.classList.add("weather-app-left-layout");
    layout.value = "left";
}

//dark/light theme
theme.addEventListener("change", () => {
    if (theme.value == "dark") {
        for(i=0; i<5; i++) {
            widgets[i].classList.remove("widget-light");
        }
        localStorage.setItem("theme", "dark");
    }
    else {
        for(i=0; i<5; i++) {
            widgets[i].classList.add("widget-light");
        }
        localStorage.setItem("theme", "light");
    }
})

//widget alignment
layout.addEventListener("change", () => {
    if (layout.value == "center") {
        widgetbody.classList.add("even-columns");
        widgetbody.classList.remove("main-section-left-layout");
        weatherapp.classList.remove("weather-app-left-layout");
        localStorage.setItem("layout", "center");
    }
    else {
        widgetbody.classList.remove("even-columns");
        widgetbody.classList.add("main-section-left-layout");
        weatherapp.classList.add("weather-app-left-layout");
        localStorage.setItem("layout", "left");
    }
})

