// 11.You are given an array of numbers. Write a program that finds the largest even number

const numbers = [10, 5, 16, 8, 3, 12, 17, 20, 28, 30, 33];

function findLargestEvenNumber(arr) {
  let largestEven = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      if (largestEven === null || arr[i] > largestEven) {
        largestEven = arr[i];
      }
    }
  }

  return largestEven;
}
const largestEvenNumber = findLargestEvenNumber(numbers);

// Display the result on the web page
if (largestEvenNumber !== null) {
  document.write(`The largest even number is: ${largestEvenNumber}`);
} else {
  document.write("There are no even numbers in the array.");
}

// 12.You are given two numbers. Write a program that finds the sum, difference, product,
// and quotient of the two numbers and displays the results on a web page.

// Define the two numbers
const number1 = 5;
const number2 = 7;

// Calculate the results
const sum = number1 + number2;
const difference = number1 - number2;
const product = number1 * number2;
const quotient = number1 / number2;
// Display the results on the web page
document.write(`<br> Sum: ${sum},<br>`);
document.write(`Difference: ${difference},<br>`);
document.write(`Product: ${product},<br>`);
document.write(`Quotient: ${quotient}, <br>`);

// 13.You are given a string. Write a program that checks if the string is a palindrome (i.e.,
const inputString = "RACECAR";

function isPalindrome(str) {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
}

const result = isPalindrome(inputString);

if (result) {
  document.write("The string is a palindrome.");
} else {
  document.write("The string is not a palindrome.");
}

// 14.You are given an array of numbers. Write a program that finds the average of the numbers and displays the result on a web page.

function calculateAverage() {
  var inputNumbers = document.getElementById("inputNumbers").value;
  var numbersArray = inputNumbers.split(",").map(Number);

  if (numbersArray.some(isNaN)) {
    document.getElementById("result").innerHTML = "Please enter valid numbers.";
  } else {
    var sum = 0;
    for (var i = 0; i < numbersArray.length; i++) {
      sum += numbersArray[i];
    }
    var average = sum / numbersArray.length;
    document.getElementById("result").innerHTML =
      "The average is " + average.toFixed(2);
  }
}

// 15.You are given a list of items. Write a program that randomly selects an item from the list and displays it on a web page.

function selectRandomItem() {
  var items = ["Apple", "Banana", "Orange", "Grape", "Mango"];
  var randomIndex = Math.floor(Math.random() * items.length);
  var selectedItem = items[randomIndex];
  document.getElementById("result").innerHTML =
    "Randomly selected item: " + selectedItem;
}

// 19.You are given an array of numbers. Write a program that finds the largest and smallest

function findOddNumbers() {
  var inputNumbers = document.getElementById("inputNumbers").value;
  var numbersArray = inputNumbers.split(",").map(Number);

  if (numbersArray.some(isNaN)) {
    document.getElementById("result").innerHTML = "Please enter valid numbers.";
  } else {
    var oddNumbers = numbersArray.filter(function (num) {
      return num % 2 !== 0;
    });

    if (oddNumbers.length === 0) {
      document.getElementById("result").innerHTML =
        "No odd numbers found in the array.";
    } else {
      var largestOdd = Math.max(...oddNumbers);
      var smallestOdd = Math.min(...oddNumbers);
      document.getElementById("result").innerHTML =
        "Largest odd number: " +
        largestOdd +
        ", Smallest odd number: " +
        smallestOdd;
    }
  }
}

// 20.You are given a list of items. Write a program that removes all duplicates from the list

function removeDuplicates() {
  var inputItems = document.getElementById("inputItems").value;
  var itemsArray = inputItems.split(",");
  var uniqueItems = [...new Set(itemsArray)];
  var resultString = uniqueItems.join(", ");

  document.getElementById("result").innerHTML = resultString;
}
