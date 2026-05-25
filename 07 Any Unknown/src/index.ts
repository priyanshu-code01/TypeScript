// Any
let value: any = 'Hello, World!';

value = 42;
value = {}
value = [1, 2, 3];

console.log(value);

// Unknown
let unknownValue: unknown = 'Hello, World!';

unknownValue = 42;
unknownValue = {}
unknownValue = [1, 2, 3];

if (typeof unknownValue === 'object' && Array.isArray(unknownValue)) {
    console.log(unknownValue)
}

