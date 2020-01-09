// idées d'amélio pour l'aspect de l'interface : faire de beaux contours,
// pk pas arrondi. Mettre effet de 3d/volume, des ombres, surbrillance etc.
// lancer fonction display content seulement si ensuite on appuie sur un
// bouton ? En + pas nécessaire, je veux surtout que js lise le fichier crée
// les liens et les passe ensuite.

var theURLs = []

var readSingleFile = function(e) {
  var file = e.target.files[0];
  if (!file) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function(e) {
    var contents = e.target.result;
    // Display file content
    contents = contents.split(/\r\n/); // we can use a regex inside the split
    // methode, this way we directly target escape characters on which we want
    // split
    makeURL(contents);
    displayURLs(theURLs);
  };
  reader.readAsText(file);
}

var displayContents = function (contents) { // plus utilisé pour l'instant
  var element = document.getElementById('file-content');
  element.innerHTML = contents;
}

// ok faut rechanger encore en fait link est désuet vaut mieux passer par ça :
// https://stackoverflow.com/questions/8424505/passing-a-target-to-the-js-link-method
var displayURLs = function(URLs) {
  var element = document.getElementById('file-content');
  var content_urls = [];
  var the_url = '';
  for (var i=0; i < theURLs.length; i=i+1) {
    the_url = theURLs[i].link(theURLs[i]) + "<br>"
    content_urls.push(the_url);
    the_url = ''
  }
  content_urls = content_urls.join("");
  element.innerHTML = content_urls;
  theURLs = []; // reinitializing each time the variable if the user chooser
  // load again a file, otherwise all the URLs coming from a previous uploading
  // are displayed in the HTML text content.
}

var makeURL = function(contents) {
  for (var i=0; i < contents.length; i=i+1) {
    to_add = contents[i].toString();
    theURLs.push("https://en.wikipedia.org/wiki/" + to_add);
  }
}

// A FAIRE : je modifie les propriétés CSS pour input et label et pour ce qui
// est des pseudo-classes j'utilise des events comme mouseover

var makeStyleCSS = function() {
  var bd = document.getElementById("bd")
  var input_element = document.getElementById("fileinput");
  var label_input = document.getElementById("label_input");
  var box = document.getElementById("box");
  var span = document.getElementById("spanbox");
  var strong = document.getElementById("strongbox");
  var div_content = document.getElementById("content");
  var svg = document.getElementById("svgbox");
  var path = document.getElementById("pathbox");

  // se renseigner sur comment mettre la fin de la variable à la ligne...
  bd.style.fontFamily = "Avenir, 'Helvetica Neue', 'Lato', 'Segoe UI',\
  Helvetica, Arial, sans-serif";
  bd.style.backgroundColor = "#f1e5e6";

  div_content.style.width = "100%";
  div_content.style.maxWidth = "1400px";
  div_content.style.textAlign = "center";
  div_content.style.margin = "0 auto";
  div_content.style.padding = "0 0 3em 0";
  div_content.style.boxSizing = "border-box";

  box.style.backgroundColor = "#dfc8ca";
  box.style.padding = "6.25rem 1.25rem";
  box.style.marginTop = "2.5rem";
  box.style.boxSizing = "border-box";

  input_element.style.width = "0.1px";
  input_element.style.height = "0.1px";
  input_element.style.opacity = "0";
  input_element.style.overflow = "hidden";
  input_element.style.position = "absolute";
  input_element.style.zIndex = "-1";
  input_element.style.fontSize = "100%";
  input_element.style.color = "white";
  input_element.style.backgroundColor = "#d3394c";
  input_element.style.display = "inline-block";
  input_element.style.margin = "0";
  input_element.style.boxSizing = "border-box";
  input_element.style.cursor = "pointer";
  // input_element.stye.lineHeight = "normal"; Il veut pas mettre ça...

  label_input.style.maxWidth = "80%";
  label_input.style.height = "50px";
  label_input.style.fontSize = "1.25em";
  label_input.style.fontWeight = "700";
  label_input.style.color = "#d3394c";
  label_input.style.backgroundColor = "white";
  label_input.style.display = "inline-block";
  label_input.style.cursor = "pointer";
  label_input.style.whiteSpace = "nowrap";
  label_input.style.border = "1px solid red"
  label_input.style.padding = "0";
  label_input.style.boxSizing = "border-box";
  label_input.style.overflow = "hidden";
  label_input.style.textOverflow = "ellipsis";

  span.style.width = "400px";
  span.style.minHeight = "2em";
  span.style.display = "inline-block";
  span.style.textOverflow = "ellipsis";
  span.style.whiteSpace = "nowrap";
  span.style.overflow = "hidden";
  span.verticalAlign = "top";
  span.style.padding = "0.625rem 1.25rem";
  span.style.verticalAlign = "top";
  span.style.boxSizing = "border-box";

  strong.style.height = "100%";
  strong.style.backgroundColor = "#d3394c";
  strong.style.color = "#f1e5e6";
  strong.style.display = "inline-block";
  strong.style.padding = "0.625rem 1.25rem";
  strong.style.fontWeight = "bold";
  strong.style.boxSizing = "border-box";

  svg.style.width = "1em";
  svg.style.height = "1em";
  svg.style.verticalAlign = "middle";
  svg.style.fill = "currentColor";
  svg.style.marginTop = "-0.25em";
  svg.style.marginRight = "0.25em";
  svg.style.boxSizing = "border-box";
  svg.style.overflow = "hidden";

}

