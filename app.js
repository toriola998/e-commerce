const menu = document.querySelector('#menu');
const links = document.querySelector('nav');
const closeIcon = document.querySelector('#close-icon');

const productPhotos = document.querySelectorAll('.product-photo')
const carouselPhoto = document.querySelector('.carousel-photo')
const overlay = document.querySelector('.overlay')
const carousel = document.querySelector('#carousel')
const carousel2 = document.querySelector('.carousel2')  //the product div below overlay. display-none by default
const stackOver = document.querySelectorAll('.stack-over')

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const cartNumber = document.querySelector('#cart-number')
const cartDetails = document.querySelector('.cart-details')  //.parentElement
const cartAlert = document.getElementById('cart-alert');

const addToCartBtn = document.getElementById('add-to-cart-btn')
const closeOverlay = document.getElementById('close-overlay-icon')

const cartBox = document.querySelector('.cart-box')
const deleteBtn = document.getElementById('delete-btn')
const cartImage = document.getElementById('cart')

let navLinks = document.querySelectorAll('.nav-link');
let numValue = document.querySelector('#num');
let noOfItems = document.querySelector('.no-of-items')
let totalPrice = document.querySelector('.total-price')
let num = 0;

//Toggle to menu hamburger
menu.addEventListener('click', function(){
links.classList.toggle('show-links');
});

//Close the side bar once the close icon gets clicked
closeIcon.addEventListener('click', function(){
    links.classList.remove('show-links');
});

//event listener for each links
navLinks.forEach(link => {  
  link.addEventListener('click', () => {
    links.classList.remove('show-links');
  }); 
});

let myProductArray = [...productPhotos]; //convert nodelist to an array//
//change thumbnails to hero-images when clicked on.
myProductArray.forEach(function(item){
  item.addEventListener('click', function(e){
    carouselPhoto.src = e.target.src;
  })
})

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

//calculation for product price multiplied by number of product picked
const multiply = function (a, b){
  return a * b;
}

//The default empty state of the cart box
cartDetails.innerHTML = '<p class="empty-cart">Your cart is empty</p>'

let calc = parseInt(multiply(125, num))
//when a user adds products
add.addEventListener('click', () => {
  num++
  numValue.innerHTML = num;
  cartNumber.innerHTML = num; 
  

  if(numValue.innerHTML >= 1){
    cartDetails.innerHTML = `<div>
                                <div class="flex">
                                  <div class="flex">
                                    <img src="./images/image-product-1.jpg" class="cart-product">
                                    <p>Autumn Limited Edition...
                                      $125.00 * 
                                      <span class="no-of-items">${num}</span>
                                      <span class="total-price">$${calc}.00</span></p>       
                                  </div>
                                  <img src="./images/icon-delete.svg" id="delete-btn"/>
                                </div>
                                <button id="checkout">Checkout</button>
                              </div>`      
  }
})

//when a user reduces the number of products
minus.addEventListener('click', () => {
  if(numValue.innerHTML >= 1){
    num--;
    numValue.innerHTML = num;
    cartNumber.innerHTML = num;

    cartDetails.innerHTML = `<div>
                                <div class="flex">
                                  <div class="flex">
                                    <img src="./images/image-product-1.jpg" class="cart-product">
                                    <p>Autumn Limited Edition...
                                      $125.00 * 
                                      <span class="no-of-items">${num}</span>
                                      <span class="total-price">$${calc}.00</span></p>       
                                  </div>
                                  <img src="./images/icon-delete.svg" id="delete-btn"/>
                                </div>
                                <button id="checkout">Checkout</button>
                              </div>`      
  }
})

addToCartBtn.addEventListener('click', () => {
  cartAlert.style.display = 'flex';

  
  
} )

closeOverlay.addEventListener('click', () => {
  overlay.style.display = "none";
  carousel2.style.display = "none";
  carousel.classList.remove('carousel-active');
  
  for (let i = 0; i < stackOver.length; i += 1){
    stackOver[i].style.display = 'none';
  }
})

cartImage.addEventListener('click', () => {
  cartBox.classList.toggle('cart-box-active')
})

//Delete or empty cart 
cartDetails.addEventListener('click', (e) => {
  cartDetails.firstElementChild.firstElementChild.lastElementChild;
  if(e.target.id == 'delete-btn'){                    //if that exact element isn't targeted, the event listener will add to the whole family (parent, child, sibling)
    cartDetails.innerHTML = '';
    cartDetails.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    console.log('red')
    cartAlert.style.display = "none"
  }  
})