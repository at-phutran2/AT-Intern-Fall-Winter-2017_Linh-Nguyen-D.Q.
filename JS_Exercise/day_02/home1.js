function typeOf(a) {
  return typeof a;
}
let n;
let f = function() { };

console.log(typeOf('FRONTEND'))
console.log(typeOf(12));
console.log(typeOf(null));
console.log(typeOf(false));
console.log(typeOf(n));
console.log(typeOf(f));
