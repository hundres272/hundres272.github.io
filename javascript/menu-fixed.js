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

  // // Capturar los valores de marginTop de header-inicio-des
  // const elementHeader = document.getElementById('header-inicio-des');
  // let elementStyle = window.getComputedStyle(elementHeader);
  // let elementMarginTop = elementStyle.getPropertyValue('margin-top');
  // let valueTop = valueMarginTop(elementMarginTop);
  // if(document.scrollingElement.scrollTop>29 && document.scrollingElement.scrollTop<31){
  //   elementHeader.style.marginTop=(parseFloat(valueTop)+100)+"px";
  // }
}
//
// function valueMarginTop(cadena){
//   var cadAux = "";
//   for (var i = 0; i < (cadena.length-2); i++) {
//     cadAux = cadAux+cadena[i];
//   }
//   return cadAux;
// }
