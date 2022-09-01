"use strict";

console.log(4 + "5");
// конкатенация — операция склеивания объектов лин структуры

let incr = 10, // инкремент (увел на 1)
    decr = 10; // декремент (уменьш на 1)

console.log(incr++); // постфиксная форма 
console.log(decr--);

console.log(++incr); // префиксная форма
console.log(--decr);

console.log(5%2); // остаток от деления

console.log(2*4 == '8');
console.log(2*4 === '8'); // строгое сравнение (число равно числу)

const isChecked = false,
      isClose = false;

console.log(isChecked && isClose); // и
console.log(isChecked || isClose); // или

console.log(isChecked || !isClose); // оператор отрицания

console.log(2 + 2 != 8); // не равен

console.log(2 + 2 * 2 !== '6'); // строгое неравенство