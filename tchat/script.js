// var titre = document.getElementById("titre");
// alert(titre.innerHTML);
// console.log(titre);

//
// var username = document.getElementById("username");
// alert(username.innerHTML);
// console.log(username);

function validation() {
var prenom = document.getElementById('username').value;
alert(prenom);

var mail = document.getElementById('mail').value;
alert(mail);

var password = document.getElementById('password').value;
alert(password);

var confirmpassword = document.getElementById('confirmpassword').value;
alert(confirmpassword);


  if (document.myform.username.value == "") {
    alert("remplir votre name");
    return false;
  }

  if (document.myform.mail.value == "") {
    alert("remplir votre email");
    return false;
  }

  if (document.myform.password.value == "") {
    alert("remplir votre mdp");
    return false;
  }

  if (document.myform.confirmpassword.value == "") {
    alert("confirme votre mdp");
    return false;
  }

  else {
  return true;
  alert("vous êtes inscrit");

  }




}