var changeStyleCSS1 = function() {
  var input_element = document.getElementById("fileinput");
  var strong = document.getElementById("strongbox");
  input_element.style.backgroundColor = "#772754";
  strong.style.backgroundColor = "#772754";
}

var changeStyleCSS2 = function() {
  var input_element = document.getElementById("fileinput");
  var strong = document.getElementById("strongbox");
  input_element.style.backgroundColor = "#d3394c";
  strong.style.backgroundColor = "#d3394c";
}

var displayFileName = function() {
  var span = document.getElementById("spanbox");
  span.innerHTML = this.value.split(/\\/).pop();
  console.log(this.value.split(/\\/).pop());
}

var setupListeners = function() {
  var elem = document.getElementById("fileinput");
  elem.addEventListener('change', readSingleFile, false);
  var input_element = document.getElementById("fileinput");
  var strong = document.getElementById("strongbox");
  input_element.addEventListener('onfocus', changeStyleCSS1);
  input_element.addEventListener('onblur', changeStyleCSS2);
  input_element.addEventListener('input', displayFileName);
  strong.addEventListener('mouseover', changeStyleCSS1);
  strong.addEventListener('mouseout', changeStyleCSS2);
}

window.addEventListener("load", setupListeners);
window.onload = function() {
  makeStyleCSS()
};

// ok pas mal mais copier au max ce qu'il a fait sur son site en inspectant le
// code sera beaucoup mieux

// var lesURL = []

// var readTextFile = function(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, true); // le bool ici c'est asynchrone ou pas
//     // donc on peut le changer selon ce qu'on veut
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//           console.log("1st", rawFile.status)
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 console.log("2st", rawFile.status)
//                 var allText = rawFile.responseText;
//                 console.log(allText)
//                 alert(allText);
//                 console.log("3st", rawFile.status)
//             }
//         }
//     }
//     rawFile.send(null);
// }

// ok il me faut stocker le texte et un return dans readfile

// var txt = '';
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function(){
//   alert(xmlhttp.readyState)
//   alert(xmlhttp.status)
//   if(xmlhttp.status == 200 && xmlhttp.readyState == 4){
//     txt = xmlhttp.responseText;
//     console.log("cc", txt)
//   }
// };
// xmlhttp.open("GET", "file:///D:/PycharmProjects/animal_names.txt", true);
// xmlhttp.send();

// var makeURL = function(file)
// {
//   var thetext = lesURL
//   for (var i = 0; i < thetext.length; i=i+1)
//   {
//     lesURL.push(thetext[i])
//   }
// }

// readTextFile("D:/PycharmProjects/animal_names.txt")

// makeURL("D:/PycharmProjects/animal_names.txt")

// console.log(lesURL)

// Bon c'est vraiment pas possible maintenant de consulter en local avec xmlhttp y a tjs un pb de sécurité ou de il
//  trouve pas le fichier donc on va essayer autre chose
