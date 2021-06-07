$(document).ready(function(){
  const btnph = document.getElementById('ph');

  var uriWS="ws://localhost:8082/granja-sockets/compostador";
  var miWebsocket= new WebSocket(uriWS);

  miWebsocket.onopen=function(evento) {
    console.log(evento)
  }
  miWebsocket.onmessage=function(evento) {
    console.log(evento);
  }
  
})