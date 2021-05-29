$(document).ready(function(){
  const btnph = document.getElementById('ph');

  var uriWS="ws://localhost:8082/granja-sockets/ph";
  var miWebsocket= new WebSocket(uriWS);

  const enviar = () => {
  setInterval(() => {
    const mensaje = {
      action: "guardar",
      id_remitente: 1300,
      id_destinatario: 1000,
      mensaje: {
        ph: 8.0
      },
      fecha: Date.now().toString()
      }
      miWebsocket.send( JSON.stringify( mensaje ) );
    }, 3000);
  }

  btnph.addEventListener('click', enviar);
})