
// Exercise A

let firstNumber = 7;
let secondNumber = 3;
result = Math.pow(secondNumber, firstNumber);
alert(secondNumber + "^" + firstNumber + "=" + result);

// Exercise B

let userName = prompt("What is your name?");
alert("Hey," + userName + "!");

// Exercise C


let pikeLength = prompt("What is the length of the pike?(cm)");
pikeLength = parseInt(pikeLength);
let minLength = 37;

if (pikeLength < minLength) {
    alert("Release the pike back into the lake!");
    let difLength = minLength - pikeLength;
    alert("Not enough to the minimum size " + difLength + " cm.");
} else {
    alert("Congratulations! You caught a big pike!");
}
