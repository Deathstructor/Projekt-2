let cookieAmount = 0, cookieClick = 1
let cpsAmount = 0, cps = document.querySelector(".cps")

let cookieButton = document.querySelector(".cookieButton"), cookieImg = document.querySelector(".cookieImg")
let cookieCounter = document.querySelector(".cookieCounter")
let timer = document.querySelector(".timer"), goal = document.querySelector(".goal")
let minutes = 4, seconds = 60, cookieGoal = 5000

let buyClicks = document.querySelector(".buy-clicks"), clicksAmount = document.querySelector(".clAmount"), clicksPrice = document.querySelector(".clPrice")
let buyAutoclicker = document.querySelector(".buy-autoclicker"), autoclickerAmount = document.querySelector(".acAmount") , autoclickerPrice = document.querySelector(".acPrice")
let buyGrandma = document.querySelector(".buy-grandma"), grandmaAmount = document.querySelector(".grAmount"), grandmaPrice = document.querySelector(".grPrice")

let clAmount = 0, clPrice = 150
let acAmount = 0, acPrice = 500
let grAmount = 0, grPrice = 1500


cookieButton.addEventListener("click", cookie)
buyClicks.addEventListener("click", clicks)
buyAutoclicker.addEventListener("click", autoclicker)
buyGrandma.addEventListener("click", grandma)

function cookie() {
    cookieAmount += cookieClick
    cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
}

setInterval(function() {
    cookieAmount += cpsAmount
    cookieCounter.innerHTML = "Cookie amount: " + cookieAmount



    seconds -= 1
    if (seconds > 9) {
        timer.innerHTML = "Time: " + minutes + ":" + seconds
    }
    else if (seconds < 10) {
        timer.innerHTML = "Time: " + minutes + ":0" + seconds
    }

    if (seconds == 0) {
        minutes -= 1
        seconds += 60
    }

    if (minutes == 0) {
        if (cookieAmount >= cookieGoal) {
            cookieAmount -= cookieGoal
            cookieGoal *= 3
            goal.innerHTML = "Goal: " + cookieGoal
        }
    }
}, 1000)

function clicks() {
    if (cookieAmount >= Math.round(clPrice)) {
        cookieAmount -= Math.round(clPrice)
        clPrice *= 1.35
        cookieClick += 1
        clAmount ++
        cps.innerHTML = "CPS: " + cpsAmount
        cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
        clicksAmount.innerHTML = "Amount: " + clAmount
        clicksPrice.innerHTML = "Price: " + Math.round(clPrice)
    }
}

function autoclicker() {
    if (cookieAmount >= Math.round(acPrice)) {
        cookieAmount -= Math.round(acPrice)
        acPrice *= 1.35
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