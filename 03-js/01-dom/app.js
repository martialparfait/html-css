//console.log(document);

let mainTitle = document.querySelector("h1");

let listItems = document.querySelectorAll("li");
console.log(listItems);

listItems.forEach((listItem) => {
  listItem.style.color = "red";
});
