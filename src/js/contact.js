function number() {
  document.getElementById("number").style.filter = "blur(0px)";
  document.getElementById("number").style.userSelect = "text";
  document.getElementById("close").innerHTML = "Sluiten";
}

function closePop() {
  document.getElementById("phone").style.display = "none";
  document.getElementById("number").style.filter = "blur(5px)";
  document.getElementById("number").style.userSelect = "none";
  document.getElementById("fade").style.display = "none";
  document.getElementById("close").innerHTML = "Annuleer";
}

function popUp() {
  document.getElementById("phone").style.display = "flex";
  document.getElementById("fade").style.display = "flex";
}