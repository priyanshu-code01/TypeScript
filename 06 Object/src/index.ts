let userData: {
  [key: string]: string | number | undefined;
} = {
  name: "Priyanshu",
  age: 20,
};
userData.name= 'Pit'
userData.company = 'Microsoft'

console.log(userData);


// nested object
let data: {
    name: string,
    age: number,
    company: {
        name: string,
        location: string
    }
} = {
    name: "Priyanshu",
    age: 20,
    company: {
        name: "Microsoft",
        location: "Redmond"
    }
};

data.company.location = "Bangalore";
console.log(data);