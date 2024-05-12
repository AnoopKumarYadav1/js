let score =33

console.log(typeof score);
console.log(typeof(score));

let value ="33"
console.log(typeof(value));
let valueInNumber=Number(value);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

let value1 ="33a"
console.log(typeof(value1));
let valueInNumber1=Number(value1);
console.log(typeof(valueInNumber1));
console.log(valueInNumber1);

let value2 =null
console.log(typeof(value2));
let valueInNumber2=Number(value2);
console.log(typeof(valueInNumber2));
console.log(valueInNumber2);

let value3 =undefined
console.log(typeof(value3));
let valueInNumber3=Number(value3);
console.log(typeof(valueInNumber3));
console.log(valueInNumber3);

let value4 =true
console.log(typeof(value4));
let valueInNumber4=Number(value4);
console.log(typeof(valueInNumber4));
console.log(valueInNumber4);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


let isLoggedIn = "anoop"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "anoop" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value5 = 3
let negValue = -value5
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " anoop"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);  output 12 
// console.log(1 + "2");  output 12 
// console.log("1" + 2 + 2);  output 122 
// console.log(1 + 2 + "2"); output 32 

// console.log( (3 + 4) * 5 % 3);

// console.log(+true); output 1 convert to number
// console.log(true+); synatax error

// console.log(+""); first convert "" to bool then +false

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion