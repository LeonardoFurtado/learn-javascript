const price = 50.0
const price2 = Number('2.1')
const price3 = Number('3.0')

console.log(price);
console.log(price2);
console.log(price3);

console.log(Number.isInteger(price));
console.log(Number.isInteger(price2));
console.log(Number.isInteger(price3));

const n1 = 9.89
const n2 = 7.75

const total = n1 * 2 + n2 * 3
const mean = total / 5

console.log(mean);
console.log(mean.toFixed(2));
console.log(mean.toString());
console.log(mean.toString(2)); // show mean as binary
console.log(mean);

console.log(10/0) //infinity
console.log('10' / 2); // 5
console.log('10' + 2); // 102, in this case, + operator makes sense for string operation
console.log('10.0' / 2); // 5
console.log('10,0' / 2); // NaN
console.log('show' * 2); // NaN
console.log(0.1 + 0.7); //0.79999999
console.log(9.5.toString());
// console.log(10.toString()) SyntaxError: Invalid or unexpected token
console.log((10).toString());

const radius = 5.6
const area = Math.PI * Math.pow(radius, 2)

console.log(area);

console.log("----------------------------");

const name = "Leonardo"
const concat = 'Hello ' + name + '!'
const template = `
    Hello,
        ${name}!
`
console.log(concat, template);
console.log(`1 + 1 = ${1 + 1}`);

const up = my_text => my_text.toUpperCase()
console.log(`hey!!!! ${up('be aware')}!`);