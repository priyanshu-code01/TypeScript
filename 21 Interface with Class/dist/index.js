class CollegeData {
    constructor(Cname) {
        this.name = Cname;
    }
    displayTeachersName() {
        console.log(['anil', 'priyanshuy']);
    }
    getStudentsList() {
        return ['student1', 'student2', 'student3'];
    }
}
let college1 = new CollegeData("ABC College");
console.log(college1.getStudentsList()); // Output: ['student1', 'student2', 'student3']
export {};
//# sourceMappingURL=index.js.map