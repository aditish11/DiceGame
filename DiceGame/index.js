function handleClick(){
var a = Math.ceil(Math.random() * 6);
var b = Math.ceil(Math.random() * 6);

var image1 = document.querySelectorAll("img")[0];
var img1 = "images/dice" + a + ".png";
image1.setAttribute("src", img1);

var image2 = document.querySelectorAll("img")[1];
var img2 = "images/dice" + b + ".png";
image2.setAttribute("src", img2);

if (a == b) {
  document.querySelector("h1").innerHTML = "Draw!";
} else if (a > b) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins";
} else {
  document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
}
}



let play=document.querySelector('.buttonClass');
play.addEventListener("click",handleClick);




