const colors = ['blue', 'green', 'black', 'white'];

// this spread operator copying the colors array
const copyColors = [...colors];

console.log(copyColors);


const originalObject = { name: "Gowri Shankar N", age: 18 };
const updatedObject = { ...originalObject, age: 20 };

console.log(updatedObject);

// rest operator

function sum(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0)
}

const value1 = sum(1,2,5);
const value2 = sum(2.5, 3.4, 20);

console.log(value1, value2);