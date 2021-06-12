let btn1 = document.getElementById('button-1');
btn1.addEventListener('click', function(event) {
       console.log(event.target);
});
let name_input = document.getElementById('name_input')
name_input.addEventListener('keydown', function(event) {
       console.log(event.key);
})