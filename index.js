// javascript
const menuBtn = document.querySelector('.menu')
      backBtn = document.querySelector('.back-btn')
      Nav = document.querySelector('nav')
    
menuBtn.addEventListener('click' , ()=> {
    Nav.style.transform = 'translateX(0)' ;
})

backBtn.addEventListener('click', ()=> {
    Nav.style.transform = 'translateX(-100%)' ;
})