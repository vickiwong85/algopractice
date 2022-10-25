function bubbleSort(arr, comparator){
  var count = 0;
  // add whatever parameters you deem necessary - good luck!
  if (typeof comparator !== 'function') {
      comparator = function (a, b) {
        return a - b;
      }
  }

  var isSort = function (ar) {
    count++;
      for (var i = 0; i < ar.length - 1; i++) {

          if (comparator(ar[i], ar[i + 1]) > 0) {
            return false;
          }
      }
      return true;
  }

  var array = arr.slice();
  while (!isSort(array)) {
    count++;
      for (var i = 0; i < array.length - 1; i++) {
          if (comparator(array[i], array[i + 1]) > 0) {
              var temp = array[i];
              array[i] = array[i + 1];
              array[i + 1] = temp;
          }
      }
  }

  return count;
}



// var moarKittyData = [{
//   name: "LilBub",
//   age: 7
// }, {
//   name: "Garfield",
//   age: 40
// }, {
//   name: "Heathcliff",
//   age: 45
// }, {
//   name: "Blue",
//   age: 1
// }, {
//   name: "Grumpy",
//   age: 6
// }];

// function oldestToYoungest(a, b) {
//   console.log('a: ',a);
//   console.log('b: ',b)
//   return b.age - a.age;
// }
// // debugger;
// console.log(bubbleSort(moarKittyData, oldestToYoungest)); // sorted by age in descending order


console.log(bubbleSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
console.log(bubbleSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
console.log(bubbleSort([1, 2, 3])); // [1, 2, 3]
console.log(bubbleSort([]));

// var nums = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
// console.log(bubbleSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]

// var kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

// function strComp(a, b) {
//   if (a < b) { return -1;}
//   else if (a > b) { return 1;}
//   return 0;
// }

// console.log(bubbleSort(kitties, strComp)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]