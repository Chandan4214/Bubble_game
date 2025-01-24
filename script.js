var timer=10;
var score=0;
var hitrn=0;

//Event bubbling:------



function increaseScore(){
  score+=10;
  document.querySelector(".scoreVal").textContent=score;  
}
function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector(".hitVal").textContent=hitrn;
    
     
}

function makeBubble(){
    var bubble="";


for(var i=0;i<=165;i++){
    var rn=Math.floor(Math.random()*10)
    bubble+=` <div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML=bubble;
}
function runTimer(){
    var timeint =setInterval(function(){
     if (timer>0){
         timer--;
         document.querySelector(".timeInterval").textContent=timer;
 
     }
     else{
         clearInterval(timeint);
         document.querySelector("#pbtm").innerHTML=`<h1>Game over<h1>`;
         
     }
     
   },1000)

}
document.querySelector("#pbtm").addEventListener("click",(details)=>{
    
    var click=Number(details.target.textContent);
    if (click===hitrn){
        increaseScore();
        getNewHit();
        makeBubble();
    
    }

})

makeBubble();
getNewHit();
runTimer()


