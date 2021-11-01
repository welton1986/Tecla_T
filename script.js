
const header = document.querySelector('#header')
const navHeight = header.offsetHeight // Essa funcionalidade pega a altura do Header

window.addEventListener('scroll', ()=>{
   if (window.scrollY >= navHeight) {
       document.querySelector('#header').classList.add('scroll')
   }else {
       header.classList.remove('scroll') /*As formas de escrever do if e else e diferente mas chama a mesma coisa*/
   }
})


let currentSlide = 0;

let totalSlides = document.querySelectorAll('.slider--video').length;

document.querySelector('.slider--width').style.width = `calc(600 * ${totalSlides} )`



function goPrev(){
    currentSlide--;
    if(currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    updateMargin();

}

function goNext(){
    currentSlide++;
    if(currentSlide > (totalSlides-1)){
        currentSlide = 0;
    }
    updateMargin();

}

function updateMargin(){
    let newMargin = (currentSlide * 600) ;
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;


}

setInterval(goNext, 5000);
