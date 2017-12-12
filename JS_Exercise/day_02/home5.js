function mergeArr(a, b) {
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;
  let cIndex = a.length + b.length - 1;
  let c = [cIndex + 1];


  for (let i = cIndex; i > -1; i--) {
    if (aIndex > -1 && bIndex > -1) {
      if (a[aIndex] > b[bIndex]) {
        c[i] = a[aIndex--];
      } else {
        c[i] = b[bIndex--];
      }
    } else if (bIndex == -1) {
      c[i] = a[aIndex--];
    } else if (aIndex == -1) {
      c[i] = b[bIndex--];
    }
  }

  return c;
}

function removeSame(arr) {
  let l = arr.length;
  for(let i = l; i > 0; i--) {
    for(let j = i - 1; j >= 0; j--) {
      if(arr[j] === arr[i]) {
        arr.splice(j, 1);
      }
    }
  }
  console.log(arr);
}

removeSame(mergeArr([1, 3, 2], [2, 30, 1]));
