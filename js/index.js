// Iteration 1: Names and Input

const hacker1 = "ppluis";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "morse";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters`
  );
}

// Iteration 3: Loops

// 3.1

function upperSeparate(string) {
  let driverCapitalSpaced = "";
  for (let i = 0; i < string.length; i++) {
    driverCapitalSpaced += string[i] + " ";
  }
  console.log(driverCapitalSpaced.toUpperCase());
}

upperSeparate(hacker1);

// 3.2

function reverseString(string) {
  const upperCaseStr = string.slice(0, 1).toUpperCase() + string.slice(1);
  console.log(upperCaseStr.split("").reverse().join(""));
}

reverseString(hacker2);
