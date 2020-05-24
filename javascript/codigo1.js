function iniciar(){

  const url = '/register';
  var correo = '';

  const form = document.querySelector('form')
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const formData = new FormData(form);
    var user = {
      nombre: formData.get('nombre'),
      apellidos: formData.get('apellidos'),
      correo: formData.get('correo'),
      contrasenia: formData.get('contrasenia'),
      fecha: formData.get('fecha')
    }
    console.log(user)
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((response) => response.json())    //se puede return en una función
    .then((data) => {           //pueden ir sin paréntesis
      console.log(data);
      renderUsername(data.nombre)
      correo = data.correo
    })
    .catch(function(err) {
      console.log('Lo sentimos error: ' + err);
    });
  })





  function renderUsername(nombre) {
    var padre = document.getElementById("header-inicio-des");
    var regis = document.getElementById("panel-register");
//    regis.style.visibility = "hidden";
//    nuevo.style.visibility = "visible"
    padre.removeChild(regis);
    padre.innerHTML = `
    <div id="panel-register" style="visibility:visible">
      <div id="title">
        <h1 id="nuevo-titulo"></h1>
      </div>
      <form id="form-confirmation" name="form-register" action="register.html" method="post">
        <p>
          <label>Verifica tu correo<br></label>
          <input pattern="[0-9]{3,}" maxlength="20" type="text"
            name="codigo" id="codigo" required
            style="background: rgb(255, 255, 255);" placeholder="Ej: 345932">
        </p>
        <p>
          <label id='mensaje_codigo' style='visibility:hidden'>Código incorrecto</label>
        </p>
        <p id="desing-button">
          <button class="boton" type="submit" id="confirm">
            Confirmar
          </button>
        </p>
      </form>
    </div>
    `;

    const username = document.getElementById("nuevo-titulo")
    username.innerHTML = '<div>Ya casi '+nombre+'</div>'
    document.getElementById('panel-register').style.minHeight = '80px';

    const formConfirmation = document.getElementById('form-confirmation')
    formConfirmation.addEventListener('submit', (event) => {
      event.preventDefault()
      const formDataTwo = new FormData(formConfirmation);
      var cod = {
        correo: correo,
        cod_ver: formDataTwo.get('codigo')
      }
      console.log(cod)
      fetch('/register/confirmation',{
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(cod)
      })
      .then((response) => response.json())    //se puede return en una función
      .then((data) => {           //pueden ir sin paréntesis
        console.log(data.respuesta);
        if(data.respuesta == 'false'){
          document.getElementById('mensaje_codigo').style.visibility = 'visible'
        }else {
          document.getElementById('mensaje_codigo').style.visibility = 'hidden'
          alert('Bienvenido\nRecuerde su correo es: '+data.respuesta)
        }
      })
      .catch(function(err) {
        console.log('Lo sentimos error: ' + err);
      });
    })
  }

  // var boton = document.getElementById("enviar");
  // form.addEventListener("submit", (event) => {
  //   event.preventDefault()
  //   const formData = new FormData(event.currentTarget)
  //   renderUsername(formData)
  //   fetch('/register', {
  //     method: 'POST',
  //     body: formData
  //   })
  //   .then(response => {
  //     debugger
  //   })
  // })
}
window.addEventListener("load", iniciar);
