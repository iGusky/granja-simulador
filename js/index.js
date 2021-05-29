$(document).ready(function() {

  const identificador = document.getElementById('id');
  const btnEnviar = document.getElementById('btnEnviar');
  const btnObtener = document.getElementById('btnObtener');
  const zona = document.getElementById('zona');

  var uriWS="ws://localhost:8082/granja-sockets/humedad";
  var miWebsocket= new WebSocket(uriWS);

  const enviar = (e) => {
    e.preventDefault();
    btnEnviar.setAttribute('enable', 'false');

   

    const myInterval = setInterval(() => {
      const humedad = (Math.random() * ( 60.0 - 99.9 ) + 99.9).toFixed(2);
      const mensaje = {
        action: "guardar",
        zona: Number(zona.value),
        id_remitente: Number (identificador.value),
        id_destinatario: 1000,
        mensaje: {
          humedad: humedad
        },
        fecha: Date.now().toString()
      }
  
      console.log(mensaje);
  
      miWebsocket.send( JSON.stringify( mensaje ) );
    }, 3000);

  }

  const obtener = (e) => {
    e.preventDefault();

    const mensaje = {
      action: 'obtenerTodos'
    }
    miWebsocket.send(JSON.stringify( mensaje ));
  }
 
  btnEnviar.addEventListener('click', enviar);
  btnObtener.addEventListener('click', obtener);
  console.log (miWebsocket); 

  miWebsocket.onopen=function(evento) {
    console.log(evento)
  }

  
  // miWebsocket.onmessage=function(evento) {
  //   console.log(evento.data);
  // }
});