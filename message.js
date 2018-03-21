var ws = new WebSocket("ws://localhost:8083");

function sendMessage(){
 var Msg = {
      type : "message",
      text : document.getElementById('messagestext').value,
      date : Date.now(),
    };
ws.send(JSON.stringify(Msg));

document.getElementById("messagestext").value = "";


ws.onmessage = function (event) {
console.log(event.data);
alert("message envoyer");
}
}





function afficheMessage(){
  var meme = {
    type : "affiche",
    text : document.getElementById('messagesTextArea').value,
    date : Date.now(),
  };


  ws.send(JSON.stringify(meme));

  document.getElementById("messagesTextArea").value = "";


  ws.onmessage = function (event) {
  console.log(event.data);
  alert("message envoyer");
  }
}
