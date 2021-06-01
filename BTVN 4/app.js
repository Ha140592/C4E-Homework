
1
/*let dictionary = {
    debug: "The process of figuring out why your program has a certain error and how to fix it",
    done: "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
    defect: "The formal word for ‘error’",
    pm: "The short version  of Project Manager, the person in charge of the final result of a project",
    uiux: "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"

}
console.log(dictionary);
1.1
while(true) {
    alert("Hi there, this is dev dictionary");
    let keyword = prompt("Enter a keyword");
    if (dictionary[keyword] === undefined) {
        alert(`We could not find your word: ${keyword}`);
        } else {
            alert(dictionary[keyword]);
        }
}

1.2
while(true) {
    alert("Hi there, this is dev dictionary");
    let keyword = prompt("Enter a keyword");
    if (dictionary[keyword] === undefined) {
        let value = prompt(`We could not find your word: ${keyword}, leave your explanation`);
        dictionary[keyword] = value;
        alert("Done");
        console.log(dictionary);
        } else {
            alert(dictionary[keyword]);
        }
}

//2.
//2.1. Biến x có giá trị property
//2.2.
const product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white',
};
for (let x in product) {
    console.log(`${x}: ${product[x]}`);
}
*/
//3
let product1 = {
    Name: 'Xiaomi portable charger 20000mah',
    Price: 428,
    Brand: 'Xiaomi',
    Color:'white',
    Category:'charger'
};
let product2 = {
    Name: 'VSmart Active 1',
    Price: 5487,
    Brand: 'VSmart',
    Color: 'black',
    Category: 'phone'
};
let product3 = {
    Name: 'IphoneX',
    Price: 214900,
    Brand: 'Apple',
    Color: 'gray',
    Category:'phone'
};
let product4 = {
    Name: 'Samsung Galaxy A9',
    Price: 8490,
    Brand: 'Samsung',
    Color:'blue',
    Category: 'phone'
};
let products = [product1, product2, product3, product4];
console.log(products);
/*
//3.1
for (let i = 0; i < 4; i++) {
    console.log(`Name: ${products[i].Name}\nPrice: ${products[i].Price}`);
}

//3.2
for (let i = 0; i < 4; i++) {
    console.log(`#${i+1}. ${products[i].Name}\n    Price: ${products[i].Price}`);
}
let index = prompt('Enter product position: ');
for (let x in products[index-1]) {
    console.log(`${x}: ${products[index-1][x]}`);
}

*/
//3.3
let category = prompt('Enter your category: ');
for (let i = 0; i < 4; i++) {
    if (products[i].Category === category) {
        console.log(`Name: ${products[i].Name}\nPrice: ${products[i].Price}`);
    }  
}


//3.4
products[0].Providers = ["phukienzero", "dientuccc"];
products[1].Providers = ["tgdd", "ddghn", "vhStore"];
products[2].Providers = ["tgdd"];
products[3].Providers = ["tgdd"];
for (let i = 0; i < 4; i++) {
    console.log(`#${i+1}. ${products[i].Name}\n    Price: ${products[i].Price}\n    Providers: ${products[i].Providers}`);
}

//3.5
let provider = prompt('Enter provider: ');
for (let i = 0; i < 4; i++) {
    if (products[i].Providers.includes(provider)) {
        for (let x in products[i]) {
            console.log(`${x}: ${products[i][x]}`);
        }
        
    } 
}
