let buttonPlus = document.getElementById('plus');
let counterStr = document.getElementById('counter');
console.log(counterStr);
let counter = 0;
let buttonMinus = document.getElementById('minus');
buttonPlus.addEventListener('click', function(){
     counter = counter + 1;  
     counterStr.innerHTML = counter;  
})
buttonMinus.addEventListener('click', function(){
    counter = counter - 1;
    counterStr.innerHTML = counter;
})
