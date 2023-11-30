let hour = 0
let minute = 0
let second = 0
let millisecond = 0
const h2 = document.querySelector('h2')

let cron
let myCron = ''

function start() {
    pause()
    cron = setInterval(() => {
        timer()
    }, 10)

}


function pause() {
    clearInterval(cron)
}


function reset() {
    hour = 0
    minute = 0
    second = 0
    millisecond = 0

    myCron = `0${hour}:0${minute}:0${second}`

    h2.innerText = myCron
}


function timer() {
    if ((millisecond += 10) == 1000) {
        millisecond = 0
        second++
    }
    if (second == 60) {
        second = 0
        minute++
    }
    if (minute == 60) {
        minute = 0
        hour++
    }
    myCron = `${returnData(hour)}:${returnData(minute)}:${returnData(second)}`

    h2.innerHTML = myCron


}

function returnData(input) {
    return input > 9 ? input : `0${input}`
}





