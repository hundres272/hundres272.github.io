function iniciar() {
  var boton_menu = document.getElementById('menu_icon');
  boton_menu.addEventListener("click",volver_visual);
}
var contador = 1;
function volver_visual() {
  var menu_li = document.getElementById('menu-cabecera');

  if(contador == 1 && screen.width<1000){
    menu_li.style.top='174px';
    menu_li.style.left='0';
    contador = 0;
  }else{
    contador = 1;
    menu_li.style.left='-110%';
  }
}

function modificacionUno() {
  if(screen.width<1000){
    var boton_press1 = document.querySelector("[class='menu-item btn1']");
    var boton_press2 = document.querySelector("[class='menu-item btn2']");
    var boton_press3 = document.querySelector("[class='menu-item btn3']");
    var boton_press5 = document.querySelector("[class='menu-item btn5']");
    boton_press1.addEventListener("click",modificacionMostrarBoton);
    boton_press2.addEventListener("click",modificacionMostrarBoton);
    boton_press3.addEventListener("click",modificacionMostrarBoton);
    boton_press5.addEventListener("click",modificacionMostrarBoton);
  }
}
function modificacionMostrarBoton(){
  console.log(screen.width);
  var menu_li = document.getElementById('menu-cabecera');
  menu_li.style.left='-110%';
  contador=1;
}
window.addEventListener("load", iniciar);
window.addEventListener("click",modificacionUno);
