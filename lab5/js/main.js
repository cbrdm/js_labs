console.log("Task 1");

function createStepCounter() {
  let steps = 0;

  return {
    step() {
      steps += 1;
    },
    getSteps() {
      return steps;
    }
  };
}

const counter = createStepCounter();
counter.step();
counter.step();
console.log(counter.getSteps());

console.log("Task 2");

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
      } else {
        console.log("Сума депозиту має бути більшою за 0.");
      }
    },

    withdraw(amount) {
      if (amount <= 0) {
        console.log("Сума зняття має бути більшою за 0.");
      } else if (amount > balance) {
        console.log("Недостатньо коштів на рахунку.");
      } else {
        balance -= amount;
      }
    },

    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());
account.withdraw(2000);

console.log("Task 3");

function createGreeter(name) {
  return function () {
    console.log(`Привіт, ${name}!`);
  };
}

const greetOlya = createGreeter("Оля");
greetOlya();

const greetMax = createGreeter("Максим");
greetMax();

console.log("Task 4");

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
