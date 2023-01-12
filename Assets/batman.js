/*animation générale*/

/*effets gras et surligné dans header*/
let menu = document.querySelectorAll("a");

menu.forEach(function(a)
{
    a.addEventListener('mouseover',()=>{
        a.style.fontWeight=('bold');
        a.style.textDecoration=('underline');
    
    });
    a.addEventListener('mouseout',()=>{
        a.style.fontWeight=('bold');
        a.style.textDecoration=('underline');
    });
})

/*effets hover sur les boutons*/
let btn =document.querySelectorAll("button");

btn.forEach(function(button){
    button.addEventListener('mouseover',()=>{
        button.style.opacity=('1');
    });
    button.addEventListener("mouseout",()=>{
        button.style.opacity=("0.4");
    });
})

/*effets hover en jaune sur les logos */

let log = document.getElementsByClassName("logo");

for(let i=0;i<log.length;i++)
{
    log[i].addEventListener('mouseover',()=>{
        log[i].style.filter=('grayscale(75%) brightness(80%) sepia(300%) hue-rotate(10deg) saturate(950%) contrast(1)');
    });
    log[i].addEventListener('mouseout',()=>{
        log[i].style.filter=('none');
});
}

/*scroll des icones*/

$(document).ready(function(){
    $(window).scroll(function(){
        let scroll=$(window).scrollTop();
        if(scroll>300 && scroll<5500 )
        {
            $('#curseur').css('top',scroll+'px');
        }
        if(scroll>5500)
        {
            $('#curseur').fadeIn(0);
        }

    })
})

/*scroll to Top */

let scrollTop= document.getElementById("top");
scrollTop.addEventListener("click",function(){
    document.body.scrollIntoView({
        behavior: "smooth",
      });
    })

/*scroll to bottom*/

let scrollBottom= document.getElementById("bottom");
let pageBottom= document.getElementById('formulaire');
scrollBottom.addEventListener("click",function(){
    pageBottom.scrollIntoView({behavior:"smooth",block:"center"});
})

/*titre et sous-titre en fadein*/
$(document).ready(function(){
    $(".title").animate({left:"0px"},'99999999');
    $(".subtitle").fadeIn('9000000');
})