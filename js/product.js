document.addEventListener('DOMContentLoaded',function(){
 const  searchURL=new URLSearchParams(window.location.search)
  const findID=searchURL.get('id')
  let current=1;
console.log(findID);
if(findID){
  const locadata=localStorage.getItem('allobjectdata')
  // console.log(locadata);
  if(locadata){
    const convert= JSON.parse(locadata)
    console.log(convert);
    const fined=convert.find(product=> product.id===parseInt(findID))

    console.log(fined);
    if(fined){
      const coloroption=fined.colorsOptions||{};
    const coloroptionone=coloroption.colorOne||'';
    const coloroptiontwo=coloroption.colorTwo||'';
    const coloroptionthree=coloroption.colorThree||'';
const nooption= (!fined.colorsOptions?fined.color:'')
    const display=document.querySelector('.display')
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
          ${nooption===fined.color ?`<span class="changimg" id="${nooption}"></span>`:'' }
           ${coloroptionone?`<span
              class="changimg"
              id="${coloroptionone}"
              data-image-src="${fined.productImage}"
            ></span>`:""}
             ${coloroptiontwo?`<span
              class="changimg"
              id="${coloroptiontwo}"
              data-image-src="${fined.chan ?fined.chan.twoimg : ''}"
            ></span>`:""}
              ${coloroptionthree?`<span
              class="changimg"
              id="${coloroptionthree}"
              data-image-src="${fined.chan.threeimg}"
            ></span>`:""}
          </div>
        </div>
        <div class="size">
          <p>size</p>
          <div class='btnactive'>
            <button class='active'>s</button>
            <button>m</button>
            <button>l</button>
          </div>
        </div>
        <div class="quantity">
          <p>quantity</p>
          <div>
            <button><i class="ri-subtract-line mins"></i></button>
            <button class='current'>1</button>
            <button><i class="ri-add-line blus"></i></button>
          </div>
        </div>
        <div class="buyment">
          <button class='cart' onclick="addToCart(${fined.id})"> Add To Cart</button>
          <button class="Checkout"><a href='../pages/Checkout.html'>Checkout</a></button>
        </div>
          <div class="afterclick">
            <div class="text-hidden">
              <div class="aria-hidden two">
                <div class="visible">
                  <h2>Description</h2>
                 <i class="ri-arrow-right-line fontsize"></i>
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
                 <i class="ri-arrow-right-line fontsize"></i>
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
                <i class="ri-arrow-right-line fontsize"></i>
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
const btns=document.querySelectorAll('.btnactive button ')
btns.forEach(e=>{
  e.addEventListener('click',function(){
    btns.forEach(button=> button.classList.remove('active'))
 e.classList.add('active')
  })
})

const imgchange=document.querySelectorAll('.changimg')
imgchange.forEach(imgclick=> {
  imgclick.addEventListener('click',function(){
    const productImg =document.querySelector('.productImg img')
    const imageSrc = imgclick.getAttribute('data-image-src');
   if(imageSrc){
    productImg.src=imageSrc; 
   } 

    
  })
})
const change=document.querySelector('.current')
const blus=document.querySelector('.blus')
blus.addEventListener('click',function(){
if(current>=1){
  current++;
    console.log(current);
}
change.innerHTML=current

})

const mins=document.querySelector('.mins')
mins.addEventListener('click',function(event){
if(current>1){
  current--;
  change.innerHTML=current
console.log(current);

}else if(current=1){
 event.stopPropagation()
 console.log('finsh');
}
})


})
// let fgffg=[]
// function addtocart(id){
  
// const cartdata=localStorage.getItem('allobjectdata')
// if(cartdata){
//   const convert= JSON.parse(cartdata)
//   const fidid=convert.find(prod=> prod.id===parseInt(id) );
// localStorage.setItem('cartdata',JSON.stringify(fidid))

// const storag=localStorage.getItem('cartdata')
// const bush=JSON.parse(storag)
// fgffg.push(bush)
// console.log(fgffg);
// }

// }

// دالة لإضافة منتج إلى السلة
function addToCart(id) {
  // قراءة بيانات جميع المنتجات من localStorage
  const cartData = localStorage.getItem('allobjectdata');
  
  if (cartData) {
    const products = JSON.parse(cartData);
    // العثور على المنتج باستخدام id
    const product = products.find(prod => prod.id === parseInt(id));
    
    if (product) {
      // قراءة السلة الحالية من localStorage
      let cart = JSON.parse(localStorage.getItem('cartdata')) || [];
      
      // إضافة المنتج إلى السلة
      cart.push(product);
      
      // تخزين السلة المعدلة في localStorage
      localStorage.setItem('cartdata', JSON.stringify(cart));
      
      console.log('Product added to cart:', product);
      console.log('Current cart:', cart);
    }
  }
}

// دالة لاسترجاع وعرض بيانات السلة
function getCart() {
  const cartData = localStorage.getItem('cartdata');
  if (cartData===id) {
    const cart = JSON.parse(cartData);
    console.log('Stored cart data:', cart);
    return cart;
  } else {
    console.log('No cart data found.');
    return [];
  }
}

// أمثلة على استخدام الدوال
// إضافة منتج إلى السلة
// addToCart(1); // استبدل 1 بالـ id الصحيح للمنتج الذي تريد إضافته

// استرجاع بيانات السلة
const cartItems = getCart();

