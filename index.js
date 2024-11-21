let startBtn = document.querySelector(".btnStart")
let stopBtn = document.querySelector(".btnStop")
let resetBtn = document.querySelector(".btnReset")
let output = document.querySelector(".output")
let num = document.querySelector(".min")
let mSec = document.querySelector(".mSec")
let ans = 0;
let ans2 = 0;
let msec = 0;
let number = 1
let first = 3;
let value = 0;


function start() {
    msec++
    mSec.innerHTML = msec
    if (msec == 10) {
        msec = 0
        ans++
        output.innerHTML = ans
        if (ans == 60) {
            ans = 0
            ans2++
            num.innerHTML = ans2
        }
    }
}

let second = 2;
startBtn.addEventListener("click", function () {
    if (second == 2) {
        number = 2;
        second = 0;
        value = 1
        return
    }
})

setInterval(function () {
    if (number == 2) {
        start();
    }
}, 100)

resetBtn.addEventListener("click", function () {
    ans = 0;
    ans2 = 0;
    msec = 0
    output.innerHTML = ans;
    num.innerHTML = ans2;
    mSec.innerHTML = msec
    number = 11
    stopBtn.innerHTML = "STOP"
    second = 2;
});


stopBtn.addEventListener("click", function () {
    if (value == 1) {
        if (first == 3) {
            stopBtn.innerHTML = "RESUME"
            number = 9
            first = 0
            return
        }
        if (first == 0) {
            stopBtn.innerHTML = "STOP";
            number = 2
            first = 3
        }
    }
})

