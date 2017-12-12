function extract(str) {
  let l = str.length;
  let arr = [];
  for(let i = 0; i < l; i++) {
    arr[i] = str.charAt(i);
  }

  for(let i = l; i > 0; i--) {
    for(let j = i - 1; j >= 0; j--) {
      if(arr[j] === arr[i]) {
        arr.splice(j, 1);
      }
    }
  }

  let result = arr.toString();
  result = result.replace(/,/g , "");
  console.log(result);
}

extract("absdasd");
