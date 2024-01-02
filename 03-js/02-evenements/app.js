document.addEventListener("click", () => {
  console.log("click document");
});

let button = document.querySelector("button");
let a = document.querySelector("a");

button.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.target); // Element sur lequel on a cliqué : span
  console.log(event.currentTarget); // Sujet de l'écouteur : button
});
a.addEventListener("click", (e) => {
  console.log("click sur le lien");
  e.preventDefault();
  e.stopPropagation();
});

let counter_click = 0;
button.addEventListener("click", (event) => {
  if (counter_click <= 3) {
    counter_click++;
    console.log("click once : " + counter_click);
  }
});

document.querySelector("body").style.height = "200vh";
document.addEventListener("scroll", (event) => {
  console.log(event);
  console.log("scroll");
});
