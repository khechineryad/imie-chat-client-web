function addGroupe(text) {


    var nomGroupe = document.getElementById("nomGroupe").value;
    var oUl = document.getElementById("myliste"); // récupération de la liste
    var iLength = oUl.getElementsByTagName("li").length; // longueur de la liste (nombre d'items)


    var oLi = document.createElement("li"); // on cré un nouveau noeud item de liste
    var oText = document.createTextNode("Groupe de :" + (iLength + nomGroupe); // on cré un noeud texte

    oLi.appendChild(oText); // on attache le noeud texte au noeud item de liste
    oUl.appendChild(oLi); // on attache le noeud item de liste au noeud liste

    return oLi;



}
