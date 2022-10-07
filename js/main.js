// Write your DOM code here!


let red = document.querySelector(`.red`)

red.addEventListener(`click`, () => {
    document.body.classList.toggle(`red`)
})

let white = document.querySelector(`.white`)

white.addEventListener(`click`, () => {
    document.body.classList.toggle(`white`)
})

let blue = document.querySelector(`.blue`)

blue.addEventListener(`click`, () => {
    document.body.classList.toggle(`blue`)
})

let yellow = document.querySelector(`.yellow`)

yellow.addEventListener(`click`, () => {
    document.body.classList.toggle(`yellow`)
})

let grad = document.querySelector(`.gradient`)

grad.addEventListener(`click`, () => {
    document.body.classList.toggle(`gradient`)
})

