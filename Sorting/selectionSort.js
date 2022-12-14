function selectionSort(array){

  for (var i = 0; i < array.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      var temp = array[i];
      array[i] = array[lowest];
      array[lowest] = temp;
    }
  }
  return array;
}

function selectionSort(array){
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (var i = 0; i < array.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      swap(array, i, lowest);
    }
  }
  return array;
}

console.log(selectionSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(selectionSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(selectionSort([1, 2, 3])); // [1, 2, 3]
console.log(selectionSort([]));

var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
console.log(selectionSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

// with comparator
function selectionSort(array, comp){

  for (var i = 0; i < array.length; i++) {
  if (typeof comp !== 'function') {
      comp = function (a, b) {
        return a - b;
      }
  }
    var lowest = i;
    for (var j = i + 1; j < array.length; j++) {
      if (comp(array[j], array[lowest]) < 0) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      var temp = array[i];
      array[i] = array[lowest];
      array[lowest] = temp;
    }
  }
  return array;
}