class Company {
    static _name: string = 'Google';
    location: string = 'California';

    static getName() {
        return 'google & yt'
    }
}

// let c1 = new Company();
// console.log(c1.name);
console.log(Company._name)
console.log(Company.getName())