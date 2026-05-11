let value: null = null;
console.log(typeof(value));

let userName: null | string = null;
let login: boolean = true;
if (login) {
  userName = "Priyanshu Singh";
  console.log(userName);
}

// undefined
let age: number | undefined = undefined;
console.log(typeof(age));

age = 25;
console.log(age);
console.log(typeof(age));

export {};
