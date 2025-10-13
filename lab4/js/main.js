console.log("Task 1");

function unicFn(initialArray) {
  let result = [];

  for (let i = 0; i < initialArray.length; i++) {
    if (!result.includes(initialArray[i])) {
      result.push(initialArray[i]);
    }
  }

  return result;
}

console.log(unicFn([2, 3, 1, 3, 3, 7]));
console.log(unicFn(["a", "b", "a", "c"]));

console.log("Task 2");

function isEvenArray(initialArray) {
  for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] % 2 !== 0) {
      return "NO";
    }
  }

  return "YES";
}

console.log(isEvenArray([1, 2, 3, 9]));
console.log(isEvenArray([2, 4, 6]));

console.log("Task 3");

function filterArray(initialArray) {
  let result = [];

  for (let i = 0; i < initialArray.length; i++) {
    if (typeof initialArray[i] === "string" && initialArray[i].trim() !== "") {
      result.push(initialArray[i]);
    }
  }

  return result;
}

console.log(filterArray([2, "string", 3, "", "test"]));
console.log(filterArray(["hi", null, 5, "bye"]));

console.log("Task 4");

function findUser(initialObject) {
  let result = [];

  for (let userName in initialObject) {
    if (initialObject[userName].age > 18 && initialObject[userName].city.toLowerCase() === "London".toLowerCase()) {
      result.push(userName);
    }
  }

  return result;
}

console.log(findUser({
  Max: { age: 23, city: "London" },
  Mike: { age: 20, city: "NY" },
  Anna: { age: 17, city: "London" },
}));

console.log("Task 5");

function removeObj(arrayOfObj, keyName, value) {
  return arrayOfObj.filter(item => item[keyName] !== value);
}

const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];

console.log(removeObj(arr, "age", 2));
console.log(removeObj(arr, "year", 2));
