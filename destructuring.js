var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
  
// destructuring array
var [a,b,...args] = colors;  
console.log(a);   
console.log(b);   
console.log(args);  

// destructuring object

const People = {
    firstName: "Gowri",
    lastName: "Shankar N",
    age: 20,
    gender: "male",
    occupation: "Developer",
    hobbies: ["reading", "traveling", "movies", "cricket"],
}

const { firstName: Name, age: Age } = People;