let inputTime = document.getElementById('input-time');;
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let timer = document.getElementById('timer');
let currentTime 

startBtn.addEventListener('click', function(){
    currentTime = Number(inputTime.value);
    let startTimer = setInterval(myTimer, 1000);
    function myTimer(){
        timer.innerHTML = currentTime;
        currentTime = currentTime - 1;  
        if (currentTime < -1) {
            clearInterval(startTimer);
            timer.innerHTML = "Time 's up";
        }
        stopBtn.addEventListener('click', function(){
            clearInterval(startTimer);
            timer.innerHTML = "Stopped";
        })  
    } 
})

