var longestPalindrome = function(s) {
  // set substring var
  let substring = '';
  // set starting index var
  let starting = 0;
  // set pal var
  let palindrome = '';

  // while starting index is less than or equal to s.length
  while (starting <= s.length - 1) {
      // loop through the string

      for (let i = 1; i < s.length + 1; i++) {
          substring = s.substring(starting, i);
          if (checkPalindrome(substring) && substring.length > palindrome.length) palindrome = substring;
      // set substr to be substring(starting index, i)
      // if palindrome, store in pal var
      // increment starting index var
      }
      starting++;
  }

  function checkPalindrome(sub) {
      if (sub.length <= 1 ) return false;
      let backwards = '';
      for (let i = sub.length - 1; i > -1; i--) {
          backwards += sub[i];
      }
      if (sub === backwards) {
        return true;
      }
      return false;
  }

  // helper: check if substring is a palindrome
      // if substring length is 1 return false
      // let backwards
      // loop through from end to beg
          //add each char to backwards
      // check if the substr === backwards

  return palindrome;
};

console.log(longestPalindrome('babab'));