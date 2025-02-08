const digitalClock = document.querySelector(".digital-clock")
const analogClock = document.querySelector(".analog-clock")
let isDigital = true
let different = false

const date = new Date()
let time = date.toString().split(" ")[4]
digitalClock.innerHTML = time

let stopwatchDiv = document.querySelector(".stopwatch-div")
let clockDiv = document.querySelector(".clock-div")
let timerDiv = document.querySelector(".timer-div")

let stopwatchActive = false 
let stopwatchText = document.querySelector(".stopwatch-text")
let  stopwatchBtn = document.querySelector(".btn-stopwatch")
let stopwatchCount = 0.0

/*document.querySelector(".switch-btn").addEventListener("click", function () {
    if (isDigital){
        isDigital = false
        digitalClock.style.display = "block"
        analogClock.style.display = "none"
        this.innerHTML = "Analog"
    }else if (!isDigital){
        digitalClock.style.display = "none"
        analogClock.style.display = "block"
        isDigital = true
        this.innerHTML = "Digital"
    }
})*/
document.querySelector(".stopwatch-switch").addEventListener("click", function() {
    stopwatchDiv.style.display = "block"

    if (clockDiv.style.display !== "none"){
        clockDiv.style.display = "none"
    }
    if (timerDiv.style.display !== "none"){
        timerDiv.style.display = "none"
    }
})
document.querySelector(".main-switch").addEventListener("click", function() {
    clockDiv.style.display = "block"

    if (stopwatchDiv.style.display !== "none"){
        stopwatchDiv.style.display = "none"
    }
    if (timerDiv.style.display !== "none"){
        timerDiv.style.display = "none"
    }
})
document.querySelector(".timer-switch").addEventListener("click", function() {
    timerDiv.style.display = "block"

    if (stopwatchDiv.style.display !== "none"){
        stopwatchDiv.style.display = "none"
    }
    if (clockDiv.style.display !== "none"){
        clockDiv.style.display = "none"
    }
})

function stopwatchFunc (){
    if (stopwatchActive){
        stopwatchCount += 0.1
        count = Math.round(stopwatchCount * 100) / 100
        stopwatchText.innerHTML = stopwatchCount.toString()
    }
    setTimeout(stopwatchFunc, 100)
}

document.querySelector(".btn-stopwatch").addEventListener("click", () =>{
    if (stopwatchActive){
        stopwatchActive = false
        stopwatchBtn.innerHTML = "Start"
    }else if (!stopwatchActive){
        stopwatchActive = true
        stopwatchBtn.innerHTML = "Pause"
        document.querySelector(".stopwatch-reset").style.display = "inline"
    }
})

document.querySelector(".stopwatch-reset").addEventListener("click", () => {
    stopwatchCount = 0.0
    stopwatchText.innerHTML = 0.0
    if (stopwatchActive){
        stopwatchActive = false
    }
    stopwatchBtn.innerHTML = "Start"
    document.querySelector(".stopwatch-reset").style.display = "none"
})

function mainPage(){
    if (isDigital === true){
            let newDate = new Date()
            let newTime = newDate.toString().split(" ")[4]
            digitalClock.innerHTML = newTime
    }else if (isDigital === false){
            let newDate = new Date()
            let newTime = newDate.toString().split(" ")[4]
            analogClock.innerHTML = newTime
    }
    setTimeout(mainPage, 50)
}

mainPage()
stopwatchFunc()

