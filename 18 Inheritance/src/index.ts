class Auth {
  login(name: string, password: string) {
    if (name && password) {
      return "student logged in";
    } else {
      return "invalid credentials";
    }
  }
}

class Student extends Auth {
  
  result(marks: number) {
    if (marks >= 40) {
      return "pass";
    } else {
      return "fail";
    }
  }
}

let s1 = new Student();
console.log(s1.login("john", "1234"));
console.log(s1.result(45));

class Teacher extends Auth {
  subject(subjectName: string) {
    if (subjectName) {
      return `teaches ${subjectName}`;
    } else {
      return "no subject assigned";
    }
  }
}

let t1 = new Teacher();
console.log(t1.login("john", "1234"));
console.log(t1.subject('Math'));