function countChar(str, c) {
  let l = str.length;
  let count = 0;
  for(let i = 0; i < l; i++) {
    if(str.charAt(i) === c) {
      count++;
    }
  }
  console.log(count);
}

countChar('JavaScript function', 't');
