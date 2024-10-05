document.addEventListener('DOMContentLoaded', function() {
  const searchURL = new URLSearchParams(window.location.search);
  const findID = searchURL.get('id');
  let current = 1;
  
  if (findID) {
      const locadata = localStorage.getItem('allobjectdata');
      
      if (locadata) {
          const convert = JSON.parse(locadata)
          const fined = convert.find(product => product.id === parseInt(findID));
          
          if (fined) {
              const colorOptions = fined.colorsOptions || {};
              const colorOptionOne = colorOptions.colorOne || '';
              const colorOptionTwo = colorOptions.colorTwo || '';
              const colorOptionThree = colorOptions.colorThree || '';
              const noOption = !fined.colorsOptions ? fined.color : '';
              const display = document.querySelector('.display');
              
              display.innerHTML = `
                  <div class="productImg">
                      <img src="${fined.productImage}" alt="">
                      <div class="allDetalise">
                          <div>
                              <h1>${fined.name}</h1>
                              <div class="price">
                                  <p>$${fined.previousPrice}</p>
                                  <p>$${fined.currentPrice}.00</p>
                              </div>
                              <div class="color">
                                  ${noOption === fined.color ? `<span class="changimg" id="${noOption}" data-image-src="${fined.productImage}"></span>` : ''}
                                  ${colorOptionOne ? `<span class="changimg" id="${colorOptionOne}" data-image-src="${fined.productImage}"></span>` : ''}
                                  ${colorOptionTwo ? `<span class="changimg" id="${colorOptionTwo}" data-image-src="${fined.chan ? fined.chan.twoimg : fined.productImage}"></span>` : ''}
                                  ${colorOptionThree ? `<span class="changimg" id="${colorOptionThree}" data-image-src="${fined.chan ? fined.chan.threeimg : fined.productImage}"></span>` : ''}
                              </div>
                          </div>
                          <div class="size">
                              <p>Size</p>
                              <div class='btnactive'>
                                  <button class='actives
                                  '>S</button>
                                  <button>M</button>
                                  <button>L</button>
                              </div>
                          </div>
                          <div class="quantity">
                              <p>Quantity</p>
                              <div>
                                  <button><i class="ri-subtract-line mins"></i></button>
                                  <button class='current'>${fined.current}</button>
                                  <button><i class="ri-add-line blus"></i></button>
                              </div>
                          </div>
                          <div class="buyment">
                              <button class='cart' onclick="addToCart(${fined.id})">Add To Cart</button>
                              <button class="Checkout"><a href='../pages/Checkout.html'>Checkout</a></button>
                          </div>
                          <div class="afterclick">
                              <div class="text-hidden">
                                  <div class="aria-hidden two">
                                      <div class="visible">
                                          <h2>Description</h2>
                                          <i class="ri-arrow-right-line fontsize arrow"></i>
                                      </div>
                                      <p class="text">
                                          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                          Accusamus minima asperiores minus, in earum dignissimos obcaecati
                                          quis fugiat quae ad!
                                      </p>
                                  </div>
                                  <div class="aria-hidden two">
                                      <div class="visible">
                                          <h2>Details</h2>
                                          <i class="ri-arrow-right-line fontsize arrow"></i>
                                      </div>
                                      <p class="text">
                                          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                          Accusamus minima asperiores minus, in earum dignissimos obcaecati
                                          quis fugiat quae ad!
                                      </p>
                                  </div>
                                  <div class="aria-hidden two">
                                      <div class="visible">
                                          <h2>Take Care Of Me</h2>
                                          <i class="ri-arrow-right-line fontsize arrow"></i>
                                      </div>
                                      <p class="text">
                                          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                          Accusamus minima asperiores minus, in earum dignissimos obcaecati
                                          quis fugiat quae ad!
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              `;
          }
      }
  }

  const btns = document.querySelectorAll('.btnactive button');
  btns.forEach(e => {
      e.addEventListener('click', function() {
          btns.forEach(button => button.classList.remove('actives'));
          e.classList.add('actives');
      });
  });

changeImg()
setupEventListeners()
displayText()
 });

let selectedImageSrc = '';
function changeImg(){
    const imgChange = document.querySelectorAll('.changimg');
    imgChange.forEach(imgClick => {
        imgClick.addEventListener('click', function() {
            const productImg = document.querySelector('.productImg img');
            const imageSrc = imgClick.getAttribute('data-image-src');
            if (imageSrc) {
                productImg.src = imageSrc;
              selectedImageSrc=imageSrc

            }
        });
    });
}



// دالة لإضافة منتج إلى السلة
function addToCart(id) {

  const cartData = localStorage.getItem('allobjectdata');
  if (cartData) {
      const products = JSON.parse(cartData);
   
      const product = products.find(prod => prod.id === parseInt(id));
      if (product) {
          let cart = JSON.parse(localStorage.getItem('cartdata')) || [];
          if (selectedImageSrc) {
            product.productImage = selectedImageSrc;
        }
          cart.push(product); 
          localStorage.setItem('cartdata', JSON.stringify(cart));
          console.log('Product added to cart:', product);
          cartproduct(cart);
         totalPrice();
     cartDisplay()
      }
  }  
 
}


