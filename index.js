/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const sizeInputEl = document.getElementById("size-input")
const convertBtn = document.getElementById("convert-btn")
const lengthCalcEl = document.getElementById("length-calc")
const volumeCalcEl = document.getElementById("volume-calc")
const massCalcEl = document.getElementById("mass-calc")
const lengthMultiplier = 3.281
const volumeMultiplier = 0.264
const massMultiplier = 2.204

let meterResult = 0
let feetResult = 0
let literResult = 0
let gallonResult = 0
let kiloResult = 0
let poundResult = 0


convertBtn.addEventListener("click", function() {
    let sizeInput = parseFloat(sizeInputEl.value)
    calcLength(sizeInput)
    calcVolume(sizeInput)
    calcMass(sizeInput)
})

function calcLength(size) {
    meterResult = (size / lengthMultiplier).toFixed(3)
    feetResult = (size * lengthMultiplier).toFixed(3)
    lengthCalcEl.textContent = `${size} meters = ${feetResult} feet | ${size} feet = ${meterResult} meters`
}

function calcVolume(size) {
    literResult = (size / volumeMultiplier).toFixed(3)
    gallonResult = (size * volumeMultiplier).toFixed(3)
    volumeCalcEl.textContent = `${size} liters = ${gallonResult} gallons | ${size} gallons = ${literResult} liters`
}

function calcMass(size) {
    kiloResult = (size / massMultiplier).toFixed(3)
    poundResult = (size * massMultiplier).toFixed(3)
    massCalcEl.textContent = `${size} kilos = ${poundResult} pounds | ${size} pounds = ${kiloResult} kilos`
}