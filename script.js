




function openNav(){
    document.querySelector(".nav__side-bar").style.width = '255px';
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}


function closeNav(){
    document.querySelector(".nav__side-bar").style.width = '0px';
    document.body.style.backgroundColor = "white";

}


window.addEventListener('resize', ()=>{
    if(window.innerWidth > 700){
        document.querySelector(".nav__side-bar").style.removeProperty("width");
        document.body.style.backgroundColor = "white";
    }
})