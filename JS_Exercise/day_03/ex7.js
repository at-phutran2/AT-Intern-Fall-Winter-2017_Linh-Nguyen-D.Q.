function myCloneNode() {
  var cln = document.getElementById('result').cloneNode(true);
  document.getElementById('demo').appendChild(cln);
}