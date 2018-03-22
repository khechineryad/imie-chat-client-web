// Connexion WebSocket
var ws = new WebSocket("ws://localhost:8083", ["protocolOne", "protocolTwo"]);


// à l'ouverture du serveur

ws.onmessage = function processMessage(message) {

}

// Function d'envoie du message depuis l'input
function SendMessage() {
  var Msg = {
    type : "message",
    text : document.getElementById('message').value,
    id : id_utilisateur,
    date : Date.now(),
  };
  ws.send(JSON.stringify(msg));

  document.getElementById('message').value('');
}




// affichage de message dans container
jQuery(function($) {
  $('#Send').submit(function() {
    /* Act on the event */
    var message = $("#message").val()
    var fini = message.trim();
    if (fini !== "") {
      $('.afficher').append('<p>'+message+'</p>')
      $('#message').val('')


    }
    else {
      alert ("Erreur dans l'envoie")
    }
    return false;
  });

});
