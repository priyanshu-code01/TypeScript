type Person = {
    name: string,
    age: number,
    isEmp: boolean
}

let PersonData: Person = {
    name: "Priyanshu Singh",
    age: 20,
    isEmp: false
}

type PersonX = keyof Person;
// let PersonDataX: PersonX;
let PersonDataX: keyof Person;
PersonDataX = "name"; // This is valid
PersonDataX = "age"; // This is valid
PersonDataX = "isEmp"; // This is valid

let UserX: keyof typeof PersonData= 'name'; // This is valid