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