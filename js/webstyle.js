// JavaScript Document



/*var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navHeader").style.top = "0";
  } else {
    document.getElementById("navHeader").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

*/


function myFunction(x) {
  	x.classList.toggle("change");
	var m = document.getElementById("navi-list");
	var h = document.getElementById("pgContent");
	var h1 = document.getElementById("footage");
	if(m.style.display==="block"){
	   m.style.display = "none";
	   h.style.display = "block";
	   h1.style.display = "block";
	   }else{
	   m.style.display = "block";
	   h.style.display = "none";
	   h1.style.display = "none";
	   }
}