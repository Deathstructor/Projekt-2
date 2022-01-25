let cookieAmount = 0
let cookieIncrease = 1
let cpsAmount = 0
let cookieButton = document.querySelector(".cookieButton")
let cookieCounter = document.querySelector(".cookieCounter")
let buyAutoclicker = document.querySelector(".buy-autoclicker")
let cps = document.querySelector(".cps")
let autoclickerPrice = document.querySelector();

cookieButton.addEventListener("click", cookie)
buyAutoclicker.addEventListener("click", autoclicker)

function cookie() {
    cookieAmount += cookieIncrease
    cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
}

function autoclicker() {
    let price = 20
    if (cookieAmount >= price) {
        cookieAmount -= price
        price *= 1.1
        cpsAmount += 1
        cps.innerHTML = "CPS: " + cpsAmount
        cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
        autoclicker.innerHTML
    }
}