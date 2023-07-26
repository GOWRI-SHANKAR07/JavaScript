
// template literals - can use both '' & "" inside it
const message = `I'm Gowri Shankar`;

// Template literals allows multiline strings
const multiLn = `The quick
brown fox
jumps over
the lazy dog`;

// interpolation of variables
const firstName = 'Gowri';
const lastName = 'Shankar';

let text = `Welcome!, ${firstName} ${lastName}`;

console.log(text);

// interpolation of expressions
const Salary = {
    Gross: 19064,
    pf: 1716,
    esi: 143,
    pt: 208,
}

const {Gross, pf, esi, pt} = Salary;

let netPay =   `Your NetPay is ${(Gross-(pf+esi+pt))}`;

console.log(netPay);
