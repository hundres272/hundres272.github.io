const iconMenu = document.getElementById("img-menu");

iconMenu.addEventListener("click",()=>{
    const elm = document.getElementById("header-section-1");
    console.log(elm.classList.contains("header-transparent"));
    if (elm.classList.contains("header-transparent")) {
        iconMenu.src = "./imagenes/xb.png";
        elm.classList.remove("header-transparent");
    }else{
        iconMenu.src = "./imagenes/menu1.png";
        elm.classList.add("header-transparent");
    }
});

function enviar(op) {
    switch(op){
        case 1:
            document.location = "/";
            break;
        case 2:
            document.location = "/formacion.html";
            break;
        case 3:
            document.location = "/trabajos.html";
            break;
        case 4:
            document.location = "/contacto.html";
            break;
    }
}