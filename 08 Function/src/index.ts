function greet(name: string) {
    return `Hello, ${name}!`;
}

console.log(greet('Priyanshu'))

function simple(): boolean {
    return true;
}

function complex(): number | string {
    let data = 10;
    let name = "Priyanshu";
    let type = 'age';

    if (type === 'age') {
        return data;
    } else {
        return name;
    }
}

console.log(complex())