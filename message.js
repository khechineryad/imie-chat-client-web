var ws = new WebSocket("ws://localhost:8083");



function sendMessage(){

 var date = new Date();
 var heure = date.getHours();
 var minutes = date.getMinutes();

 var Msg = {
      type : "message",
      text : document.getElementById('messagestext').value,
      dateHours : heure,
      dateMinutes : minutes,
    };
ws.send(JSON.stringify(Msg));



if (document.getElementById("messagestext").value != "") {
 document.getElementById("messagestext").value = "";
 document.getElementById('messagesTextArea').append(String("\n" + "["+ Msg.dateHours + "h" + Msg.dateMinutes + "]" + "Username: " + Msg.text + "\n"));

} else {


}



}
ws.onmessage = function (event) {
 console.log(event.data);
}
