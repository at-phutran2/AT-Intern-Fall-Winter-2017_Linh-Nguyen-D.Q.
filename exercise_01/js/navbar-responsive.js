document.getElementsByClassName('js-toggle-menu')[0].addEventListener('click', function(){
  toggleMenu();
});


function toggleMenu() {
  var mm = document.getElementById('my-mm');
  mm.className === 'main-menu' ? mm.className += ' active' : mm.className = 'main-menu';
}