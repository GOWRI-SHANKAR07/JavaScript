class Members {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    ageChecker(){
        const date = new Date();
        return date.getFullYear - this.age;
    }

}

const myMember = new Members('Gowri Shankar', 20);

console.log('Gowri Shankar is ' + myMember.ageChecker() + ' years old');


// Inheriting the class
class Developers extends Members{
    constructor(name, role){
        super(name);
        this.role = role;
    }

    show(){
        return this.ageChecker() + ', and ' + this.role;
    }
}

let newDeveloper = new Developers('Gowri', 'React Native Developer');

console.log(newDeveloper.show());






