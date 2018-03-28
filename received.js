ws.onmessage = function (event) {
  console.log("message brut: "+event.data);
  var msg1 = JSON.parse(event.data);
  var msg = JSON.parse(msg1);
  console.log("message désérialisé: ");
  console.log(msg);

  switch (msg.type) {

    case "return_inscription":
      document.location.href="Connexion.html";
      break;

    case "return_connection":
      console.log(msg.username);
      console.log(msg.idUser);
      console.log(msg.key);
      localStorage.setItem('sessionKey', msg.key);
      alert("Bonjour "+msg.username+" ,vous avez l'ID "+msg.idUser+", la clé est "+msg.key);
      document.location.href="message.html";
      break;

    case "return_history":
      console.log("L'historique des messages est retourné par le serveur");
      break;

    default:
      for(var i=0;i<msg.length;i++)
      {
        var minutes = msg[i].minute;
        var hours = msg[i].hour;

        if (msg[i].minute < 10){
          minutes = "0"+msg[i].minute;
        }
        if (msg[i].hour < 10){
          hours = "0"+msg[i].hour;
        }
        document.getElementById('messagesTextArea').append(String("\n" + "["+ msg[i].hour + "h" + minutes + "]" + msg[i].username + ": " + msg[i].text + "\n"));

        var textarea = document.getElementById('messagesTextArea');
        textarea.scrollTop = textarea.scrollHeight;
      }


  }
}
