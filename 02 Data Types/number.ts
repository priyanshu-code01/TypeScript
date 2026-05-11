// let : data_type = value

let num1: number = 10;
let num2: number = 20.5;
let num3: number = 30;

let sum: number = num1 + num2 + num3;

console.log(`The sum of ${num1} and ${num2} and ${num3} is ${sum}.`);

let oct: number = 0o100001;
let hexa: number = 0x10001;
let binary: number = 0b100001;

console.log(`Octal: ${oct}, Hexadecimal: ${hexa}, Binary: ${binary}`);

let item: number = 100;
let item2 = '30';

let item2Converted = Number(item2);

let itemsum: number = item + item2Converted

console.log(itemsum)

let data: number | string = 30;
data = 'typescript';

export {}