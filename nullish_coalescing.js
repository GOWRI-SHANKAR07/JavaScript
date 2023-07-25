const user = {
    name: 'Gowri Shankar',
    age: null,
};

const UserName = user.name ?? "Guest";
const UserAge = user.age ?? "Enter Age";

console.log(UserName);
console.log(UserAge);