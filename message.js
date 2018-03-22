var ws = new WebSocket("ws://localhost:8083");


function sendMessage(){

var date = new Date();
var heure = date.getHours();
var minutes = date.getMinutes();
var sessionKey = localStorage.getItem("sessionKey");


var Msg = {
     type : "message",
     text : document.getElementById('messagestext').value,
     hour : heure,
     minute : minutes,
     userKey : sessionKey,
   };
ws.send(JSON.stringify(Msg));

}




ws.onmessage = function (event) {
console.log(event.data);
var msg1 = JSON.parse(event.data);
var msg = JSON.parse(msg1);

if (document.getElementById("messagestext").value != "") {
document.getElementById("messagestext").value = "";
document.getElementById('messagesTextArea').append(String("\n" + "["+ msg.hour + "h" + msg.minute + "]" + msg.username + ": " + msg.text + "\n"));

} else {

  alert("message vide");

}


}
