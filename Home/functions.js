function movebox() {
  var element = document.getElementById("mainbox");
  element.classList.remove("moveback");
  element.classList.add("moveleft");
}
function goback() {
  var element = document.getElementById("backbutton");
  element.style.display = "block";
}
function moveboxback() {
  var element = document.getElementById("mainbox");
  element.classList.remove("moveleft");
  element.classList.add("moveback");
  document.getElementById("backbutton").style.display = "none";
  var resume = document.getElementById("theresume");
  resume.classList.remove("startfadein");
  resume.classList.add("startfadeout");
  resume.style.display="none";
  resume.style.visibility="hidden";
}
function openresume() {
  var element = document.getElementById("theresume");
  element.style.display = "block";
  element.classList.remove("startfadeout");
  element.classList.add("startfadein");
  element.style.visibility = "visible";
}
