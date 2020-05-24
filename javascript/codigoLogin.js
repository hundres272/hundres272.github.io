function iniciar(){

  const url = '/ingreso';

  const form = document.querySelector('form')
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    var user = {
      correo: formData.get('correo'),
      contrasenia: formData.get('contrasenia')
    }
    console.log(user)
    fetch(url,{
      // method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((response) => response.json())    //se puede return en una función
    .then((data) => {           //pueden ir sin paréntesis
      console.log(data);
      // renderUsername(data.nombre)
      // correo = data.correo
    })
    .catch(function(err) {
      console.log('Lo sentimos error: ' + err);
    });
  })
}


window.addEventListener("load", iniciar);
