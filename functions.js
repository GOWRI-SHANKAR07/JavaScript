// Function to add two numbers
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // Output: 8

// Function to find the square of a number
function square(num) {
    return num * num;
}

console.log(square(4)); // Output: 16

// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(10)); // Output: true

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello')); // Output: 'olleh'

// Function to calculate the factorial of a number
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5)); // Output: 120

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome('racecar')); // Output: true

// Function to generate a random number between a given range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber(1, 10)); // Output: Random number between 1 and 10

// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
}

console.log(calculateRectangleArea(5, 3)); // Output: 15

// Function to greet a person with a custom message
function greetPerson(name, message) {
    return `Hello, ${name}! ${message}`;
}

console.log(greetPerson('John', 'Hope you have a great day!')); // Output: 'Hello, John! Hope you have a great day!'

//  Anonymous function to add two numbers

const add = (a, b) => {
    let Sum = 0;
    return Sum = a + b;
}

const sum = add(1, 2);
console.log(sum);