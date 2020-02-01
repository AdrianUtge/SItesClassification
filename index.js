var sites = [];
var id = 0;

// main function
function main(name) {
    sites.name = name;


}


// ajouter un nom
function nom() {
    var ul = document.getElementById("site-list");
    var a = document.createElement("a");

    var Nom = document.getElementById("NAME").value;
    console.log(Nom)
    a.appendChild(document.createTextNode("Element 4"));


}

function function1() {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("Element 4"));
}


// ajouter un lien
function url() {
    var input = document.getElementById("URL").value;
    console.log(input)
    var anchor = document.getElementById("siteone");
    var att = document.createAttribute("href");
    att.value = input;
    anchor.setAttributeNode(att);
}


function function1() {
}