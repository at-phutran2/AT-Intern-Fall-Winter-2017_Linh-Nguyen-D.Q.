function myGetAttribute() {
  var cls = document.getElementsByTagName("H1")[0].getAttribute("class"); 
  document.getElementById('txt1').innerHTML = cls;
}