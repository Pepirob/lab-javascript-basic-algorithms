// Iteration 1: Names and Input

const hacker1 = "joselu";

console.log(`The driver's name is ${hacker1}`);

const hacker2 = "joselu";

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

// 3.3

if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

// bonus 1

const longText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec posuere augue. Curabitur id ex vel mi viverra varius. Sed non lorem facilisis, malesuada nisi sed, consectetur ex. Maecenas efficitur nec nibh eget lobortis. Duis placerat, ipsum sed facilisis dapibus, neque turpis laoreet massa, ut consectetur nisi leo vitae leo. Phasellus bibendum mattis lorem sed pulvinar. Aliquam eu velit sit amet eros tincidunt interdum. Donec sit amet hendrerit risus, eget pulvinar orci. Ut dictum dui quis massa volutpat, nec rutrum tellus viverra. Etiam risus neque, pretium quis mauris eu, maximus efficitur ex. Etiam non rhoncus enim. Mauris molestie arcu sem, quis tempor nisi rutrum ac. Sed a porttitor nunc. Vestibulum arcu est, suscipit in risus eu, ultricies tempor sem. Mauris lacinia libero a nisi pretium, in aliquam mi dapibus. Proin porttitor ligula lorem.

Praesent ac accumsan justo. Nunc in lectus et lacus dignissim pellentesque eu at sapien. Proin cursus et felis vitae cursus. Donec bibendum varius ex, at porttitor metus fermentum vel. Nunc dictum nunc at feugiat hendrerit. Nulla ipsum diam, lacinia vitae hendrerit non, congue ac dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean vitae justo volutpat, tempus velit non, mollis lorem. Aenean id ex mi. Aenean id felis est. Vestibulum justo metus, vehicula vitae auctor at, condimentum in arcu. Etiam ac est dui. Maecenas tempus turpis a augue fringilla, quis porttitor nulla finibus. Sed vel lorem vel nisi eleifend auctor. Sed sollicitudin accumsan fringilla. Curabitur et feugiat velit.

Integer neque orci, finibus vitae felis et, sollicitudin varius nibh. Vestibulum tempus lectus ut mi tempus, eget luctus sapien malesuada. Mauris consectetur suscipit auctor. Phasellus nec nibh eget orci posuere varius. Morbi condimentum gravida fringilla. Donec hendrerit sed est posuere pellentesque. Duis et tincidunt urna. Suspendisse in sagittis arcu. Aliquam tempus auctor sapien, at viverra lectus gravida vitae.`;

function wordsCounter(text, word) {
  text.trim();

  if (text === " ") {
    return 0;
  }
  const words = text.split(/\s+/);

  let count = 0;

  words.forEach((element) => {
    if (element === word) {
      count++;
    }
  });

  return [words.length, count];
}

const countedWords = wordsCounter(longText, "et");

console.log(countedWords);
