function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
function display(ele){
	document.getElementById("alt_display").innerHTML = ele.alt;
}
function unDo(){
	document.getElementById("alt_display").innerHTML = "";
}