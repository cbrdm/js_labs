let userName = prompt("Enter your name:");
let userAge = +prompt("Enter your age:");

let user = {
  name: userName,
  age: userAge
}

console.log("Name: " + user.name + ", " + "age: " + user.age);

if (user.age < 18) {
  console.log("Access denied");
} else {
  console.log("Access allowed");
}