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

const productPhotos = document.querySelectorAll('.product-photo')
const carouselPhoto = document.querySelector('.carousel-photo')
let myProductArray = [...productPhotos]; //convert nodelist to an array

//change thumbnails to hero-images when clicked on.
myProductArray.forEach(function(item){
  item.addEventListener('click', function(e){
    carouselPhoto.src = e.target.src;
  })
})

const overlay = document.querySelector('.overlay')
const carousel = document.querySelector('#carousel')
const carousel2 = document.querySelector('.carousel2')

//make product full the page when clicked on.
carouselPhoto.addEventListener('click', function(){
  overlay.style.display = "block";
  carousel.classList.add('carousel-active');
  carousel2.style.display = "block"
})


