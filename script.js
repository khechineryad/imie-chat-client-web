// var titre = document.getElementById("titre");
// alert(titre.innerHTML);
// console.log(titre);

//
// var username = document.getElementById("username");
// alert(username.innerHTML);
// console.log(username);

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
    alert("Merci, vous êtes inscrit");

    var toSend = JSON.stringify(mon_objet);

    console.log(toSend);
    ws.send(toSend);
  }
}
