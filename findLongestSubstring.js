function findLongestSubstring(string){
  let start = 0;
  let end = 0;
  let count = {};
  let substring = '';
  let longest = 0;

  while ((start < (string.length)) && (end < (string.length))) {
    if (count[string[end]] === undefined) {

      count[string[end]] = 1;
      substring += string[end];
      end++;
    } else {
      if (substring.length > longest) {
        longest = substring.length;
        longestW = substring;
      }
      substring = '';
      start++;
      end = start;
      count = {};
    }
    if (substring.length > longest) {
      longest = substring.length;
    }
  }
  return longest;
}

console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6