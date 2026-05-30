class EmpInfo {
    _name: string= 'priyanshu'
    _email: string = 'priyanshu'

    get name(): string {
        return this._name + ' Singh';
    }

    set email(val: string) {
        this._email = 'emp_' + val;
    }
}

let emp1 = new EmpInfo();
console.log(emp1.name);
emp1.email = 'priyanshu@example.com';
console.log(emp1._email);