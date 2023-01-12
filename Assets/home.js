let btnHero= document.getElementById("hero");
let pageHero=document.getElementById("cinema");
btnHero.addEventListener("click",function(){
    pageHero.scrollIntoView();
})

let btnNemesis= document.getElementById("adversaire");
let pageNemesis=document.getElementById("nemesis");
btnNemesis.addEventListener("click",function(){
    pageNemesis.scrollIntoView();
})

let view= document.getElementById("photos-batman");
let zoom= document.getElementsByClassName("batphoto");

view.addEventListener("onscroll",()=>{
    if(scrollY>900 )
    {
        for(let i=0;i<zoom.length;i++)
        {
             zoom[i].style.classList.add=("batphoto2");
        }
    }
})