var contador = 1;
function iniciar() {
  var boton_menu = document.getElementById('menu_icon');
  boton_menu.addEventListener("click",volver_visual);
}
function volver_visual() {
  var menu_li = document.getElementById('menu-cabecera');

  if(contador == 1){
    menu_li.style.top='174px';
    menu_li.style.left='0';
    contador = 0;
  }else{
    contador = 1;
    menu_li.style.left='-110%';
  }
}
window.addEventListener("load", iniciar);
