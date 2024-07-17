// setTimeout(()=>{
//     alert("hello ali")
// },2000);
// let timer= setInterval(()=>alert("hai shoh"), 2000)
// setTimeout(()=>{
//     clearInterval(timer)
// }, 10000)
// let count = 5;
// let value = setInterval(setCount, 1000)
// function setCount (){
//     count--
//     alert(count)
//     if(count<=0){
//         clearInterval(value);
//     }
// }








// let timerElement= document.getElementById("timer")
// let startButton= document.getElementById("start")
// let stopButton= document.getElementById("stop")
// let resetButton= document.getElementById("reset")
// let seconds = 0;
// let minute =0;
// let hours=0;
// let intervalId;
// function updateTimer(){
// seconds++
// if(seconds>=60){
//    minute++
//    seconds=0
// }
// if(minute>= 60){
//     hours++
//     minute=0
// }
// timerElement.innerHTML=`${fotmatTime(hours)}:${fotmatTime(minute)}:${fotmatTime(seconds)}`;
// }
// function startTimer (){
//     intervalId= setInterval(updateTimer,1000);
//     startButton.disabled = true;
// }
// function stopTimer(){
//     clearInterval(intervalId);
//     startButton.disabled= false
// }
// startButton.addEventListener("click", startTimer);
// stopButton.addEventListener("click", stopTimer);
// function fotmatTime(time){
//     return time < 10 ? `0${time}` : time;
// }













let timerElement = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;

function updateTimer() {
    seconds++;
    if (seconds >= 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes >= 60) {
        hours++;
        minutes = 0;
    }
    timerElement.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function startTimer() {
    intervalId = setInterval(updateTimer, 1000);
    startButton.disabled = true;
}

function stopTimer() {
    clearInterval(intervalId);
    startButton.disabled = false;
}

function resetTimer() {
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timerElement.innerHTML = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    startButton.disabled = false;
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
