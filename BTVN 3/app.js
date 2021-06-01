//1
/*let clothing = ["Jean", "T-Shirt", "Socks"];
let request = prompt("Hi there, welcome to shop admin panel, what do you want(C, R, U, D)?");
if (request == "r") {
    console.log(clothing);
} else if (request == "c") {
    let newItem = prompt("Enter the name of new item");
    clothing.push("newItem");
    alert("Done");
    
}  else if (request == "u") {
    let indexStr = prompt("Enter the position you want to update");
    let index = Number(indexStr);
    let newName = prompt("Enter the new name");
    clothing[index] = newName;
    alert("Done");
    
} else if (request == "d") {
    let indexStr = prompt("Enter the position you want to delete");
    let index = Number(indexStr);
    clothing.splice (index, 1);
    alert("Done");
    
} else {
    alert("This command is not support");
}

let request2 = prompt("Hi there, welcome to shop admin panel, what do you want(C, R, U, D)?");
if (request2 == "r") {
    console.log(clothing);
}


//2.1
let arr = [3, 4, 6, -9, 10,  -88, 2];
let sumArr = 0;
for (let i = 0; i < arr.length; i++) {
    sumArr = sumArr + arr[i];   
}
console.log(sumArr);

//2.2
let positives = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
        positives.push(arr[i]) ;   
    }
}
console.log ("Số các số dương của mảng arr: ", positives.length);

//2.3
let numberStr = prompt("Enter a number");
let number = Number(numberStr);
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == number) {
        alert(numberStr + ` is FOUND in my array at index ${i}`) ;   
    } 
}
alert(numberStr + " is NOT FOUND in my array");

//3
let str = "1 2 3 4 5 6";
let arr = str.split(" ") ;
console.log(arr);

//4
let str = prompt(`Enter a sequence of number, separated by ","`);
let arr = str.split(",");
console.log(arr);

let min = arr[0];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
        min = a[i];
    }
}
alert(`The smallest number is ${min}`);


//5
let str = prompt('Nhập danh sách');
let arr = str.split(",");
console.log(arr);
let upperNames = []
for (let i = 0; i < arr.length; i++) {
    let upperName = arr[i].toUpperCase();
    upperNames.push(upperName);
}
alert(upperNames);
*/

//6
let str = prompt("Nhập dãy số: ");
let arr = str.split(",");
console.log(arr);
let oddArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
        oddArr.push(arr[i]);
    }
}
alert(oddArr);

