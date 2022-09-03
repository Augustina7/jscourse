"use strict";

let num = 20; // глобальная переменная

function showFirstMessage(text) {
    console.log(text);
    // let num = 10; // локальная переменная
    console.log(num);
}

showFirstMessage('Hello world!');
console.log(num);


// console.log(calc(4, 3)); // можно вызвать до объявления
// console.log(calc(5, 6));

// function calc(a, b) {
//     return (a + b);
// }


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() { 
    console.log('Hello');
};

logger(); // можно вызвать только после объявления

const calc = (a, b) => a + b;
const result = (a, b) => {
    console.log('Hi');
    return a + b;
}