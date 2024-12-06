let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"]


let started=false;
let level=0;
let h2=document.querySelector('h2')
document.addEventListener('keypress',()=>{
    if(started==false){
        console.log('game is started') 
        started=true;
    }
    levelUp();
});
function gameFlash(btn){
    btn.classList.add('flash')
    setTimeout(function(){
        btn.classList.remove('flash')
    },250)
}
function userFlash(btn){
    btn.classList.add('userflash')
    setTimeout(function(){
        btn.classList.remove('userflash')
    },250)
}
function levelUp(){
        userSeq=[];
        level++;
          h2.innerText=`level ${level}`;
          let randIdx=Math.floor(Math.random()*4);
          let randColor=btns[randIdx];
          let randbtn=document.querySelector(`.${randColor}`)
          gameSeq.push(randColor);
         console.log(gameSeq)
          gameFlash(randbtn);
}

function checkAns(idx){
    console.log('curr level:',level) 
   
    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000)
         
       }
    }else{
        h2.innerHTML=`Game Over!start Again`;
        
          document.querySelector('body').style.backgroundColor='red';
        setTimeout(()=>{
            document.querySelector('body').style.backgroundColor='White'; 
        },150)
        setTimeout(()=>{
            h2.innerHTML= `your Score is ${level}`
       },1500)
        reset();
       
    }
}

function btnpress(){
    console.log(this)
    let btn=this;
    userFlash(btn)
    userColor=btn.getAttribute('id');
    userSeq.push(userColor);

   checkAns(userSeq.length-1);
}
let allBtn=document.querySelectorAll('.btn')
for(let btn of allBtn){
    btn.addEventListener('click',btnpress)
}
function reset(){
    started==false;
    level=0;
    gameSeq=[];
    userSeq=[];
 
    

}