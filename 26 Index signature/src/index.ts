type userDataType = {
    name: string,
    id: number,
    mobile: number,
    readonly[key: string]: number | string
}

let userData: userDataType = {
    id: 10,
    name: "John Doe",
    mobile: 9999,
    marks: 80, 
    age: 20,
    semester: 3,
}

// userData.marks = 85;  // readonly
// userData.age = 21;    // readonly
// userData.semester = 4;   // readonly