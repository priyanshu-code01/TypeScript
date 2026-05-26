interface Info {
    name: string,
    age: number,
    isMarried: boolean
}

interface Student extends Info {
    subject: string
}

let student: Student = {
    name: "Priyanshu Singh",
    age: 22,
    isMarried: false,
    subject: "Maths"
}

let employee: Info = {
    name: "Arjun",
    age: 32,
    isMarried: true
}