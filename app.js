
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
       
function timer(){
    if(hours.value == 0 && minutes.value == 0 && seconds.value == 0){
        hours.value = 0;
        minutes.value = 0;
        seconds.value = 0;
    } else if(seconds.value != 0){
        seconds.value--;
    } else if(minutes.value != 0 && seconds.value == 0){
        seconds.value = 59;
        minutes.value--;
    } else if(hours.value != 0 && minutes.value == 0){
        minutes.value = 60;
        hours.value--;
    }  

    // if(hours < 10){
    //     hours = "0" + hours;
    // }
   
    // hours = hours < 10 ? "0" + hours : hours;
    // minutes = minutes < 10 ? "0" + minutes : minutes;
    // seconds = seconds < 10 ? "0" + seconds : seconds;
}

function start(){
    setInterval(timer, 1000);
}

function reset(){
    location.reload();
}