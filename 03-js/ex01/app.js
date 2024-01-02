// Création de l'élément liste
let ul = document.createElement("ul");
ul.style.fontSize = "30px";
ul.style.textTransform = "uppercase";
ul.style.listStyleType = "none";
ul.style.padding = "0";
// Ajout de la liste au document
document.body.appendChild(ul);

// Création et ajout des éléments de la liste
let li1 = document.createElement("li");
li1.textContent = "Cette année";
li1.classList.add("red");
ul.appendChild(li1);

let li2 = document.createElement("li");
li2.textContent = "En décembre";
li2.classList.add("green");

ul.appendChild(li2);

let li3 = document.createElement("li");
li3.textContent = "Ce sera noël";
li3.classList.add("blue");

ul.appendChild(li3);

let li4 = document.createElement("li");
li4.textContent = "Comme l'année passée";
li4.classList.add("yellow");

ul.appendChild(li4);

let li5 = document.createElement("li");
li5.textContent = "Et l'année d'avant";
li5.classList.add("purple");

ul.appendChild(li5);

let li6 = document.createElement("li");
li6.textContent = "Et celle d'encore avant";
li6.classList.add("orange");

ul.appendChild(li6);

let li7 = document.createElement("li");
li7.textContent = "Et celle d'après";
li7.classList.add("pink");

ul.appendChild(li7);

setInterval(() => {
  li1.classList.toggle("red");
  li1.classList.toggle("green");

  li2.classList.toggle("green");
  li2.classList.toggle("blue");

  li3.classList.toggle("blue");
  li3.classList.toggle("yellow");

  li4.classList.toggle("yellow");
  li4.classList.toggle("purple");

  li5.classList.toggle("purple");
  li5.classList.toggle("orange");

  li6.classList.toggle("orange");
  li6.classList.toggle("pink");

  li7.classList.toggle("pink");
  li7.classList.toggle("red");
}, 1000);
