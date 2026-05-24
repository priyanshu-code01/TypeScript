let userData = {
    name: "Priyanshu",
    age: 20,
};
userData.name = 'Pit';
userData.company = 'Microsoft';
console.log(userData);
// nested object
let data = {
    name: "Priyanshu",
    age: 20,
    company: {
        name: "Microsoft",
        location: "Redmond"
    }
};
data.company.location = "Bangalore";
console.log(data);
export {};
//# sourceMappingURL=index.js.map