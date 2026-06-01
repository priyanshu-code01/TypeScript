let userData: number | string | boolean = 20;

userData = "Hello, TypeScript!";

userData = true;
if (typeof userData === "boolean") {
  console.log("The value is a boolean:", userData);
} else if (typeof userData === "number") {
  console.log("The value is a number:", userData);
} else if (typeof userData === "string") {
  console.log("The value is a string:", userData);
}

function checkDataType(data: string | number) {
    if (typeof data == 'number') {
        console.log("The value is a number:", data);
    } else if (typeof data == 'string') {
        console.log("The value is a string:", data);
    }
}

checkDataType(42);
checkDataType("Hello, TypeScript!");

class Product21 {

}

let p1 = new Product21();

class Order21 {

}

let O1 = new Order21();

function checkDetails(data: Order21 | Product21) {
    if (data instanceof Order21) {
        console.log('this is a order')
    } else {
        console.log('this is a product')
    }
}

checkDetails(p1);
checkDetails(O1);

interface userData {
    name: string,
    city: string
}