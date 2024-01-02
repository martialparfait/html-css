document.getElementById("snowButton").addEventListener("click", function () {
  let flocon = document.createElement("div");
  flocon.className = "flocon";
  flocon.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(flocon);

  flocon.style.animation = "tomber 3s linear forwards";
});
