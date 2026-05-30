class EmpInfo {
    constructor() {
        this._name = 'priyanshu';
        this._email = 'priyanshu';
    }
    get name() {
        return this._name + ' Singh';
    }
    set email(val) {
        this._email = 'emp_' + val;
    }
}
let emp1 = new EmpInfo();
console.log(emp1.name);
emp1.email = 'priyanshu@example.com';
console.log(emp1._email);
export {};
//# sourceMappingURL=index.js.map