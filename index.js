var randomNumebr1=Math.floor(Math.random()*6+1);
var randomNumebr2=Math.floor(Math.random()*6+1);
document.querySelector(".left-img").setAttribute("src","img/dice"+randomNumebr1+".png");
document.querySelector(".right-img").setAttribute("src","img/dice"+randomNumebr2+".png");
if(randomNumebr1 > randomNumebr2){
    document.querySelector("h1").textContent=" 🚩Player 1 Wins!";
}else if(randomNumebr2 > randomNumebr1){
    document.querySelector("h1").textContent="🚩player 2 wins!"
}else{
    document.querySelector("h1").textContent="😓Draw!"
}