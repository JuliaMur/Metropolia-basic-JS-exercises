// Exercise A

function convertGallonsToLitres(liters, gallons) {
  const totalConvert = liters * gallons;
  return totalConvert;
}

let userInput = prompt("How many gallons do you want to convert to liters?");
let result = convertGallonsToLitres(userInput, 3.785);
console.log(userInput + " gallons equal to " + result + " liters.");

// Exersice B

function createLotteryRow() {
  let numbers = [];
  while (numbers.length < 7) {
    let number = Math.ceil(Math.random() * 39);
    if (!numbers.includes(number)) {
      numbers.push(number);
    }
  }
  return numbers.sort((a, b) => a - b);
}

function createLotteryTicket(numberOfRows) {
  for (let i = 0; i < rows; i++) {
    console.log(createLotteryRow());
  }
}

let rows = prompt("Enter the number of rows for the lottery: ");
createLotteryTicket(rows);

// Exersice C

function findMinValue(array) {
  let min = 9999;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return "The min number of array " + array + " is " + min;
}
console.log(findMinValue([15, 8, 6, 7, 20]));
