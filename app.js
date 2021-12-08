const menu = document.querySelector('#menu');
const links = document.querySelector('nav');
const closeIcon = document.querySelector('#close-icon');

const productPhotos = document.querySelectorAll('.product-photo')
const carouselPhoto = document.querySelector('.carousel-photo')
const overlay = document.querySelector('.overlay')
const carousel = document.querySelector('.carousel')
const carousel2 = document.querySelector('.carousel2')  //the product div below overlay. display-none by default
const stackOver = document.querySelectorAll('.stack-over')

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

/*make product full the page when clicked on*/
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
  
const changeCartNumber = [...document.querySelectorAll('.change-cart-num')]
changeCartNumber.forEach( (changeBtn) => {
  changeBtn.addEventListener('click', (e) => {
      if (e.target.id === 'add'){
        num++
        numValue.innerHTML = num;
        cartNumber.innerHTML = num; 
      }else {
          if(num >= 1) {
            num--;
            numValue.innerHTML = num;
            cartNumber.innerHTML = num;
          }else {
              numValue.innerHTML = '0'
              cartNumber.innerHTML = '0';
          }
      }
    let calc = parseInt(multiply(125.00, num))
    cartDetails.innerHTML = `<div>
                                <div class="flex">
                                    <div class="flex">
                                    <img src="./images/image-product-1.jpg" class="cart-product" alt="product">
                                    <p>Autumn Limited Edition...
                                        $125.00 * 
                                        <span class="no-of-items">${num}</span>
                                        <span class="total-price">$${calc}.00</span></p>       
                                    </div>
                                    <img src="./images/icon-delete.svg" id="delete-btn" alt="delete-btn"/>
                                </div>
                                <button id="checkout">Checkout</button>
                                </div>`  
  })
})

//update cart box when a user clicks on add-to-cart btn
addToCartBtn.addEventListener('click', () => {
  cartAlert.style.display = 'flex'; 
})

//when a user clicks on the close icon (when over is active)
closeOverlay.addEventListener('click', () => {
  overlay.style.display = "none";
  carousel2.style.display = "none";
  carousel.classList.remove('carousel-active');
  
  for (let i = 0; i < stackOver.length; i += 1){
    stackOver[i].style.display = 'none';
  }
})

//show or hide cart box when a user toggles the cart
cartImage.addEventListener('click', () => {
  cartBox.classList.toggle('cart-box-active')
})

//Delete or empty cart 
cartDetails.addEventListener('click', (e) => {
  cartDetails.firstElementChild.firstElementChild.lastElementChild;
  if(e.target.id == 'delete-btn'){         //if that exact element isn't targeted, the event listener will add to the whole family (parent, child, sibling)
    cartDetails.innerHTML = '';
    cartDetails.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
    cartAlert.style.display = "none"
  }  
})


const images = [
    {
        id: 1,
        img: "./images/image-product-1.jpg",
    },

    {
        id: 2,
        img: "./images/image-product-2.jpg",
    },

    {   
        id: 3,
        img: "./images/image-product-3.jpg",
    },

    {   
        id: 3,
        img: "./images/image-product-4.jpg",
    }
]

const carouselBtn = [...document.querySelectorAll('.circle-wrapper')]
const mobileCarouselPhoto = document.querySelector('.mobile-carousel-photo')
//Set starting point
let currentItem = 0;
//Add event listener to the window that implies when the document loads
window.addEventListener('DOMContentLoaded', () => {
    showNext(currentItem)
})
//show details based on items
function showNext (each) {
    const item = images[each];  //variable of each item index info[0]
    mobileCarouselPhoto.src = item.img;
}
// show next item
carouselBtn.forEach( (sliderBtn) => {
    sliderBtn.addEventListener('click', (e) => {
        if(e.target.id === 'previous') {
            currentItem++;
            if (currentItem > images.length - 1) {     //when your current item (num of clicks) gets bigger than array lenght, there'll be an error cos no item will be found, then you have to minus 1 from your arrays lenght bacause the lenght will be greater than the index, number starts from 0!  
                currentItem = 0;
            }
            showNext(currentItem)
        } else {
            currentItem++;
            if (currentItem > images.length - 1) {     //when your current item (num of clicks) gets bigger than array lenght, there'll be an error cos no item will be found, then you have to minus 1 from your arrays lenght bacause the lenght will be greater than the index, number starts from 0!  
                currentItem = 0;
            }
            showNext(currentItem)
        }
    }) 
}) 
