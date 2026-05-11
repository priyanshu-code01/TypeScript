let language: string = "Type Script";
let age: number = 25;

let info: string = `I am learning ${language} and I am ${age} years old.`; // age converted to string and concatenated with other strings
console.log(info);

let num: number = 42;
let data: string = num.toString(); // converting number to string
console.log(data);

// Boolean
// let item: boolean = 4; // This will cause an error because 4 is not a boolean value.
let item: boolean = true; 
console.log(item);

export {}