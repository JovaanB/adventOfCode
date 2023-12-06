import inputJson from "./input.js";

// Part 1

const extractFirstAndLastDigit = (word) => {
    const numbers = word.match(/\d/g);
    if (numbers) {
        return +(numbers[0] + numbers[numbers.length - 1]);
    }
    return null;
};

export const calculCalibration = (data) => {
	let result = 0;
  for(let i = 0; i < data.length; i++) {
  	const word = data[i];
  	result += extractFirstAndLastDigit(word);
  }
  
  return result;
};

// Part 2

const digitNumbers = {
    "zero": "0",
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9"
};

const transformWordWithLettersToDigitWord = (word) => {
  let result = "";

  for(let i = 0; i < word.length; i++) {
    const wordPart = word.substring(i, word.length);
    // find first wordPart that match a digitNumber
    const digitNumber = Object.keys(digitNumbers).find((digitNumber) => {
      return wordPart.startsWith(digitNumber);
    });

    if (digitNumber) {
      result += digitNumbers[digitNumber];
      continue;
    };

    if (result.length === word.length) {
      break;
    }

    result += word[i];
  }

  return result;
};

export const calculCalibrationWithLetters = (data) => {
  let result = 0;
  for(let i = 0; i < data.length; i++) {
    const word = data[i];
    const digitWord = transformWordWithLettersToDigitWord(word);
    result += extractFirstAndLastDigit(digitWord);
  }

  return result;
};

console.log(calculCalibration(inputJson));
console.log(calculCalibrationWithLetters(inputJson));