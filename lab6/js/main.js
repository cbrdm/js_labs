console.log("Task 1");

const user = {
  name: "Олександр",
  age: 25,
  greet() {
    console.log(`Привіт, мене звати ${this.name} і мені ${this.age} років.`);
  },
};

const greetUser = user.greet;
greetUser();
const boundGreetUser = user.greet.bind(user);
boundGreetUser();

console.log("Task 2");

function introduce() {
  console.log(`Мене звати ${this.name}, мені ${this.age} років.`);
}

const person = {
  name: "Ірина",
  age: 30,
};

introduce.call(person);

console.log("Task 3");

function showFullNameAndCity(surname, city) {
  console.log(`Мене звати ${this.name} ${surname}, я з міста ${city}.`);
}

const user2 = {
  name: "Марія",
};

showFullNameAndCity.apply(user2, ["Іваненко", "Львів"]);

console.log("Task 4");

function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(5));
console.log(triple(5));

console.log("Task 5");

const counter = {
  count: 0,
  increment() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
  show() {
    console.log(`Поточне значення лічильника: ${this.count}`);
  },
};

counter.increment();
counter.increment();
counter.show();

const inc = counter.increment;

inc();
inc();
counter.show();

const boundInc = counter.increment.bind(counter);
boundInc();
boundInc();
counter.show();
