function printPowsOf2(number) {
  if (typeof number !== "number") {
    return "Incorrect type";
  }

  let result = "";

  for (let i = 1; i <= number; i *= 2) {
    result += i;

    if (i * 2 <= number) {
      result += ", ";
    }
  }

  return result;
}

console.log("Task 1");
console.log(printPowsOf2("302"));
console.log(printPowsOf2(null));
console.log(printPowsOf2(128));
console.log(printPowsOf2(60));

function calculateSumOfArray() {
  const initialArray = [3, 2, "2", null, 1.5, 9.5, undefined];
  let result = 0;

  for (let i = 0; i < initialArray.length; i++) {
    if (typeof initialArray[i] !== "number") {
      continue;
    }

    result += initialArray[i];
  }

  return result;
}

console.log("Task 2");
console.log(calculateSumOfArray());

function printSeasonByMonth(month) {
  switch (month.toLowerCase()) {
    case "december":
    case "january":
    case "february":
      return "winter";
    case "march":
    case "april":
    case "may":
      return "spring";
    case "june":
    case "july":
    case "august":
      return "summer";
    case "september":
    case "october":
    case "november":
      return "autumn";
    default:
      return "Invalid value";
  }
}

console.log("Task 3");
console.log(printSeasonByMonth("SEPTEMBER"));
console.log(printSeasonByMonth("NOVEMBER"));
console.log(printSeasonByMonth("JULY"));
console.log(printSeasonByMonth("APRIL"));


function calculateWordsInString(string) {
  let arr = string.split(" ");
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].trim() !== "") {
      counter++;
    }
  }

  return counter;
}

console.log("Task 4");
console.log(calculateWordsInString("Easy string for count"));
console.log(calculateWordsInString("Easy"));
console.log(calculateWordsInString("Some string with a triple   space"));
console.log(calculateWordsInString("Some?  string, with a triple   space"));
