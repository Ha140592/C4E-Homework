let upper_btn = document.getElementById ('upper_btn');
console.log(upper_btn);
let name_input = document.getElementById('name_input');
console.log(name_input);
let result_div = document.getElementById('result_div')
console.log(result_div);

upper_btn.addEventListener('click', function(){
    console.log("Upper it!!! just clicked");
    console.log("User's name: ", name_input.value);
    console.log("User name uppercase: ", name_input.value.toUpperCase());
    result_div.innerHTML = name_input.value.toUpperCase();
})

