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
const carousel2 = document.querySelector('.carousel2')  //the product div below overlay. display-none by default
const stackOver = document.querySelectorAll('.stack-over')
console.log(stackOver)

//make product full the page when clicked on.
carouselPhoto.addEventListener('click', function(){
  overlay.style.display = "block";
  carousel.classList.add('carousel-active');
  carousel2.style.display = "block";

  for (let i = 0; i < stackOver.length; i += 1){
    stackOver[i].style.display = 'flex';
    stackOver[i].style.zIndex = 99999;
  }
})
 
const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const cartNumber = document.querySelector('#cart-number')
let numValue = document.querySelector('#num');
const cartAlert = document.getElementById('cart-alert');

let num = 0;

add.addEventListener('click', () => {
  num++
  numValue.innerHTML = num;
  cartNumber.innerHTML = num; 
})

minus.addEventListener('click', () => {
  if(numValue.innerHTML >= 1){
    num--;
    numValue.innerHTML = num;
    cartNumber.innerHTML = num;
  }
})


const addToCartBtn = document.getElementById('add-to-cart-btn')
addToCartBtn.addEventListener('click', () => {
  cartAlert.style.display = 'flex';
} )

const closeOverlay = document.getElementById('close-overlay-icon')
closeOverlay.addEventListener('click', () => {
  overlay.style.display = "none";
  carousel2.style.display = "none";
  carousel.classList.remove('carousel-active');
  
  for (let i = 0; i < stackOver.length; i += 1){
    stackOver[i].style.display = 'none';
  }
})

const cartBox = document.querySelector('.cart-box')
const totalPrice = document.querySelector('.total-price')
const deleteBtn = document.getElementById('delete-btn')
const noOfItems = document.querySelector('.no-of-items')
const cartImage = document.getElementById('cart')

cartImage.addEventListener('click', () => {
  cartBox.classList.toggle('cart-box-active')
})

  











 