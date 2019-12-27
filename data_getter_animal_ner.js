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
    displayContents(contents);
    makeURL(contents);
  };
  reader.readAsText(file);
}

var displayContents = function (contents) {
  var element = document.getElementById('file-content');
  element.innerHTML = contents;
}

var makeURL = function(contents) {
  for (var i=0; i < contents.length; i=i+1) {
    to_add = contents[i].toString();
    theURLs.push("https://en.wikipedia.org/wiki/" + to_add);
  }
  console.log("2nd", theURLs);
}

// A FAIRE : je modifie les propriétés CSS pour input et label et pour ce qui
// est des pseudo-classes j'utilise des events comme mouseover

var makeStyleCSS = function() {
  var input_element = document.getElementById("fileinput");
  var label_input = document.getElementById("label_input");
  input_element.style.width = "0.1px";
  input_element.style.height = "0.1px";
  input_element.style.opacity = "0";
  input_element.style.overflow = "hidden";
  input_element.style.position = "absolute";
  input_element.style.zIndex = "-1";
  input_element.style.fontSize = "1.25em";
  input_element.style.fontWeight = "700";
  input_element.style.color = "white";
  input_element.style.backgroundColor = "red";
  input_element.style.display = "inline-block";
  label_input.style.fontSize = "1.25em";
  label_input.style.fontWeight = "700";
  label_input.style.color = "white";
  label_input.style.backgroundColor = "red";
  label_input.style.display = "inline-block";
  input_element.style.cursor = "pointer";
  label_input.style.cursor = "pointer";
}

var changeStyleCSS1 = function() {
  var input_element = document.getElementById("fileinput");
  var label_input = document.getElementById("label_input");
  input_element.style.backgroundColor = "#772754";
  label_input.style.backgroundColor = "#772754";
}

var changeStyleCSS2 = function() {
  var input_element = document.getElementById("fileinput");
  var label_input = document.getElementById("label_input");
  input_element.style.backgroundColor = "red";
  label_input.style.backgroundColor = "red";
}

var setupListeners = function() {
  var elem = document.getElementById("fileinput")
  elem.addEventListener('change', readSingleFile, false);
  var input_element = document.getElementById("fileinput");
  var label_input = document.getElementById("label_input");
  input_element.addEventListener('onfocus', changeStyleCSS1);
  input_element.addEventListener('onblur', changeStyleCSS2);
  label_input.addEventListener('mouseover', changeStyleCSS1);
  label_input.addEventListener('mouseout', changeStyleCSS2);
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
