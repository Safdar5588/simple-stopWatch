let startBtn = document.querySelector(".btnStart")
let stopBtn = document.querySelector(".btnStop")
let resetBtn = document.querySelector(".btnReset")
let number = 1;

let output = document.querySelector(".output")
let ans = 0;

function start() {
    ans++;
    output.innerHTML = ans;
}

startBtn.addEventListener("click", function () {
    number = 2;
})

setInterval(function () {
    if (number == 2) {
        start();
    }
}, 1000)

resetBtn.addEventListener("click", function () {
    ans = 0;
    output.innerHTML = ans;
    number = 11
});

let first = 3;
stopBtn.addEventListener("click", function () {
    if (first == 3) {
        stopBtn.innerHTML = "RESUME"
        first = 0
        number = 9
        return
    }
    if (first == 0) {
        stopBtn.innerHTML = "STOP"
        first = 3
        number = 2
    }
})

