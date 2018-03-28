function sendHistory(){

  var history = {
       type : "history",
     };
  console.log("Historique des messages demandé");

  ws.addEventListener('open', function() {
  ws.send(JSON.stringify(history));
  });
}

sendHistory();
