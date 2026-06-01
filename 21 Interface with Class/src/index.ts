interface CollegeDataType {
    name: string;
    displayTeachersName(): void;
    getStudentsList?(): string[];
}


class CollegeData implements CollegeDataType {
  name: string;
  constructor(Cname: string) {
    this.name = Cname;
  }

  displayTeachersName(): void {
    console.log(['anil', 'priyanshuy'])
  }

  getStudentsList(): string[] {
    return ['student1', 'student2', 'student3'];
  }
}


let college1 = new CollegeData("ABC College");
console.log(college1.getStudentsList()); // Output: ['student1', 'student2', 'student3']