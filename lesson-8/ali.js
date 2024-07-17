let number = document.querySelector(".number")
let red = document.querySelector(".red")
let green = document.querySelector(".green")
let number1 = document.querySelector(".number1")
let red1= document.querySelector(".red1")
let green1 = document.querySelector(".green1")
let yellow = document.querySelector(".yellow")
let traffic1 = document.querySelector(".traffic1")
let timer = 15
function getTimer(){
    timer--;
    if(timer<= 0){
        red.style.backgroundColor = red.style.backgroundColor == "black" ? "red": "black";
        green.style.backgroundColor = green.style.backgroundColor == "green" ? "black": "green";

        red1.style.backgroundColor = red.style.backgroundColor == "red" ? "black": "red";
        green1.style.backgroundColor = green.style.backgroundColor == "black" ? "green": "black";
        timer=15
    }else if (timer<=3){
        yellow.style.backgroundColor = yellow.style.backgroundColor == "yellow" ? "red": "yellow";
        traffic1.style.backgroundColor= traffic1.style.backgroundColor == "yellow" ? "red": "yellow";
    }else{
 
    }
    number.innerHTML= timer
    number1.innerHTML= timer
}
setInterval(getTimer,1000);


