function findLongest(array) {
    let mostDigitNumber = array[0];
    let mostDigit = 0;
  
    array.forEach(current => {
      const numberOfDigits = current.toString().length;
      if (numberOfDigits > mostDigit) {
        mostDigit = numberOfDigits;
        mostDigitNumber = current;
      }
    });
  
    return mostDigitNumber;
  }
  