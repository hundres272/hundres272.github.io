window.addEventListener("load", iniciar);

window.addEventListener("click", iniciar);

function iniciar(){
  var checkTecnico = document.getElementById("tecnico");
  if(checkTecnico.checked){
    document.getElementById("tab-tecnico").style.display = "block";
    document.querySelector("label[for='tecnico']").style.borderBottom = "5px solid white";
    document.querySelector("label[for='tecnico']").style.color = "white";
  }else{
    document.getElementById("tab-tecnico").style.display = "none";
    document.querySelector("label[for='tecnico']").style.borderBottom = "5px solid rgb(169 153 153)";
    document.querySelector("label[for='tecnico']").style.color = "rgb(169 153 153)";
  }
  var checkTecnico1 = document.getElementById("universidad");
  if(checkTecnico1.checked){
    document.getElementById("tab-universidad").style.display = "block";
    document.querySelector("label[for='universidad']").style.borderBottom = "5px solid white";
    document.querySelector("label[for='universidad']").style.color = "white";
  }else{
    document.getElementById("tab-universidad").style.display = "none";
    document.querySelector("label[for='universidad']").style.borderBottom = "5px solid rgb(169 153 153)";
    document.querySelector("label[for='universidad']").style.color = "rgb(169 153 153)";
  }
  var checkTecnico2 = document.getElementById("platzi");
  if(checkTecnico2.checked){
    document.getElementById("tab-platzi").style.display = "block";
    document.querySelector("label[for='platzi']").style.borderBottom = "5px solid white";
    document.querySelector("label[for='platzi']").style.color = "white";
  }else{
    document.getElementById("tab-platzi").style.display = "none";
    document.querySelector("label[for='platzi']").style.borderBottom = "5px solid rgb(169 153 153)";
    document.querySelector("label[for='platzi']").style.color = "rgb(169 153 153)";
  }
}
