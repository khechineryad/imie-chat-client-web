// var titre = document.getElementById("titre");
// alert(titre.innerHTML);
// console.log(titre);

//
// var username = document.getElementById("username");
// alert(username.innerHTML);
// console.log(username);

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
 

}
