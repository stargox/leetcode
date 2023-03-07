// url: https://leetcode.com/problems/plus-one/

var plusOne = function(digits) {
    const result = new Array(digits.length).fill(0);
    let remainder = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
      if (remainder === 1) {
        const sum = digits[i] + remainder;
        if (sum < 10) {
          remainder = 0
          result[i] = sum;
        } else {
          result[i] = sum - 10;
  
          if (i === 0) {
            result.splice(0, 0, 1);
          }
        }
        
      } else {
        result[i] = digits[i];
      }
    }
  
    return result;
  };

  // var plusOne = function(digits=[]) {
  //   if (digits[digits.length - 1] !== 9) {
  //     const results = [...digits];
  //     results[results.length - 1]++;
  //     return results;
  //   }

  //   let nonNineIndex = digits.length - 1;
  //   while (nonNineIndex >= 0) {
  //     if (digits[nonNineIndex] !== 9) {
  //       const result = [
  //         ...digits.slice(0, nonNineIndex),
  //         digits[nonNineIndex] + 1,
  //         ...Array(digits.length - nonNineIndex - 1).fill(0)];

  //         return result;
  //     }

  //     nonNineIndex--;
  //   }

  //   return [1, ...Array(digits.length).fill(0)];
  // };

  plusOne([9,9]);
