var ws = new WebSocket("ws://localhost:8083");
ws.onmessage = function processMessage(message){
var Msg = {
     type : "message",
     text : document.getElementById('messageText').value,
     id : id_utilisateur, 
     date : Date.now(),
   };


  var JSONDATA = JSON.parse(message.data);
  if (JSONDATA.message != null) messages.value += JSONDATA.message + "\n";
}

function sendMessage(){
  ws.send(Msg.value);
  Msg.value = "";
}
