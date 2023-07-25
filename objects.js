const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "male",
    occupation: "Engineer",
    hobbies: ["reading", "traveling", "photography"],

    // get name
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    },

    // check is he adult
    isAdult: function () {
        return this.age >= 18;
    },

    // adding hobbies
    addHobby: function (hobby) {
        return this.hobbies.push(hobby);
    },
}

// Accessing object properties
console.log(person.firstName); // Output: "John"
console.log(person.age); // Output: 30

// Accessing object methods
console.log(person.getFullName()); // Output: "John Doe"
console.log(person.isAdult()); // Output: true

// Modifying object properties
person.lastName = "Smith";
console.log(person.getFullName()); // Output: "John Smith"

// Using a method to add a new hobby
person.addHobby("painting");

console.log(person.hobbies); // Output: ["reading", "traveling", "photography", "painting"]
