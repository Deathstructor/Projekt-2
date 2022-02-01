let cookieAmount = 0, cookieClick = 1
let cpsAmount = 0, cps = document.querySelector(".cps")

let cookieButton = document.querySelector(".cookieButton")
let cookieCounter = document.querySelector(".cookieCounter")
let buyAutoclicker = document.querySelector(".buy-autoclicker"), autoclickerAmount = document.querySelector(".acAmount") , autoclickerPrice = document.querySelector(".acPrice")

let acAmount = 0, acPrice = 20;

cookieButton.addEventListener("click", cookie)
buyAutoclicker.addEventListener("click", autoclicker)

function cookie() {
    cookieAmount += cookieClick
    cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
}

setInterval(function () {
    cookieAmount += cpsAmount
    cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
}, 1000)

function autoclicker() {
    if (cookieAmount >= Math.round(acPrice)) {
        cookieAmount -= Math.round(acPrice)
        acPrice *= 1.3
        cpsAmount += 1
        acAmount += 1
        cps.innerHTML = "CPS: " + cpsAmount
        cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
        autoclickerAmount.innerHTML = "Amount: " + acAmount
        autoclickerPrice.innerHTML = "Price: " + Math.round(acPrice)
    }
}
