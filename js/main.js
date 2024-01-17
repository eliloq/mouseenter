let div=document.querySelector("div")
div.addEventListener("mousemove",function(e){
    e.target.style.borderRadius=e.offsetX+"px";
    e.target.style.backgroundColor=`rgb(${e.x-e.target.offsetLeft},0,${e.y-e.target.offsetTop})`
    e.target.parentElement.style.backgroundColor=`rgb(${e.x-e.target.offsetLeft},150,${e.y-e.target.offsetTop})`
     
})