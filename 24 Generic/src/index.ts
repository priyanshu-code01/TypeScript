function fruits<T>(name: T): T {
    return name
}

function fruitsAny(name: any): any {
    return name
}

let result = fruits<string>('apple')
let result2 = fruits<number>(123)
let result3 = fruitsAny(true)

console.log(result) // Output: apple
console.log(result2) // Output: 123
console.log(result3)