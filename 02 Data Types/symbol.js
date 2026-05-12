let sym = Symbol();
let sym2 = Symbol();
console.log(sym == sym2);
console.log(sym, sym2);
const dId = Symbol("id");
const obj = {
    [dId]: 100,
    name: 'Priyanshu Singh'
};
console.log(obj[dId]);
export {};
