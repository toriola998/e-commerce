const menu = document.querySelector('#menu');
const links = document.querySelector('nav');
const closeIcon = document.querySelector('#close-icon');
//const body = document.querySelector('.header')
//const overlay = document.querySelector('.overlay')

//Toggle to menu hamburger
menu.addEventListener('click', function(){
links.classList.toggle('show-links');
//overlay.style.display = "block"
//body.classList.add('overlay')

});

//Close the side bar once the close icon gets clicked
closeIcon.addEventListener('click', function(){
    links.classList.remove('show-links');
});

let navLinks = document.querySelectorAll('.nav-link');
//event listener for each links
navLinks.forEach(link => {  
  link.addEventListener('click', () => {
    links.classList.remove('show-links');
  }); 
});

