// var titre = document.getElementById("titre");
// alert(titre.innerHTML);
// console.log(titre);

//
// var username = document.getElementById("username");
// alert(username.innerHTML);
// console.log(username);

var ws = new WebSocket("ws://localhost:8083");


function inscription() {
  var mon_objet = {
    type : "inscription",
    username : document.myform.username.value,
    email : document.myform.email.value,
    password : document.myform.password.value,
    confirmpassword : document.myform.confirmpassword.value,
  };


  var prenom = document.getElementById('username').value;
  alert(prenom);

  var mail = document.getElementById('email').value;
  alert(email);

  var password = document.getElementById('password').value;
  alert(password);

  var confirmpassword = document.getElementById('confirmpassword').value;
  alert(confirmpassword);


  if (document.myform.username.value == "") {
    alert("remplir votre name");

  }

  if (document.myform.email.value == "") {
    alert("remplir votre email");

  }

  if (document.myform.password.value == "") {
    alert("remplir votre mdp");

  }

  if (document.myform.confirmpassword.value == "") {
    alert("confirme votre mdp");

  }

  else {
    alert("vous êtes inscrit");


  }


  var toSend = JSON.stringify(mon_objet);

  console.log(toSend);
  ws.send(toSend);
  alert("merci");
}



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
  var msg = JSON.parse(event.data);
  var msg2 = JSON.parse(msg);
  console.log(msg2);
  console.log(msg2.username);
  console.log(msg2.idUser);

  alert("Bonjour "+msg2.username+" ,vous avez l'ID "+msg2.idUser);
}


}
