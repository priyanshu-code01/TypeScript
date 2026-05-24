let users: string[] = ['Priyanshu', 'Satyarth', 'Shivam', 'Anshul'];
let marks: number[] = [90, 85, 92, 88];
marks.push(95);

let students: (string | number)[] = ['Priyanshu', 90, 'Satyarth', 85, 'Shivam', 92, 'Anshul', 88];
let student: Array<string | number> = ['Priyanshu', 90, 'Satyarth', 85, 'Shivam', 92, 'Anshul', 88];

let collegeName: ReadonlyArray<string> = ['ABC College', 'XYZ University'];
// collegeName.push('PQR Institute'); // Error: Property 'push' does not exist on type 'readonly string[]'.

console.log(users);
console.log(marks);
console.log(students);
console.log(student);
console.log(collegeName)