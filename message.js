function sendMessage(){

  if (document.getElementById("messagestext").value != "") {
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

    console.log("message envoyé au serveur avec la clé: " + sessionKey);
    ws.send(JSON.stringify(Msg));
  } else {
    alert("message vide");
  }
  document.getElementById("messagestext").value = "";


}
