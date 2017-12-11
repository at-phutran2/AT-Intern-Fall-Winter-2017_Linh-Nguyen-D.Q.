let reverse = function(s) {
  return s.split('').reverse().join('');
}

function checkReverse(str1, str2) {
  if(str2 === reverse(str1)) {
    return true;
  } else {
    return false;
  }
}

console.log(checkReverse("abcd", "dcba")); //log true
console.log(checkReverse("abcd", "bcda")); //log false
