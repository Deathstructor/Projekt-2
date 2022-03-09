let cookieAmount = 0, cookieClick = 1
let cpsAmount = 0, cps = document.querySelector(".cps")

let cookieButton = document.querySelector(".cookieButton")
let cookieCounter = document.querySelector(".cookieCounter")
let timer = document.querySelector(".timer"), goal = document.querySelector(".goal")
let minutes = 4, seconds = 60, cookieGoal = 5000

let buyClicks = document.querySelector(".buy-clicks"), clicksAmount = document.querySelector(".clAmount"), clicksPrice = document.querySelector(".clPrice")
let buyAutoclicker = document.querySelector(".buy-autoclicker"), autoclickerAmount = document.querySelector(".acAmount") , autoclickerPrice = document.querySelector(".acPrice")
let buyGrandma = document.querySelector(".buy-grandma"), grandmaAmount = document.querySelector(".grAmount"), grandmaPrice = document.querySelector(".grPrice")
let buyFarm = document.querySelector(".buy-farm"), farmAmount = document.querySelector(".faAmount"), farmPrice = document.querySelector(".faPrice")
let buyFactory = document.querySelector(".buy-factory"), factoryAmount = document.querySelector(".fcAmount"), factoryPrice = document.querySelector(".fcPrice")
let buyBank = document.querySelector(".buy-bank"), bankAmount = document.querySelector(".baAmount"), bankPrice = document.querySelector(".baPrice")

let clAmount = 1, clPrice = 100
let acAmount = 0, acPrice = 250
let grAmount = 0, grPrice = 1000
let faAmount = 0, faPrice = 5000
let fcAmount = 0, fcPrice = 10000
let baAmount = 0, baPrice = 20000


cookieButton.addEventListener("click", cookie)
buyClicks.addEventListener("click", clicks)
buyAutoclicker.addEventListener("click", autoclicker)
buyGrandma.addEventListener("click", grandma)
buyFarm.addEventListener("click", farm)
buyFactory.addEventListener("click", factory)
buyBank.addEventListener("click", bank)

function cookie() {
    cookieAmount += cookieClick
    cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
}

setInterval(() => {
    cookieAmount += cpsAmount
    cookieCounter.innerHTML = "Cookie amount: " + cookieAmount

    seconds--
    if (seconds > 9) {
        timer.innerHTML = "Time: " + minutes + ":" + seconds
    }
    else if (seconds < 10) {
        timer.innerHTML = "Time: " + minutes + ":0" + seconds
    }

    if (minutes <= 0 && seconds <= 0) {
        if (cookieAmount >= cookieGoal) {
            cookieAmount -= cookieGoal
            cookieGoal *= 2
            goal.innerHTML = "Goal: " + cookieGoal

            minutes = 5
            seconds = 1
        } else {
            seconds = 61
            if (confirm("Game over!\nTry again?")) {
                location.reload()
            }
        }
    }

    if (seconds == 61) {
        seconds++
        timer.innerHTML = "Time: 0:00"
    }

    if (seconds <= 0) {
        minutes -= 1
        seconds += 60
    }
}, 1000)

setInterval(() => {
    if(cookieAmount >= cookieGoal) {
        goal.style.color = "lawngreen"
    } else {
        goal.style.color = "red"
    }

    if (cookieAmount >= clPrice) {
        clicksPrice.style.color = "lawngreen"
    } else {
        clicksPrice.style.color = "red"
    }

    if (cookieAmount >= acPrice) {
        autoclickerPrice.style.color = "lawngreen"
    } else {
        autoclickerPrice.style.color = "red"
    }

    if (cookieAmount >= grPrice) {
        grandmaPrice.style.color = "lawngreen"
    } else {
        grandmaPrice.style.color = "red"
    }

    if (cookieAmount >= faPrice) {
        farmPrice.style.color = "lawngreen"
    } else {
        farmPrice.style.color = "red"
    }

    if (cookieAmount >= fcPrice) {
        factoryPrice.style.color = "lawngreen"
    } else {
        factoryPrice.style.color = "red"
    }

    if (cookieAmount >= baPrice) {
        bankPrice.style.color = "lawngreen"
    } else {
        bankPrice.style.color = "red"
    }
}, 10)

function clicks() {
    if (cookieAmount >= Math.round(clPrice)) {
        cookieAmount -= Math.round(clPrice)
        clPrice *= 1.2
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
        grPrice *= 1.2
        cpsAmount += 10
        grAmount ++
        cps.innerHTML = "CPS: " + cpsAmount
        cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
        grandmaAmount.innerHTML = "Amount: " + grAmount
        grandmaPrice.innerHTML = "Price: " + Math.round(grPrice)
    }
}

function farm() {
    if (cookieAmount >= Math.round(faPrice)) {
        cookieAmount -= Math.round(faPrice)
        faPrice *= 1.2
        cpsAmount += 50
        faAmount ++
        cps.innerHTML = "CPS: " + cpsAmount
        cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
        farmAmount.innerHTML = "Amount: " + faAmount
        farmPrice.innerHTML = "Price: " + Math.round(faPrice)
    }
}

function factory() {
    if (cookieAmount >= Math.round(fcPrice)) {
        cookieAmount -= Math.round(fcPrice)
        fcPrice *= 1.2
        cpsAmount += 100
        fcAmount ++
        cps.innerHTML = "CPS: " + cpsAmount
        cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
        factoryAmount.innerHTML = "Amount: " + fcAmount
        factoryPrice.innerHTML = "Price: " + Math.round(fcPrice)
    }
}

function bank() {
    if (cookieAmount >= Math.round(baPrice)) {
        cookieAmount -= Math.round(baPrice)
        baPrice *= 1.2
        cpsAmount += 250
        baAmount ++
        cps.innerHTML = "CPS: " + cpsAmount
        cookieCounter.innerHTML = "Cookie amount: " + cookieAmount
        bankAmount.innerHTML = "Amount: " + baAmount
        bankPrice.innerHTML = "Price: " + Math.round(baPrice)
    }
}