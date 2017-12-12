function upperCase(str) {
  let l = str.length;
  let str1 = str;
  for(let i = 0; i < l; i++) {
    if(str1.charAt(i) === ' ') {
      str1 = str1.replace(str1.charAt(i+1), str1.charAt(i+1).toUpperCase());
    }
  }
  console.log(str1);
}

upperCase('Im a super coder');
