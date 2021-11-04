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

let myProductArray = [...productPhotos]; //convert nodelist to an array
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
 
const multiply = function (a, b){
  return a * b;
}

const deleteImage = ``
//console.log(deleteImage)

//cartDetails.innerHTML = '';
cartDetails.innerHTML = '<p>Your cart is empty</p>'

add.addEventListener('click', () => {
  num++
  numValue.innerHTML = num;
  cartNumber.innerHTML = num; 
  //noOfItems.textContent = num;

  let calc = parseInt(multiply(125, num))
  //console.log(calc);
  //totalPrice.textContent = `$${calc}.00`;
  //noOfItems.textContent = num

  if(numValue.innerHTML >= 1){
    cartDetails.innerHTML = `<div>
                                <div class="flex">
                                    <img src="" class="cart-product">
                                    <div>
                                        <p>Autumn Limited Edition...</p>
                                        <p>$125.00 * 
                                            <span class="no-of-items">${num}</span>
                                            <span class="total-price">$${calc}.00</span></p>
                                            <img src="./images/icon-delete.svg" id="delete-btn"/>
                                    </div>

                                </div>
                                <button id="checkout">Checkout</button>
                              </div>`
          
  }
})

minus.addEventListener('click', () => {
  if(numValue.innerHTML >= 1){
    num--;
    numValue.innerHTML = num;
    cartNumber.innerHTML = num;
  }
 // noOfItems.textContent = num;
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

//const myDelete = 
//console.log(myDelete)
 
cartDetails.addEventListener('click', (e) => {
  cartDetails.firstElementChild.firstElementChild.lastElementChild
  if(e.target.id = 'delete-btn'){
    cartDetails.innerHTML = '';
    cartDetails.innerHTML = '<p>Your cart is empty</p>';
    console.log('red')
    cartAlert.style.display = "none"
  }
   
    
  })




  











 