console.log("Task 1");

function myIncludes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }

  return false;
}

console.log(myIncludes([1, 2, 3], 2));
console.log(myIncludes([1, 2, 3], 5));

console.log("Task 2");

let user = {};
user.name = "Ivan";
user.surname = "Smith";
console.log(user);

user.name = "Petro";
console.log(user);

delete user.name;
console.log(user);

console.log("Task 3");

let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break
}

console.log("Task 4");

function isEmpty(obj) {
  if (Object.keys(obj).length > 0) {
    return false;
  }

  return true;
}

let schedule = {};
console.log(isEmpty(schedule));

schedule["8:30"] = "Вставай";
console.log(isEmpty(schedule));

console.log("Task 5");

function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2], [3, 4]));
console.log(mergeArrays(['a', 'b'], ['c']));


console.log("Task 6");

function myJoin(arr, separator) {
  return arr.join(separator);
}

console.log(myJoin([1, 2, 3], "-"));
console.log(myJoin(["Hello", "world"], " "));
console.log(myJoin(["a", "b", "c"]));