// دالة لعرض بيانات السلة
function cartproduct(cart) {
  const popProduct = document.querySelector('.grid');
  popProduct.innerHTML = '';
  cart.forEach(e => {
      popProduct.innerHTML += `
      <div class="pop_product" data-name="${e.id}">
          <img src="${e.productImage}" alt="">
          <div class="pop_product_details">
              <h3>${e.name}</h3>
              <p>${e.nameColor}</p>
              <div class='quantity'>
                  <button><i class="ri-subtract-line mins"></i></button>
                  <button class='current'>${e.current}</button>
                  <button><i class="ri-add-line blus"></i></button>
              </div>
          </div>
          <div class="pop-price">
              <p>$${e.currentPrice}.00</p>
          </div>
          </div>
      `;
      totalPrice();fiveStar();
  });
  
  
  setupEventListeners()
  
}

// دالة لاسترجاع وعرض بيانات السلة
function getCart() {
  const cartData = localStorage.getItem('cartdata');
  
  if (cartData) {
      const cart = JSON.parse(cartData);
      return cart;
  } else {
      console.log('No cart data found.');
      return [];
  }

}

function increaseQuantity(event) {
    const button = event.target.closest('.quantity');
    if (!button) return;
    
    const change = button.querySelector('.current');
    if (!change) return;

    let current = parseInt(change.innerHTML);
    const productId = document.querySelector('.pop_product').dataset.name;

    if (productId) {
        if (current >= 1) {
            current++;
            change.innerHTML = current;
            updateProductDetails(productId, current);
            updateCartQuantity(productId, current);
        }
    }
}

function decreaseQuantity(event) {
    const button = event.target.closest('.quantity');
    if (!button) return;
    
    const change = button.querySelector('.current');
    if (!change) return;

    let current = parseInt(change.innerHTML);
    const productId = document.querySelector('.pop_product').dataset.name;

    if (productId) {
        if (current > 1) {
            current--;
            change.innerHTML = current;
            updateProductDetails(productId, current);
            updateCartQuantity(productId, current);
        } else {
            event.stopPropagation();
            console.log('Quantity cannot be less than 1');
        }
    }
}

function updateCartQuantity(id, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cartdata')) || [];
    cart = cart.map(product => {
        if (product.id === parseInt(id)) {
            return { ...product, current: newQuantity };
        }
        return product;
    });
    localStorage.setItem('cartdata', JSON.stringify(cart));
 totalPrice()
}

function setupEventListeners() {
    const increaseButtons = document.querySelectorAll('.blus');
    const decreaseButtons = document.querySelectorAll('.mins');
    
    increaseButtons.forEach(button => button.addEventListener('click', increaseQuantity));
    decreaseButtons.forEach(button => button.addEventListener('click', decreaseQuantity));
}

function updateProductDetails(id, newQuantity) {
    const display = document.querySelector('.display');
    if (display) {
        const currentQuantityButton = display.querySelector('.quantity .current');
        if (currentQuantityButton) {
            currentQuantityButton.innerHTML = newQuantity;
        }
    }
}

document.addEventListener('DOMContentLoaded', setupEventListeners);

function totalPrice(){
  let currenyPrice=document.querySelector('.currenyPrice')
  let cart = JSON.parse(localStorage.getItem('cartdata')) || [];
  let total=cart.reduce((sum,current)=>{
    return sum+(current.currentPrice*current.current)
  },0)
  cart.push(total)
  
localStorage.setItem('totalprice',JSON.stringify(total))
  currenyPrice.innerHTML=`$${total.toFixed(2)}`;
} 
const overlay=document.querySelector('.overlayCard');
const cart=document.querySelector('.popup ');
const cartIcon=document.querySelector('.ri-shopping-cart-line');
const close=document.querySelector('.ri-close-line');
function cartNone(){  
cart.style.right='-320px'
cart.style.display='none'
   overlay.style.display='none'
}
function cartDisplay(){
     cart.style.right='0';
    cart.style.display='block'
   overlay.style.display='block'
}
close.addEventListener('click',cartNone)

cartIcon.addEventListener('click',cartDisplay)

function displayText(){
const text=document.querySelectorAll('.aria-hidden')
  const data=document.querySelectorAll('.text')
 text.forEach(function(item){
const arrow=item.querySelector('.arrow');
const content=item.querySelector('.text') 
   arrow.addEventListener('click',function(){ 
    content.style.display=(content.style.display==='none')?'block':'none'
    ;
    data.forEach(function(otherItem) {
      if (otherItem !== content) {
          otherItem.style.display = 'none';
      }
  });

   })
 
 })
}

function fiveStars() {
    const starsContainer = document.querySelectorAll(".stars-container");
  
    const numberOfStars = 5; // عدد النجوم الذي تريده
    starsContainer.forEach((item) => {
      for (let i = 0; i < numberOfStars; i++) {
        const img = document.createElement("img");
        if (img) {
          img.src = "../images/rating-star.png";
        }
  
        img.alt = "";
        item.appendChild(img);
      }
    });
  }
  fiveStars();