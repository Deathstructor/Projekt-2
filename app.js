let cookieAmount = 0, cookieClick = 1
let cpsAmount = 0, cps = document.querySelector(".cps")

let cookieButton = document.querySelector(".cookieButton"), cookieImg = document.querySelector(".cookieImg")
let cookieCounter = document.querySelector(".cookieCounter")
let buyAutoclicker = document.querySelector(".buy-autoclicker"), autoclickerAmount = document.querySelector(".acAmount") , autoclickerPrice = document.querySelector(".acPrice")
let buyGrandma = document.querySelector(".buy-grandma"), grandmaAmount = document.querySelector(".grAmount"), grandmaPrice = document.querySelector(".grPrice")

let acAmount = 0, acPrice = 20
let grAmount= 0, grPrice = 200

cookieButton.addEventListener("click", cookie)
buyAutoclicker.addEventListener("click", autoclicker)
buyGrandma.addEventListener("click", grandma)

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
        acPrice *= 1.2
        cpsAmount += 1
        acAmount ++
        cps.innerHTML = "CPS: " + cpsAmount
        cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
        autoclickerAmount.innerHTML = "Amount: " + acAmount
        autoclickerPrice.innerHTML = "Price: " + Math.round(acPrice)
    }
}

function grandma() {
    if (cookieAmount >= Math.round(grPrice)) {
        cookieAmount -= Math.round(grPrice)
        grPrice *= 1.35
        cpsAmount += 10
        grAmount ++
        cps.innerHTML = "CPS: " + cpsAmount
        cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
        grandmaAmount.innerHTML = "Amount: " + grAmount
        grandmaPrice.innerHTML = "Price: " + Math.round(grPrice)
    }
}