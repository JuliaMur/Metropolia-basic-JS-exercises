// Exercise A

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let i=0; i < array.length; i++) {
console.log(array[i]);
}

// Exercise B

let numbers = [];
let sum = 0;
let mult = 1;
let avg = 0;

for ( let j=0; j<3; j++) {
    let numberInput = prompt('Give a number: ');
    numbers.push(parseFloat(numberInput));
    sum += numbers[j];
    mult = mult * numbers[j];
    avg = sum / numbers.length;
}

console.log('Your numbers input: ' + numbers);
console.log('The sum of numbers: ' + sum);
console.log('The product of numbers: ' + mult);
console.log('The average of numbers: ' + avg); 

// Exercise C

let nums = [];

// For total [] items
for(let a=0; a<7; a++) {
    // Generate a random number between 1 and 39
    let num = Math.floor( Math.random() * 39 + 1);
    // If number already there, repeat
    if( nums.indexOf(num) > -1) { a--; continue; }
    // Add the number to the array
    nums.push(num);
}
console.log(nums);

