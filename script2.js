// var titre = document.getElementById("titre");
// alert(titre.innerHTML);
// console.log(titre);

//
// var username = document.getElementById("username");
// alert(username.innerHTML);
// console.log(username);

var ws = new WebSocket("ws://localhost:8083");




function connect(){

  var mon_objet2 = {
    type : "connexion",
    email : document.formco.email.value,
    password : document.formco.password.value,

  };

  var email = document.getElementById('email').value;
  alert(email);

  var password = document.getElementById('password').value;
  alert(password);


  if (document.formco.email.value == "") {
    alert("remplir votre email");

  }

  if (document.formco.password.value == "") {
    alert("remplir votre mdp");

  }

  else {
    alert("vous êtes cococo");
  }


  var toSend2 = JSON.stringify(mon_objet2);

  console.log(toSend2);
  ws.send(toSend2);
  alert("connect");


  ws.onmessage = function (event) {
  console.log(event.data);
  var msg1 = JSON.parse(event.data);
  var msg = JSON.parse(msg1);


  console.log(msg);
  console.log(msg.username);
  console.log(msg.idUser);
  console.log(msg.key);

  alert("Bonjour "+msg.username+" ,vous avez l'ID "+msg.idUser+", la clé est "+msg.key);
}


}
