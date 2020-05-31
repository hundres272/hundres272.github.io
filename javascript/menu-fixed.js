window.addEventListener('scroll',change);

function change (){
  const menu = document.getElementById('menu-cabecera');
  const modif = document.querySelector('[class="ul-menu-principal"]')
  if(document.scrollingElement.scrollTop>30){
    menu.classList.add('menu-fixed');
    modif.style.margin="0%";
  }else{
    menu.classList.remove('menu-fixed');
    modif.style.margin="30px 0px";
  }
}
