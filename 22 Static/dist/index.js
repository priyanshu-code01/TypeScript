class Company {
    constructor() {
        this.location = 'California';
    }
    static getName() {
        return 'google & yt';
    }
}
Company._name = 'Google';
// let c1 = new Company();
// console.log(c1.name);
console.log(Company._name);
console.log(Company.getName());
export {};
//# sourceMappingURL=index.js.map