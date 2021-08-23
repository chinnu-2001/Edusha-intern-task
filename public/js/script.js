const open1 = document.getElementById('open1');
const open2 = document.getElementById('open2');
const open3 = document.getElementById('open3');
const open4 = document.getElementById('open4');
const model_container = document.getElementById('model_container');
const close = document.getElementById('close');


open1.addEventListener('click', () => {
    model_container.classList.add('show');
});
open2.addEventListener('click', () => {
    model_container.classList.add('show');
});
open3.addEventListener('click', () => {
    model_container.classList.add('show');
});
open4.addEventListener('click', () => {
    model_container.classList.add('show');
});

close.addEventListener('click',()=> {
    model_container.classList.remove('show');
});


/*rating*/
const btn= document.querySelector("button");
const widget = document.querySelector(".star-widget");

btn.onclick = ()=>{
    widget.style.display = "none";  
}


/*image slider*/

var slides=document.querySelector('.pr').children;
var nextSlide=document.querySelector(".right-slide");
var prevSlide=document.querySelector(".left-slide");
var totalSlides=slides.length;
var index=0;

nextSlide.onclick=function(){
    next("next");
}
prevSlide.onclick=function(){
    next("prev");
}

function next(direction){
    if(direction=="next"){
        index++;
        if(index==totalSlides){
            index=0;
        }
    }
    else{
        if(index==0){
            index=totalSlides-1;
        }
        else{
            index--;
        }
    }
    for(i=0;i<slides.length;i++){
        slides[i].classList.remove("active");
    }
    slides[index].classList.add("active");
}
