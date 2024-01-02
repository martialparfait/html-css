//Tout le document
// console.log(document);

let main_title = document.querySelector("#main_title");
// //Element par ID
// console.log(document.querySelector("#main_title"));

// //Tous les éléments
// console.log(document.querySelectorAll("li"));

const ul = document.querySelector("ul");
// const listItems = document.querySelectorAll("li");

// listItems.forEach((item) => {
//   console.log(item);
// });

main_title.innerHTML = "Hello World";
console.log(ul);
console.log(ul.nodeName);
console.log(ul.innerText); // Retourne le texte
console.log(ul.textContent); //Retourne le texte avec les espaces
console.log(ul.innerHTML); // retourne l'html

ul.setAttribute("id", "main-list");
ul.removeAttribute("id");
console.log(ul.getAttribute("class"));

ul.classList.add("blue");
ul.classList.remove("blue");
ul.classList.toggle("blue");

//set interval

console.log(main_title.style);
main_title.style.color = "red";
main_title.style.fontSize = "80px";
console.log(getComputedStyle(main_title).fontSize);

const newLi = document.createElement("li");
newLi.innerText = "Item 4";
newLi.classList.add("blue");
ul.append(newLi); // Attention
ul.prepend(newLi); // Attetnion

//insertAdjacentElement
//beforebegin
//afterbegin
//beforeend
//afterend

//set interval toggle
newLi.remove();
