enum whoType {
    student = "student",
    teacher = "teacher",
    admin = "admin",
    manager = "manager"
}

let who: whoType = whoType.student;
who = whoType.teacher;

console.log(whoType.manager)