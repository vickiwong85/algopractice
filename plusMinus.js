// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

// Note: This challenge introduces precision problems.

function plusMinus(arr) {
  let pos = 0;
  let neg = 0;
  let zeros = 0;

  for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
          pos++;
      } else if (arr[i] < 0) {
          neg++;
      } else if (arr[i] === 0) {
          zeros++;
      }
  }
  console.log((pos / arr.length).toFixed(6));
  console.log((neg / arr.length).toFixed(6));
  console.log((zeros / arr.length).toFixed(6));
}