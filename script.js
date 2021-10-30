
const header = document.querySelector('#header')
const navHeight = header.offsetHeight // Essa funcionalidade pega a altura do Header

window.addEventListener('scroll', ()=>{
   if (window.scrollY >= navHeight) {
       document.querySelector('#header').classList.add('scroll')
   }else {
       header.classList.remove('scroll') /*As formas de escrever do if e else e diferente mas chama a mesma coisa*/
   }
})