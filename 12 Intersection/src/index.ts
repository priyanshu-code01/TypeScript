type person1 = { name: string };
type person2 = { age: number };

type person3 = person1 & person2;

let personData1: person1 = {
  name: "John Doe",
};

let personData2: person2 = {
    age: 20
}

let personData3: person3 = {
    name: "John Doe",
    age: 20
}

let employeeData: {
  name: string;
  employeeId: number;
} = {
  name: "Jane Smith",
  employeeId: 12345,
};

let person: { name: string; age: number };
