document
.getElementById("startBtn")
.onclick=function(){

const name=document
.getElementById("playerName")
.value
.trim();

if(name===""){
alert("Enter your name");
return;
}

localStorage.setItem(
"playerName",
name
);

window.location="quiz.html";

};
