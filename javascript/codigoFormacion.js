window.addEventListener("load", iniciar);

window.addEventListener("click", iniciar);

function iniciar(){
  var checkTecnico = document.getElementById("tecnico");
  if(checkTecnico.checked){
    document.getElementById("tab-tecnico").style.display = "block";
    document.querySelector("label[for='tecnico']").style.borderBottom = "5px solid #FFFF33";
  }else{
    document.getElementById("tab-tecnico").style.display = "none";
    document.querySelector("label[for='tecnico']").style.borderBottom = "5px solid white";
  }
  var checkTecnico1 = document.getElementById("universidad");
  if(checkTecnico1.checked){
    document.getElementById("tab-universidad").style.display = "block";
    document.querySelector("label[for='universidad']").style.borderBottom = "5px solid #FFFF33";
  }else{
    document.getElementById("tab-universidad").style.display = "none";
    document.querySelector("label[for='universidad']").style.borderBottom = "5px solid white";
  }
  var checkTecnico2 = document.getElementById("platzi");
  if(checkTecnico2.checked){
    document.getElementById("tab-platzi").style.display = "block";
    document.querySelector("label[for='platzi']").style.borderBottom = "5px solid #FFFF33";
  }else{
    document.getElementById("tab-platzi").style.display = "none";
    document.querySelector("label[for='platzi']").style.borderBottom = "5px solid white";
  }
}
