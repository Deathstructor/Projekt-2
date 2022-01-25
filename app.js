let cookieAmount = 0
let cookieClick = 1
let cpsAmount = 0
let cookieButton = document.querySelector(".cookieButton")
let cookieCounter = document.querySelector(".cookieCounter")
let buyAutoclicker = document.querySelector(".buy-autoclicker")
let cps = document.querySelector(".cps")
let autoclickerPrice = document.querySelector(".autoclicker h3");

let acPrice = 20;

cookieButton.addEventListener("click", cookie)
buyAutoclicker.addEventListener("click", autoclicker)

function cookie() {
    cookieAmount += cookieClick
    cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
}

function autoclicker() {
    if (cookieAmount >= Math.round(acPrice)) {
        cookieAmount -= Math.round(acPrice)
        acPrice *= 1.1
        cpsAmount += 1
        cps.innerHTML = "CPS: " + cpsAmount
        cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
        autoclickerPrice.innerHTML = "Price: " + Math.round(acPrice)
    }
    console.log("Autoclicker " + acPrice)
}